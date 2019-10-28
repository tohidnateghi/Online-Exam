<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Your own meta tags -->
    <meta name="description" content="Exam Project">
    <meta name="author" content="Tohid Nateghi">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-rtl.css">

    <!-- Main CSS -->
    <link rel="stylesheet" href="/css/main.css">

    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="/css/fonts/fontawesome/all.css">

    <!-- Custom CSS -->
    @yield('styles')

    <title>Exam Project</title>
</head>

<body>

    <div class="d-flex" id="wrapper">

        <!-- Sidebar -->
        @include('layouts.sidebar')
        <!-- End Sidebar -->

        <!-- Page Content -->
        <div id="page-content-wrapper">

            <!-- Sidebar -->
            @include('layouts.navbar')
            <!-- End Sidebar -->

            <!-- Main content -->
            @yield('content')
            <!-- End main content -->

        </div>
        <!-- End page-content-wrapper -->
    </div>
    <!-- End wrapper -->

    <!-- Footer -->
    @include('layouts.footer')
    <!-- End Footer -->

</body>

</html>