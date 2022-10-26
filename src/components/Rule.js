// キャンパス注意事項
import './Rule.css';

function Rule() {
    return (
        <div className='sec-wrap'>
        <div id="Rule" className='section'>
            <h1 className='sec-title'>注意事項</h1>
            <div id='guardian'>
                <h2>保護者様への注意事項</h2>

                <h3>キャンパスに来場される際の注意事項</h3>
                <p>（体調管理や貴重品管理、入場許可証等）</p>

                <h3>配信をご覧になる際の注意事項</h3>
                <p>（外部への公開をしないように）</p>
            </div>

            <div id='students'>
                <h2>生徒への注意事項</h2>

                <h3>大枠1</h3>
                <p>具体1</p>

                <h3>大枠2</h3>
                <p>具体2</p>
            </div>

            <div id='site'>
                <h2>WEBサイトに関する注意事項</h2>
                <p>このサイトは生徒が運営しています。掲載する情報には細心の注意を払っておりますが、より正確な情報は<a href='https://nnn.ed.jp/' target='_blank' rel='noopener noreferrer'>N/S高等学校公式サイト</a>をご覧ください。</p>
                <p>このサイトを閲覧したことによって閲覧者に生じたいかなる損失についても、運営者は一切の責任を負いかねます。</p>
            </div>
        </div>
        </div>
    );
}
export default Rule;