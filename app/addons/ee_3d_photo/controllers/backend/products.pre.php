<?

use Tygh\Registry;

if ($mode == 'update') {
	$uploadFileDir = fn_get_files_dir_path() . 'ee_3d_photo/' . $_REQUEST['product_id'] . '.3d/';	
	if (file_exists($uploadFileDir)) { // Директория существует, считаем количество файлов *.jpg
		$files = glob($uploadFileDir . '*.jpg');
		if ($files !== false) {
			Tygh::$app['view']->assign(['jpg_file_count' => count($files)]);			
		}
	}
	Tygh::$app['view']->assign(['max_file_uploads' => (int)(ini_get('max_file_uploads')) ]);
}
