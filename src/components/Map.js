// 場内マップ
import './Map.css';
import Mapimg from './asset/map.png'

function Map() {
    return (
        <div id="Map" className='section'>
            <h1 className='sec-title'>場内マップ</h1>
            <div>
                <div id='imgwrap'>
                    <img src={Mapimg} />
                </div>
                <div id='super_stage'>
                    <h2><span>●</span>超ステージ</h2>
                    <p>生徒によるバンド演奏や演劇などを予定しています。</p>
                </div>
                <div id='super_wacth'>
                    <h2><span>●</span>超観覧</h2>
                    <p>ステージを観覧するエリアです。</p>
                </div>
                {/* 各箇所の名前、そこで行われること、入場規制の有無、観覧の可否 */}
            </div>
            
        </div>
    );
}
export default Map;