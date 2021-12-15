$(function() {
    var item_slider = $(".item-slider");
    item_slider.on("click", function() {
      $(".slider .bloco-slide").hide()
      $(".slider .bloco-slide").removeClass("active")
      $(".slider .bloco-slide:eq(" + $(this).index() + ")").fadeIn('fast')
      $(".slider .bloco-slide:eq(" + $(this).index() + ")").addClass("active")
      $(".item-slider").removeClass("active")
      $(this).addClass("active")
    })
  })