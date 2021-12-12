/* Experiment: Routing (Location Resolver)
   window.location.hash

Layout:
- - -

<body id="app">
  <header class="main-header container ...">
  ... ... ...
    <nav>
      <ul class="menu">
        <li class="menu__item">
          <a href="#/tasks/" onclick="locationResolver('/tasks/')" class="current lng-tasks">Задачи</a>
        </li>
        <li class="menu__item">
          <a href="#/solutions/" onclick="locationResolver('/solutions/')" class="lng-solutions">Решения</a>
        </li>
        <li class="menu__item">
          <a href="#/results/" onclick="locationResolver('/results/')" class="lng-results">Результаты</a>
        </li>
		...
		...
      </ul>
    </nav>
...
*/

const app = document.querySelector('#app');
const locationResolver = (location) => {

	switch (location)
	{
	  case "/tasks/":
	    app.innerHTML = '
		<h1>${location}</h1>
		<p>Страница добавления задач</p>
	    ';
	    break;

	  case : "/solutions/":
	    app.innerHTML = '
		<h1>${location}</h1>
		<p>Страница с решениями</p>
	    ';
	    break;

	  case : "/results/":
	    app.innerHTML = '
		<h1>${location}</h1>
		<p>Страница с результатами</p>
	    ';
	    break;

	  //...
	  //...
	  //...	

	  default:
	    app.innerHTML = '
		<h1>${404page}</h1>
		<p>Такой страницы не существует.</p>
	    ';    
	    break;
	}
};