import React, {ReactNode, useState} from 'react'
import styled from "styled-components"
import IconSettingsSVG from "../../components/svg/IconSettingsSVG"
import LogoComponent from '../../components/LogoComponent';
import posed, {PoseGroup} from "react-pose"
import WordSearchFormComponent from "./WordSearchFormComponent";

interface IProps {
    children: ReactNode,
    settingsClickListener: (e: any) => void
}

const Layout = styled.div`

`
const Nav = styled.nav`
    min-height:40px;
    display:flex;
    margin-bottom:15px;
    line-height:40px;
    position:relative;
    z-index:3;

    background: linear-gradient(120deg, #00e4d0, #5983e8);
    transition: background 0.25s ease;
    -webkit-transition: background 0.25s ease;
    -moz-transition: background 0.25s ease;
    -ms-transition: background 0.25s ease;

    box-shadow: 0 1px 5px rgba(0,0,0,0.05);

    .middle-box{
        flex:1
    }
    .word-search-box{
        height:60px;
        line-height:60px;
        input{
            border:1px solid #5983e8;
            background:rgba(255,255,255,0.5);
            font-size:16px;
            padding: 7px 12px;
            height:34px;
        }
        .btn{
            height:60px;
            width:60px;
        }
    }
    .btn{
        border:none;
        background:none;
        padding: 3px 10px;
    }
`

const Footer = styled.footer`
    padding:5px 15px;
    text-align:center;

    .footer-menu {
        li{
            display:inline;
            margin:0 10px;
            font-size:14px;
        }   
    }
`


const Modal = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 25 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 100 }
    }
});
const Shade = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

const ModalWrap = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;

    .shade {
        position: fixed;
        background: rgba(0, 0, 0, 0.4);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:5;
    }
    
    .modal {
        position: fixed;
        width: 500px;
        min-height: 460px;
        top:50%;
        z-index:5;
        margin-top:-270px;
        background: white;
        border-radius: 10px;
        padding:20px;
        &.modal2{
            min-height: 240px;
            margin-top:-140px;
        }
        header{
            border-bottom:1px solid #dedede;
            display:flex;
            align-items: center;
            padding-bottom:3px;
            margin-bottom: 10px;
        }
        section{
            overflow:auto;
            max-height: 360px;
            padding:1px 0;
            text-align:left;
            p{
                display:flex;
                i{
                    width:120px;
                }
                span{
                    flex:1;
                }
            }
        }
    }
`


export default function MainLayout({children, settingsClickListener}: IProps) {
    const [modal, setModal] = useState<boolean>(false)
    const [modal2, setModal2] = useState<boolean>(false)

    return (
        <Layout>
            <ModalWrap>
                <PoseGroup>
                    {modal && [
                        // If animating more than one child, each needs a `key`
                        <Shade key="shade" className="shade" onClick={() => setModal(false)} />,
                        <Modal key="modal" className="modal" >
                            <header>
                                <LogoComponent />
                            </header>
                            <section>
                                <p><i>Ilova versiyasi:</i> <span>v1.0.1</span></p>
                                <p><i>Sana:</i> <span>16.04.2019</span></p>
                                <p><i>Imkoniyatlari:</i>
                                    <span>
                                        <b>v1.0.0 (16.04.2019)</b> <br />
                                        - Kirildan-Lotinga va Lotindan-Kirilga oʻgirish <br />
                                        - Editorni joylashuv tartibini sozlash <br />
                                        - Bufferga HTML va faqat matn qismini olish <br />
                                        - Editorni tozalash <br />
                                        - Belgilarni sanash<br />
                                        <b>v1.0.1 (17.04.2019) </b><br />
                                        - Google Analytics sozlanmasi<br />
                                        - Vertikal joylashuvi<br />
                                        - Matnlarni alohida joylashuvi<br />
                                    </span>
                                </p>
                                <p><i>Asosiy maqsad:</i> <span>Oʻzbek tilidagi imloviy toʻgʻri soʻzlarni toʻplab, matnlardagi imloviy xatolarini aniqlash va ularni toʻgʻrilash.</span></p>
                                <p><i>Ilova muallifi:</i> <span>Sherali Turdiyev.</span></p>
                                <p><i>Bogʻlanish:</i> <span>Telegramda <a href="https://t.me/sheralijon">@Sheralijon</a>.</span></p>
                            </section>
                        </Modal>
                    ]}
                </PoseGroup>
                <PoseGroup>
                    {modal2 && [
                        // If animating more than one child, each needs a `key`
                        <Shade key="shade" className="shade" onClick={() => setModal2(false)} />,
                        <Modal key="modal" className="modal modal2" >
                            <header>
                                <LogoComponent />
                            </header>
                            <section>
                                <ol>
                                    <li>Dasturlash tili Javascript.</li>
                                    <li>Dasturlashda asosan <a href="https://reactjs.org/">React</a>dan foydalanildi.</li>
                                    <li>Ikonkalar <a href="https://icomoon.io/app">Icomoon.io</a> dan olindi.</li>
                                    <li>Dizayn uchun <a href="https://www.bootstrapdash.com/product/star-admin-free/">Star Admin</a> ni ranglaridan foydalanildi.</li>
                                    <li>Imkoniyatlarini solishtirishda <a href="https://savodxon.uz">Savodxon.uz</a> bilan test qilindi.</li>
                                    <li><a href="https://google.com">Google</a> va <a href="https://stackoverflow.com/">Stackoverflow</a> ni aytmasa ham bo'ladi 😄 .</li>
                                </ol>
                                <div style={{ marginTop: 15 }}>Iltimos, xato topsangiz, zudlik bilan telegramda <a href="https://t.me/sheralijon">@Sheralijon</a>ga yozing. Biz ushbu ilovani optimallashtirib boraveramiz, Xudo xohlasa.</div>
                            </section>
                        </Modal>
                    ]}
                </PoseGroup>
            </ModalWrap>
            <Nav>
                <LogoComponent />
                <div className="middle-box"></div>
               <WordSearchFormComponent/>
                <button className="btn" onClick={settingsClickListener}>
                    <IconSettingsSVG color="white" />
                </button>
            </Nav>
            {children}
            <Footer>
                <ul className="footer-menu list">
                    <li><b>© Imlo Editor - 2019</b> <span>(sinov rejimida ishlamoqda)</span></li>
                    <li><a onClick={(e: any) => setModal(true)}>Loyiha haqida</a></li>
                    <li><a onClick={(e: any) => setModal2(true)}>Foydalanilgan manbalar</a></li>
                </ul>
            </Footer>


        </Layout>
    )
}