import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onGalleryRefClick);

renderGalleryMarkup(galleryItems, galleryRef);
let instance = null;

function renderGalleryMarkup(arr, listRef) {
  const markup = arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
          </a>
        </li>`
    )
    .join('');
  listRef.innerHTML = markup;
}

function onGalleryRefClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  showModal(event.target);
}

function showModal({ dataset: { source }, alt }) {
  instance = basicLightbox.create(`<img src="${source}" alt="${alt}">`);
  instance.show();

  document.addEventListener('keydown', onKeyDown);
}

function onKeyDown(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onKeyDown);
  }
}
