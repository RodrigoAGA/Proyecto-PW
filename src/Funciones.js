// functions.js
export function registro(setState) {
    setState((prevState) => ({
        ...prevState,
        formulario_registro: true,
        contenedor_login_registro: "410px",
        formulario_login: false,
        caja_trasera_registro: "0",
        caja_trasera_login: "1",
        formulario_recuperar_contraseña: false,
    }));
}

export function iniciarSesion(setState) {
    setState((prevState) => ({
        ...prevState,
        formulario_registro: false,
        formulario_recuperar_contraseña: false,
        contenedor_login_registro: "10px",
        formulario_login: true,
        caja_trasera_registro: "1",
        caja_trasera_login: "0",
    }));
}

export function recuperar(setState) {
    setState((prevState) => ({
        ...prevState,
        formulario_recuperar_contraseña: true,
        formulario_registro: false,
        formulario_login: false,
        contenedor_login_registro: "10px",
        caja_trasera_registro: "1",
        caja_trasera_login: "0",
    }));
}
