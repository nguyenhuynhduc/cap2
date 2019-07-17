<!doctype html>
<html class="spothero-html" lang="en">
<head>
    <meta data-react-helmet="true" charset="utf-8"/>
    <meta data-react-helmet="true" name="description" itemprop="description"
          content="Find, book &amp; save on both daily &amp; monthly parking with convenient garages, lots &amp; valets near your destination."/>
    <meta data-react-helmet="true" name="robots" content="noodp, noydir"/>
    <meta data-react-helmet="true" property="fb:app_id" content="171344769571965"/>
    <meta data-react-helmet="true" name="twitter:card" content="app"/>
    <meta data-react-helmet="true" name="twitter:site" content="@spothero"/>
    <meta data-react-helmet="true" name="twitter:creator" content="@spothero"/>
    <meta data-react-helmet="true" name="twitter:app:id:iphone" content="499097243"/>
    <meta data-react-helmet="true" name="twitter:app:url:iphone"
          content="http://itunes.apple.com/us/app/spothero/id499097243?mt=8"/>
    <meta data-react-helmet="true" name="twitter:app:name:ipad" content="SpotHero"/>
    <meta data-react-helmet="true" name="twitter:app:url:ipad"
          content="http://itunes.apple.com/us/app/spothero/id499097243?mt=8"/>
    <meta data-react-helmet="true" name="twitter:app:id:googleplay" content="com.spothero.spothero"/>
    <meta data-react-helmet="true" name="twitter:app:url:googleplay"
          content="https://play.google.com/store/apps/details?id=com.spothero.spothero"/>
    <meta data-react-helmet="true" name="google-site-verification"
          content="xoYVsdp3bXNxwds_Sw1C46aJ_9pJ0tQOXI3bxgBGyfQ"/>
    <meta data-react-helmet="true" name="msvalidate.01" content="E44412335167C2135871BD45A0A0B36C"/>
    <meta data-react-helmet="true" property="og:type" content="website"/>
    <meta data-react-helmet="true" property="og:image"
          content="https://res.cloudinary.com/spothero/image/upload/v1513282776/consumer-web-spa/spothero-logo-share.jpg"/>
    <meta data-react-helmet="true" property="og:site_name" content="SpotHero"/>
    <meta data-react-helmet="true" http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta data-react-helmet="true" name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <title data-react-helmet="true">SpotHero - Park Smarter. | Reserve Parking Now &amp; Save</title>

    <link rel="dns-prefetch" href="{!! asset('home/fonts.googleapis.com') !!}">
    <link rel="preconnect" href="{!! asset('home/fonts.gstatic.com/') !!}" crossorigin>
    <link rel="stylesheet" href="{!! asset('home/fonts.googleapis.com/css?family=Open+Sans:400,600,700') !!}">
    <link rel="stylesheet" href="{!! asset('home/css/style.css') !!}">
    <script>
        var ttfrStart = Date.now();
        var ttfrTimer = 0;
        var ttfrInterval = window.setInterval(function () {
            ttfrTimer = Date.now() - ttfrStart;
        }, 100);
    </script>
    <script type="text/javascript" src="/js/function.js" defer></script>
    <style type="text/css">#d__fFH {
            position: absolute;
            top: -5000px;
            left: -5000px
        }

        #d__fF {
            font-family: serif;
            font-size: 200px;
            visibility: hidden
        }

        #zdcrdztzdufwcvbfvxuadtfffafcecruct {
            display: none !important
        }</style>

</head>
<style>
    #myInput {
        background-position: 10px 12px;
        background-repeat: no-repeat;
        width: 100%;
        font-size: 16px;
        padding: 12px 20px 12px 40px;
        border: 1px solid #ddd;
        margin-bottom: 12px;
    }

    #myUL {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    #myUL li a {
        border: 1px solid #ddd;
        margin-top: -1px; /* Prevent double borders */
        background-color: #f6f6f6;
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        color: black;
        display: block
    }

    #myUL li a:hover:not(.header) {
        background-color: #eee;
    }
</style>
<body>
<div class="root">
    <div class="App">
        <div class="NotificationContainer">

        </div>
        <header class="Header" role="banner">
            <div class="Navigation container">
                <nav class="NavigationExpanded">
                    <ul>
                        <li>
                            <div class="NavigationExpanded-item-container">
                                <a class="NavigationExpanded-item" href="{{route('account')}}">
                                    Tài Khoản
                                </a>
                            </div>
                        </li>
                        <li >
                            <div class="NavigationExpanded-item-container dropdown">
                                 <a class="NavigationExpanded-item" data-toggle="dropdown" href="{{route('selectPark')}}?id=all">
                                    Bãi Đỗ
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="NavigationExpanded-item-container"></div>
                        </li>
                        <li>
                            <div class="NavigationExpanded-item-container"></div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="Home">
            <div class="HomeHero">
                <div class="HomeHero-content">
                    <header class="HomeHero-header">
                        <div class="HomeHero-icon">
                            <svg class="Icon Icon-hero-car" role="presentation" viewBox="0 0 1024 1024" width="20px"
                                 height="20px">
                                <path d="M812.8,953.6c0,38.4-134.4,70.4-300.8,70.4s-300.8-32-300.8-73.6C211.2,912,345.6,880,512,880S812.8,912,812.8,953.6zM995.2,240v48c0,9.6-6.4,16-16,16l-51.2,3.2c-9.6,0-16,6.4-16,16l-16,371.2c0,6.4-9.6,16-19.2,16H774.4c-9.6,0-22.4-9.6-22.4-19.2V592c0-9.6-6.4-16-16-16c-73.6,6.4-150.4,9.6-224,9.6c-76.8,0-150.4-3.2-224-9.6c-9.6,0-16,6.4-16,16v99.2c0,9.6-12.8,19.2-22.4,19.2H147.2c-12.8,0-19.2-6.4-19.2-16l-16-371.2c0-9.6-6.4-16-16-16L44.8,304c-9.6,0-16-6.4-16-16v-48c0-9.6,6.4-16,16-16h89.6c6.4,0,16-6.4,16-16c6.4-32,35.2-86.4,48-115.2c16-25.6,48-92.8,144-92.8h339.2c96,0,128,67.2,140.8,92.8c12.8,28.8,41.6,83.2,48,115.2c3.2,9.6,9.6,16,19.2,16h89.6C988.8,224,995.2,230.4,995.2,240z M368,374.4c0-35.2-12.8-60.8-86.4-60.8c-64,0-67.2,28.8-67.2,60.8s25.6,51.2,67.2,51.2C326.4,425.6,368,406.4,368,374.4z M512,227.2c144,0,259.2,6.4,259.2,6.4s-16-54.4-32-86.4C710.4,92.8,668.8,96,640,96H390.4c-32,0-73.6,0-99.2,51.2c-19.2,32-32,86.4-32,86.4S368,227.2,512,227.2z M809.6,374.4c0-35.2-3.2-60.8-67.2-60.8c-73.6,0-86.4,28.8-86.4,60.8s38.4,51.2,86.4,51.2C787.2,425.6,809.6,406.4,809.6,374.4z"></path>
                            </svg>
                        </div>
                        <h1>Bạn muốn đến ?</h1></header>
                    <section class="TabbedSearchControls">
                        <form action="." class="TabbedSearchControls-form TabbedSearchControls-hourly"
                              id="TabbedSearchControls">
                            <div class="TabbedSearchControls-input">
                                <div class="GooglePlacesSearchInput PlaceSearch">
                                    <div class="AutoSuggestInput AutoSuggestInput-no-suggestions">
                                        <div class="FormElement-control">
                                            <div class="TextInput FormElement FormElement-with-icon FormElement-with-icon-left">
                                                <div class="FormElement-control"><input type="search"
                                                                                        onkeyup="myFunction()"
                                                                                        class="FormElement-item"
                                                                                        name="search"
                                                                                        id="myInput"
                                                                                        placeholder="Đường,thành phố,..."
                                                                                        autofocus="" autoComplete="off"
                                                                                        value=""/>

                                                    <ul id="myUL">
                                                        <li><a href="http://localhost/cap2/resources/views/Users/SelectDaNang.php?id=HN">Hà Nội</a></li>
                                                        <li><a href="http://localhost/cap2/resources/views/Users/SelectDaNang.php?id=DN">Đà Nẵng</a></li>
                                                        <li><a href="http://localhost/cap2/resources/views/Users/SelectDaNang.php?id=HCM">Hồ Chí Minh</a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <script src='www.google.com/recaptcha/api.js?render=explicit' async defer></script>
            <script src="maps.google.com/maps/api/js?key=AIzaSyDagjsml5S_8Qas0Rn_zbW29tbtrNaoTuE&libraries=geometry,places"></script>
            <script src="js.stripe.com/v3/"></script>
            <script src="{!! asset('home/js/function.js') !!}"></script>
            <script>
                function myFunction() {
                    var input, filter, ul, li, a, i, txtValue;
                    input = document.getElementById("myInput");
                    filter = input.value.toUpperCase();
                    ul = document.getElementById("myUL");
                    li = ul.getElementsByTagName("li");
                    for (i = 0; i < li.length; i++) {
                        a = li[i].getElementsByTagName("a")[0];
                        txtValue = a.textContent || a.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            li[i].style.display = "";
                        } else {
                            li[i].style.display = "none";
                        }
                    }
                }
            </script>
</body>
</html>
