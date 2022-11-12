// 場内マップ
import './Map.css';
import Mapimg from './asset/map.png'
import './animation.css';
import { useInView } from 'react-intersection-observer';

function Map() {
    const { ref , inView } = useInView({
        rootMargin: '10px',
        triggerOnce: true
    });
    return (
        <div className='sec-wrap'>
        <div id="Map" ref={ref} className={inView ? "active section fadein" : "section fadein"}>
            <h1 className='sec-title'>場内マップ</h1>
            <div className='imgwrap'>
                <img src={Mapimg} />
            </div>
            <div id='captions'>
                <div id='free_area'>
                    <h2>無制限エリア</h2>
                    <p style={{margin: 'auto auto 2vmin'}}>来場者の皆さんが自由に出入りできるエリアです。</p>
                    <div id='super_front'>
                        <h3><span style={{color: '#80ebed'}}>●</span>超受付</h3>
                        <p>ここで入場チケットを提示し、リストバンドを受け取ります。検温と手指の消毒にご協力ください。</p>
                    </div>
                    <div id='super_local'>
                        <h3><span style={{color: '#7061f6'}}>●</span>超企画エリア</h3>
                        <p>来場者のみなさんが実際に参加して楽しめる企画を準備しています。</p>
                    </div>
                    <div id='super_wacth'>
                        <h3><span style={{color: '#efec81'}}>●</span>超観覧</h3>
                        <p>ステージを観覧するエリアです。</p>
                    </div>
                    <div id='super_photo'>
                        <h3><span style={{color: '#cbeb70'}}>●</span>超写真エリア</h3>
                        <p>記念撮影に特化した映えエリアです。</p>
                    </div>
                    <div id='super_local'>
                        <h3><span style={{color: '#ff84d2'}}>●</span>超休憩場</h3>
                        <p>楽しみ疲れたらここで休めます。ステージの様子を見れるモニター付きです。</p>
                    </div>
                </div>
                
                <div id='restrictive_area'>
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
                </div>
                {/* 各箇所の名前、そこで行われること、入場規制の有無、観覧の可否 */}
            </div>
        </div>
        </div>
    );
}
export default Map;