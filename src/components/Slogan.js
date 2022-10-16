// スローガン ロゴと由来
import './Slogan.css';

function Slogan() {
    const slogan = "Défi"
    return (
        <div id="Slogan" className='section'>
            <h1 className='sec-title'>スローガン</h1>
            <p>Campus Festival 2022 in Hiroshimaのスローガンは<strong>{slogan}</strong>に決定しました！！<span id='toblog'>（詳しくは<a href='' target='_blank' rel='noopener noreferrer'>こちら</a>で紹介しています。）</span></p>
            <p>{slogan}とは、フランス語で「挑戦」を表す言葉で、広島キャンパス初の保護者が実際に来場するキャンフェスだからこその新たな挑戦を皆で成功させようという意志を込めました。</p>
            <p>そして、勘の鋭い2・3年生は気付いたかもしれませんが、実は「挑戦」は昨年度キャンフェスの全体スローガンでもあります。だからこそ、昨年度までの経験を生かしてキャンフェスを成功させるために相応しいスローガンだと思います。</p>
            <p>すんばらしーロゴ作成中</p>
        </div>
    );
}
export default Slogan;