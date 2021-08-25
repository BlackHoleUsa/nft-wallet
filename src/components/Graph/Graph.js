import React from 'react';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { Element } from 'components/Element/Element';

export const Graph = () => {

    return(

        <React.Fragment>

            <FlexRow className="w-100 font-16px font-helvetica justify-content-between align-items-center mb-2">
                <Element className="text-grey-cc-50 cursor-pointer-sort">
                    Price(30D):
                </Element>
                <Element className="text-black cursor-pointer-sort">
                    1BTC = $7,296.46
                </Element>
            </FlexRow>

        </React.Fragment>

    );

}