const card = document.querySelector('.card-holder__content');
const text = document.querySelector('.card__read-more-content');
const button = document.querySelector('.card__read-btn');

card.addEventListener('click', (event) => {
  const current = event.target;
  const isButton = current.className.includes('card__read-btn');

  if (!isButton) {
    return 0;
  }

  text.className = '.card__read-more-content--open';

  button.textContent = 'Read more' ? 'Read Less' : 'Read more';
});
