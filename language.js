//Detecting browser language preference and set suitable text
(function(){

  //Detecting browser language preference function
  function getlang() {
    try {
      return (navigator.browserLanguage || navigator.language ||   navigator.userLanguage).substr(0,2)
    }catch(e) {
    return undefined;
    }
  }
  
  //If it is japanese
  if(getlang() == "ja"){
    $('body').css("font-family", "'メイリオ', 'ヒラギノ角ゴ Pro W3', 'MS PGothic', 'MS UI Gothic'");
    $(".page-wrap h1").css('font-size', '25px').text("ドラッグ&ドロップでプロフィール画像をチェンジ");  
    $(".page-wrap h2").css('font-size', '20px').text("ベティー ミラー");
    $(".location").css('font-size', '14px').text("パロアルト, カリフォルニア州");
  
    $(".profile p").css('font-size', '13px').text("職業は教師だそうだ。学校から帰ると終日書斎に這入ったぎりほとんど出て来る事がない。家のものは大変な勉強家だと思っている。当人も勉強家であるかのごとく見せている。");
    
    $(".page-wrap h3").css('font-size','16px').text("ファイルを直接アップロードすることも出来ます。");
  }


})();