import React from 'react';

import { Container, Content, Profile, Menu } from './styles';
import { MdNotificationsNone, MdApps, MdSettings } from 'react-icons/md';

const Header: React.FC = () => {
    return (
        <Container>
            <Content>
                <div style={{ marginLeft: '290px'}}>
                    <input placeholder="Search..."/>
                </div>
                <div>
                    <Menu>
                        <MdSettings size={'2.4rem'} />
                    </Menu>
                    <Menu>
                        <MdNotificationsNone size={'2.4rem'} />
                    </Menu>
                    <Menu>
                        <MdApps size={'2.4rem'} />
                    </Menu>
                    <Profile>
                        <img
                            src={
                                `https://vercel.com/api/www/avatar/b7bccaef6cff7f87b8e00b96ab3f89dd6e5e1d78?s=204`
                            }
                            alt="..."
                        />

                        <span>
                            <p>Paulo Soares</p>
                            <p>Administrador</p>
                        </span>
                    </Profile>
                </div>

            </Content>
        </Container>
    )
}

export default Header;