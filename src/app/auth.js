(function() {

	const authBtn = document.querySelector('form.auth input[type="submit"]');

	authBtn.addEventListener('click', (e) => {

		e.preventDefault();

		const loginEmailField = document.querySelector('#email');
		const passwordField = document.querySelector('#password');
		
		if(loginEmailField.value == auth.user.email && passwordField.value == auth.user.password) {
			document.location.href = 'tasks.html';
		} else {
			document.querySelector('#message').innerHTML = 'Заполните поля верными данными';
		} 
	});

}(document));