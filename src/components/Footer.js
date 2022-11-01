// フッター 各リンク
import './Footer.css';

function Foot() {
    const f_broadcast = ''; //配信URL
    const f_cf_all = ''; //通学コース全体
    const f_blog = 'http://cf-blog.ns-hiroshima-campus.net'; //ブログURL

    return (
        <footer>
            <h1>Campus Festival 2022 in Hiroshima</h1>
            <nav>
                <ul>
                    <li><a href='#Program'>企画一覧</a></li>
                    <li><a href='#Timetable'>タイムテーブル</a></li>
                    <li><a href='#Map'>場内マップ</a></li>
                    <li><a href='#Access'>会場アクセス</a></li>
                    <li><a href='#Rule'>注意事項</a></li>
                    <li><a href={f_broadcast} target='_blank' rel='noopener noreferrer'>配信URL</a></li>
                    <li><a href={f_cf_all} target='_blank' rel='noopener noreferrer'>キャンフェス全体</a></li>
                    <li><a href={f_blog} target='_blank' rel='noopener noreferrer'>ブログ</a></li>
                    <li><a href='../contact.html' target='_blank' rel='noopener noreferrer'>お問い合わせ</a></li>
                    <li><a href='../contact.html' target='_blank' rel='noopener noreferrer'>お問い合わせ</a></li>
                </ul>
            </nav>
            <div id='disclaimer'>
                <p>このサイトは生徒が運営しています。掲載する情報には細心の注意を払っておりますが、より正確な情報は<a href='https://nnn.ed.jp/' target='_blank' rel='noopener noreferrer'>N/S高等学校公式サイト</a>をご覧ください。</p>
                <p>このサイトを閲覧したことによって閲覧者に生じたいかなる損失についても、運営者は一切の責任を負いかねます。</p>
            </div>
            <p id='copy'>&copy; Campus Festival 2022 in Hiroshima, Malk is All rights reserved.</p>
        </footer>
    );
}
export default Foot;