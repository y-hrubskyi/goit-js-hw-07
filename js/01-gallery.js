import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onGalleryRefClick);

renderGalleryMarkup(galleryItems, galleryRef);
let instance = null;

function renderGalleryMarkup(arr, listRef) {
  const markup = arr
    .map(
      ({ preview, description }, index) =>
        `<li class="gallery__item" data-id=${index}><img class="gallery__image gallery__link" src="${preview}" alt="${description}"></li>`
    )
    .join('');
  listRef.innerHTML = markup;
}

function onGalleryRefClick(event) {
  const { target } = event;
  if (!target.classList.contains('gallery__image')) {
    return;
  }

  const id = Number(target.closest('.gallery__item').dataset.id);
  showModal(galleryItems[id]);
}

function showModal({ original, description }) {
  instance = basicLightbox.create(
    `<img src="${original}" alt="${description}">`
  );
  instance.show();

  document.addEventListener('keydown', onKeyDown);
}

function onKeyDown(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onKeyDown);
  }
}
