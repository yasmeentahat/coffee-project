$(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $("#navBar").addClass("noTransparrent");
    } else {
      $("#navBar").removeClass("noTransparrent");
    }
  });

  $(document).ready(function() {
    $(function () {
        $("#commentForm").validate();
    });
  });