// 場内マップ
import './Map.css';
import MB_map from './MB_map';
import PC_map from './PC_map';
import './animation.css';
import { useInView } from 'react-intersection-observer';

function Map() {
    const { ref , inView } = useInView({
        rootMargin: '-10px',
        triggerOnce: true
    });
    return (
        <div className='sec-wrap'>
            <div id='MBM'>
                <MB_map />
            </div>
            <div id='PCM'>
                <PC_map />
            </div>
        </div>
    );
}
export default Map;