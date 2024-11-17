// Referencias a los elementos
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const helloMessageElement = document.getElementById('helloMessage');
const welcomeMessageElement = document.getElementById('welcomeMessage');

// Cambiar panel activo
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Lógica para los mensajes dinámicos según la hora
const updateMessagesBasedOnTime = () => {
	const currentHour = new Date().getHours();
	let timeGreeting;

	if (currentHour >= 5 && currentHour < 12) {
		timeGreeting = "¡Buenos días!";
	} else if (currentHour >= 12 && currentHour < 18) {
		timeGreeting = "¡Buenas tardes!";
	} else {
		timeGreeting = "¡Buenas noches!";
	}

	// Actualizar los mensajes en la página
	helloMessageElement.textContent = timeGreeting;
	welcomeMessageElement.textContent = timeGreeting;
};


// Llamar a la función al cargar el script
updateMessagesBasedOnTime();
