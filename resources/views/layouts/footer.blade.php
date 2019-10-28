<!-- Footer -->
<footer class="bg-light py-2">
    <div class="container">
        <p class="m-0 text-center">طراحی و توسعه با <i class="fa fa-heart text-danger"></i> توسط ناطقی</p>
    </div>
</footer>
<!-- End Footer -->

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="js/jquery-3.4.1.slim.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<!-- Custom JavaScript -->
@yield('scripts')

<!-- Menu Toggle Script -->
<script>
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
</script>