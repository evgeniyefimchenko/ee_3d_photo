{include file="common/subheader.tpl" title=__('ee_3d_photo.load_3d_images') target="#ee_3d_photo_div"}
{if $runtime.company_id > 0}
	<span style="color: red;">{__('ee_3d_photo.only_jpg')}</span><br/><i>{__('ee_3d_photo.notise', ["[count_files]" => $max_file_uploads])}</i>
	<br/>
	<div id="ee_3d_photo_div" class="control-group">
		<form id="ee_3d_photo_form" enctype="multipart/form-data" method="post">
			{include file="common/fileuploader.tpl" var_name="images_files[]" multiupload="Y"}
			<br/>
			<button data-ca-dispatch="dispatch[ee_3d_photo.upload]" data-ca-target-form="ee_3d_photo_form" class="btn btn-primary cm-submit btn-primary" form="ee_3d_photo_form">{__('Local')}</button>		
			{if $jpg_file_count}
				<button id="dell_all_frame" data-ca-dispatch="dispatch[ee_3d_photo.delete]" title="{__('ee_3d_photo.kill_em_all_title')}" data-ca-target-form="ee_3d_photo_form" class="btn btn-primary cm-tooltip cm-submit btn-primary" form="ee_3d_photo_form">{__('ee_3d_photo.kill_em_all')}</button>
				<span style="float: right;">{__('ee_3d_photo.count_in_folder')}: {$jpg_file_count}</span>
			{/if}
		</form>
	</div><br/>
	<button style="display: none;">{__('ee_3d_photo.auto_resize_foto')}</button>
	<b>{__('ee_3d_photo.warning')}</b>
	<hr/>
	{literal}
	<script>
		(function(_, $) {
			$('[name^="file_images_files"]').attr('multiple', '');
			$('#ee_3d_photo_div').find('a:contains("URL")').hide();
			$('#ee_3d_photo_div').find('a:contains(_.tr("Server"))').text('Менеджер файлов');
			$('#ee_3d_photo_div').find('a:contains(_.tr("Local"))').text('Выбрать файлы');
			$('#dell_all_frame').click(function() {
				if (!confirm("Удалить все кадры?")) {
					return false;
				}
			});
		}(Tygh, Tygh.$));	
	</script>
	{/literal}
{else}
<span style="color: red;">Нужно выбрать витрину</span>
{/if}
