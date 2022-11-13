// 企画一覧 各企画紹介 （記事作ってれば誘導） オンライン企画への導線も
// カードのような形で横4か3くらい並べるイメージ

import './Program.css';
import Stage from './StagePrg';
import Campus from './CampusPrg';
import './animation.css';
import { useInView } from 'react-intersection-observer';


function slprg() {
    let select_p = document.getElementById('sl_prg').value;
    console.log(select_p);
    
}

function Program() {
    const { ref , inView } = useInView({
        rootMargin: '-10px',
        triggerOnce: true
    });
    return (
        <div className='sec-wrap'>
        <div id="Program" ref={ref} className={inView ? "active section fadein" : "section fadein"}>
            <h1 className='sec-title'>企画一覧</h1>
            <p className='attention'>*以下の企画は全て予定です。連絡なく変更になる場合があります。</p>
            {/* 選択次第で表示を切り替えるようにしたい */}
            {/* <div className='mobile'>
                <label for='sl_prg'>表示する企画を選んでください</label> */}
                {/* <select name='sl_prg' id='sl_prg' onChange={slprg}>
                    <option value='0' selected>ステージ企画</option>
                    <option value='1'>現地企画（常設）</option>
                </select> */}
                {/* <div>
                    タブ切り替え式で表示切り替えしたい
                </div> */}
            {/* </div> */}
            <div className='pg_cp_wrap' id='Stage_wrap'>
                <Stage/>
            </div>
            <div className='pg_cp_wrap' id='Campus_wrap'>
                <Campus/>
            </div>
        </div>
        </div>
    );
}
export default Program;