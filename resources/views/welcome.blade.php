<!DOCTYPE html>
<html>
    <head>
        <title>Guestbook App</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
        <link rel="stylesheet" href="http://getbootstrap.com/examples/signin/signin.css">
        <link rel="stylesheet" href="{{ URL::asset('css/sweetalert.css') }}">

        <base href="./">

    

    <!-- Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    {{ Html::script('es6-shim/es6-shim.min.js') }}
    {{ Html::script('zone.js/dist/zone.js') }}
    {{ Html::script('reflect-metadata/Reflect.js') }}
    {{ Html::script('systemjs/dist/system.src.js') }}
    {{ Html::script('systemjs.config.js') }}
    
    


 <!--   


    {{ Html::script('@angular/es6/dev/src/testing/shims_for_IE.js') }}
    {{ Html::script('@angular/bundles/angular2-polyfills.js') }}
    {{ Html::script('systemjs/dist/system.js') }}
    {{ Html::script('rxjs/bundles/Rx.js') }}
    {{ Html::script('angular2/bundles/angular2.dev.js') }}
    {{ Html::script('angular2/bundles/router.dev.js') }}
    {{ Html::script('angular2/bundles/http.dev.js') }}

    {{ Html::script('js/d3.min.js') }}
    {{ Html::script('js/c3.min.js') }}
    {{ Html::script('js/scripts.js') }}-->
<!--
    <script>
        System.config({
            "defaultJSExtensions": true,
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });

        System.import('js/boot')
                .then(null, console.error.bind(console));
    </script>
    -->

 
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
    </head>
    <body style="padding-top:70px;">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="center-block">
                    <a class="navbar-brand" href="#">Guestbook App</a>
                </div>
            </div>
        </nav>

        <div class="container">
            <div class="content">
                <my-app>Loading...</my-app>
            </div>
        </div>
    </body>

    <script type="text/javascript" src="{{ URL::asset('js/sweetalert.min.js') }}"></script>
</html>
