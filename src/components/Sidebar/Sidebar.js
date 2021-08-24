import React from 'react';
import './Sidebar.css';
import { sidebarContent } from 'Assets/Data';
import { Images } from 'Assets/Images';
import { SidebarItem } from './SidebarItem';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';

const Sidebar = () => {

    return(

        <FlexColumn className="sidebar">
            
            <div className="mx-4">
                <img alt="logo" src={Images.logo} className="logo" />
            </div>

            <span className="ml-5 py-3 font-14px font-helvetica text-uppercase">
                Menu
            </span>

            <FlexColumn className="">
                {
                    sidebarContent.map((sidebar, index) => (
                        <SidebarItem key={index} nav={sidebar} />
                    ))
                }
            </FlexColumn>

        </FlexColumn>

    );

}

export default Sidebar;