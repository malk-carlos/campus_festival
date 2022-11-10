// 画像のインポート

import noimage from './asset/noimage.png';
import band from './asset/band.png';
import gf from './asset/godfield.png';
import presen from './asset/presen.png';
import quiz from './asset/quiz.png';
import dktk from './asset/defiktok.png';
import act from './asset/act.png';
import hako from './asset/hako.png';

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
                    <h3>演劇部公演 ~アポカリプス女子会~</h3>
                    <img src={act} />
                    <p>突如として現れたゾンビに脅かされた世界。生き延びた3人を待ち受ける未来とは─。</p>
                </div>
                <div className='program'>
                    <h3>バンド</h3>
                    <img src={band} />
                    <p>楽器初心者の人もいるなかで頑張って練習しました！温かい心で聞いてください！</p>
                </div>
                <div className='program'>
                    <h3>ゴッドフィールド大会</h3>
                    <img src={gf} />
                    <p>広島キャンパスゴッドフィールド大会決勝戦！繰り広げられる白熱カードバトルをご覧ください！！</p>
                </div>
                <div className='program'>
                    <h3>Défiktok</h3>
                    <img src={dktk} />
                    <p>2年連続2度目のTikTokパロ！！！</p>
                </div>
                <div className='program'>
                    <h3>箱の中身はなんだろな</h3>
                    <img src={hako} />
                    <p>感触だけで中身のものを当てるテレビでよくみるあの企画をキャンフェスでも開催します！<br></br>果たして挑戦者は中身を当てることができるのでしょうか！？</p>
                </div>
                <div className='program'>
                    <h3>クイズ大会</h3>
                    <img src={quiz} />
                    <p>イントロクイズやキャンパスのクイズも！？<br></br>優勝者は果たして─────！</p>
                </div>
                <div className='program'>
                    <h3>NS曜日の広島キャンパス</h3>
                    <img src={noimage} />
                    <p>皆が気になる様々な「説」をヤラセなしで調査してみました。<br></br>水曜日ネタ他キャンパスと絶対被る「説」</p>
                </div>
                <div className='program'>
                    <h3>超プレゼン</h3>
                    <img src={presen} />
                    <p>ランダムに表示される画像とお題でプレゼンをします。<br></br>プレゼンターたちのプロNや終プレなどで培ったプレゼン力に乞うご期待！</p>
                </div>
            </div>
        </div>
    );
}
export default Stageprg;