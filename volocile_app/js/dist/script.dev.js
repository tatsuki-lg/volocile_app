"use strict";

jQuery(function ($) {
  $('.bg-slider').bgSwitcher({
    images: ['./images/volocile_200801_60.jpg', './images/volocile_200811_0.jpg', './images/IMG_6207.JPG'],
    // 切り替える背景画像を指定
    interval: 5000,
    // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true,
    // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: true,
    // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade",
    // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 1600,
    // エフェクトの時間を指定します。
    easing: "swing" // エフェクトのイージングをlinear,swingから指定

  });
});
$(function () {
  $(".btn-gnavi").on("click", function () {
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;

    if ($(this).hasClass("open")) {
      // 位置を移動させメニューを開いた状態にする
      rightVal = -300; // メニューを開いたら次回クリック時は閉じた状態になるよう設定

      $(this).removeClass("open");
    } else {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).addClass("open");
    }

    $("#global-navi").stop().animate({
      right: rightVal
    }, 200);
  });
});