// スローガン ロゴと由来
import './Slogan.css';

function Slogan() {
    const slogan = "検討中"
    return (
        <div id="Slogan" className='section'>
            <h1>スローガン</h1>
            <p>Campus Festival 2022 in Hiroshimaのスローガンは<strong>{slogan}</strong>に決定しました！！</p>
        </div>
    );
}
export default Slogan;