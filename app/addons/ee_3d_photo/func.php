<?php
if (!defined('BOOTSTRAP')) { die('Access denied'); }

use Tygh\Registry;

function fn_ee_3d_photo_install() {
	return true;
}

function fn_ee_3d_photo_uninstall() {
	return true;
}

function fn_ee_3d_photo_get_information() {
	$max_upload = (int)(ini_get('upload_max_filesize'));
	$max_post = (int)(ini_get('post_max_size'));
	$memory_limit = (int)(ini_get('memory_limit'));
	$max_execution_time  = (int)(ini_get('max_execution_time'));
	$max_file_uploads  = (int)(ini_get('max_file_uploads'));
	$upload_mb = min($max_upload, $max_post, $memory_limit); // Наименьшее значение из переменных, это максимальный размер файла, разрешенный для загрузки	
	$res = '<br/>
			<span>max_upload = ' . ($max_upload/1000000) . ' MB</span><br/>
			<span>max_post = ' . ($max_post/1000000) . ' MB</span><br/>
			<span>memory_limit = ' . ($memory_limit/1000000) . ' MB</span><br/>
			<span>upload_mb = ' . ($upload_mb/1000000) . ' MB</span><br/>
			<span>max_execution_time  = ' . ($max_execution_time/60) . ' min</span><br/>
			<span>max_file_uploads  = ' . $max_file_uploads . '</span><br/>
			<span>upload_mb = ' . ($upload_mb/1000000) . ' MB</span><br/>
			<hr/>';
	return $res;
}
