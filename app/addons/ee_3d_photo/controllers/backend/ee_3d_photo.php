<? 
if ($mode == 'upload' && count($_FILES)) {
	$message = '';	
	$root_image_dir = fn_get_files_dir_path() . 'ee_3d_photo/';
	$uploadFileDir = $root_image_dir . $_REQUEST['product_id'] . '.3d/';
	$allowedfileExtensions = array('jpg');
	if (!file_exists($uploadFileDir)) {
		mkdir($uploadFileDir, 0777, true);
		$count = 0;
	} else {
		$files = glob($uploadFileDir . '*.jpg');
		$count = count($files); // Количество файлов в директории
	}
	if (!is_writable($uploadFileDir)) {
		$message .= ' Not writable ' . $uploadFileDir;
	} else {
		if (isset($_FILES['file_images_files']['name'])) {
			foreach ($_FILES['file_images_files']['name'] as $key=>$value) {
				if ($_FILES['file_images_files']['error'][$key] == 0) {
					
					$fileTmpPath = $_FILES['file_images_files']['tmp_name'][$key];
					$fileName = $_FILES['file_images_files']['name'][$key];
					$fileSize = $_FILES['file_images_files']['size'][$key];
					$fileType = $_FILES['file_images_files']['type'][$key];					
					$fileNameCmps = explode('.', $fileName);
					$fileExtension = strtolower(end($fileNameCmps));
					
					//$newFileName = $_REQUEST['product_id'] . stristr($fileName, '.3d');
					$newFileName = $_REQUEST['product_id'] . '.3d.100.' . $count . '.jpg';
					
					if (in_array($fileExtension, $allowedfileExtensions)) {					
						$dest_path = $uploadFileDir . $newFileName;		 
						if (move_uploaded_file($fileTmpPath, $dest_path)) {
							chmod($dest_path, 0777);
							if ($count == 0) { // Первый файл, так же копируем на обложку
								$cover_image_name = stristr($newFileName, '.', true);
								copy($dest_path, $root_image_dir . $cover_image_name . '.' . $fileExtension);
							}
						} else {
							$message .= ' error, path: from ' . $fileTmpPath . ' to ' . $dest_path;
						}
					} else {
						$message .= ' The extension not allowed: ' . $fileExtension;
					}
					$count++;
				} else {
					$message .= ' file_images_files error = ' . $_FILES['file_images_files']['error'][$key];
				}
			}
			
			if (mb_strlen($message) > 0) {
				fn_set_notification('E', __('error'), $message);
			} else {		
				fn_set_notification('N', __('notice'), __('ee_3d_photo.uploded'));
			}		
		}
	}
	return [CONTROLLER_STATUS_OK, $_SERVER['HTTP_REFERER']];	
}

if ($mode == 'delete') {
	$root_image_dir = fn_get_files_dir_path() . 'ee_3d_photo/';
	$uploadFileDir = $root_image_dir . $_REQUEST['product_id'] . '.3d/';
	array_map('unlink', glob($uploadFileDir . '*'));
	unlink($root_image_dir . $_REQUEST['product_id'] . '.jpg');
	return [CONTROLLER_STATUS_OK, $_SERVER['HTTP_REFERER']];
}