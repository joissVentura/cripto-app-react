import React, { useEffect, useState } from 'react'
import { PostData } from '../../helpers/PostData';
import { useForm } from '../hooks/useForm';

export const Form = () => {

    const [formState, handleInputChange] = useForm({
        username: '',
        pass: ''
    });
    const { username, pass} = formState;
    useEffect(() => {
        console.log('zzz')
    }, [])
    
    useEffect(()=> {

    },[formState])

    const handleSubmit = (e) => {
        e.preventDefault();
        PostData('https://api-rest-cripto.herokuapp.com/api/usuarios/add', {
            username: username,
            pass: pass
        });
    }

    return (
        <form onSubmit = {handleSubmit} className = "Formulario">
            <div className="form-group">
                <input type="text" 
                        name="username" 
                        id="name"
                        className = "form-control"
                        autoComplete = "off"
                        value = { username }
                        onChange = {handleInputChange}
                        placeholder = "Inserta tu usuario mi king "/>
            </div>
            <div className="form-group">
                <input type="password" 
                        name="pass" 
                        id="email"
                        className = "form-control"
                        autoComplete = "off"
                        value = { pass }
                        onChange = {handleInputChange}
                        placeholder = "Inserta tu email mi king "/>
            </div>
            
            <button type = "submit" className = "btn btn-primary">
                Enviar
            </button>
        </form>
    )
}
