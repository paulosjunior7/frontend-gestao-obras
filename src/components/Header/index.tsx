import React from 'react';

import { Container, Content, Profile } from './styles';
import Navigation from '../../components/Navigation';

const Header: React.FC = () => {
    return (
        <Container>
            <Content>
                <div></div>
                <Profile>
                        <img
                            src={
                                `https://vercel.com/api/www/avatar/b7bccaef6cff7f87b8e00b96ab3f89dd6e5e1d78?s=204`
                            }
                            alt="..."
                        />
                    <div>
                        <p>Administrador</p>
                    </div>
                </Profile>
                <Navigation />
            </Content>
        </Container>
    )
}

export default Header;