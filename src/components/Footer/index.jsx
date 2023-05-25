import React from "react";
import {Link} from '@reach/router';
import './styles';

export const Footer = () => {
    return (
        <StyledFooter role='contentinfo' aria-label='Footer'>
            <Container>
                <Credits>
                    <p aria-label='CopyRight'>Make with ❤️ for the PokéSpartans team Platzi Master</p>
                </Credits>
                <Nav aria-label='Menu Footer'>
                    <ul aria-label='Menu'>
                        <Item>
                            <Link tabIndex='0' to='/team'>Our Team</Link>
                        </Item>
                    </ul>
                </Nav>
            </Container>
        </StyledFooter>
    );
}