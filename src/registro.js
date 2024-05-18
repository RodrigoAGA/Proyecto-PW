document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioregistro");

    formulario.addEventListener("submit", (event) => {
        let esValido = true;

        // Obtener los elementos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const usuario = document.getElementById("usuario").value.trim();
        const contraseña = document.getElementById("contraseña").value.trim();

        // Limpiar mensajes de error
        document.getElementById("errorNombre").style.display = "none";
        document.getElementById("errorCorreo").style.display = "none";
        document.getElementById("errorUsuario").style.display = "none";
        document.getElementById("errorContraseña").style.display = "none";

        // Validar campo Nombre
        if (nombre === "") {
            document.getElementById("errorNombre").style.display = "block";
            esValido = false;
        }

        // Validar campo Correo Electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (correo === "") {
            document.getElementById("errorCorreo").textContent = "El correo electrónico es obligatorio";
            document.getElementById("errorCorreo").style.display = "block";
            esValido = false;
        } else if (!emailRegex.test(correo)) {
            document.getElementById("errorCorreo").textContent = "El correo electrónico no es válido.";
            document.getElementById("errorCorreo").style.display = "block";
            esValido = false;
        }

        // Validar campo Usuario
        if (usuario === "") {
            document.getElementById("errorUsuario").style.display = "block";
            esValido = false;
        }

        // Validar campo Contraseña
        if (contraseña === "") {
            document.getElementById("errorContraseña").style.display = "block";
            esValido = false;
        }

        // Si hay errores, prevenir el envío del formulario
        if (!esValido) {
            event.preventDefault();
        } else {
            // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
            alert("Formulario enviado");
        }
    });

    // Restablecer el formulario y ocultar mensajes de error al hacer clic en el botón "Cancelar"
    document.getElementById("cancelar").addEventListener("click", () => {
        document.getElementById("errorNombre").style.display = "none";
        document.getElementById("errorCorreo").style.display = "none";
        document.getElementById("errorUsuario").style.display = "none";
        document.getElementById("errorContraseña").style.display = "none";
    });
});
