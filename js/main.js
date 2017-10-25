//Instagram live feed
var feed = new Instafeed({
	get: 'user',
	userId: 3551467404,
	accessToken: '3551467404.ee0f22a.bad080471991479badfef4f9dd4ddeef'
	//clientId: 'ee0f22a39f204688b46f01f6ab87523e'
});

feed.run();

//hide display section
$('#display').hide();

//click thumbnail, show display section
$('.thumb').on('click', function(e){
	e.preventDefault();
	$('#display').slideDown();

//change display image to selected thumbnail image
	$('#display-image').attr('src', $(this).find('img').data('src'));

//if there are multiple images to display
//clear any src attributes
	$('#second-image').attr('src', '');
	$('#third-image').attr('src', '');
	$('#fourth-image').attr('src', '');

//display images for currently selected thumb
	$('#second-image').attr('src', $(this).find('.second').data('src'));
	$('#third-image').attr('src', $(this).find('.third').data('src'));
	$('#fourth-image').attr('src', $(this).find('.fourth').data('src'));

//change display text to selected thumbnail text
	var displayText = $('#display-text');
	displayText.find('h2').html($(this).find('h2').html());
	displayText.find('p').html($(this).find('p').html());

});

//scroll easing
 $("a").on('click', function(e) {

// make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      e.preventDefault();

// Store hash
      var hash = this.hash;

// optional number (800) specifies the number of milliseconds it takes to scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
// add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // end if
  });
