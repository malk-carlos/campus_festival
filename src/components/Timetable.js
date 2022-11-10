// タイムスケジュール（セクション全体）
import Table from './Table'; // tableの場合
import './Timetable.css';
// import table from './asset/timetable.png' //画像の場合

function Timetable() {
    return (
        <div className='sec-wrap'>
        <div id="Timetable" className='section'>
            <h1 className='sec-title'>タイムテーブル</h1>
            <p className='attention'>*以下は全て予定です。連絡なく変更になる場合があります。</p>
            {/* <img src={table}/> */}
            <Table/>
        </div>
        </div>
    );
}
export default Timetable;