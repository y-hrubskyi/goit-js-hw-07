import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
renderGalleryMarkup(galleryItems, galleryRef);

const lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function renderGalleryMarkup(arr, listRef) {
  const markup = arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        </li>`
    )
    .join('');
  listRef.innerHTML = markup;
}
