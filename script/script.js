document.addEventListener("DOMContentLoaded", function() {
  const ics = document.getElementById('close-menu');
  const list = document.getElementById('burger-list');
  const burgerIcon = document.getElementById('burger-icon');


  burgerIcon.addEventListener('click', function() {
      list.classList.toggle('hidden');
      ics.classList.remove('hidden');
      burgerIcon.classList.add('hidden');
  });

  ics.addEventListener('click', function() {
    list.classList.toggle('hidden');
    ics.classList.add('hidden');
    burgerIcon.classList.remove('hidden');
});
});