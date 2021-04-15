jQuery(document).ready(function () {
	$('#ee_3d_photo_show').appendTo('.ty-product-thumbnails.ty-center');
	$('#ee_3d_photo_show').show();
	var $el_cont = $('.owl-wrapper-outer');
	var offset = $el_cont.offset();	
	$('#ee_3d_photo_show').click(function() {
		if ($('#ee_3d_photo_div').is(":hidden")) {
			if ($('.photomechanics__canvas').length == 0) {				
				$('body').append($('#ee_3d_photo_div'));
				$('#ee_3d_photo_div').css({'width' : $el_cont.width(), 'height' : $el_cont.height(), 'top' : offset.top, 'left' : offset.left}).show();
				pm = new Photomechanics({});				
			} else {
				$('#ee_3d_photo_div').show();
			}
		} else {
			$('#ee_3d_photo_div').hide();
		}
	});
	$(window).resize(function() {
		offset = $el_cont.offset();
		$('#ee_3d_photo_div').css({'width' : $el_cont.width(), 'height' : $el_cont.height(), 'top' : offset.top, 'left' : offset.left});
	});
	$('[data-ca-gallery-large-id]').click(function() {
		$('#ee_3d_photo_div').hide();		
	});
});
