/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import Modal from 'react-modal';
import { ModalStyles, Button, MobileButton } from './styles';
import { PokemonCard } from '../PokemonCard';
import { PokemonCardVertical } from '../PokemonCardVertical';
import { MdClose } from 'react-icons/md';
import { Loading } from '../Loading';
import { ErrorLoading } from '../ErrorLoading';

export const ModalCard = (props) => {
    const {
        data: {
            loading,
            error,
            pokemonsSearch
        },
        showModal,
        handleShowModal
    } = props;

    if (!showModal) {
        return <></>;
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorLoading />;
    }

    const {
        edges = []
    } = pokemonsSearch || {};

    if (edges.length === 0) {
        return <ErrorLoading message={"Sorry, we couldn't find the pokemons"} />;
    }

    const pokemon = edges[0].node;

    const handleModal = (e) => {
        e.persist();
        handleShowModal();
    }

    return (
        <>
            <ModalStyles />
            {
                document.documentElement.clientWidth >= 426
                    ? <Modal
                        isOpen={showModal}
                        className='ModalCard'
                        onRequestClose={handleModal}
                        overlayClassName='OverlayCard'
                        ariaHideApp={false}
                    >
                        <PokemonCard {...pokemon} />
                        <Button tabIndex='0' type='button' onClick={handleModal}>
                            <MdClose size='40' className='closeButtonCard' />
                        </Button>
                    </Modal>
                    : <Modal
                        isOpen={showModal}
                        className='ModalCardMobile'
                        onRequestClose={handleModal}
                        overlayClassName='OverlayCardMobile'
                        ariaHideApp={false}
                    >
                        <PokemonCardVertical {...pokemon} />
                        <MobileButton tabIndex='0' type='button' onClick={handleModal}>
                            <MdClose size='30' className='closeButtonCard' />
                        </MobileButton>
                    </Modal>
            }
        </>
    );
}
