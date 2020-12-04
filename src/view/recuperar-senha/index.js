import React, { useState } from 'react';
import './recuperar-senha.css';
import Navbar from '../../components/navbar/';
import firebase from '../../config/firebase';
import 'firebase/auth';

function RecuperarSenha() {
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recoverPassword() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link no seu email para você redefinir sua senha! 😉');
        }).catch(erro => {
            setMsg('Verifique se o email está correto!');
        });
    }

    return(
        <>
            <Navbar/>
            <form className='text-center form-login mx-auto mt-5'>
                <h3 className='mb-3 font-weight-bold'>Recuperar Senha</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-control my-2 mt-4 mx-auto' placeholder='Email'/>
                <button onClick={recoverPassword} type='button' className='btn btn-lg btn-block btn-enviar'>Recuperar Senha</button>
                <div className='msg my-4 text-center'>
                    <span>{msg}</span>
                </div>
            </form>
        </>
    );
}

export default RecuperarSenha;