// スローガン ロゴと由来
import './Top.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import logo from './asset/logo.png';
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
                <div>
                    <h1 className='sec-title'>最新のお知らせ</h1>
                    <p><a href='#Rule'>11/14 注意事項</a>を更新しました。</p>
                </div>
            </div>
        </div>
    );
}
export default Top;