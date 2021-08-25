import React, { useState } from 'react'

import { Element } from 'components/Element/Element';
import { FlexRow } from 'components/FlexRow/FlexRow';

import QRCode from "react-qr-code";
import { GoCheck, BiShareAlt } from 'react-icons/all';
import { ActionButton } from 'components/ActionButton/ActionButton';
import { InputField } from 'components/InputField/InputField';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';

export const SendPopup = () => {

    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState(0.00);

    return(

        <React.Fragment>
            
            <InputField labelText="Send To" placeholder="Address" onChange={(val) => setAddress(val)}
                type="text" value={address} name={address} className="mb-3 px-4 mt-2" showIcons={true} />

            <InputField labelText="Amount" placeholder="0.00" onChange={(val) => setAmount(val)}
                type="number" value={amount} name={amount} className="px-4" />
                
            <Element className="w-100 px-4 text-black mb-4">
                <span className="font-sf-regular font-12px d-inline-block mr-2 opacity-3">USD:</span>
                <span className="font-sf-bold font-12px">$0.00</span>
            </Element>    

            <Element className="px-4 w-100">
                <FlexColumn className="w-100 py-4 background-primary align-items-center justify-content-center mb-4 br-10px">
                    <FlexRow className="mb-3 w-auto align-items-center">
                        <span className="font-sf-medium font-14px text-black mr-2">Transaction Fee</span>
                        <span className="font-sf-regular font-12px mr-2 text-black">0 BTC</span>
                        <span className="font-sf-regular font-12px text-black opacity-3">$0.00 USD</span>
                    </FlexRow>
                    <FlexRow className="w-auto align-items-center">
                        <span className="font-sf-medium font-14px text-green mr-2">Remaining Balance</span>
                        <span className="font-sf-regular font-12px mr-2 text-black">0 BTC</span>
                        <span className="font-sf-regular font-12px text-black opacity-3">$0.00 USD</span>
                    </FlexRow>
                </FlexColumn>
            </Element>

            <ActionButton 
                title="Send" bgColor="var(--orange)" uppercase={true}
                action={true} color="text-white" onClick={() => alert('click')} 
            />

            <Element className="mt-3 w-100"></Element>

        </React.Fragment>

    );

}