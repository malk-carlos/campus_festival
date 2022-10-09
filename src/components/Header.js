// ヘッダー 各セクションへのリンク 通学全体ページへのリンク
import './Header.css';

function Head() {
    const logo = "https://iconlab.kentakomiya.com/wp/wp-content/uploads/2019/09/icon0154.png";
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
                </ul>
            </nav>
        </header>
    );
}
export default Head;