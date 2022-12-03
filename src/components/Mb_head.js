import './MB_head.css'
import './Header.css'
import header from './asset/MBhead.png';
import { Link as Scroll } from 'react-scroll';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

// 以下各アイコン
import slogan from './asset/logo.png';
import program from './asset/headIcons/program.svg';
import timetable from './asset/headIcons/timetable.svg';
import map from './asset/headIcons/map.svg';
import access from './asset/headIcons/access.svg';
import rule from './asset/headIcons/rule.svg';

import all from './asset/headIcons/cfall.svg';
import cast from './asset/headIcons/broadcast.svg';
import blog from './asset/headIcons/blog.svg';
import contact from './asset/headIcons/contact.svg';

// 以上各アイコン

function MH() {
    const h_broadcast = 'https://youtu.be/fq6sBL__wuU'; //配信URL
    const h_cf_all = 'https://sites.google.com/nnn.ed.jp/campusfestival2022/'; //通学コース全体
    const h_blog = 'http://cf-blog.ns-hiroshima-campus.net'; //ブログURL
    return (
        <div>
            <div id='mo-head'>
                <nav>
                    <div id='mo_nav' className='head_mo'>
                        <ul id='m-n-fir'>
                            <li className='mo-navs'><Scroll to='Slogan' smooth><img src={slogan}/>スローガン</Scroll></li>
                            <li className='mo-navs'><Scroll to='Program' smooth><img src={program}/>企画一覧</Scroll></li>
                            <li className='mo-navs'><Scroll to='Timetable' smooth><img src={timetable}/>スケジュール</Scroll></li>
                            <li className='mo-navs'><Scroll to='Map' smooth><img src={map}/>場内マップ</Scroll></li>
                            <li className='mo-navs'><Scroll to='Access' smooth><img src={access}/>会場アクセス</Scroll></li>
                            <li className='mo-navs'><Scroll to='Rule' smooth><img src={rule}/>注意事項</Scroll></li>
                        </ul>
                        <ul id='m-n-sec'>
                            <li className='mo-navs-mid'><a href={h_cf_all} target='_blank' rel='noopener noreferrer'><img src={all}/>全体ページ<FaExternalLinkAlt className='fa-ex'/></a></li>
                            <li className='mo-navs-big'><a href={h_broadcast} target='_blank' rel='noopener noreferrer'><img src={cast}/>配信URL<FaExternalLinkAlt className='fa-ex'/></a></li>
                            <li className='mo-navs-big'><a href={h_blog} target='_blank' rel='noopener noreferrer'><img src={blog}/>ブログ<FaExternalLinkAlt className='fa-ex'/></a></li>
                            <li className='mo-navs-mid'><a href='../contact.html'><img src={contact}/>お問い合わせ<FaExternalLinkAlt className='fa-ex'/></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div id='mo_topimg' className='head_pc'>
                <img id='mo_topimg_img' src={header}/>
                <div>
                    <p>Campus Festival 2022 in Hiroshima</p>
                    <p>スクロールしてください<FaArrowDown /></p>
                </div>
            </div>
        </div>
    );
}

export default MH;