import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';
import { Element } from 'components/Element/Element';
import { BsBell } from 'react-icons/bs';
import { Images } from 'Assets/Images';
import { ActionButton } from 'components/ActionButton/ActionButton';
import CustomModal from 'components/Modal/Modal';
import { ReceivePopup } from 'components/ReceivePopup/ReceivePopup';
import Pulse from 'react-reveal/Pulse';
import { SendPopup } from 'components/SendPopup/SendPopup';
import { coinsData, sidebarContent } from 'Assets/Data';
import { CoinListItem } from 'components/CoinListItem/CoinListItem';
import { Graph } from 'components/Graph/Graph';

const Dashboard = () => {

    const [number, setNumber] = useState(0);
    const [sendMenu, setSendMenu] = useState(false);
    const [receiveMenu, setReceiveMenu] = useState(false);
    const [background, setBackground] = useState(false);

    useEffect(() => {
        if(window.screen.width < 768){
            setBackground(true);
        } else{
            setBackground(false);
        }
        // runInterval();
    }, [window.screen.width]);

    const runInterval = () => {
        const interval = setInterval(() => {
            setNumber(number => number+1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }

    return(

        <FlexColumn className="w-100 h-100 main-content-wrapper">

            <Element className="heading-section">
                <FlexRow className="w-100 justify-content-between align-items-center h-auto">
                    <FlexColumn className="headings font-helvetica">
                        <h6>Your Wallet</h6>
                        <span>Select below assets to send, receive funds.</span>
                        <Element className="bottom-line"></Element>
                    </FlexColumn>
                    <Element className="main-logo">
                        <img alt="logo" src={Images.logo} width="250px" height="68px" />
                    </Element>
                    <Element className="topbar">
                        <FlexRow className="w-auto align-items-center">
                            { sidebarContent.map((item, i) => (
                                <NavLink key={i} to={`/${item?.route}`} className="topbar__link mr-2">
                                    <span className="mr-2 text-orange">{item.icon}</span>
                                    <p className="font-20px">{item.item}</p>
                                </NavLink>
                            )) }
                        </FlexRow>
                    </Element>
                    <Element className="heading-section__bell position-relative app-flex-column justify-content-center align-items-center">
                        <Pulse spy={number}>
                            <BsBell className="cursor-pointer-sort text-orange font-28px text-sm-white" />
                        </Pulse>
                        <span className="position-absolute">1</span>
                    </Element>
                </FlexRow>
            </Element>

            <FlexColumn className="headings-sm font-helvetica justify-content-center align-items-center w-100 px-3">
                <h6 className="text-center d-block">Your Wallet</h6>
                <span className="text-center d-block">Select below assets to send, receive funds.</span>
            </FlexColumn>

            <FlexColumn className="w-100 justify-content-center align-items-center mb-5" style={{ height: '25%' }}>
                <img alt="icon" src={Images.icon} className="mb-1" width="50px" />
                <Element className="font-sf-regular font-30px mb-1" style={{ color: 'var(--darkBlack)' }}>
                    0.00
                    <sub className="font-sf-medium font-18px">ETH</sub>
                </Element>
                <Element className="mb-4 font-sf-medium font-23px" style={{ color: 'var(--grey-cc-70)' }}>
                    $0.00
                    <sub className="font-11px">USD</sub>
                </Element>
                <FlexRow className="w-100 justify-content-center align-items-center top-buttons">
                    
                    <ActionButton title="Send" bgColor="var(--orange)" 
                        action={true} color="text-white" onClick={() => setSendMenu(true)} />
                     
                    <ActionButton title="Receive" bgColor="var(--green)" 
                        action={false} color="text-white ml-3" onClick={() => setReceiveMenu(true)} />

                </FlexRow>
            </FlexColumn>        


            {/* //main content */}

            <Row className="main-content">

                <Col xl={8} lg={8} md={12} sm={12}>
                    
                    <FlexColumn className="items-container">
                        
                        <Element className="font-16px font-helvetica d-block text-right 
                            text-grey-cc-50 cursor-pointer-sort mb-4"
                            style={{ textDecoration: 'underline' }}
                        >
                            Add More +
                        </Element>

                        {
                            coinsData.map((item, i) => (
                                <CoinListItem key={i} item={item} index={item?.id} background={background} />
                            ))
                        }
                    </FlexColumn>

                </Col>

                <Col xl={4} lg={4} md={12} sm={12}>
                    <Graph />
                </Col>

            </Row>


            <CustomModal show={sendMenu} title="Send"
                handleClose={() => setSendMenu(false)}>
                <SendPopup />
            </CustomModal>

            <CustomModal show={receiveMenu}  title="Receive"
                handleClose={() => setReceiveMenu(false)}>
                <ReceivePopup />
            </CustomModal>

        </FlexColumn>

    );

}

export default Dashboard;