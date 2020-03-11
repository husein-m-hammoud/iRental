<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
    
use App\company;
use App\car;
use DB;
use JavaScript;
use Auth;

use App\location;
use Request;
class CompanyController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }
    public function store(Request $request)
    {
       
        
  
           

            $location = new location();
            $location->city=$request['city'];
            $location->address=$request['address']; 
            $location->lat=$request['lat']; 
            $location->lng=$request['lng'];
            $location->save(); 
   
        $company = new company();
        if ($files = $request->file('file'))  {
            $destinationPath = 'car_img/'; // upload path
            $profileImage = date('YmdHis') . "." . $files->getClientOriginalExtension();
            $files->move($destinationPath, $profileImage);
            $company->logo= $profileImage ;
         }
        

     

       
         $company->user_id=Auth::id();
         $company->c_name=$request['name'];
         $company->location=$location->id;
       
        $company->phone=$request['phone'];
        // $company->days=$request['days'];
       
        
       
       
        
        //$car->user_id=1;
        $company->save();

       
        

    }
    public function Get_all_company()
    {
        $companies=company::with('car')
            ->leftJoin('locations', 'loc_id', '=', 'location')
         
            
          
            ->get();

        if($user = Auth::user())
        {   
            return response()->json(['companies' => $companies,'user'=>$user]);
        }
        
        
       
        if(Auth::guest())
            {
               return response()->json(['companies' => $companies,'user'=>null]);
              
            }
    }

    public function index($id)
    {
        

        return view('CarsCompany',['id'=>$id]);
        
    }
    public function CarsOfCompany($id,$make,$available)
    {
        
        

        
        if($make=='all' and $available=='All'){
            $cars=car::with('potos')
            
            ->join('availables', 'cars.id', '=', 'car_id')
            ->where('company_id',$id)
            ->orderBy('id')            
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='all' and $available=="Available")
        {
            $cars=car::with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            ->where('availables.available','y')
            ->where('company_id',$id)
            ->orderBy('id')
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='small' and $available=="Available")
        {
            $cars=car::with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            ->where('availables.available','y')
            ->where('company_id',$id)
            ->where('seats',"<","6")
            ->orderBy('id')
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='large'  and $available=="Available"){
            $cars=car::with('potos')
            ->where('company_id',$id)
            ->join('availables', 'cars.id', '=', 'car_id')
            ->where('availables.available','y')
            ->where('seats',">","6")
            ->orderBy('id')
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='small' and $available=="All" )
        {
            $cars=car::with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            ->where('company_id',$id)
            ->where('seats',"<","6")
            ->orderBy('id')
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='large' and $available=="All"){
            $cars=car::with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            ->where('company_id',$id)
            ->where('seats',">","6")
            ->orderBy('id')
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }


        if($user=Auth::user())
        {
            $user_id=Auth::id();
            $company=DB::table('companies')->select('user_id')->where('id',$id)->where('user_id',$user_id)->get();
            // if ($user_id=$company)
             return response()->json(['cars' => $cars,'user_id'=>$company,'avg'=>$avg,'count'=>$count]);
        }   
        return response()->json(['cars' => $cars,'user_id'=>null,'avg'=>$avg,'count'=>$count]);
        
    }
    public function show()
    {
        
        
        
        return view('Companys');
        
    }
    public function check(){
 
    $user_id=Auth::id();
    $company=DB::table('companies')->select('user_id')->where('user_id',$user_id)->get();
        // return $company;
    // return response()->json(['cars' => $user_id]);
    if ( $company =='[]')
    {
       
        $direct='/ProfileInformation';
        return redirect($direct);
    };
    if ( $company !='[]')
    {
      
        $direct='/profile/'.$user_id;
        return redirect($direct);
    };
    }
    public function getauth(){
        $name=Auth::user()->name;
        $id=Auth::id();
        return response()->json(['name'=>$name,'id'=>$id]);
    }
}
