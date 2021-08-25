import React, { useState } from 'react';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';

export const CoinListItem = (props) => {

    const { index, item } = props;

    const [active, setActive] = useState(1);

    const clickItem = () => {

    }

    return(

        <FlexColumn className={`
            w-100 py-3 mb-3 br-10px px-2
            py-2 mb-3 ${ active === index ? 'background-primary' : 'bg-white' }
        `}>
        
            <FlexRow className={`w-100 align-items-center 
                justify-content-between font-helvetica`}
            >
                <Header src={item?.img} index={index} />
            </FlexRow>
        
            <FlexRow className={`w-100 align-items-center 
                justify-content-between font-helvetica`}
           >
            <FlexColumn className="mt-1 coin-item-width align-items-center justify-content-center">
                <span className={`
                    font-18px ${ index === 1 ? 'text-grey-cc-70' : index === 2 ? 'text-orange' : 'text-blue' }
                `}>
                    {item.title}
                </span>
                <span className="font-14px text-lightBlack mt-1">{item.subTitle}</span>
            </FlexColumn>
            <span className="font-16px text-lightBlack coin-item-width text-center">{item?.price}</span>
            <span className="font-16px text-grey-cc-70 coin-item-width text-center">{item?.hChange}</span>
            <span className="font-16px text-green coin-item-width text-center">{item?.balance}</span>
            <span className="font-16px text-lightBlack coin-item-width text-center">{item?.value}</span>
            <span className="font-16px text-lightBlack coin-item-width text-center">{item?.portfolio}</span>

            </FlexRow>
        
        </FlexColumn>

    );

}

const Header = ({ src, index }) => {

    const data = [src, 'PRICE', '24H CHANGE', 'YOUR BALANCE', 'VALUE', 'PORTFOLIO %'];

    return data?.map((text, i) => (
        i === 0 ? <span className="coin-item-width text-center">
            <img alt="coin-logo" src={text} width={ index < 2 ? '35px' : '50px' } />
        </span> :
        <span key={i} className="font-helvetica font-12px text-uppercase text-grey-cc-80 text-center coin-item-width">
            { text }
        </span>
    ))
}