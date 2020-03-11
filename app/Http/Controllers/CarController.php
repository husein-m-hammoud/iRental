<?php

namespace App\Http\Controllers;
use App\car;
use Illuminate\Http\Request;
use DB;
use App\car_company;
use App\available;
use App\user_rent;
use App\location;
use App\album;
use Image;
use Auth;

use Mail;
class CarController extends Controller
{   
    
    public function __construct()
    {
       // $this->middleware('auth');
    }
    public function index(){
        return view('AllCars');
    }


    public function show($id)
    {
        

        return view('Car',['id'=>$id]);
        
    }

    public function store(Request $request)
    {
       
      
  
            

        $car_company = new car_company();
        $car_company->company_id=$request['company_id'];
        $car_company->save();
        $album_number=$car_company->id;

                //  $files=array();
                //  array_push($files,$request->file('file'));
                
                 $allfiles=  $request->file('file');
                 $i=0;
                 foreach ($allfiles as $files)  {
                     $i++;
                   $album=new album();
                    echo $files;
                    echo "Ss";
                    $destinationPath = 'car_img/'; // upload path
                    $profileImage = date('YmdHis') . "." . $files->getClientOriginalExtension().$i;
                    // $file_name = $name->getClientOriginalName();
                    $files->move($destinationPath, $profileImage);


                    
                    // $car->image= $profileImage ;
                    $album->carimage= $profileImage;
                    $album->album=$album_number;
                    $album->save();
                 
                 }
   
        $car = new car();
        // if ($files = $request->file('file'))  {
        //     $destinationPath = 'car_img/'; // upload path
        //     $profileImage = date('YmdHis') . "." . $files->getClientOriginalExtension();
        //     $files->move($destinationPath, $profileImage);
        //     $car->image= $profileImage ;
        //  }
        

     

       
       
       $car->name=$request['name'];
       $car->album_id=$album_number;
       $car->dis=$request['dis'];
        $car->transmission=$request['transmission'];
        $car->seats=$request['seats'];
        $car->company_id=$request['company_id'];
        $car->price=$request['price'];
       
       
        
       
        $car->save();
        $available = new available();
        $available->save();
        
        //return view('welcome');

    }
    public function Get_all_car($make,$available)
    {   
       
        
        if($make=='all' and $available=='All'){
            $cars=car::with("company")->with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            
                 
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='all' and $available=="Available")
        {
            $cars=car::with("company")->with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            ->where('availables.available','y')
            
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='small' and $available=="Available")
        {
            $cars=car::with("company")->with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            ->where('availables.available','y')
            ->where('seats',"<","6")
            ->orderBy('id')
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='large'  and $available=="Available"){
            $cars=car::with("company")
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
            $cars=car::with("company")->with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            
            ->where('seats',"<","6")
            ->orderBy('id')
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }
        elseif($make=='large' and $available=="All"){
            $cars=car::with("company")->with('potos')
            ->join('availables', 'cars.id', '=', 'car_id')
            
            ->where('seats',">","6")
            ->orderBy('id')
            ->get();
            $avg=$cars->avg('price');
            $count=$cars->count('1');
        }

        return response()->json(['cars' => $cars,'avg'=>$avg,'count'=>$count]);
    }
    public function Get_Car($id)
    {
        $album_number='13';
        $car=car::with('company')
        ->where('id',$id)
        ->get();
        $potos=DB::table('albums')
        
        ->where('albums.album',$id)
        ->get();
        $data=[];
        $data2=[];
        $carimage='carimage';
     
        for ($i=0;$i<count($potos);$i++){
            array_push($data, ['url',$potos[$i]->$carimage]);
        }
        $user=Auth::user();
        
        return response()->json(['car' => $car,'potos'=>$data,'user'=>$user]);
    }
    public function adduser(Request $request)
    {

        $location = new location();
        $location->city=$request['city'];
        $location->address=$request['address']; 
        $location->lat=$request['lat']; 
        $location->lng=$request['lng'];
        $location->save(); 


        $user_rent = new user_rent();
        $user_rent->name=$request["name"];
        $user_rent->email=$request['email'];
        $user_rent->phone=$request['phone'];
        $user_rent->car_id=$request['id'];
        $user_rent->user_location=$location->loc_id;
        $user_rent->save();
        $id=$request['id'];
       
        DB::table('cars')
        ->where("cars.id", '=',  $id)->update([
        'cars.user_id'=> $user_rent->id,
        'cars.car_left'=> $request['car_left'],
        'cars.return_time'=> $request['return_time']])
        ;
        DB::table('availables')
        ->where("car_id", '=',  $id)->update([
            'available'=> 'n']);

        
            return   $this->send_email($request);
        
        // return $cars;
    }
    public function send_email(Request $request)
    {
        $to_name = $request["name"];

        $to_email = 'husein.m.hammoud@gmail.com';
        
        $location=$request['address'];
        $left=$request['car_left'];
        $returnlocation="Seaside Road، Lebanon";
        $return=$request['return_time'];

    
        $data = array('name'=>$to_name , "location" => $location,"left" => $left,"returnlocation" => $returnlocation,"return" => $return);
            
        Mail::send('emails.mail', $data, function($message) use ($to_name, $to_email) {
            $message->to($to_email, $to_name)
                    ->subject('iRental  ');
            $message->from('husein.m.hammoud@gmail.com','iRental');
        });
    }
}
