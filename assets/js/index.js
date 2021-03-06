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

// 教員向けアラート
function alert4teacher() {
    const message = [
        'この課題はJSを使用して作成しました。',
        'クライアントサイドのいくつかの制約によってローカルでは動作しない実装を含んでいます。',
        '動作は実際のWebページでの確認をお願い致します。',
        '',
        'github pagesへ遷移します。'
    ].join('\n');
    window.alert(message);
    window.location.href = 'https://s10akir.github.io/is11WebTraining/';
}
if (!/https:\/\/s10akir\.github\.io\/is11WebTraining\//.test(location.href)) {
    alert4teacher();
}