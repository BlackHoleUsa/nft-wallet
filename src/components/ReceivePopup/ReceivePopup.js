import React from 'react'

import { Element } from 'components/Element/Element';
import { FlexRow } from 'components/FlexRow/FlexRow';

import QRCode from "react-qr-code";
import { GoCheck, BiShareAlt } from 'react-icons/all';

export const ReceivePopup = () => {

    return(

        <React.Fragment>
            <Element style={{ margin: '25px 0px 46px 0px' }}>   
                <QRCode value="address" size={125} />
            </Element>
            <Element className="font-14px text-black font-sf-regular" style={{ margin: '0px 0px 55px 0px' }}>
                Your BCH Address
            </Element>
            <FlexRow className="w-100 align-items-center justify-content-center 
                font-14px text-green font-sf-regular mb-4 cursor-pointer-sort"
            >
                <GoCheck className="mr-1 font-16px" />
                <span>
                    Copied
                </span>
            </FlexRow>
            <button className="text-white font-14px font-sf-regular border-0 rounded mb-4" 
                style={{
                    width: '109px',
                    height: '35px',
                    background: 'var(--green) 0% 0% no-repeat padding-box',
                    opacity: 1,
                }}
            >
                <BiShareAlt className="mr-1 mb-1" />
                Share
            </button>
        </React.Fragment>

    );

}