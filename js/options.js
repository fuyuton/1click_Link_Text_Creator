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
		//localStorage["new_line"] = $("#new_line").val();
		
		//chrome.storage.local.set({'link_format': #("#link_format").val(), 'new_line':  $("#new_line").val()}, function () {
		//});
		
		window.close();
	});

	// オプション画面の初期値を設定する
	// chrome.storage を利用したchromeへのデータ保存 - Qiita https://qiita.com/shimutaya/items/e8835d6ce794ef6c73cf

	if (localStorage["link_format"]) {
		$("#link_format").val(localStorage["link_format"]);
		
		//chrome.storage.local.get("link_format", function (value) {
		//	$("#link_format").val(value.key);
		//});
	}else{
		//storageにlink_formatがなければ
		//link_format = "Text"
		$("#link_format").val("Text");
		//localStorageに保存
		localStorage["link_format"] = $("#link_format").val();

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
		//localStorageに保存
		localStorage["new_line"] = $("#new_line").val();

	}

});
