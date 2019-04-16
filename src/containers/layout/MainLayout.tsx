import React, { ReactNode, useState } from 'react'
import styled from "styled-components"
import IconSpellCheckSVG from "../../components/svg/IconSpellCheckSVG"
import IconSettingsSVG from "../../components/svg/IconSettingsSVG"
import LogoComponent from '../../components/LogoComponent';

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

    background: linear-gradient(120deg, #00e4d0, #5983e8);
    transition: background 0.25s ease;
    -webkit-transition: background 0.25s ease;
    -moz-transition: background 0.25s ease;
    -ms-transition: background 0.25s ease;

    box-shadow: 0 1px 5px rgba(0,0,0,0.05);

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
        }   
    }
`

export default function MainLayout({ children, settingsClickListener }: IProps) {
    return (
        <Layout>
            <Nav>
                <LogoComponent />
                <button className="btn" onClick={settingsClickListener}>
                    <IconSettingsSVG color="white" />
                </button>
            </Nav>
            {children}
            <Footer>
                <ul className="footer-menu list">
                    <li><a>Loyiha haqida</a></li>
                    <li><a>Loyiha haqida</a></li>
                </ul>
            </Footer>
        </Layout>
    )
}