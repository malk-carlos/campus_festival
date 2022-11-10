import { stack as Burger } from 'react-burger-menu';
import { Link as Scroll } from 'react-scroll';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Menu = () => {
    const h_broadcast = ''; //配信URL
    const h_cf_all = ''; //通学コース全体
    const h_blog = 'http://cf-blog.ns-hiroshima-campus.net'; //ブログURL
    return (
        <Burger>
            <ul>
                {/* <li><a href='#Program'>企画一覧</a></li>
                <li><a href='#Timetable'>タイムテーブル</a></li>
                <li><a href='#Map'>場内マップ</a></li>
                <li><a href='#Access'>会場アクセス</a></li>
                <li><a href='#Rule'>注意事項</a></li> */}
                
                <li><Scroll to='Program' smooth className='navs's>企画一覧</Scroll></li>
                <li><Scroll to='Timetable' smooth className='navs'>タイムテーブル</Scroll></li>
                <li><Scroll to='Map' smooth className='navs'>場内マップ</Scroll></li>
                <li><Scroll to='Access' smooth className='navs'>会場アクセス</Scroll></li>
                <li><Scroll to='Rule' smooth className='navs'>注意事項</Scroll></li>
                <li><a href={h_broadcast} target='_blank' rel='noopener noreferrer' className='navs'>配信URL<FaExternalLinkAlt className='fa-ex'/></a></li>
                <li><a href={h_cf_all} target='_blank' rel='noopener noreferrer' className='navs'>キャンフェス全体<FaExternalLinkAlt className='fa-ex'/></a></li>
                <li><a href={h_blog} target='_blank' rel='noopener noreferrer' className='navs'>ブログ<FaExternalLinkAlt className='fa-ex'/></a></li>
                <li><a href='../contact.html' className='navs'>お問い合わせ<FaExternalLinkAlt className='fa-ex'/></a></li>
            </ul>
        </Burger>
    );
}

export default Menu;