import React, { useState, useEffect } from 'react';
import './CoinListItem.css';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';
import { Element } from 'components/Element/Element';


export const CoinListItem = (props) => {

    const { index, item, background } = props;

    const [active, setActive] = useState(1);
    const [slice, setSlice] = useState(6);

    useEffect(() => {
        if(window.screen.width < 551){
            setSlice(1);
        } else{
            setSlice(6);
        }
    }, [window.screen.width]);

    const clickItem = () => {

    }

    const items = [
        { title: 'BALANCE', text: item?.balance },
        { title: '24H CHANGE', text: item?.hChange },
        { title: 'PRICE', text: item?.price },
        { title: 'VALUE', text: item?.value }
    ];

    return(

        <FlexColumn className={`
            w-100 py-3 mb-3 br-10px
            py-2 mb-3 ${ background ? 'background-primary px-3' : (active === index ? 'background-primary px-2' : 'bg-white px-2') }
        `}>
        
            <FlexRow className={`w-100 align-items-center 
                justify-content-between font-helvetica top__title`}
            >
                <Header src={item?.img} index={index} slice={slice} />
                <FlexRow className="w-100 align-items-center justify-content-center remove__title pt-2">
                    <span className={` mr-2
                        font-18px ${ index === 1 ? 'text-grey-cc-70' : index === 2 ? 'text-orange' : 'text-blue' }
                    `}>
                        {item.title}
                    </span>
                    <span className="font-14px text-lightBlack">{item.subTitle}</span>
                </FlexRow>
            </FlexRow>
        
            <FlexRow className={`w-100 align-items-center 
                justify-content-between font-helvetica remove-content`}
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

            <FlexRow className="w-100 flex-wrap align-items-center justify-content-between show-sm-content">
                {
                    items.map((data, i) => (
                        <Element className="flex flex-row w-50 align-items-center justify-content-start mb-3" key={i}>
                            <span key={i} className="font-helvetica font-12px text-uppercase text-grey-cc-80 mr-2">
                                { data.title }
                            </span>
                            <span className="font-16px text-lightBlack">{data?.text}</span>                            
                        </Element>
                    ))
                }
            </FlexRow>
        
        </FlexColumn>

    );

}

const Header = ({ src, index, slice }) => {

    const data = [src, 'PRICE', '24H CHANGE', 'YOUR BALANCE', 'VALUE', 'PORTFOLIO %'];

    return data?.slice(0, slice)?.map((text, i) => (
        i === 0 ? <span className="coin-item-width text-center">
            <img alt="coin-logo" src={text} width={ index < 2 ? '35px' : '50px' } />
        </span> :
        <span key={i} className="font-helvetica font-12px text-uppercase text-grey-cc-80 text-center coin-item-width">
            { text }
        </span>
    ))
}