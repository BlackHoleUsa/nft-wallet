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
            w-100 py-3 mb-3 px-5 br-10px
            py-2 mb-3 px-5 ${ active === index ? 'background-primary' : 'bg-white' }
        `}>
        
            <FlexRow className={`w-100 align-items-center 
                justify-content-between font-helvetica`}
            >
                <Header src={item?.img} index={index} />
            </FlexRow>
        
            <FlexRow className={`w-100 align-items-center 
                justify-content-between font-helvetica`}
           >
            <FlexColumn className="mt-1 text-width">
                <span className={`
                    font-18px ${ index === 1 ? 'text-grey-cc-70' : index === 2 ? 'text-orange' : 'text-blue' }
                `}>
                    {item.title}
                </span>
                <span className="font-14px text-lightBlack mt-1">{item.subTitle}</span>
            </FlexColumn>
            <span className="font-16px text-lightBlack">{item?.price}</span>
            <span className="font-16px text-grey-cc-70">{item?.hChange}</span>
            <span className="font-16px text-green">{item?.balance}</span>
            <span className="font-16px text-lightBlack">{item?.value}</span>
            <span className="font-16px text-lightBlack">{item?.portfolio}</span>

            </FlexRow>
        
        </FlexColumn>

    );

}

const Header = ({ src, index }) => {

    const data = [src, 'PRICE', '24H CHANGE', 'YOUR BALANCE', 'VALUE', 'PORTFOLIO %'];

    return data?.map((text, i) => (
        i === 0 ? <img alt="coin-logo" src={text} width={ index < 2 ? '35px' : '50px' } /> :
        <span key={i} className="font-helvetica font-12px text-uppercase text-grey-cc-80 text-center">
            { text }
        </span>
    ))
}