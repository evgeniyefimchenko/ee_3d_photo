{if $img_count && $addons.ee_3d_photo.ee_3d_photo_active == "Y"}
	<div id="ee_3d_photo_div" style="top: 0; display: none; position: absolute; margin: 0;">				
        <img src="{$first_img}" id="ee_3d_photo_cover"
             data-photomechanics='({
                 helperText: "Нажмите для просмотра 3D фото",
                 helperTimeout: 1,
                 menuBar: false,
                 startImmediately: true,
                 playOnClick: true,
                 autoPlay: true,
                 speed: 6,
                 reverse: true,
                 frames: 60,
                 yframes: 1
                 })'/>
	</div>
	 <img id="ee_3d_photo_show" style="cursor: pointer; display: none;" src="design/themes/abt__unitheme2/media/icons/360.svg" height="47" width="47"/>
	 
	 {if $addons.ee_3d_photo.ee_3d_photo_show_button == "N"}
	  <script>
		var d_m = $('#ee_3d_photo_cover').attr('data-photomechanics');
		$('#ee_3d_photo_cover').attr('data-photomechanics', d_m.replace('menuBar: false,', 'menuBar: true,').replace('frames: 60,', 'frames: {$img_count},'));
	  </script>
	  <style>
	  .photomechanics__controls{
		  display: none;
	  }
	  </style>
	 {/if}
	
{/if}
