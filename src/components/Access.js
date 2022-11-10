// キャンパスの地図と住所 / 交通手段
import './Access.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Access() {
    const adress1 = '〒730-0051';
    const adress2 =  '広島県広島市中区大手町3丁目1-9 鯉城広島サンケイビル4階';
    // 埋め込み地図のソース
    const map_src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.4807299585036!2d132.45334231321408!3d34.38912510075575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa33ded923237%3A0x7702bca58f918468!2zTumrmOetieWtpuagoSDvvaVT6auY562J5a2m5qChIOW6g-WztuOCreODo-ODs-ODkeOCue-9nOmAmuS_oeWItumrmOagoQ!5e0!3m2!1sja!2sjp!4v1665245446974!5m2!1sja!2sjp'
    // 広電ページurl
    const tra_src = 'https://www.hiroden.co.jp/train/route-guide/stop-guide/u-3.html';
    // バス路線掲載ページurl （ナビタイム）
    const bus_src ='https://www.navitime.co.jp/bus/diagram/direction/00093111/';

    return (
        <div className='sec-wrap'>
        <div id="Access" className='section'>
            <h1 className='sec-title'>会場アクセス</h1>
            <div id='area-map'>
                <iframe src={map_src} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id='texts'>
                <div>
                    <h2>N高等学校・S高等学校 広島キャンパス</h2>
                    <p className='adress'>{adress1}</p><p className='adress'>{adress2}</p>
                </div>

                {/* ここのまとめ方もう少しスマートにしたい */}
                <div>
                    <p id='nearest'>最寄駅</p>
                    <div id='train' className='ways'>
                        <h3><a href={tra_src} target='_blank' rel='noopener noreferrer'>中電前（路面電車）<FaExternalLinkAlt size='2vmin' /></a></h3>
                        <p><span id='fir'>●</span>1号線 &#091;広島駅 - 広島港&#093;</p>
                        <p><span id='thi'>●</span>3号線 &#091;広電西広島 - 広島港&#093;</p>
                        <p><span id='sev'>●</span>7号線 &#091;横川駅 - 広電本社前&#093;</p>
                    </div>
                    <div id='bus' className='ways'> {/* バス路線多すぎるので路面電車のように停車する路線を表記するのは非現実的 */}
                        <h3><a href={bus_src} target='_blank' rel='noopener noreferrer'>中電前 / 放送会館前（バス）<FaExternalLinkAlt size='2vmin' /></a></h3>
                        <p>中電前バス停から徒歩1分 / 放送会館前バス停から徒歩3分</p>
                    </div>
                    <div id='atom' className='ways'> {/* 「本通駅（アストラムライン）」だけだと味気ない */}
                        <h3>本通駅（アストラムライン）</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Access;