// 企画一覧 各企画紹介 （記事作ってれば誘導） オンライン企画への導線も
// カードのような形で横4か3くらい並べるイメージ

import './Program.css';
import Stage from './StagePrg';
import Campus from './CampusPrg';

function Program() {
    return (
        <div className='sec-wrap'>
        <div id="Program" className='section'>
            <h1 className='sec-title'>企画一覧</h1>
            <Stage/>
            <Campus/>
        </div>
        </div>
    );
}
export default Program;