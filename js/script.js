
  $(document).ready(function() {
    $(".load").hide();
    $(".contain-f").hover(function() {
      $(this).find(".load").toggle(600);
    });

  });
  $(".design").click(function() {
    $(".image3").slideToggle();
    $(".de").slideToggle();
  });

  $(".develop").click(function() {
    $(".image1").slideToggle(1100);
    $(".dev").slideToggle(1200);
  });

  $(".product").click(function() {
    $(".image2").slideToggle(1100);
    $(".pro").fadeToggle(1200);
  });
