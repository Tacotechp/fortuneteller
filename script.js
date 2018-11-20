var zodiac_sign = ['おひつじ座','おうし座','ふたご座','かに座','しし座','おとめ座','てんびん座','さそり座','いて座','やぎ座','みずがめ座','うお座'];
var lucky_color = ['赤','青','黄','緑','白','黒','オレンジ','水色','茶色','黄緑色','紫','金色'];
var rank = ['1位','2位','3位','4位','5位','6位','7位','8位','9位','10位','11位','12位'];
var showResult = document.getElementById('showResult');
var startButton = document.getElementById('startButton');

var question =
    'あなたの星座を0から11の数字で選んでください\nおひつじ座は0\nおうし座は1\nふたご座は2\nかに座は3\nしし座は4\nおとめ座は5\nてんびん座は6\nさそり座は7\nいて座は8\nやぎ座は9\nみずがめ座は10\nうお座は11\n';

startButton.addEventListener('click', function(){
  var zodiac = prompt(question);
  var message = '今日の' + getResult(zodiac) + 'は' + getRank(zodiac) + '<br>ラッキーカラーは' + getLuckyColor(zodiac);
  showResult.innerHTML = message;
});


function getResult (number){
  return zodiac_sign[number];
}

function getLuckyColor (number){
  number = Math.round( Math.random()*11 );
  return lucky_color[number];
}

function getRank (number){
  number = Math.round( Math.random()*11 );
  return rank[number];
}