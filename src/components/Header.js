// ヘッダー 各セクションへのリンク 通学全体ページへのリンク
import './Header.css';
import logo from './asset/logo.png';
import { Link as Scroll } from 'react-scroll';

function Head() {
    const h_broadcast = ''; //配信URL
    const h_cf_all = ''; //通学コース全体
    const h_blog = 'http://cf-blog.ns-hiroshima-campus.net'; //ブログURL

    return (
        <header>
            <img id='logo' src={logo}/>
            <nav>
                <ul>
                    {/* <li><a href='#Program'>企画一覧</a></li>
                    <li><a href='#Timetable'>タイムテーブル</a></li>
                    <li><a href='#Map'>場内マップ</a></li>
                    <li><a href='#Access'>会場アクセス</a></li>
                    <li><a href='#Rule'>注意事項</a></li> */}
                    <Scroll to='Program' smooth className='navs's>企画一覧</Scroll>
                    <Scroll to='Timetable' smooth className='navs'>タイムテーブル</Scroll>
                    <Scroll to='Map' smooth className='navs'>場内マップ</Scroll>
                    <Scroll to='Access' smooth className='navs'>会場アクセス</Scroll>
                    <Scroll to='Rule' smooth className='navs'>注意事項</Scroll>
                </ul>
                <ul>
                    <li><a href={h_broadcast} target='_blank' rel='noopener noreferrer'>配信URL</a></li>
                    <li><a href={h_cf_all} target='_blank' rel='noopener noreferrer'>キャンフェス全体</a></li>
                    <li><a href={h_blog} target='_blank' rel='noopener noreferrer'>ブログ</a></li>
                    <li><a href='../contact.html' target='_blank' rel='noopener noreferrer'>お問い合わせ</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Head;