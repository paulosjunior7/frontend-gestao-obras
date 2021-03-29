import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { Menu } from '../../routes/menu';

const Navigation: React.FC = () => {
    const [menuSelecioando, setMenuSelecionado] = useState('');
   
    return (
        <Container>
            <ul>
                { Menu &&
                    Menu.map(p =>
                        <Link to={p.path} style={{ textDecoration: 'none' }}
                            onClick={() => setMenuSelecionado(p.name)}
                            className={menuSelecioando.includes(p.name) ? 'selected' : ''}
                        >
                            <li key={p.id}
                            >
                                {p.name}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </Container>

    );
}

export default Navigation;