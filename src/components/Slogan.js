// スローガン ロゴと由来
import './Slogan.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import logo from './asset/logo.png';

function Slogan() {
    const slogan = "Défi"
    const slogan_blog = "http://cf-blog.ns-hiroshima-campus.net/2022/11/01/cf2022%e5%a7%8b%e5%8b%95/"
    return (
        <div className='sec-wrap'>
            <div id="Slogan" className='section'>
                {/* <div className='imgWrap'>
                    <img src={logo}/>
                </div> */}
                <div>
                    <h1 className='sec-title'>スローガン</h1>
                    <p>Campus Festival 2022 in Hiroshimaのスローガンは<strong>{slogan}</strong>に決定しました！！<span id='toblog'>（詳しくは<a href={slogan_blog} target='_blank' rel='noopener noreferrer'>こちら<FaExternalLinkAlt style={{margin:"0 .5vmin"}}/></a>で紹介しています。）</span></p>
                    <p>{slogan}とは、フランス語で「挑戦」を表す言葉で、広島キャンパス初の保護者が実際に来場するキャンフェスだからこその新たな挑戦を皆で成功させようという意志を込めました。</p>
                    <p>そして、勘の鋭い2・3年生は気付いたかもしれませんが、実は「挑戦」は昨年度キャンフェスの全体スローガンでもあります。だからこそ、昨年度までの経験を生かしてキャンフェスを成功させるために相応しいスローガンだと思います。</p>
                </div>
            </div>
        </div>
    );
}
export default Slogan;