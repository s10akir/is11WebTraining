'use strict';


// 各種読み込み
$('#header').load('header.html');

// #contentのsrcからどのマークダウンを読み込むかを決めてスクリプトを共通化
$.get('assets/md/' + $('#content')[0].attributes['src'].value , function (data) {
    $('#content').html(marked(data));
});