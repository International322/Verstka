document.addEventListener('DOMContentLoaded', function () {
  var toggleElements = document.querySelectorAll('.footer__title-container');
  var listElements = document.querySelectorAll('.footer__list');

  function toggleList(index) {
    listElements[index].style.display = listElements[index].style.display === 'block' ? 'none' : 'block';
  }

  toggleElements.forEach(function (toggleElement, index) {
    toggleElement.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 600px)').matches) {
        toggleList(index);
      }
    });
  });
});

