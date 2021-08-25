import React from 'react';
import './InputField.css';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { Element } from 'components/Element/Element';
import { IoBarcodeSharp } from 'react-icons/all';

export const InputField = (props) => {

    const { labelText, className, type, name, value, onChange, placeholder, showIcons } = props;

    const getRegExp = ['e', 'E', '+', '-', '.'];

    return(

        <FlexColumn className={`position-relative w-100 ${className} input-field`}>
            
            <label className="font-14px font-sf-regular mb-2 d-block">
                {labelText}
            </label>

            <input type={type} name={name} value={value} 
                onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
                className="font-sf-regular"
                onKeyDown={(e) => (type === "number" && getRegExp.includes(e.key)) && e.preventDefault()}
            />

            {
                showIcons &&
                <FlexRow className="w-auto position-absolute align-items-center input-field__content">
                    <Element className="py-1 rounded bg-white font-sf-regular font-11px pr-2 pl-4 mr-2">
                        <span className="opacity-3">Paste</span>
                    </Element>
                    <Element className="rounded bg-white font-sf-regular font-14px px-2 cursor-pointer-sort"
                        style={{ paddingTop: '2px', paddingBottom: '2px' }} 
                    >
                        <IoBarcodeSharp />
                    </Element>
                </FlexRow>
            }

        </FlexColumn>

    );

}