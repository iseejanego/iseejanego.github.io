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

//array of image paths
var images = ['images/test.jpg', 'images/test2.jpg'];
var currentPosition = 0;

//click thumbnail, show display section
$('.thumb').on('click', function(e){
	e.preventDefault();
	$('#display').slideDown();

//change display image to selected thumbnail image
	var currentImage = $(this).find('img').attr('src');
	$('#display-image').attr('src', currentImage);

//change display text to selected thumbnail text
	var displayText = $('#display-text');
	displayText.find('h2').html($(this).find('h2').html());
	displayText.find('p').html($(this).find('p').html());

});


//next link, go to next image in gallery
$('#next').on('click', function(){
	//update currentposition
	currentPosition += 1;
	//update source
	$('#display-image').attr('src', images[currentPosition]);
	//make sure previous button is enabled
	$('#prev').prop('disabled', false);
	//if currentPosition is at the last image, disable the next button
	if (currentPosition === images.length - 1){
		$('#next').prop('disabled', true);
	}
});

//previous link, go to previous image in gallery
$('#previous').on('click', function(){
	//update currentPosition
	currentPosition -= 1;
	//update source
	$('#display-image').attr('src', images[currentPosition]);
	//make sure the next button is enabled
	$('#next').prop('disabled', false);
	//if currentPosition is at the first image, disable the previous button
	if (currentPosition === 0){
		$('#prev').prop('disabled', true);
	}

});