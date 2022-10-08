// スローガン ロゴと由来
import './Slogan.css';

function Slogan() {
    const slogan = "検討中"
    return (
        <div id="Slogan" className='section'>
            <h1>スローガン</h1>
            <p>2022年度広島キャンパスキャンフェスティバルのスローガンは<strong>{slogan}</strong>に決定しました！！</p>
        </div>
    );
}
export default Slogan;