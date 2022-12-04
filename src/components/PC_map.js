// 場内マップ
import './PC_map.css';
import Mapimg from './asset/map.png'
import './animation.css';
import { useInView } from 'react-intersection-observer';

function PC_map() {
    const { ref , inView } = useInView({
        rootMargin: '-10px',
        triggerOnce: true
    });
    return (
        <div id="Map" ref={ref} className={inView ? "active section fadein" : "section fadein"}>
            <h1 className='sec-title'>場内マップ</h1>
            <div ref={ref} className="imgwrap">
                <img src={Mapimg}  className={inView ? "active fadein-bottom" : "fadein-bottom"}/>
            </div>
            <div id='captions'>
                <div id='free_area' ref={ref} className={inView ? "active fadein-bottom" : "fadein-bottom"}>
                    <h2>無制限エリア</h2>
                    <p style={{margin: 'auto auto 2vmin'}}>来場者の皆さんが自由に出入りできるエリアです。</p>
                    <div id='super_front'>
                        <h3><span style={{color: '#6bbfff'}}>●</span>超受付</h3>
                        <p>ここで入場チケットを提示し、リストバンドを受け取ります。検温と手指の消毒にご協力ください。</p>
                    </div>
                    <div id='super_operation'>
                        <h3><span style={{color: '#6bbfff'}}>●</span>超運営</h3>
                        <p>実行委員が常時いる場所です。演劇・バンド公演中の窓口になります。</p>
                    </div>
                    <div id='super_infomation'>
                        <h3><span style={{color: '#6bbfff'}}>●</span>超総合案内</h3>
                        <p>落とし物の預かりや超スワれるキャンペーンの座席配布、整理券の配布などをおこないます。</p>
                    </div>
                    <div id='super_local'>
                        <h3><span style={{color: '#7061f6'}}>●</span>超企画エリア</h3>
                        <p>来場者のみなさんが実際に参加して楽しめる企画を準備しています。</p>
                    </div>
                    <div id='super_wacth'>
                        <h3><span style={{color: '#efec81'}}>●</span>超写真エリア</h3>
                        <p>記念撮影に特化した"映え"エリアです。</p>
                    </div>
                    <div id='super_photo'>
                        <h3><span style={{color: '#cbeb70'}}>●</span>超観覧/超立ち見</h3>
                        <p>整理券番号に応じて座れる席を配置している超観覧エリアと立ち見専用の超立ち見エリアがあります。</p>
                    </div>
                    <div id='super_local'>
                        <h3><span style={{color: '#ff84d2'}}>●</span>超休憩場</h3>
                        <p>楽しみ疲れたらここで休めます。ステージの様子を見れるモニター付きです。</p>
                    </div>
                </div>
                
                <div id='restrictive_area' ref={ref} className={inView ? "active fadein-bottom" : "fadein-bottom"}>
                    <h2>制限エリア</h2>
                    <p style={{margin: 'auto auto 2vmin'}}>入場権限のある者のみが出入りできるエリアです。対応するパスを見える位置に提げてください。</p>
                    <div id='super_stage'>
                        <h3><span style={{color: '#f4c168'}}>●</span>超ステージ</h3>
                        <p>生徒によるバンド演奏や演劇などを予定しています。</p>
                    </div>
                    <div id='super_side'>
                        <h3><span style={{color: '#f66461'}}>●</span>超袖</h3>
                        <p>ステージ袖です。</p>
                    </div>
                    <div id='super_tech'>
                        <h3><span style={{color: '#d367f6'}}>●</span>超配信・超技術</h3>
                        <p>配信・技術の各担当者の持ち場です。機材等があります。</p>
                    </div>
                    <div id='super_back'>
                        <h3><span style={{color: '#5e5d90'}}>●</span>超控室</h3>
                        <p>ステージ出演者の控え室です。</p>
                    </div>
                    <div id='super_suwareru'>
                        <h3><span style={{color: '#80ebed'}}>●</span>超スワれる</h3>
                        <p>座席予約システム「スワれる」協賛の座席です。抽選で指定席がもらえるキャンペーン実施予定です。</p>
                        <p><a href='https://ss.nagito.work/'>キャンペーンページ</a></p>
                    </div>
                </div>
                {/* 各箇所の名前、そこで行われること、入場規制の有無、観覧の可否 */}
            </div>
        </div>
    );
}
export default PC_map;