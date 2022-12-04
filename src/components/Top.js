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
                <p>このページはまもなく<b>非公開</b>になります。</p>
                <p>来年度の資料として生徒が確認できる形でデータは保存いたしますが、保護者様や3年生が当ページを閲覧できる期間は残りわずかです。隅々まで見落とすことのないように、キャンフェスの思い出と共に記憶に留めておいてください。</p>
                <p>しかし、当ページを著作者の許可なく保存・複製・再配布などする行為は一切禁止致します。あらかじめご了承ください。</p>
            </div>
        </div>
    );
}
export default Top;