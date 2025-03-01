/* -------------------------------------------------------------------------------- */
/* DOM: CAPTURADOR DE CLICK EN EL DOM --------------------------------------------- */
/* -------------------------------------------------------------------------------- */
hacerClic = document.getElementById("contenedor");
hacerClic.addEventListener('click', function (event){
	id = event.target.getAttribute("id");
	// Mensaje: Correcto
	if (id === "mensajeCorrecto") {
		event.preventDefault();
		swal({
			title: "Es Correcto!",
			text: "Los Datos se han enviado a la Base de Datos",
			icon: "success",
			button: "Aceptar",
		})
	}
	else if (id === "submit_contact") {
		validarContac();
	}
});

// 	// Mensaje: Incorrecto
// 	else if (id === "mensajeIncorrecto") {
// 		event.preventDefault();
// 		swal({
// 			title: "Es Incorrecto!",
// 			text: "Revise los campos del Formulario",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 	}
// 	// Mensaje: Advertencia
// 	else if (id === "mensajeAdvertencia-nav" || id === "mensajeAdvertencia-icon") {
// 		swal({
//             title: "Está seguro de eliminar el registro",
//             text: "Si elimina el registro, ya no podrá ser recuperado de la memoria!",
//             icon: "warning",
//             buttons: [true, "Aceptar"],
//             dangerMode: true,
//         })
//         .then((willDelete) => {
//             if (willDelete) {
//                 swal("El registro ha sido eliminado!", {
//                     icon: "success",
//                 });
//                 tabla.deleteRow(i);
//             } else {
//                 swal("El registro se ha convervado");
//             }
//         });
// 	}
// 	// Validar Contacto
// 	else if (id === "submit-contac") {
// 		validarContac();
// 	}
// 	// Cancelar Envío Contacto
// 	else if (id === "cancelar-contac") {
// 		cancelarContac();
// 	}
// 	// Validar Login
// 	else if (id === "submit-login") {
// 		validarLogin();
// 	}
// 	// Cancelar Envío Login
// 	else if (id === "cancelar-login") {
// 		cancelarLogin();
// 	}
// 	// Validar Registro
// 	else if (id === "submit-register") {
// 		validarRegister();
// 	}
// 	// Cancelar Envío Registro
// 	else if (id === "cancelar-register") {
// 		cancelarRegister();
// 	}
// 	// Validar Olvido de Contraseña
// 	else if (id === "submit-olvido") {
// 		validarOlvido();
// 	}
// 	// Cancelar Olvido de Contraseña
// 	else if (id === "cancelar-olvido") {
// 		cancelarOlvido();
// 	}
// 	// Cargar pdf
// 	else if (id === "submit-pdf") {
// 		generarPdf();
// 	}
// });
// // Formulario de Contacto: Validar Datos y Enviar
// function validarContac(){
// 	// Captura de Datos
// 	nombres = document.getElementById('nombres').value;
// 	apellidos = document.getElementById('apellidos').value;
// 	correo = document.getElementById('correo-cont').value;
// 	asunto = document.getElementById('asunto').value;
// 	mensaje = document.getElementById('mensaje').value;
// 	// Expresión Regular de correo electrónico
// 	let patron_correo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
// 	// Expresión Regular de Texto
// 	let patron_texto = /^[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]+$/;
// 	// Validación de nombres
// 	if (nombres === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Nombres",
// 			text: "Los Nombres NO pueden estar vacíos",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('nombres').focus();
// 		});
// 	}
// 	else if (!patron_texto.test(nombres)){
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Nombres",
// 			text: "Los Nombres NO pueden contener números o caracteres especiales",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('nombres').focus();
// 		});
// 	}
// 	else if (nombres.length < 2 || nombres.length > 50) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Nombres",
// 			text: "Los Nombres deben contener entre 2 y 50 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('nombres').focus();
// 		});
// 	}
// 	// Validación de Apellidos
// 	else if (apellidos === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Apellidos",
// 			text: "Los Apellidos NO pueden estar vacíos",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('apellidos').focus();
// 		});
// 	}
// 	else if (!patron_texto.test(apellidos)){
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Apellidos",
// 			text: "Los Apellidos NO pueden contener números o caracteres especiales",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('apellidos').focus();
// 		});
// 	}
// 	else if (apellidos.length < 2 || apellidos.length > 50) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Apellidos",
// 			text: "Los Apelllidos deben contener entre 2 y 50 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('apellidos').focus();
// 		});
// 	}
// 	// Validación de Correo
// 	else if (correo === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Correo",
// 			text: "El Correo NO puede estar vacío",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo-cont').focus();
// 		});
// 	}
// 	else if (!patron_correo.test(correo)) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Correo",
// 			text: "El Correo NO es un correo electrónico válido",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo-cont').focus();
// 		});
// 	}
// 	// Validación Asunto
// 	else if (asunto === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Asunto",
// 			text: "El Asunto NO puede estar vacío",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('asunto').focus();
// 		});
// 	}
// 	else if (!patron_texto.test(asunto)) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Asunto",
// 			text: "El Asunto NO puede contener números o caracteres especiales",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('asunto').focus();
// 		});
// 	}
// 	else if (asunto.length < 2 || asunto.length > 50) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Asunto",
// 			text: "El Asunto debe contener entre 2 y 50 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('asunto').focus();
// 		});
// 	}
// 	// Validación Mensaje
// 	else if (mensaje === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Mensaje",
// 			text: "El Mensaje NO puede estar vacío",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('mensaje').focus();
// 		});
// 	}
// 	else if (mensaje.length < 50 || mensaje.length > 300) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Mensaje",
// 			text: "El Mensaje debe contener entre 50 y 300 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('mensaje').focus();
// 		});
// 	}
// 	// Se envía el mensaje
// 	else {
// 		event.preventDefault();
// 		swal({
// 			title: "Mensaje Enviado!",
// 			text: "El mensaje se ha enviado correctamente. En menos de 24 horas el Administrador se comunicará con Usted por medio de su Correo Electrónico",
// 			icon: "success",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.formContact.submit();
// 		});
// 	}
// }
// // Formulario de Contacto: Cancelar
// function cancelarContac(){
// 	event.preventDefault();
// 	swal({
// 		title: "Cancelación de Mensaje!",
// 		text: "No se ha guardado ningún dato",
// 		icon: "error",
// 		button: "Aceptar",
// 	})
// 	.then((value) => {
// 		document.formContact.reset();
// 		window.location = '#contactenos';
// 	});
// }
// // Formulario de Registro: Validar Datos y Enviar
// function validarRegister(){
// 	// Captura de Datos
// 	nombres = document.getElementById('nombres-reg').value;
// 	apellidos = document.getElementById('apellidos-reg').value;
// 	correo = document.getElementById('correo-reg').value;
// 	pass = document.getElementById('pass-reg').value;
// 	confirm = document.getElementById('conf-pass-reg').value;
// 	// Expresión Regular de correo electrónico
// 	let patron_correo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
// 	// Expresión Regular de Texto
// 	let patron_texto = /^[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]+$/;
// 	// Validación de nombres
// 	if (nombres === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Nombres",
// 			text: "Los Nombres NO pueden estar vacíos",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('nombres-reg').focus();
// 		});
// 	}
// 	else if (!patron_texto.test(nombres)){
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Nombres",
// 			text: "Los Nombres NO pueden contener números o caracteres especiales",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('nombres-reg').focus();
// 		});
// 	}
// 	else if (nombres.length < 2 || nombres.length > 50) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Nombres",
// 			text: "Los Nombres deben contener entre 2 y 50 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('nombres-reg').focus();
// 		});
// 	}
// 	// Validación de Apellidos
// 	else if (apellidos === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Apellidos",
// 			text: "Los Apellidos NO pueden estar vacíos",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('apellidos-reg').focus();
// 		});
// 	}
// 	else if (!patron_texto.test(apellidos)){
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Apellidos",
// 			text: "Los Apellidos NO pueden contener números o caracteres especiales",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('apellidos-reg').focus();
// 		});
// 	}
// 	else if (apellidos.length < 2 || apellidos.length > 50) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Apellidos",
// 			text: "Los Apelllidos deben contener entre 2 y 50 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('apellidos-reg').focus();
// 		});
// 	}
// 	// Validación de Correo
// 	else if (correo === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Correo",
// 			text: "El Correo NO puede estar vacío",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo-reg').focus();
// 		});
// 	}
// 	else if (!patron_correo.test(correo)) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Correo",
// 			text: "El Correo NO es un correo electrónico válido",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo-reg').focus();
// 		});
// 	}
// 	// Validación de contraseña
// 	else if (pass === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Contraseña",
// 			text: "La Contraseña NO puede estar vacía",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('pass-reg').focus();
// 		});
// 	}
// 	else if (pass.length < 5 || pass.length > 8) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Contraseña",
// 			text: "La Contraseña debe tener entre 5 y 8 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('pass-reg').focus();
// 		});
// 	}
// 	// Validación de confirmación
// 	else if (confirm === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Confirmación Contraseña",
// 			text: "La Confirmación de Contraseña NO puede estar vacía",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('conf-pass-reg').focus();
// 		});
// 	}
// 	else if (confirm.length < 5 || confirm.length > 8) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Confirmación Contraseña",
// 			text: "La Confirmañción de Contraseña debe tener entre 5 y 8 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('conf-pass-reg').focus();
// 		});
// 	}
// 	// Comprobación de igualdad entre contraseñas
// 	else if (pass !== confirm) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique los campos Contraseña y Confirmación",
// 			text: "La Contraseña y la Confirmación debe ser iguales",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('pass-reg').value = "";
// 			document.getElementById('conf-pass-reg').value = "";
// 			document.getElementById('pass-reg').focus();
// 		});
// 	}
// 	// Se crea el Usuario
// 	else {
// 		event.preventDefault();
// 		swal({
// 			title: "Usuario Creado correctamente!",
// 			text: "El Administrador se comunicará con Usted por medio de su Correo Electrónico para asignarle el ROL",
// 			icon: "success",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			// document.formRegister.submit();
// 			window.location = 'login.html';
// 		});
// 	}
// }
// // Formulario de Registro: Cancelar
// function cancelarRegister(){
// 	event.preventDefault();
// 	swal({
// 		title: "Se canceló el Registro!",
// 		text: "No se ha guardado ningún dato",
// 		icon: "error",
// 		button: "Aceptar",
// 	})
// 	.then((value) => {
// 		document.formRegister.reset();
// 		window.location = 'login.html';
// 	});
// }
// // Formulario de Inicio de Sesión: Validar Datos y Enviar
// function validarLogin(){
// 	// Captura de Datos
// 	correo  = document.getElementById('correo').value;
// 	pass  = document.getElementById('pass').value;
// 	// Expresión Regular de correo electrónico
// 	let correoPatron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
// 	// Validación del correo electrónico
// 	if (correo === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Correo",
// 			text: "El Correo NO puede estar vacío",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo').focus();
// 		});
// 	} else if (!correoPatron.test(correo)) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Correo",
// 			text: "El Correo NO es un correo electrónico válido",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo').focus();
// 		});
// 	}
// 	// Validación de contraseña
// 	else if (pass === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Contraseña",
// 			text: "La Contraseña NO puede estar vacía",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('pass').focus();
// 		});
// 	}
// 	else if (pass.length < 5 || pass.length > 8) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Contraseña",
// 			text: "La Contraseña debe tener entre 5 y 8 caracteres",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('pass').focus();
// 		});
// 	}
// 	// Validación de Datos (Se sugiere hacerlo por AJAX o NodeJS)
// 	else if (correo == "admin@correo.com" && pass == 12345) {
// 		event.preventDefault();
// 		swal({
// 			title: "Datos Correctos!",
// 			text: "Superó la validación Front-End: HTML, CSS y JS. Ahora falta la validación Back-End",
// 			icon: "success",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			// document.formLogin.submit();
// 			window.location = '../admin.html';
// 		});
// 	}
// 	// Si no coinciden con los Datos
// 	else {
// 		event.preventDefault();
// 		swal({
// 			title: "Datos Incorrectos!",
// 			text: "No ha superado la validación Front-End: HTML, CSS y JS",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo').value = "";
// 			document.getElementById('pass').value = "";
// 			document.getElementById('correo').focus();
// 		});
// 	}
// }
// // Formulario de Inicio de Sesión: Cancelar
// function cancelarLogin(){
// 	event.preventDefault();
// 	swal({
// 		title: "Se canceló el Inicio de Sesión!",
// 		text: "No se ha guardado ningún dato",
// 		icon: "error",
// 		button: "Aceptar",
// 	})
// 	.then((value) => {
// 		document.formLogin.reset();
// 		window.location = 'login.html';
// 	});
// }
// // Formulario de Olvido Contraseña: Validar Datos y Enviar
// function validarOlvido(){
// 	// Captura de Datos
// 	correo = document.getElementById('correo-olv').value;
// 	// Expresión Regular de correo electrónico
// 	let patron_correo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
// 	// Validación de Correo
// 	if (correo === "") {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Correo",
// 			text: "El Correo NO puede estar vacío",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo-olv').focus();
// 		});
// 	}
// 	else if (!patron_correo.test(correo)) {
// 		event.preventDefault();
// 		swal({
// 			title: "Verifique el campo Correo",
// 			text: "El Correo NO es un correo electrónico válido",
// 			icon: "error",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.getElementById('correo-olv').focus();
// 		});
// 	}
// 	// La contraseña se ha restaurado
// 	else {
// 		event.preventDefault();
// 		swal({
// 			title: "Contraseña Restaurada!",
// 			text: "La contraseña ha sido restaurada. Revise su correo electrónico y siga los pasos sugeridos",
// 			icon: "success",
// 			button: "Aceptar",
// 		})
// 		.then((value) => {
// 			document.formForgot.submit();
// 		});
// 	}
// }
// // Formulario de Olvido Contraseña: Cancelar
// function cancelarOlvido(){
// 	event.preventDefault();
// 	swal({
// 		title: "Se canceló la Recuperación de Contraseña!",
// 		text: "No se ha guardado ningún dato",
// 		icon: "error",
// 		button: "Aceptar",
// 	})
// 	.then((value) => {
// 		document.formForgot.reset();
// 		window.location = 'login.html';
// 	});
// }
// // Generar PDF
// function generarPdf() {
//     event.preventDefault();
//     let doc = new jsPDF();
//     doc.setProperties({
//         title: "Report",
//         orientation: 'p',
//         unit: 'mm',
//         format: 'letter'
//     });
//     // Variables pdf
//     cert_apellidos = document.getElementById('pdf-apellidos').value;
//     cert_nombres = document.getElementById('pdf-nombres').value;
//     cert_documento = document.getElementById('pdf-documento').value;
//     // Documento pdf
//     doc.text(80, 20, 'Datos Personales');
//     doc.text(45, 25, '_______________________________');
//     doc.setFontSize(14);
//     doc.text(20, 50, '# de Usuario:          ' + cert_num);
//     doc.text(20, 60, 'Apellidos:                ' + cert_apellidos);
//     doc.text(20, 70, 'Nombres:                ' + cert_nombres);
//     doc.text(20, 80, 'Documento:            ' + cert_documento);
//     // Salida pdf
//     $("#pdf_preview").attr("src", doc.output('datauristring'));
// }

// /* -------------------------------------------------------------------------------- */
// /* DATATABLES: FILTROS EN TABLA --------------------------------------------------- */
// /* -------------------------------------------------------------------------------- */
// $(document).ready(function() {
//     var table = $('#table-data-tables').DataTable( {
//         dom: 'Bfrtip',
//         buttons: [
//         'copy',
//         'csv',
//         'excel',
//         'pdf',
//         {
//             extend: 'print',
//             text: 'Imprimir Todo',
//             exportOptions: {
//                 modifier: {
//                     selected: null
//                 }
//             }
//         }
//         ],
//         select: true,
//         rowReorder: {
//             selector: 'td:nth-child(2)'
//         },
//         responsive: true,
//         language: {
//             search: 'Buscar',
//             zeroRecords: 'No hay registros para mostrar.',
//             emptyTable: 'La tabla está vacia.',
//             info: "Mostrando _START_ de _END_ de _TOTAL_ Registros.",
//             infoFiltered: "(Filtrados de _MAX_ Registros.)",
//             paginate: {
//                 first: 'Primero',
//                 previous: 'Anterior',
//                 next: 'Siguiente',
//                 last: 'Último'
//             }
//         }
//     } );
// } );

// /* -------------------------------------------------------------------------------- */
// /* CANVAS: GRÁFICOS --------------------------------------------------------------- */
// /* -------------------------------------------------------------------------------- */

// window.onload = ejemplo1();
// window.onload = ejemplo2();
// window.onload = ejemplo3();

// function ejemplo1() {
// 	var chart1 = new CanvasJS.Chart("example1", {
// 		exportEnabled: true,
// 		animationEnabled: true,
// 		title: {
// 			text: "State Operating Funds"
// 		},
// 		legend: {
// 			cursor: "pointer",
// 			itemclick: explodePie
// 		},
// 		data: [{
// 			type: "pie",
// 			showInLegend: true,
// 			toolTipContent: "{name}: <strong>{y}%</strong>",
// 			indexLabel: "{name} - {y}%",
// 			dataPoints: [
// 				{ y: 26, name: "School Aid", exploded: true },
// 				{ y: 20, name: "Medical Aid" },
// 				{ y: 5, name: "Debt/Capital" },
// 				{ y: 3, name: "Elected Officials" },
// 				{ y: 7, name: "University" },
// 				{ y: 17, name: "Executive" },
// 				{ y: 22, name: "Other Local Assistance" }
// 			]
// 		}]
// 	});
// 	chart1.render();
// 	function explodePie(e) {
// 		if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
// 			e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
// 		} else {
// 			e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
// 		}
// 		e.chart1.render();
// 	}
// }
// function ejemplo2() {
// 	var chart2 = new CanvasJS.Chart("example2", {
// 		exportEnabled: true,
// 		animationEnabled: true,
// 		theme: "light2", // "light1", "light2", "dark1", "dark2"
// 		title: {
// 			text: "Top Oil Reserves"
// 		},
// 		axisY: {
// 			title: "Reserves(MMbbl)"
// 		},
// 		data: [{
// 			type: "column",
// 			showInLegend: true,
// 			legendMarkerColor: "grey",
// 			legendText: "MMbbl = one million barrels",
// 			dataPoints: [
// 				{ y: 300878, label: "Venezuela" },
// 				{ y: 266455, label: "Saudi" },
// 				{ y: 169709, label: "Canada" },
// 				{ y: 158400, label: "Iran" },
// 				{ y: 142503, label: "Iraq" },
// 				{ y: 101500, label: "Kuwait" },
// 				{ y: 97800, label: "UAE" },
// 				{ y: 80000, label: "Russia" }
// 			]
// 		}]
// 	});
// 	chart2.render();
// }
// function ejemplo3() {
// 	var dataPoints1 = [];
// 	var dataPoints2 = [];

// 	var chart = new CanvasJS.Chart("example3", {
// 		exportEnabled: true,
// 		zoomEnabled: true,
// 		title: {
// 			text: "Share Value of Two Companies"
// 		},
// 		axisX: {
// 			title: "chart updates every 3 secs"
// 		},
// 		axisY: {
// 			prefix: "$"
// 		},
// 		toolTip: {
// 			shared: true
// 		},
// 		legend: {
// 			cursor: "pointer",
// 			verticalAlign: "top",
// 			fontSize: 22,
// 			fontColor: "dimGrey",
// 			itemclick: toggleDataSeries
// 		},
// 		data: [{
// 			type: "line",
// 			xValueType: "dateTime",
// 			yValueFormatString: "$####.00",
// 			xValueFormatString: "hh:mm:ss TT",
// 			showInLegend: true,
// 			name: "Company A",
// 			dataPoints: dataPoints1
// 		},
// 		{
// 			type: "line",
// 			xValueType: "dateTime",
// 			yValueFormatString: "$####.00",
// 			showInLegend: true,
// 			name: "Company B",
// 			dataPoints: dataPoints2
// 		}]
// 	});

// 	function toggleDataSeries(e) {
// 		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// 			e.dataSeries.visible = false;
// 		}
// 		else {
// 			e.dataSeries.visible = true;
// 		}
// 		chart.render();
// 	}

// 	var updateInterval = 3000;
// 	// initial value
// 	var yValue1 = 600;
// 	var yValue2 = 605;

// 	var time = new Date;
// 	// starting at 9.30 am
// 	time.setHours(9);
// 	time.setMinutes(30);
// 	time.setSeconds(00);
// 	time.setMilliseconds(00);

// 	function updateChart(count) {
// 		count = count || 1;
// 		var deltaY1, deltaY2;
// 		for (var i = 0; i < count; i++) {
// 			time.setTime(time.getTime() + updateInterval);
// 			deltaY1 = .5 + Math.random() * (-.5 - .5);
// 			deltaY2 = .5 + Math.random() * (-.5 - .5);

// 			// adding random value and rounding it to two digits.
// 			yValue1 = Math.round((yValue1 + deltaY1) * 100) / 100;
// 			yValue2 = Math.round((yValue2 + deltaY2) * 100) / 100;

// 			// pushing the new values
// 			dataPoints1.push({
// 				x: time.getTime(),
// 				y: yValue1
// 			});
// 			dataPoints2.push({
// 				x: time.getTime(),
// 				y: yValue2
// 			});
// 		}

// 		// updating legend text with  updated with y Value
// 		chart.options.data[0].legendText = " Company A  $" + yValue1;
// 		chart.options.data[1].legendText = " Company B  $" + yValue2;
// 		chart.render();
// 	}
// 	// generates first set of dataPoints
// 	updateChart(100);
// 	setInterval(function () { updateChart() }, updateInterval);
// }