import React, {useState} from 'react'
import IconSearchSVG from "../../components/svg/IconSearchSVG";
import posed from "react-pose";
import styled from "styled-components";
import {debounce, includes, slice} from "lodash"
import {LATIN_IMLO_ARRAY} from "../../constants/latinWords";

interface IProps {
}

const SidebarStyle = styled.div`
    .overlay-wrapper{
            position:fixed;
            right:0;
            top:60px;
            bottom:0;
            left:0;
            z-index:1;
            background:rgba(0,0,0,0.2);
    }
    .search-sidebar{
        position:fixed;
        right:0;
        top:60px;
        bottom:0;
        z-index:2;
        overflow:auto;
        width: 340px;
        background: white;
        box-shadow: -1px 1px 50px rgba(0,0,0,0.1);
        display:flex;
        flex-direction: column;
    }
    .search-sidebar header{
        display:flex;
        border: 1px solid rgba(0,0,0,0.1);
        color:#999;
    }
    .search-sidebar header h3{
        flex:1;
        height:59px;
        line-height:59px;
        margin:0 10px;
        font-weight:normal;
    }
    }
    .search-sidebar header h3 svg{
        vertical-align:middle;
        margin-right:3px;
    }
    .search-sidebar header .btn{
        background: transparent;
        width: 40px;
        color:#999;
    }
    `

const SidebarBody = styled.div`
    ul{
        font-size: 18px;
        li{
            cursor:pointer;
            padding: 15px 20px;
            display:flex;
            line-height:1.4;
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

const OverlayBox = posed.div({
    hidden: {opacity: 0},
    visible: {opacity: 1},
});

const SearchSidebar = posed.div({
    hidden: {opacity: 0},
    visible: {opacity: 1},
    exit: {
        x: '200%'
    },
    enter: {
        x: '0%',
        beforeChildren: true,
        staggerChildren: 10
    }
});


export default function WordSearchFormComponent({}: IProps) {
    const [visibleSearchBar, setVisibleSearchBar] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [wordList, setWordList] = useState<string[]>([]);
    const searchSubmitListener = (e: any) => {

    }
    let timer: undefined | number;
    const inputKeyupListener = (searchValue: string) => {
        setSearchValue(searchValue);
        if (timer) {
            clearTimeout(timer);
        }
        new Promise(resolve => {
                timer = setTimeout(() =>
                        resolve(LATIN_IMLO_ARRAY.filter((word: string) => searchValue && includes(word, searchValue))),
                    100)
            }
        )
            .then((list: any) => {
                setWordList(slice(list, 0, 10))
            });

        if (searchValue) {
            setVisibleSearchBar(true);
        } else {
            setVisibleSearchBar(false);
        }
    }
    const debouncedKeyupListener = debounce(inputKeyupListener, 500)

    return (
        <>
            <form className="word-search-box" onSubmit={searchSubmitListener}>
                <input type="text"
                       className="word-search"
                       placeholder={"so'zni qidiring..."}
                       onKeyUp={(e: any) => debouncedKeyupListener(e.target.value)}
                />
                <button className="btn" type="submit">
                    <IconSearchSVG color="white"/>
                </button>
            </form>

            <SidebarStyle>
                <OverlayBox
                    onClick={e => setVisibleSearchBar(false)}
                    className="overlay-wrapper" pose={visibleSearchBar ? 'visible' : 'hidden'}>
                </OverlayBox>
                <SearchSidebar className="search-sidebar" pose={visibleSearchBar ? 'visible' : 'hidden'}>
                    <SidebarBody>
                        <ul className="list">
                            {wordList.map((word: string, index: number) =>
                                <li key={index}>
                                    {word}
                                </li>)}
                        </ul>
                    </SidebarBody>
                    <footer>

                    </footer>
                </SearchSidebar>
            </SidebarStyle>
        </>
    )
}