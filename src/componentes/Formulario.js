import { react } from "babel-types";
import React from "react";

const Formulario = (props) => {

    return (
        <form>
            <label for='firstName'>Nombre:</label>
            <input type="text" name="firstName"></input>

            <label for='lastName'>Apellido:</label>
            <input type="text" name="lastName"></input>

            <label for='email'>Email:</label>
            <input type="text" name="email"></input>

            <label for='contrasena'>Contraseña:</label>
            <input type="text" name="contrasena"></input>

            <label for='confirmarcontra'>Confirmar Contraseña:</label>
            <input type="text" name="confirmarcontra"></input>
        </form>
    );
};