document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.steps__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.steps__link').forEach(function(tabContent) {
        tabContent.classList.remove('active');
      });

      document.querySelectorAll('.steps__content').forEach(function(tabContent) {
        tabContent.classList.remove('steps-content-active');
      });
      event.currentTarget.classList.add('active');
      document.querySelector(`[data-target="${path}"]`).classList.add('steps-content-active');
    })
  });
});
