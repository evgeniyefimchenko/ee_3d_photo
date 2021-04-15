<?
use Tygh\Registry;

if ($mode == 'view') {
	$first_img = NULL;
	$root_path = NULL;
	$uploadFileDir = fn_get_files_dir_path() . 'ee_3d_photo/' . $_REQUEST['product_id'] . '.3d/';	
	if (file_exists($uploadFileDir)) { // Директория существует, считаем количество файлов *.jpg
		$files = glob($uploadFileDir . '*.jpg');
		$img_count = count($files);
		if ($img_count > 0) {						
			$root_path = 'var/files/' . Registry::get('runtime.company_id') . '/ee_3d_photo/';
			$first_img = $root_path . $_REQUEST['product_id'] . '.jpg';
		}
	}
	Tygh::$app['view']->assign('first_img', $first_img);
	Tygh::$app['view']->assign('img_count', $img_count);
}
