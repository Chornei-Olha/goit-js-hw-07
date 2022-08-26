import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Используй готовый код из первого задания.

// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
// Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.

// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery.
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».

// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const galleryEl = document.querySelector(".gallery");

const cartMarkup = createPicture(galleryItems);

function createPicture(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", cartMarkup);

new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.7,
  captionsData: "alt",
  captionDelay: 250,
  maxZoom: 5,
  doubleTapZoom: 5,
});
