// 画像のインポート

import noimage from './asset/noimage.png';
import story from './asset/os-story.png';
import ppbingo from './asset/ppbingo.png';

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
                    <img src={story} />
                    <p>一人一人が文章を考え、みんなでひとつの物語を作り上げよう。物語の結末は如何に！？</p>
                </div>
                <div className='program'>
                    <h3> TA紹介</h3>
                    <img src={noimage} />
                    <p>生徒の学習を支えるTeaching Assistantとは何者だ！？</p>
                </div>
                <div className='program'>
                    <h3>作品展示</h3>
                    <img src={noimage} />
                    <p>広島キャンパスの生徒たちの個性が光る作品展示です！</p>
                </div>
                <div className='program'>
                    <h3>会場内クイズ</h3>
                    <img src={noimage} />
                    <p>スマホ1つで参加できるクイズをキャンフェス会場の色々なところに設置しました！是非挑戦してみてください！</p>
                </div>
                <div className='program'>
                    <h3>はかりチャレンジ</h3>
                    <img src={noimage} />
                    <p>目標を目指してはかりにおもりを乗せよう！果たして、ピッタリ賞を取るの者は現れるのか！？</p>
                </div>
                <div className='program'>
                    <h3>ピンポンビンゴ</h3>
                    <img src={ppbingo} />
                    <p>狙うはビンゴ！ピンポン玉を投げ入れろ！</p>
                </div>
                <div className='program'>
                    <h3>射的</h3>
                    <img src={noimage} />
                    <p>キャンフェス会場にひびけ快音！神エイムの持ち主は誰だ…！？</p>
                </div>
                <div className='program'>
                    <h3>輪投げ</h3>
                    <img src={noimage} />
                    <p>狙いを定めて最高記録を目指せ！！誰でも参加可能なので是非参加して下さい！</p>
                </div>
            </div>
        </div>
    );
}
export default Campusprg;