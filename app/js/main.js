// Isotope filtering
//========================================
var $grid = $('.checklist').isotope();
// Show all item
$('.filter-bar .all').on( 'click', function() {
  $('.filter-bar li').removeClass('selected');
  $(this).addClass('selected');
  $grid.isotope({ filter: '*' })
});
// Show seed items
$('.filter-bar .seed').on( 'click', function() {
  $('.filter-bar li').removeClass('selected');
  $(this).addClass('selected');
  $grid.isotope({ filter: ".seed" });
});
// Show seriesa items
$('.filter-bar .seriesa').on( 'click', function() {
  $('.filter-bar li').removeClass('selected');
  $(this).addClass('selected');
  $grid.isotope({ filter: ".seriesa" });
});
// Show above items
$('.filter-bar .above').on( 'click', function() {
  $('.filter-bar li').removeClass('selected');
  $(this).addClass('selected');
  $grid.isotope({ filter: ".above" });
});

// Smooth scrolling
//========================================
$('nav a').click(function(e){
  e.preventDefault();
  $('nav li').removeClass('selected');
  $(this).parent().addClass('selected');
  var target = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(target).offset().top - 100
  }, 1000);
});

// Check
//========================================
$('.check').click(function(){
  if ($(this).hasClass('checked')) {
    $(this).removeClass('checked');
    $(this).parent().find('.expend-bar').removeClass('checked');
  }
  else {
    $(this).addClass('checked');
    $(this).parent().find('.expend-bar').addClass('checked');
  }
});

// Expend/collapse
//========================================
$('.btn, .expend-bar').click(function(){
  var parent = $(this).parent().parent();
  var body = $(parent).find(".body");

  if ($(parent).hasClass('expend')) {
    $(parent).removeClass('expend');
    $(body).slideUp(300);
    $grid.isotope();
  }
  else {
    $(parent).addClass('expend');
    $(body).slideDown(300);
    $grid.isotope();
  }
});
