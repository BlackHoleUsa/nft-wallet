import React from 'react';
import './Graph.css';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { Element } from 'components/Element/Element';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';
import { transactionData } from 'Assets/Data';
import LineCharts from './GraphData';


export const Graph = () => {

    return(

        <React.Fragment>

            <FlexRow className="w-100 font-16px font-helvetica justify-content-between 
                align-items-center mb-2 transactions-heading"
            >
                <Element className="text-grey-cc-50 cursor-pointer-sort">
                    Price(30D):
                </Element>
                <Element className="text-black cursor-pointer-sort">
                    1BTC = $7,296.46
                </Element>
            </FlexRow>

            <LineCharts />

            <FlexColumn className="w-100 transactions-container">
                <Element className="text-black font-16px font-helvetica mb-4 d-block">
                    Transactions
                </Element>
                {
                    transactionData.map((item, i) => (
                        <FlexRow className="w-100 align-items-center transactions-container__item pr-4" key={i}>
                            <FlexColumn className="align-items-center justify-content-center mr-4 arrow_item">
                                { item?.icon }
                            </FlexColumn>
                            <FlexColumn className="align-items-start justify-content-start">
                                <Element className="text-black font-16px font-helvetica">
                                    { item?.title }
                                </Element>
                                <Element className="text-grey-cc-70 font-14px font-helvetica">
                                    { item?.date }
                                </Element>
                            </FlexColumn>
                            <Element className="text-black font-16px font-helvetica ml-auto">
                                { item?.rate }
                            </Element>
                        </FlexRow>            
                    ))
                }
            
            </FlexColumn>

        </React.Fragment>

    );

}