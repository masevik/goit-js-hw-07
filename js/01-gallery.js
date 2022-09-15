import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markup = createMarkup();

function createMarkup() {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  });
}

galleryRef.insertAdjacentHTML('beforeend', markup.join(' '));

galleryRef.addEventListener('click', onShowModal);

function onShowModal(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(`
  <img src='${event.target.dataset.source}' width="1280" height=100%>
`);

  instance.show();
}
