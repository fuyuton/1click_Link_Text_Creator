
/*
MIT License

Copyright (c) 2019 fuyuton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


let Data = {"Title": "", "URL": ""}

chrome.browserAction.onClicked.addListener(function(tab) {
    Data.Title = tab.title;
    Data.URL = tab.url;

	var copyEvent = function(e){

		switch (localStorage["link_format"]) {
			case 'HTML':
				format = "text/plain";
				str = "<a href=" + Data.URL + ">" + Data.Title + "</a>";
				break;
			case 'Markdown':
				format = "text/plain";
				str = "[" + Data.Title + "](" + Data.URL+ ")";
				break;
			case 'Text':
				format = "text/plain";
				str = Data.Title+" "+Data.URL;
				break;
			default:
				format = "text/plain";
				str = Data.Title+" "+Data.URL;
		}
		
		if (!localStorage["new_line"] || localStorage["new_line"] == 1) {
			str = str + "\n"
		}
		// クリップボードに書き込む
	    e.clipboardData.setData(format , str);
	    
	    // 本来のイベントをキャンセル
	    e.preventDefault()
	    
	    // 終わったらイベントを削除
	    document.removeEventListener("copy", copyEvent);
	}

	// コピーのイベントが発生したときに、copyEventを実行する
	document.addEventListener("copy" , copyEvent);
	
	// コピー
	document.execCommand("copy");
	chrome.tabs.sendMessage(tab.id, {cmd: 'toast', msg: 'copied'});
	
	
});
