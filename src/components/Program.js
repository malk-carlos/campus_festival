// 企画一覧 各企画紹介 （記事作ってれば誘導） オンライン企画への導線も
// カードのような形で横4か3くらい並べるイメージ

import './Program.css';

function Program() {
    return (
        <div id="Program" className='section'>
            <h1 className='sec-title'>企画一覧</h1>
            <div id='stage' className='pgGourp'>
                <h2>ステージ企画</h2>
                <div className='pgWrap'>
                    <div className='program'>
                        <h3>ドMズ</h3>
                        <img src='https://ca.slack-edge.com/T0HTW2RH7-U03AY9YFEDQ-a66a4d294769-512' />
                        <p>TA山本竜也を擁する新進気鋭のバンドです</p>
                    </div>
                    <div className='program'>
                        <h3>ドSズ</h3>
                        <img src='https://ca.slack-edge.com/T0HTW2RH7-USW2A22GJ-a7a4738e02e3-512' />
                        <p>元TA寺岡純を擁する新進気鋭のバンドです</p>
                    </div>
                    <div className='program'>
                        <h3>T.A.Ravolution</h3>
                        <img src='https://ca.slack-edge.com/T0HTW2RH7-UUV9FP630-0f0a8f79ef2b-512' />
                        <p>あの伝説のバンドT.A.Ravolutionが1日限りの奇跡の復活！名曲マリーゴールドを生演奏！</p>
                    </div>
                </div>
            </div>
            <div id='campus' className='pgGourp'>
                <h2>会場企画（常設）</h2>
                <div className='pgWrap'>
                    <div className='program'>
                        <h3>射的</h3>
                        <img src='https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png' />
                        <p>今年こそいっぱい撃とう！</p>
                    </div>
                    <div className='program'>
                        <h3>hoge</h3>
                        <img src='https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png' />
                        <p>hogehoge</p>
                    </div>
                </div>
            </div>
            <div id='broadcast' className='pgGourp'>
                <h2>配信企画</h2>
                <div className='pgWrap'>
                    <div className='program'>
                        <h3>【脱出】閉じ込められた村尾</h3>
                        <img src='https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png' />
                        <p>脱出できるのか</p>
                    </div>
                    <div className='program'>
                        <h3>hoge</h3>
                        <img src='https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png' />
                        <p>hogehoge</p>
                    </div>
                    <div className='program'>
                        <h3>hoge</h3>
                        <img src='https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png' />
                        <p>hogehoge</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Program;