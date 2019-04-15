import React, { ReactNode, useState } from 'react'
import styled from "styled-components"
import IconSpellCheckSVG from "../../components/svg/IconSpellCheckSVG"
import IconSettingsSVG from "../../components/svg/IconSettingsSVG"
import posed from 'react-pose'

interface IProps {
    children: ReactNode
}

const ConfigSidebar = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
        x: '100%'
    },
    enter: {
        x: '0%',
        beforeChildren: true,
        staggerChildren: 10
    }
});

const Layout = styled.div`
    .settings-sidebar{
        position:fixed;
        right:0;
        top:60px;
        bottom:0;
        overflow:auto;
        width: 240px;
        background: white;
        box-shadow: -1px 1px 5px rgba(0,0,0,0.1);
    }
`
const Nav = styled.nav`
    min-height:40px;
    display:flex;
    margin-bottom:15px;
    line-height:40px;

    background: linear-gradient(120deg, #00e4d0, #5983e8);
    transition: background 0.25s ease;
    -webkit-transition: background 0.25s ease;
    -moz-transition: background 0.25s ease;
    -ms-transition: background 0.25s ease;

    box-shadow: 0 1px 5px rgba(0,0,0,0.05);

    h2{
        margin:0;
        flex:1;
        .logo-box{
            background:rgba(255,255,255,0.8);
            padding:10px 15px;
            display:inline-block;
        }
    }

    .btn{
        border:none;
        background:none;
        padding: 3px 10px;
    }
`

export default function MainLayout({ children }: IProps) {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    return (
        <Layout>
            <Nav>
                <h2>
                    <div className="logo-box">
                        <IconSpellCheckSVG size={24} color="#5983e8" /> Imlo Editor
                    </div>
                </h2>
                <button className="btn"  onClick={e => setSidebarVisible(!sidebarVisible)}>
                    <IconSettingsSVG color="white" />
                </button>
            </Nav>
            <ConfigSidebar className="settings-sidebar" pose={sidebarVisible ? 'enter' : 'exit'}>

            </ConfigSidebar>
            {children}
        </Layout>
    )
}