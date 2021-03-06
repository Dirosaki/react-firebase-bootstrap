import React, { useState, useEffect } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import EventoCard from '../../components/evento-card';

function Home({match}) {

    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    let listaEventos = [];
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {

        if(match.params.parametro){
            firebase.firestore().collection('eventos').where('usuario','==',usuarioEmail).get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0){
                        listaEventos.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    }
                });
                setEventos(listaEventos);
            });
        }else {
            firebase.firestore().collection('eventos').get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0){
                        listaEventos.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    }
                });
                setEventos(listaEventos);
            });
        }

        
    });

    return(
        <>
        <Navbar/>

            <div className='row py-4 px-5'>
                <h3 className='mx-auto mb-4'>Evento Publicados</h3>
            <input  onChange={(e) => setPesquisa(e.target.value)} type='text' className='form-control text-center' placeholder='Pesquisar evento pelo titulo...'/>
            </div>
            <div className='row p-4'>

            {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
            </div>
        </>
    );
}

export default Home;

