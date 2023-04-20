const allCards = document.querySelectorAll('.card-holder__content');
 
allCards.forEach(card => {
  const readMoreBtn = document.createElement('p');
  readMoreBtn.className = 'card__read-btn';
  readMoreBtn.innerText = 'Read More';

  const displayedText = document.createElement('p');
  displayedText.classList.add('card__text-content');
  displayedText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quibusdam dolor quisquam iusto a, quidem quae laboriosam nisi itaquevoluptate libero ipsam maiores ipsum vel id doloribus incidunt ametlaudantium.';

  const hiddenText = document.createElement('span');
  hiddenText.classList.add('card__read-more-content');
  hiddenText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi magnam vel corrupti fuga quam, iste sit modi doloremque nemo nam officia perspiciatis in distinctio delectus tempore. Distinctio, expedita repellendus?';

  card.appendChild(displayedText);
  displayedText.appendChild(hiddenText);
  card.appendChild(readMoreBtn);
});

addListenerOnReadMoreBtn();

function addListenerOnReadMoreBtn() {
  const readBtn = document.querySelectorAll('.card__read-btn');
  const hiddenText = document.querySelector('.card__read-more-content')
  readBtn.forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      hiddenText.classList.toggle('card__read-more-content--open');
      button.textContent = 'Read more' ? 'Read less' : 'Read More';
    });
  });
}
