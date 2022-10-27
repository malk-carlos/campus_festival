// 画像のインポート

import noimage from './asset/noimage.png';

function Campusprg() {
    return (
        <div id='campus' className='pgGourp'>
            <h2>会場企画（常設）</h2>
            <div className='pgWrap'>
                <div className='program'>
                    <h3>作品展示</h3>
                    <img src={noimage} />
                    <p>生徒の努力の成果の数々</p>
                </div>
                <div className='program'>
                    <h3>写真映えスポット</h3>
                    <img src={noimage} />
                    <p>ばえー</p>
                </div>
                <div className='program'>
                    <h3>みんなの一文物語</h3>
                    <img src={noimage} />
                    <p>みんなで物語を紡ぎ出そう</p>
                </div>
                <div className='program'>
                    <h3> TA紹介</h3>
                    <img src={noimage} />
                    <p>生徒の学習を支えるTeaching Assistantとは何者だ！？</p>
                </div>
                <div className='program'>
                    <h3>作品展示</h3>
                    <img src={noimage} />
                    <p>生徒の努力の成果の数々</p>
                </div>
                <div className='program'>
                    <h3>会場内クイズ</h3>
                    <img src={noimage} />
                    <p>豪華景品があるかも？？</p>
                </div>
                <div className='program'>
                    <h3>秤チャレンジ</h3>
                    <img src={noimage} />
                    <p>重量感覚を競え！飲食従事者の実力は如何に！？</p>
                </div>
                <div className='program'>
                    <h3>ピンポンビンゴ</h3>
                    <img src={noimage} />
                    <p>ピンポン玉を並べたコップに入れてビンゴを狙う</p>
                </div>
                <div className='program'>
                    <h3>射的</h3>
                    <img src={noimage} />
                    <p>今年こそ撃ちまくれ！！</p>
                </div>
                <div className='program'>
                    <h3>輪投げ</h3>
                    <img src={noimage} />
                    <p>何の変哲もない輪投げ！！！！！！！</p>
                </div>
            </div>
        </div>
    );
}
export default Campusprg;