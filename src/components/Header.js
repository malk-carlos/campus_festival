// ヘッダー 各セクションへのリンク 通学全体ページへのリンク
import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Head() {
    const logo = "https://iconlab.kentakomiya.com/wp/wp-content/uploads/2019/09/icon0154.png";
    return (
        <header>
            <img src={logo}/>
            <nav>
                <ul>
                    <li><AnchorLink href="./slogan" offset="50">スローガン</AnchorLink></li>
                </ul>
            </nav>
        </header>
    );
}
export default Head;