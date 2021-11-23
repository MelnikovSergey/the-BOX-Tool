/*
Markup:
<li class="header-item-link ru"><button id="ru" class="translate">Русский</button></li>
<li class="header-item-link en"><button id="en" class="translate">Английский</button></li>

<ul class="menu">
  <li class="menu__item"><a href="#" class="current lang" data-key="tasks">Задачи</a></li>
  <li class="menu__item"><a href="#" class="lang" data-key="solutions">Решения</a></li>
  <li class="menu__item"><a href="#" class="lang" data-key="results">Результаты</a></li>
  <li class="menu__item"><a href="#" class="lang" data-key="settings">Настройки</a></li>       
  <li class="menu__item"><a href="#" class="lang" data-key="about">О программе</a></li>
</ul>
*/


// Hello, bullshitcodishe!!! ;)

var arrLang = {
  'ru' : {
      'tasks' : 'Задачи',
      'solutions' : 'Решения',
      'results' : 'Результаты',
      'settings' : 'Настройки',
      'about' : 'О программе'
  },

  'en' : {
      'tasks' : 'Tasks',
      'solutions' : 'Solutions',
      'results' : 'Results',
      'settings' : 'Settings',
      'about' : 'About app'
  }  
}

$(function() {
   
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('data-key')]);
    });  
  }); 
};
