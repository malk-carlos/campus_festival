// タイムスケジュール（表のみ）
import './Table.css';

function Table() {
    return (
        <table class="timetable-table">
            <thead>
                <th className='time'></th>
                <th className='stage data'>ライブステージ</th>
                <th className='campus data'>現地企画</th>
            </thead>
            <tbody>
                <tr>
                    <td className='time'><span>13:00</span></td>
                    <td className='stage data'></td>
                    <td className='campus data'></td>
                </tr>
                <tr>
                    <td className='time'><span>14:00</span></td>
                    <td className='stage data'></td>
                    <td className='campus data'></td>
                </tr>
                <tr>
                    <td className='time'><span>15:00</span></td>
                    <td className='stage data'></td>
                    <td className='campus data'></td>
                </tr>
                <tr>
                    <td className='time'><span>16:00</span></td>
                    <td className='stage data'></td>
                    <td className='campus data'></td>
                </tr>
                <tr>
                    <td className='time'><span>17:00</span></td>
                    <td className='stage data'></td>
                    <td className='campus data'></td>
                </tr>
            </tbody>
        </table>
    );
}
export default Table;