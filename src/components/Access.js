// キャンパスの地図と住所 / 交通手段
import './Access.css';

function Access() {
    const adress = "〒730-0051 広島県広島市中区大手町３丁目１−９ 鯉城広島サンケイビル４階";
    return (
        <div id="Access" className='section'>
            <h1>会場アクセス</h1>
            <p>{adress}</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.4807299585036!2d132.45334231321408!3d34.38912510075575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa33ded923237%3A0x7702bca58f918468!2zTumrmOetieWtpuagoSDvvaVT6auY562J5a2m5qChIOW6g-WztuOCreODo-ODs-ODkeOCue-9nOmAmuS_oeWItumrmOagoQ!5e0!3m2!1sja!2sjp!4v1665245446974!5m2!1sja!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}
export default Access;