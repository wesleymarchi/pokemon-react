import React, {useState} from "react";
import {Link} from '@reach/router';
import {MdMenu} from "react-icons/all";
import './styles';
import {ModalMenu} from '../ModalMenu';
import {Nav} from '../Nav';
import Logo from '../../assets/logo.svg';
import {BurgerButton, Container, Img, StyledHeader, StyleNav} from "./styles";

export const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (e) => {
        e.persist();
        setShowModal(!showModal);
    }

    return (
        <StyledHeader aria-label='Header'>
            <Container>
                <Link tabIndex='0' to='/' className='logo'>
                    <Img src={Logo} alt='Logo Pokedex' aria-label='Logo Pokemon' />
                </Link>

                <StyleNav>
                    <Nav showModal={showModal} />
                </StyleNav>

                <ModalMenu role='navigation' title='Menu navigation' showModal={showModal} handleShowModal={handleShowModal} />

                <BurgerButton tabIndex='0' title='Main menu' onClick={handleShowModal}>
                    <MdMenu tabIndex='-1' title='Menu icon' size='30' />
                </BurgerButton>
            </Container>
        </StyledHeader>
    );
}