import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%;
`

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 10px 20px;
    margin: 0 5px;
    user-select: none;
    cursor: pointer;
    box-shadow: 0 0 2px black; 
    z-index: 999;
    background: #fff;

    &:focus {
        outline: none;
    }

    &.is-selected {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid white;
    }
`

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    padding: 8px;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`

WrapperTabPanel.tabsRole = 'TabPanel';
