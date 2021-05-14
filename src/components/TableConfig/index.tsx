import React, { useState, useRef, ChangeEvent, Dispatch, useEffect, useCallback } from 'react';
import { Container, Head, CloseModalButton } from './styles';
import { useSpring, animated } from 'react-spring';

interface Props {
    campos: any[];
    head: any;
    SetPermitidos: Dispatch<string[]>;
    permitidos: string[];
    showModal: boolean;
    setShowModal: Dispatch<boolean>;
}

const TableConfig: React.FC<Props> = ({ campos, head, permitidos, SetPermitidos, showModal, setShowModal }) => {
    const modalRef = useRef();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name } = event.target;
        const alreadySelected = permitidos.findIndex(item => item === name);

        if (alreadySelected >= 0) {
            const filteredItems = permitidos.filter(item => item !== name);
            const fildsOrdenados = Object.keys(head).filter(item => filteredItems.includes(item));
            SetPermitidos(fildsOrdenados);
        } else {
            const filteredItems = [...permitidos, name];
            const fildsOrdenados = Object.keys(head).filter(item => filteredItems.includes(item));
            SetPermitidos(fildsOrdenados);
        }
    }

    const closeModal = (e: MouseEvent) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );


    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

 

    function handleFechar() {
//        UsePersistedState<string[]>('transportadoras', permitidos.keys[0] )
        //SALVAR
        setShowModal(!showModal)
    }


    return (
        <>
            { showModal ? (
                <Container>
                        <Head >
                            <a>Configuração de Colunas</a>
                            <CloseModalButton
                                onClick={() => handleFechar() }
                            />
                        </Head>
                        <ul>
                            {
                                campos.map(p =>
                                    <li key={p}>
                                        <input
                                            checked={permitidos.includes(p)}
                                            type="checkbox"
                                            name={p}
                                            id={p}
                                            onChange={handleInputChange} />
                                        <label>{head[p]}</label>
                                    </li>
                                )
                            }
                        </ul>
                </Container>
            ) : null
            }
        </>
    )
}

export default TableConfig;