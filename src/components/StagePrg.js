// 画像のインポート

import noimage from './asset/noimage.png';

function Stageprg() {
    return (
        <div id='stage' className='pgGourp'>
            <h2>ステージ企画</h2>
            <div className='pgWrap'>
                <div className='program'>
                    <h3>OP/ED</h3>
                    <img src={noimage} />
                    <p>今年度もサプライズ企画を準備しています！当日をお楽しみに！</p>
                </div>
                <div className='program'>
                    <h3>演劇部公演{/* 演劇タイトル発表OKなら紹介 */}</h3>
                    <img src={noimage} />
                    <p>今年度新設された広島キャンパス演劇部の初公演です。</p>
                </div>
                <div className='program'>
                    <h3>バンド</h3>
                    <img src={noimage} />
                    <p>広島キャンパス2年ぶり2度目のバンド公演！今回は生徒が生演奏します！</p>
                </div>
                <div className='program'>
                    <h3>God Field大会</h3>
                    <img src={noimage} />
                    <p>ごふぃー</p>
                </div>
                <div className='program'>
                    <h3>TikT○kパロ</h3>
                    <img src={noimage} />
                    <p>2年連続2度目のTikTokパロ！！！</p>
                </div>
                <div className='program'>
                    <h3>箱の中身はなんだろな</h3>
                    <img src={noimage} />
                    <p>ハロウィンのレクになる予定だった企画。予想以上の参加者が集まったためキャンフェスに移動しました！</p>
                </div>
                <div className='program'>
                    <h3>クイズ大会</h3>
                    <img src={noimage} />
                    <p>3年練蔵3度目のクイズ大会！！！！</p>
                </div>
                <div className='program'>
                    <h3>水曜日のダウンタ○ンパロ</h3>
                    <img src={noimage} />
                    <p>水曜日ネタ他キャンパスと絶対被る&#091;説&#093;</p>
                </div>
                <div className='program'>
                    <h3>即興プレゼン</h3>
                    <img src={noimage} />
                    <p>2年連続2度目の即興プレゼン！！！！！今年もぱわーが見れるのか！？！？</p>
                </div>
            </div>
        </div>
    );
}
export default Stageprg;