import React from 'react';
import Modal from 'react-modal';
import Logo from '../../assets/logo.svg';

import { ModalStyles } from './styles';
import { Nav } from '../Nav';
import { MdClose } from 'react-icons/md';

export const ModalMenu = ({ showModal, handleShowModal }) => {
    return (
        <>
            <ModalStyles />
            <Modal
                isOpen={showModal}
                className='ModalMenu'
                onRequestClose={handleShowModal}
                overlayClassName='OverlayMenu'
                ariaHideApp={false}
                aria={{
                    labelledby: 'Heading',
                    describedby: 'Main menu of the site'
                }}
                contentLabel='Main menu of the site'
            >
                <MdClose size='40' className='closeButtonMenu' onClick={handleShowModal} />
                <img src={Logo} alt='Logo Pokemon' />
                <Nav showModal={showModal} closeModal={handleShowModal} />
            </Modal>
        </>
    );
}
