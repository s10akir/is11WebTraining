'use strict';


// ○×のテーブルに色付けするメソッド
function colorTF() {
    $('td').each(function(i, element) {
        if (element.innerText === "○") {
            $(element).addClass("true");
        } else if (element.innerText === "×") {
            $(element).addClass("false");
        }
    });
}


// 各種読み込み
$('#header').load('header.html');
colorTF();

// aboutへのリンクボタンの挙動
$('#about-button').on('click', function () {
    window.location.href = 'about.html';
});
