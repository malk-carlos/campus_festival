import React from 'react';
import './Loading.css'


window.onload = function() {
  //セッションデータを取得
  var data = sessionStorage.getItem('session');

  //セッションデータがあれば指定ms待機新しくデータを追加する
  if (data) {//読み込み後削除
    let spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
      
  } else { //初回時（新しいタブで訪問）５秒後ページを表示
    sessionStorage.setItem('session', '初回');
    setTimeout(() => {
      let spinner = document.getElementById('loading');
      spinner.classList.add('loaded');
    }, 5000);
  }
}

function App() {
    return(
      <div id="loading"><div class="spinner"></div></div>
    )
}

export default App;