// スローガン ロゴと由来
import './Slogan.css';

function Slogan() {
    const slogan = "検討中"
    return (
        <div id="Slogan" className='section'>
            <h1 className='sec-title'>スローガン</h1>
            <p>Campus Festival 2022 in Hiroshimaのスローガンは<strong>{slogan}</strong>に決定しました！！</p> {/* ブログ記事誘導*/}
        </div>
    );
}
export default Slogan;