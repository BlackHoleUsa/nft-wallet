import { React } from "react";
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FlexRow } from "components/FlexRow/FlexRow";

export const SidebarItem = ({ nav }) => {

    return(

        <NavLink to={`/${nav.route}`} className="nav-item font-helvetica" activeClassName="active-nav-item">
            
            <FlexRow className="align-items-center sidebar-padding px-4 py-3">
                <span className="mr-2 text-orange">{nav.icon}</span>
                <p>{nav.item}</p>
            </FlexRow>

        </NavLink>

    );
}