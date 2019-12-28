$(function(){

	// セーブボタンが押されたら
	// 設定をローカルストレージに保存し
	// 設定ウィンドウを閉じる
	$("#save").click(function () {
		localStorage["link_format"] = $("#link_format").val();
		localStorage["new_line"] = $("#new_line").val();
		window.close();
	});

	// オプション画面の初期値を設定する
	if (localStorage["link_format"]) {
		$("#link_format").val(localStorage["link_format"]);
	}
	if (localStorage["new_line"]) {
		var new_line = localStorage["new_line"];
		$("#new_line option[value=" + new_line + "]").attr("selected", true);
	}

});
