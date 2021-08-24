import { FlexRow } from 'components/FlexRow/FlexRow';
import React from 'react'
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

export const ActionButton = (props) => {

    const { title, bgColor, action, uppercase, color, onClick } = props;

    const iconClass = "";

    return(

        <button className={`
            app-flex-column justify-content-center ${color} ${ uppercase ? 'text-uppercase' : '' }
            align-items-center font-sf-semibold border-0 font-16px
        `} 
            style={{
                width: '162px',
                height: '54px',
                background: `${bgColor} 0% 0% no-repeat padding-box`,
                borderRadius: '5px',
                opacity: 1
            }}
            onClick={onClick}
        >
            <FlexRow className="align-items-center justify-content-center w-100">
                { 
                    action ? <FaLongArrowAltUp />
                    : <FaLongArrowAltDown />
                }

                {title}
            </FlexRow>
        </button>

    )

}