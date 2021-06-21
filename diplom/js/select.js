const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  loadingText: 'Loading...',
  placeholder: true,
  placeholderValue: null,
});