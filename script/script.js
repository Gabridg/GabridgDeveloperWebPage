document.addEventListener("DOMContentLoaded", function() {
  const ics = document.getElementById('close-menu');
  const list = document.getElementById('burger-list');
  const burgerIcon = document.getElementById('burger-icon');
  const main = document.getElementById('main');


  burgerIcon.addEventListener('click', function() {
    list.classList.remove('hidden');
    list.classList.add('visible');
    ics.classList.remove('hidden');
    ics.classList.add('visible');
    burgerIcon.classList.add('hidden');
    burgerIcon.classList.remove('visible');
    main.classList.remove('visible');
    main.classList.add('hidden');
});

ics.addEventListener('click', function() {
  list.classList.remove('visible');
  list.classList.add('hidden');
  ics.classList.remove('visible');
  ics.classList.add('hidden');
  burgerIcon.classList.remove('hidden');
  burgerIcon.classList.add('visible');
  main.classList.remove('hidden');
  main.classList.add('visible');
});
});
