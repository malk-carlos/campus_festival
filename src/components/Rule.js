// キャンパス注意事項
import './Rule.css';
import './animation.css';
import { useInView } from 'react-intersection-observer';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";

function Rule() {
    const com = ". ";
    let i = 0;
    const { ref , inView } = useInView({
        rootMargin: '10px',
        triggerOnce: true
    });
    return (
        <Accordion allowZeroExpanded allowMultipleExpanded>
        <div className='sec-wrap'>
        <div id="Rule" ref={ref} className={inView ? "active section fadein" : "section fadein"}>
            <h1 className='sec-title'>注意事項</h1>
            <p id='kanarazuyome' style={{color:'#ec7b7c', "font-size":'small'}}>こちらの項目には大切な注意事項が記載されています。必ずお読みいただくようお願いいたします。</p>
            <div id='parent'>
            <AccordionItem>
                <AccordionItemHeading>
                <AccordionItemButton>
                    <h2>保護者様への注意事項</h2>
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h3>キャンパスに来場される際の注意事項</h3>
                    <p>{i+=1}{com}軽度であっても発熱・咳・咽頭痛・味覚障害などの症状が見られる場合は自宅からオンライン視聴をお願いします。</p>
                    <p>{i+=1}{com}必ずマスクを正しく着用いただき、飲み物を飲まれる際など必要な場合を除いてマスクは外さないようにしてください。フェイスシールド等は不可とします。</p>
                    <p>{i+=1}{com}入場の際は受付で入場チケットを提示の上、検温と手指の消毒にご協力ください。</p>
                    <p>{i+=1}{com}受付で渡されたリストバンドは必ず見える箇所に着用してください。お手洗いの後など、再入場の際に毎回必ず提示していただきます。</p>
                    <p>{i+=1}{com}一部保護者様に入場いただけないエリアがございます。ご了承ください。</p>
                    <p>{i+=1}{com}当日は記録係として一部生徒が会場内の各所で撮影を行います。一般に公開されるものではございませんのでご了承ください。</p>
                    <p>{i+=1}{com}写真の撮影は許可しますが、写っている人の許可なく写真をSNS等に共有しないでください。ステージの動画撮影はご遠慮ください。</p>
                    <p>{i+=1}{com}観覧席等での大声での談笑など、他の来場者様の迷惑になる行為はご遠慮ください。</p>
                    <p>{i+=1}{com}実行委員や職員などの指示に従っていただけない場合はお帰りいただく場合があります。</p>
                    <p>{i+=1}{com}貴重品を含む手荷物は全てご自身で管理いただくようお願いいたします。キャンパス内での盗難・破損等については一切の責任を負いかねます。</p>
                    <p>{i+=1}{com}キャンパスには駐車場がございません。ご来場の際は公共交通機関をご利用ください。</p>
                    <span style={{display:"none"}}>{i=0}</span>
                    <h3>配信をご覧になる際の注意事項</h3>
                    <p>{i+=1}{com}配信の録画や録音、またそれをN/S高等学校関係者以外（以降外部とします）に公開する行為の一切を禁じます。</p>
                    <p>{i+=1}{com}サイトや動画のURLを外部に共有することを禁じます。</p>
                    <p>{i+=1}{com}チャットやコメントでの誹謗中傷は一切おやめください。また、それらを発見した場合はスタッフが適切に対応いたします。視聴者同士で指摘することもおやめください。</p>
                    <span style={{display:"none"}}>{i=0}</span>
                </AccordionItemPanel>
            </AccordionItem>
            </div>

            <div id='students'>
            <AccordionItem>
                <AccordionItemHeading>
                <AccordionItemButton>
                    <h2>生徒への注意事項</h2>
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h3>新型コロナウイルス感染対策</h3>
                    <p>{i+=1}{com}必ずマスクを着用いただき、飲み物を飲まれる際など必要な場合を除いてマスクは外さないようにしてください。</p>
                    <p>{i+=1}{com}入場の際は受付で入場チケットを提示の上、検温と手洗い、手指の消毒にご協力ください。</p>
                    <p>{i+=1}{com}受付で渡されたリストバンドは必ず着けたままにしてください。お手洗いの後など、再入場の際に必ず提示していただきます。</p>
                    <span style={{display:"none"}}>{i=0}</span>

                    <h3>セキュリティ/プライバシー保護</h3>
                    <p>{i+=1}{com}ステージ等を撮影・録画する行為は禁止します。</p>
                    <p>{i+=1}{com}友人同士での記念撮影は許可しますが、写っている人の許可なくSNS等へ掲載する行為は禁止します。</p>
                    <p>{i+=1}{com}入場制限エリアについては、エリアへの権限のあるパスを提示した上で入場してください。</p>
                    <span style={{display:"none"}}>{i=0}</span>

                    <h3>マナー/モラル</h3>
                    <p>{i+=1}{com}観覧席等での大声での談笑など、他の来場者様の迷惑になる行為はご遠慮ください。</p>
                    <span style={{display:"none"}}>{i=0}</span>
                </AccordionItemPanel>
            </AccordionItem>
            </div>

            <div id='site'>
            <AccordionItem>
                <AccordionItemHeading>
                <AccordionItemButton>
                    <h2>WEBサイトに関する注意事項</h2>
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>{i+=1}{com}このサイトは生徒が運営しています。掲載する情報には細心の注意を払っておりますが、より正確な情報は<a href='https://nnn.ed.jp/' target='_blank' rel='noopener noreferrer'>N/S高等学校公式サイト</a>をご確認いただき、当ページと異なる情報はそちらを優先してください。</p>
                    <p>{i+=1}{com}このサイトを閲覧したことによって閲覧者に生じたいかなる損失についても、運営者は一切の責任を負いかねます。</p>
                    <p>{i+=1}{com}このサイト上のコンテンツ内容（文章、写真等）に関する著作権および肖像権、その他知的財産権は、サイトまたは各コンテンツの提供元に帰属します。</p>
                    <p>{i+=1}{com}私的使用、または引用などの著作権法上認められた場合を除き、無断で改変・転載・複製などの利用をすることはできません</p>
                    <p>{i+=1}{com}このサイトを外部に共有すること、紹介することを禁じます。</p>
                    <p>{i+=1}{com}超スワれるキーワード⑤：「も」</p>
                    <span style={{display:"none"}}>{i=0}</span>
                </AccordionItemPanel>
            </AccordionItem>
            </div>
        </div>
        </div>
        </Accordion>
    );
}
export default Rule;