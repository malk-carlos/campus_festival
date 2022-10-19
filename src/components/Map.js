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
                <h2><span>●</span>ステージ</h2>
                <p>生徒によるバンド演奏や演劇などを予定しています。</p>
                {/* 各箇所の名前、そこで行われること、入場規制の有無、観覧の可否 */}
            </div>
            
        </div>
    );
}
export default Map;