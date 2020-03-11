@section('content')
<style>
body{margin:0;}

.navbarr {
  overflow: hidden;

  position: fixed;
  top: 0;
  width: 100%;
  background-color: #000; 
  opacity: 0.5; 
  filter: alpha(opacity=50);
  z-index: 1000;
}
L {
  font-size: 32px;
  background: -webkit-linear-gradient(red,#FFF, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbarr a {
  float: right;
  display: block;
  color: red;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.nav-link a:hover {

  color: red;
}

.main {
  padding: 16px;
  margin-top: 30px;
  height: 1500px; /* Used in this example to enable scrolling */
}
</style>
<!-- <div class="navbarr">
<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="{{ url('/') }}">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('carlist') }}">Car List</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('Companys') }}"">Companies</a>
                </li>
                </ul>
                <span class="navbar-text">
                <img src="{{asset('./image.png')}}" style="width: 160px;height: 40px;position: ;bottom: 155px;  " >

                </span>
            </div>
            </nav>
</div> -->
<!-- <link rel="stylesheet" href="{{asset('./CarT/css/linearicons.css')}}"> -->
<!-- <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">      -->
<link rel="stylesheet" href="{{asset('./CarT/css/main.css')}}">

<!-- <link rel="stylesheet" href="{{asset('./CarT/css/bootstrap.css')}}"> -->
<!-- <link rel="stylesheet" href="{{asset('./CarT/css/font-awesome.min.css')}}"> -->

<header id="header" id="home" class="navbarr">
          <div class="container">
            <div class="row align-items-center justify-content-between d-flex">
              <div id="logo " class="row">
             <div><img src="../../icon/car.png" ></div> 
              
              <div><h2 style="color :rgb(255, 255, 255);margin-left: 7px;">iRental</h2></div><!-- <a href="index.html"><img src="{{asset('./CarT/img/logo.png')}}" alt="" title="" /></a> -->
              </div>
              <nav id="nav-menu-container">
                <ul class="nav-menu">
                  <li class="menu-active"><a class="nav-link" href="{{ url('/') }}"><b style="color:white;">Home</b> <span class="sr-only">(current)</span></a></li>
                  <li><a class="nav-link" href="{{ url('carlist') }}"><b style="color:white;">Car List</b></a></li>
                  <li><a class="nav-link " href="{{ url('CarOwners') }}"><b style="color:white;">Car Owners</b></a></li>
                  @if(Auth::user())
                  @if (auth()->user()->id<4)
                  <li><a href="profile/2"><b style="color:white;">My Cars</b></a></li>
                 
                  @endif
                  @endif
                  @guest
                  <li><a href="{{ route('login') }}"><b style="color:white;">Login</b></a></li>
                  

                  @else
                  <li> <a  href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form></li>
                  @endguest
                 
                  </li>               
                </ul>
              </nav><!-- #nav-menu-container -->            
            </div>
          </div>
        </header>

@endsection