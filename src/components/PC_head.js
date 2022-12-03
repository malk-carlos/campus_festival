import './PC_head.css'
import './Header.css'
import logo from './asset/logo.png';
import header from './asset/header.png';
import { Link as Scroll } from 'react-scroll';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

function PH() {
    const h_broadcast = 'https://youtu.be/fq6sBL__wuU'; //配信URL
    const h_cf_all = 'https://sites.google.com/nnn.ed.jp/campusfestival2022/'; //通学コース全体
    const h_blog = 'https://cf-blog.ns-hiroshima-campus.net'; //ブログURL

    const { ref , inView } = useInView({
        rootMargin: '10px',
        triggerOnce: true
    });
    return (
        <div>
            <div id='topimg'>
                <div id='pc_topimg' className='head_pc'>
                    <img src={header}/>
                    <div>
                        <p>Campus Festival 2022 in Hiroshima</p>
                        <p>スクロールしてください<FaArrowDown /></p>
                    </div>
                </div>
            </div>
            <div id='pc-head' ref={ref} className={inView ? "head-active" : ""}>
                <img id='logo' src={logo}/>
                <nav>
                    <div id='pc_nav' className='head_pc'>
                        <ul>
                            <li className='pc-navs'><Scroll to='Slogan' smooth>スローガン</Scroll></li>
                            <li className='pc-navs'><Scroll to='Program' smooth>企画一覧</Scroll></li>
                            <li className='pc-navs'><Scroll to='Timetable' smooth>タイムテーブル</Scroll></li>
                            <li className='pc-navs'><Scroll to='Map' smooth>場内マップ</Scroll></li>
                            <li className='pc-navs'><Scroll to='Access' smooth>会場アクセス</Scroll></li>
                            <li className='pc-navs'><Scroll to='Rule' smooth>注意事項</Scroll></li>
                        </ul>
                        <ul>
                            <li className='pc-navs'><a href={h_cf_all} target='_blank' rel='noopener noreferrer'>キャンフェス全体<FaExternalLinkAlt className='fa-ex'/></a></li>
                            <li className='pc-navs'><a href={h_broadcast} target='_blank' rel='noopener noreferrer'>配信URL<FaExternalLinkAlt className='fa-ex'/></a></li>
                            <li className='pc-navs'><a href={h_blog} target='_blank' rel='noopener noreferrer'>ブログ<FaExternalLinkAlt className='fa-ex'/></a></li>
                            <li className='pc-navs'><a href='../contact.html'>お問い合わせ<FaExternalLinkAlt className='fa-ex'/></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default PH;