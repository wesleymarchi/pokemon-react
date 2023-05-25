import React from 'react';
import { Link } from '@reach/router';
import { StyleNav, Ul, Item } from './styles';

export const Nav = ({ showModal, closeModal }) => {
    const handleClick = () => {
        if (showModal){
            closeModal();
        }
    }

    return (
        <StyleNav aria-label='Main Menu'>
            <Ul aria-label='Menu'>
                <Item>
                    <Link tabIndex='0' onClick={handleClick} aria-label='Home' to='/'>Home</Link>
                </Item>
                <Item>
                    <Link tabIndex='0' onClick={handleClick} aria-label='Pokemons Gallery' to='/pokedex'>Pokedex</Link>
                </Item>
                <Item>
                    <Link tabIndex='0' onClick={handleClick} aria-label='Legendary Pokemons' to='/legends'>Legends</Link>
                </Item>
                <Item>
                    {/*<Link tabIndex='0' onClick={handleClick} aria-label='Documentation' to='/documentation'>Documentation</Link>*/}
                </Item>
            </Ul>
        </StyleNav>
    );
}
