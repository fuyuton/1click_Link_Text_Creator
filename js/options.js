$(function(){

	// �Z�[�u�{�^���������ꂽ��
	// �ݒ�����[�J���X�g���[�W�ɕۑ���
	// �ݒ�E�B���h�E�����
	$("#save").click(function () {
		localStorage["link_format"] = $("#link_format").val();
		localStorage["new_line"] = $("#new_line").val();
		window.close();
	});

	// �I�v�V������ʂ̏����l��ݒ肷��
	if (localStorage["link_format"]) {
		$("#link_format").val(localStorage["link_format"]);
	}
	if (localStorage["new_line"]) {
		var new_line = localStorage["new_line"];
		$("#new_line option[value=" + new_line + "]").attr("selected", true);
	}

});
