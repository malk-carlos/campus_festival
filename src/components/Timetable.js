// タイムスケジュール（セクション全体）
import Table from './Table';
import './Timetable.css';

function Timetable() {
    return (
        <div className='sec-wrap'>
        <div id="Timetable" className='section'>
            <h1 className='sec-title'>タイムテーブル</h1>
            <p>現在調整中</p>
            <Table/>
        </div>
        </div>
    );
}
export default Timetable;