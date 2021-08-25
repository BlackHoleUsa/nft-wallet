import React, { useState } from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';
import { Modal, Spinner } from 'react-bootstrap';
import Web3 from "web3";
import { ethers } from "ethers";

import { useSelector, useDispatch } from 'react-redux';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { FlexColumn } from 'components/FlexColumn/FlexColumn';
import { Images } from 'Assets/Images';

const CustomModal = (props) => {
    
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { show, handleClose, title, children } = props;

    return(

        <Modal 
            show={show} onHide={handleClose} centered 
            backdrop="static" autoFocus={false}
        >
            
            <FlexRow className="w-100 align-items-center justify-content-between top-menu font-sf-medium">
                <span>{title}</span>
                <FaTimes onClick={handleClose} className="cursor-pointer-sort" />
            </FlexRow>

            <FlexColumn className="px-3 w-100 align-items-center justify-content-between">
                <img alt="icon" src={Images.icon} className="mb-3" width="60px" />
                { children }
            </FlexColumn>            

        </Modal>

    );

}
 
export default CustomModal;