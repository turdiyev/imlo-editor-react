import React from 'react'
import IconSpellCheckSVG from './svg/IconSpellCheckSVG';
import styled from "styled-components"

const LogoH2 = styled.h2`
    margin:0;
    flex:1;
   
    .logo-box{
        background:rgba(255,255,255,0.8);
        padding:10px 15px;
        display:inline-block;
    }
`
export default function LogoComponent() {
    return (
        <LogoH2>
            <span className="logo-box">
                <IconSpellCheckSVG size={24} color="#5983e8" /> Imlo Editor
            </span>
        </LogoH2>
    )
}