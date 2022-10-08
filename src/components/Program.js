// 企画一覧 各企画紹介 （記事作ってれば誘導） オンライン企画への導線も
// カードのような形で横4か3くらい並べるイメージ

import './Program.css';

function Program() {
    return (
        <div id="Program" className='section'>
            <h1>企画一覧</h1>
            <div id='stage'>
                <h2>ステージ企画</h2>
                <div className='program'>
                    <h3>ドMs</h3>
                    <img src='https://ca.slack-edge.com/T0HTW2RH7-U03AY9YFEDQ-a66a4d294769-512' />
                    <p>TA山本竜也を擁する新進気鋭のバンドです（知らんけど）</p>
                </div>
            </div>
            <div id='campus'>
                <div className='program'>
                    <h3>射的</h3>
                    <img src='https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png' />
                    <p>今年こそいっぱい撃とう！</p>
                </div>
            </div>
            <div id='broadcast'>
                <div className='program'>
                    <h3>【脱出】閉じ込められた村尾</h3>
                    <img src='https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png' />
                    <p>やったぜ</p>
                </div>
            </div>
        </div>
    );
}
export default Program;