@extends('layouts.app2')
@include('navbar')
<br><br><br><br>
<body class="banner-area2"  >
    

<div class="container" >
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Profile Information
                {{ Request::segment(1) }}
</div>

                <div class="card-body" style="background-color:rgb(218, 214, 214);">
                    <div id="add_company"> </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>