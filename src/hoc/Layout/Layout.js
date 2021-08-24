import React from "react";
import { FlexColumn } from "components/FlexColumn/FlexColumn";
import './Layout.css';
import { FlexRow } from "components/FlexRow/FlexRow";
import Sidebar from "components/Sidebar/Sidebar";
import { Element } from "components/Element/Element";

class MainLayout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sidebar: false
        }
    }

    render() {
        
        const { isLogin, children } = this.props;
    
        if (isLogin) {
            return (
                <FlexColumn className="w-100 h-100">
                    <FlexRow className="align-items-start">
                        <Sidebar />
                        <Element className="layout-content"> { children } </Element>
                    </FlexRow>
                </FlexColumn>
            )
        }
        else return children;    
    }

}

export default MainLayout;