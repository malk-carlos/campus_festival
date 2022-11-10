// 画像のインポート

import story from './asset/os-story.png';
import ppbingo from './asset/ppbingo.png';
import shoot from './asset/shoot.png';
import scale from './asset/scale.png';
import tenji from './asset/tenji.png';
import wanage from './asset/wanage.png';

function Campusprg() {
    let i = 0
    return (
        // 各企画紹介記事追加ごとに記事遷移リンク追加　（下）
        // <p><a href='' target='_blank' rel='noopener noreferrer'>企画名 紹介記事を見る</a></p>
        <div id='campus' className='pgGourp'>
            <h2>会場企画（常設）</h2>
            <h4 id="debag"></h4>
            <div className='pgWrap'>
                <div className='program' id={'cpg'+i}>
                    <h3>みんなの一文物語</h3>
                    <img src={story}/>
                    <p>一人一人が文章を考え、みんなでひとつの物語を作り上げよう。物語の結末は如何に！？</p>
                </div>
                <div className='dialog' id={'dialog'+i}>
                    <img src={story}/>
                </div>
                <span style={{display:"none"}}>{i += 1}</span>

                <div className='program' id={'cpg'+i}>
                    <h3>作品展示</h3>
                    <img src={tenji} />
                    <p>広島キャンパスの生徒たちの個性が光る作品展示です！</p>
                </div>
                <div className='dialog' id={'dialog'+i}>
                    <img src={tenji}/>
                </div>
                <span style={{display:"none"}}>{i += 1}</span>

                <div className='program' id={'cpg'+i}>
                    <h3>はかりチャレンジ</h3>
                    <img src={scale} />
                    <p>目標を目指してはかりにおもりを乗せよう！果たして、ピッタリ賞を取るの者は現れるのか！？</p>
                </div>
                <div className='dialog' id={'dialog'+i}>
                    <img src={scale}/>
                </div>
                <span style={{display:"none"}}>{i += 1}</span>
                
                <div className='program' id={'cpg'+i}>
                    <h3>ピンポンビンゴ</h3>
                    <img src={ppbingo} />
                    <p>狙うはビンゴ！ピンポン玉を投げ入れろ！</p>
                </div>
                <div className='dialog' id={'dialog'+i}>
                    <img src={ppbingo}/>
                </div>
                <span style={{display:"none"}}>{i += 1}</span>

                <div className='program' id={'cpg'+i}>
                    <h3>射的</h3>
                    <img src={shoot} />
                    <p>キャンフェス会場にひびけ快音！神エイムの持ち主は誰だ…！？</p>
                </div>
                <div className='dialog' id={'dialog'+i}>
                    <img src={shoot}/>
                </div>
                <span style={{display:"none"}}>{i += 1}</span>

                <div className='program' id={'cpg'+i}>
                    <h3>輪投げ</h3>
                    <img src={wanage} />
                    <p>狙いを定めて最高記録を目指せ！！誰でも参加可能なので是非参加して下さい！</p>
                </div>
                <div className='dialog' id={'dialog'+i}>
                    <img src={wanage}/>
                </div>
                <span style={{display:"none"}}>{i += 1}</span>
            </div>
        </div>
    );
}
export default Campusprg;