// タイムスケジュール（セクション全体）
import Table from './Table'; // tableの場合
import './Timetable.css';
import './animation.css';
import { useInView } from 'react-intersection-observer';

function Timetable() {
    const { ref , inView } = useInView({
        rootMargin: '10px',
        triggerOnce: true
    });
    return (
        <div className='sec-wrap'>
        <div id="Timetable" ref={ref} className={inView ? "active section fadein" : "section fadein"}>
            <h1 className='sec-title'>タイムテーブル</h1>
            <p className='attention'>*以下は全て予定です。連絡なく変更になる場合があります。</p>
            <Table/>
        </div>
        </div>
    );
}
export default Timetable;