'use strict';


// ○×のテーブルに色付け
function colorTF() {

    $('td').each(function(i, element) {
        if (element.innerText === "○") {
            $(element).addClass("true");
        } else if (element.innerText === "×") {
            $(element).addClass("false");
        }
    });
}


colorTF();

$('#header').load('header.html');

$('#about-button').on('click', function () {
    window.location.href = 'about.html';
});