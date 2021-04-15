{if $addons.ee_3d_photo.ee_3d_photo_active == "Y"}
	{$ver = "ee_3d_photo"|fn_get_addon_version}
	{script src="js/addons/ee_3d_photo/vue.min.js?v=$ver"}
	{script src="js/addons/ee_3d_photo/photomechanics.js?v=$ver"}	
	{script src="js/addons/ee_3d_photo/general.js?v=$ver"}
{/if}