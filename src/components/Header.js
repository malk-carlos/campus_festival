// ヘッダー 各セクションへのリンク 通学全体ページへのリンク
import './Header.css';

function Head() {
    const logo = "https://iconlab.kentakomiya.com/wp/wp-content/uploads/2019/09/icon0154.png";
    const h_broadcast = ''; //配信URL
    const h_cf_all = ''; //通学コース全体
    const h_blog = ''; //ブログURL

    return (
        <header>
            {/* <img src={logo}/> */}
            <h1>Campus Festival 2022 in Hiroshima</h1>
            <nav>
                <ul>
                    <li><a href='#Slogan'>スローガン</a></li>
                    <li><a href='#Program'>企画一覧</a></li>
                    <li><a href='#Timetable'>タイムテーブル</a></li>
                    <li><a href='#Map'>会場マップ</a></li>
                    <li><a href='#Rule'>キャンパス注意事項</a></li>
                    <li><a href='#Access'>会場アクセス</a></li>
                    <li><a href='#Rule'>注意事項</a></li>
                    <li><a href={h_broadcast}>配信URL</a></li>
                    <li><a href={h_cf_all}>キャンフェス全体</a></li>
                    <li><a href={h_blog}>ブログ</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Head;