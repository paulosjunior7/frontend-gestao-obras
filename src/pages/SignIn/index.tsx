import React , { useCallback , useRef } from 'react';
import { FormHandles } from '@unform/core';

import { Container, Content, Login, Header, Body, Footer , Formulario } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: SignInFormData) => {

        try {
            // formRef.current?.setErrors({});
            // const schema = Yup.object().shape({
            //     email: Yup.string().required('E-mail obrigatório').email('Digite um E-mail válido'),
            //     password: Yup.string().required('Senha obrigatória'),
            // })

            // await schema.validate(data, {
            //     abortEarly: false
            // });

           // signIn(data.email, data.password);

        } catch (err) {
            // if (err.toString().includes('ValidationError')) {
            //     const errors = getValidationsErrors(err);
            //     formRef.current?.setErrors(errors);
            // } else {
            //     const res = err.response ? err.response.data.erros[0] : 'Falha ao gravar! Verifique as informações';
            //     toast.error(`${res}`, { autoClose: 4000 });
            // }
        }
    }, [])

    return (
        <Container>
            <Content>
                <Login>
                    <Header>
                    </Header>
                    <Body>
                        <Formulario ref={formRef} onSubmit={handleSubmit} >
                        <h2>Efetue o Login</h2>
                        <Input name="email" icon={FiMail} placeholder="E-mail" showPlaceHolder={false} style={{ textTransform: 'none' }} />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" showPlaceHolder={false} style={{ textTransform: 'none' }} />
                            <br/>
                            <Button>Entrar</Button>
                        </Formulario>
                    </Body>
                    <Footer>
                        <p>Esqueci minha senha</p>
                    </Footer>
                </Login>
            </Content>
        </Container>
    );
}

export default SignIn;