import React, { useState } from 'react'
import MainLayout from './layout/MainLayout'
import EditorComponent from '../components/EditorComponent'
import IconCircleCloseSVG from "../components/svg/IconCircleCloseSVG"
import IconTabSVG from "../components/svg/IconTabSVG"
import IconStatisticChartSVG from "../components/svg/IconStatisticChartSVG"
import IconVerticalViewSVG from "../components/svg/IconVerticalViewSVG"
import posed from 'react-pose'
import styled from 'styled-components'
import Switch from "react-switch";

import IconSettingsSVG from "../components/svg/IconSettingsSVG"
import useLocalStorage from '../hooks/useLocalStorage';

const ConfigSidebar = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
        x: '200%'
    },
    enter: {
        x: '0%',
        beforeChildren: true,
        staggerChildren: 10
    }
});
const HomeSidebar = styled.div`
    .settings-sidebar{
        position:fixed;
        right:0;
        top:0;
        bottom:0;
        overflow:auto;
        width: 300px;
        background: white;
        box-shadow: -1px 1px 50px rgba(0,0,0,0.1);
        display:flex;
        flex-direction: column;
    }
    .settings-sidebar header{
        display:flex;
        border: 1px solid rgba(0,0,0,0.1);
        color:#999;
    }
    .settings-sidebar header h3{
        flex:1;
        height:59px;
        line-height:59px;
        margin:0 10px;
        font-weight:normal;
    }
    }
    .settings-sidebar header h3 svg{
        vertical-align:middle;
        margin-right:3px;
    }
    .settings-sidebar header .btn{
        background: transparent;
        width: 40px;
        color:#999;
    }
`
const SidebarNav = styled.nav`
    ul{
        font-size: 16px;
        li{
            cursor:pointer;
            padding: 15px 20px;
            display:flex;
            color:#666;
            span{
                flex:1;
            }
            &+li{
                border-top:1px solid #fafafa;
            }
            svg{
                margin-right: 10px;
                vertical-align: middle;
            }
            &.disabled{
                color:#ccc;
            }
            .feature-information{
                margin:0;
                color:#999;
                text-align:center;
            }
        }
    }
`

export interface ISettings {
    latinFirst: boolean,
    verticalLayout: boolean,
    statsEnable: boolean
}
const initialConfig: ISettings = {
    latinFirst: true,
    verticalLayout: false,
    statsEnable: false
}
export const MainConfigContext = React.createContext<ISettings>(initialConfig);

export default function HomeContainer() {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    const [config, setConfig] = useLocalStorage<ISettings>("editor_config", initialConfig);

    return (
        <MainConfigContext.Provider value={config}>
            <MainLayout settingsClickListener={(e: any) => setSidebarVisible(!sidebarVisible)}>

                <EditorComponent

                />

                <HomeSidebar >
                    <ConfigSidebar className="settings-sidebar" pose={sidebarVisible ? 'enter' : 'exit'}>
                        <header>
                            <h3><IconSettingsSVG color="#999" /> Sozlash</h3>
                            <button className="btn" onClick={e => setSidebarVisible(false)}>
                                <IconCircleCloseSVG color="#999" />
                            </button>
                        </header>
                        <SidebarNav>
                            <ul className="list">
                                <li>
                                    <IconTabSVG size={24} /> <span>Lotin matni 1-tursin</span>
                                    <Switch
                                        onChange={checked => setConfig({ ...config, latinFirst: checked })}
                                        checked={config.latinFirst}
                                        onColor="#86d3ff"
                                        onHandleColor="#2693e6"
                                        handleDiameter={20}
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                        height={15}
                                        width={32}
                                    />
                                </li>
                                <li className="disabled">
                                    <IconVerticalViewSVG size={24} color="#ccc" />  <span>Vertical Joylashuv</span>
                                    <Switch
                                        onChange={checked => setConfig({ ...config, verticalLayout: checked })}
                                        checked={config.verticalLayout}
                                        onColor="#86d3ff"
                                        onHandleColor="#2693e6"
                                        handleDiameter={20}
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                        height={15}
                                        width={32}
                                        disabled
                                    />
                                </li>
                                <li className="disabled">
                                    <IconStatisticChartSVG size={24} color="#ccc" /> <span>Matn Statistikasi</span>
                                    <Switch
                                        onChange={checked => setConfig({ ...config, statsEnable: checked })}
                                        checked={config.statsEnable}
                                        onColor="#86d3ff"
                                        onHandleColor="#2693e6"
                                        handleDiameter={20}
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                        height={15}
                                        width={32}
                                        disabled
                                    />
                                </li>
                                <li>
                                    <p className="feature-information">
                                        Ba'zi imkoniyatlar ishlamaydi. Endi qo'shiladi.
                                </p>
                                </li>
                            </ul>
                        </SidebarNav>
                        <footer>

                        </footer>
                    </ConfigSidebar>
                </HomeSidebar>
            </MainLayout>
        </MainConfigContext.Provider>
    )
} 