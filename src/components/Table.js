// タイムスケジュール（表のみ）
import './Table.css';
import './animation.css'
import { useInView } from 'react-intersection-observer';

function Table() {
    const { ref , inView } = useInView({
        rootMargin: '10px',
        triggerOnce: true
    });
    return (
        <table ref={ref} className={inView ? "active fadein-bottom timetable-table" : "fadein-bottom timetable-table"}>
            <thead>
                <th className='time'>開始時刻</th>
                <th className='stage data'>ステージ企画</th>
            </thead>
            <tbody>
                <tr>
                    <td className='time'>13:00</td>
                    <td className='stage data'>オープニングセレモニー <span className='end'>-13:05</span></td>
                </tr>
                <tr>
                    <td className='time'>13:10</td>
                    <td className='stage data'>箱の中身はなんだろな <span className='end'>-13:40</span></td>
                </tr>
                <tr>
                    <td className='time'>13:50</td>
                    <td className='stage data'>クイズ大会 <span className='end'>-14:20</span></td>
                </tr>
                <tr>
                    <td className='time subarea'>14:35</td>
                    <td className='stage data subarea'>超プレゼン <span className='end'>-14:55</span><span className='subarea-ex'>*超休憩場にて実施</span></td>
                </tr>
                <tr>
                    <td className='time'>14:40</td>
                    <td className='stage data'>ゴッドフィールド大会 <span className='end'>-15:10</span></td>
                </tr>
                <tr>
                    <td className='time'>15:20</td>
                    <td className='stage data'>演劇 ~アポカリプス女子会~ <br className='mobile'></br>（演劇部公演）<span className='end'>-16:10</span><span className='junbikomi'>*準備時間込</span></td>
                </tr>
                <tr>
                    <td className='time'>16:10</td>
                    <td className='stage data'>バンドステージ（Sloppy Magnets） <span className='end'>-16:50</span> <span className='junbikomi'>*準備時間込</span></td>
                </tr>
                <tr>
                    <td className='time'>16:55</td>
                    <td className='stage data'>エンディングセレモニー <span className='end'>-17:00</span></td>
                </tr>
            </tbody>
        </table>
    );
}
export default Table;