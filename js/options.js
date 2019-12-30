$(function(){

	// セーブボタンが押されたら
	// 設定をローカルストレージに保存し
	// 設定ウィンドウを閉じる
	$("#save").click(function () {
		localStorage["link_format"] = $("#link_format").val();
		
		if ($("#new_line").prop("checked")) {
			localStorage["new_line"] = $("#new_line").val();
		}else{
			localStorage["new_line"] = 0;

		}
		window.close();
	});

	// オプション画面の初期値を設定する
	if (localStorage["link_format"]) {
		$("#link_format").val(localStorage["link_format"]);
	}else{
		//localstorageにlink_formatがなければ
		//初期値: "Text"
		$("#link_format").val("Text");
	}
	
	if (localStorage["new_line"]) {
		
		if (localStorage["new_line"] == 1) {
			$("#new_line").prop("checked", true);
		}else{
			$("#new_line").prop("checked", false);
		}
	}else{
		//localstorageにnew_lineがなければ
		//初期値: checked
		$("#new_line").prop("checked", true);
	}

});
