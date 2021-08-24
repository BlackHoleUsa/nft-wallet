import React, { useState } from 'react';
import './Dashboard.css';

import { Row, Col } from 'react-bootstrap';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';
import { Element } from 'components/Element/Element';
import { BsBell } from 'react-icons/bs';
import { Images } from 'Assets/Images';
import { ActionButton } from 'components/ActionButton/ActionButton';

const Dashboard = () => {

    const [sendMenu, setSendMenu] = useState(false);
    const [receiveMenu, setReceiveMenu] = useState(false);

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
                        <BsBell className="cursor-pointer-sort text-orange font-28px" />
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

            

        </FlexColumn>

    );

}

export default Dashboard;