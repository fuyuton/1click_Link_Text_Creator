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

var toast = document.createElement('div');
toast.style.zIndex = '999';
toast.style.visibility = 'hidden';
toast.style.position = 'fixed';
toast.style.left = '50%';
toast.style.top = '50%';
toast.style.backgroundColor = '#333333';
toast.style.color = '#ffffff';
toast.style.padding = '10px';
toast.style.fontWeight = 'bolder';
document.body.insertBefore(toast, document.body.firstChild);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd === 'toast') {
        toast.innerHTML = request.msg;
        toast.style.visibility = 'visible';
        setTimeout(function() {
            toast.style.visibility = 'hidden';
        }, 3000);
    }
});
