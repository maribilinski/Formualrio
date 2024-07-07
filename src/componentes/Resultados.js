import React from "react";

const Resultario = (props) => {
    const {firstName, lastName, email, contrasena, confirmarcontra} = props.datos;
    return (
        <div>
            <p>Nombre: {firstName} </p>
            <p>Apellido: {lastName} </p>
            <p>Email: {email} </p>
            <p>Contraseña: {contrasena} </p>
            <p>Confirmar: {confirmarcontra} </p>
        </div>
    );
};