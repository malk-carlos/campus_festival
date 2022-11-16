// フッター 各リンク
import './Footer.css';
import { Link as Scroll } from 'react-scroll';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Foot() {
    const f_broadcast = ''; //配信URL
    const f_cf_all = 'https://sites.google.com/nnn.ed.jp/campusfestival2022/'; //通学コース全体
    const f_blog = 'https://cf-blog.ns-hiroshima-campus.net'; //ブログURL

    return (
        <footer>
            <h1>Campus Festival 2022 in Hiroshima</h1>
            <nav>
                <div className='foot_div' id='internal'>{/* サイト内遷移 */}
                    <Scroll to='Program' smooth className='fnavs'>企画一覧</Scroll>
                    <Scroll to='Timetable' smooth className='fnavs'>タイムテーブル</Scroll>
                    <Scroll to='Map' smooth className='fnavs'>場内マップ</Scroll>
                    <Scroll to='Access' smooth className='fnavs'>会場アクセス</Scroll>
                    <Scroll to='Rule' smooth className='fnavs'>注意事項</Scroll>
                </div>
                <div className='foot_div' id='external'>
                    <a href={f_broadcast} target='_blank' rel='noopener noreferrer'>配信URL<FaExternalLinkAlt className='fa-ex foot-ex'/></a>
                    <a href={f_cf_all} target='_blank' rel='noopener noreferrer'>キャンフェス全体<FaExternalLinkAlt className='fa-ex foot-ex'/></a>
                    <a href={f_blog} target='_blank' rel='noopener noreferrer'>ブログ<FaExternalLinkAlt className='fa-ex foot-ex'/></a>
                    <a href='../contact.html'>お問い合わせ<FaExternalLinkAlt className='fa-ex foot-ex'/></a>
                </div>
            </nav>
            {/* <div id='disclaimer'>
                <p>このサイトは生徒が運営しています。掲載する情報には細心の注意を払っておりますが、より正確な情報は<a href='https://nnn.ed.jp/' target='_blank' rel='noopener noreferrer'>N/S高等学校公式サイト</a>をご覧ください。</p>
                <p>このサイトを閲覧したことによって閲覧者に生じたいかなる損失についても、運営者は一切の責任を負いかねます。</p>
            </div> */}
            <p id='copy'>&copy; Campus Festival 2022 in Hiroshima<br className='mobile'></br><span className='comma'>,</span> Malk is All rights reserved.</p>
        </footer>
    );
}
export default Foot;