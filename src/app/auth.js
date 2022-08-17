(function() {

	const authBtn = document.querySelector('form.auth input[type="submit"]');

	var getLoginRole = function(storage, value) {
		let users = Object.values(storage);
	
		for (var i = 0; i < users.length; i++) {
			if(Object.values(users[i]).includes(value)) {
				return users[i].role;
			};
		}
	}

	authBtn.addEventListener('click', (e) => {

		e.preventDefault();

		const loginEmailField = document.querySelector('#email');
		const passwordField = document.querySelector('#password');

		let loginRole = getLoginRole(auth, loginEmailField.value);
		let role = Object.keys(auth)[loginRole];
		
		if(role) {
			if(loginEmailField.value == auth[role].email && passwordField.value == auth[role].password) {
				document.cookie = role + '=true;secure;samesite=strict;max-age=3600';
				document.location.href = 'tasks.html';
			} else {
				document.querySelector('#message').innerHTML = 'Заполните поля верными данными';
			}
		} else {
			document.querySelector('#message').innerHTML = 'Для ' + (loginEmailField.value || 'вас') + ' доступ закрыт!';
		}
	});

}(document));