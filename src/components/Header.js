// ヘッダー 各セクションへのリンク 通学全体ページへのリンク
import './Header.css';
import PH from './PC_head';
import MH from './MB_head';

function Head() {
    return (
        <header>
            <div id='PH'>
                <PH/>
            </div>
            <div id='MH'>
                <MH/>
            </div>
        </header>
    );
}
export default Head;