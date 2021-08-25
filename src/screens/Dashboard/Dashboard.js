import React, { useState, useEffect } from 'react';
import './Dashboard.css';

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

const Dashboard = () => {

    const [number, setNumber] = useState(0);
    const [sendMenu, setSendMenu] = useState(false);
    const [receiveMenu, setReceiveMenu] = useState(false);

    useEffect(() => {
        runInterval();
    });

    const runInterval = () => {
        const interval = setInterval(() => {
            setNumber(number => number+1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }

    return(

        <FlexColumn className="w-100 h-100 px-5">

            <Element className="heading-section">
                <FlexRow className="w-100 justify-content-between align-items-center h-auto">
                    <FlexColumn className="headings font-helvetica">
                        <h6>Your Wallet</h6>
                        <span>Select below assets to send, receive funds.</span>
                        <Element className="bottom-line"></Element>
                    </FlexColumn>
                    <Element className="heading-section__bell position-relative app-flex-column justify-content-center align-items-center">
                        <Pulse spy={number}>
                            <BsBell className="cursor-pointer-sort text-orange font-28px" />
                        </Pulse>
                        <span className="position-absolute">1</span>
                    </Element>
                </FlexRow>
            </Element>

            <FlexColumn className="w-100 justify-content-center align-items-center">
                <img alt="icon" src={Images.icon} className="mb-1" />
                <Element className="font-sf-regular font-36px mb-1" style={{ color: 'var(--darkBlack)' }}>
                    0.00
                    <sub className="font-sf-medium font-18px">ETH</sub>
                </Element>
                <Element className="mb-4 font-sf-medium font-23px" style={{ color: 'var(--grey-cc-70)' }}>
                    $0.00
                    <sub className="font-11px">USD</sub>
                </Element>
                <FlexRow className="w-100 justify-content-center align-items-center">
                    
                    <ActionButton title="Send" bgColor="var(--orange)" 
                        action={true} color="text-white" onClick={() => setSendMenu(true)} />
                     
                    <ActionButton title="Receive" bgColor="var(--green)" 
                        action={false} color="text-white ml-3" onClick={() => setReceiveMenu(true)} />

                </FlexRow>
            </FlexColumn>        

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