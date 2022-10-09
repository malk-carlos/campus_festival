// フッター 各リンク
import './Footer.css';

function Foot() {
    const a = "foot";
    return (
        <div id="Footer">
            <h1>Campus Festival 2022 in Hiroshima</h1>
            <nav>
                <ul>
                    <li><a href='#Slogan'>スローガン</a></li>
                    <li><a href='#Program'>企画一覧</a></li>
                    <li><a href='#Timetable'>タイムテーブル</a></li>
                    <li><a href='#Map'>会場マップ</a></li>
                    <li><a href='#Rule'>キャンパス注意事項</a></li>
                    <li><a href='#Access'>会場アクセス</a></li>
                </ul>
            </nav>
            <p id='copy'>&copy; Campus Festival 2022 in Hiroshima, Malk is All rights reserved.</p>
        </div>
    );
}
export default Foot;