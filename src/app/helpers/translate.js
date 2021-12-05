/*

Layout:
- - -

<h1 class="settings">Настройки</h1>

<select class="change-lang">
	<option value="ru" class="lng-opt-value">Русский</option>
	<option value="en" class="lng-opt-value">Английский</option>
</select>

*/

const select = document.querySelector('select');
const langValidate = ['ru', 'en'];

/* www.domain.ru/#ru<en> */
select.addEventListener('change', changeURLLanguage);

/* перенаправить на url с указанием языка: # + ru/en */
function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#'+lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);

	if(!langValidate.includes(hash)) {
		location.href = window.location.pathname + '#ru ';
		location.reload();
	}

	select.value = hash;

        /*
	** Жесткое решение. Позже отрефакторить
	** <title>
	*/
	document.querySelector('title').innerHTML = langArr['tasks'][hash];
	
	// Поиск
	document.querySelector('.search-field').title = langArr['search'][hash];
	document.querySelector('.search-field').placeholder = langArr['search'][hash];

	// Добавить задачу
	document.querySelector('.task-title').placeholder = langArr['title'][hash];
	document.querySelector('.task-description').placeholder = langArr['description'][hash];
	document.querySelector('.task-date').placeholder = langArr['date'][hash];
	
	for(let key in langArr) {
		let unit = document.querySelector('.lng-' + key);
	
		if(unit) {
			unit.innerHTML = langArr[key][hash];
		}
	}
}

changeLanguage();