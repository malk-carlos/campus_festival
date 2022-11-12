// スローガン ロゴと由来
import './Top.css';
import header from './asset/header.png';

function Top() {
    const slogan = "Défi"

    return (
        <div className='sec-wrap'>
            <div id="Top">
                <div>
                    <img src={header}/>
                    <p>Campus Festival 2022 in Hiroshima</p>
                </div>
            </div>
        </div>
    );
}
export default Top;