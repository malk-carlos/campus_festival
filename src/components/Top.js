// スローガン ロゴと由来
import './Top.css';
import './animation.css';
import { useInView } from 'react-intersection-observer';

function Top() {
    const { ref , inView } = useInView({
        rootMargin: '-10px',
        triggerOnce: true
    });
    return (
        <div className='sec-wrap'>
            <div id="Top" ref={ref} className={inView ? "active section fadein" : "section fadein"}>
                <h1 className='sec-title'>重要なお知らせ</h1>
                <p>11/25 <a href='#Rule'>注意事項</a>を更新しました。</p>
                <p>11/25 注意事項、場内マップそれぞれについてアコーディオンメニューを実装しました。（モバイル版）</p>
                <p>11/14 <a href='#Rule'>注意事項</a>を更新しました。</p>
            </div>
        </div>
    );
}
export default Top;