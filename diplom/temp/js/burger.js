window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function(el) {
    document.querySelector('#menu').classList.toggle('is-active');

    document.querySelector('#burger-img').classList.toggle('is-active');
    document.querySelector('#burger-close').classList.toggle('is-active');
  });
});
