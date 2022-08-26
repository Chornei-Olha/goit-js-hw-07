import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

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

// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента <img> в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

galleryEl.addEventListener("click", onTagsContainerClick);

let instance = null;

function onTagsContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains(`gallery__image`)) {
    // если элемент не содержит данный класс, то выход
    return;
  }

  const currentImgUrl = e.target.dataset.source;
  instance = basicLightbox.create(
    `<img class="modal__image" src="${currentImgUrl}" />`
  );
  instance.show();

  window.addEventListener("keydown", onEscBtnPress);
}

// Добавь закрытие модального окна по нажатию клавиши Escape.
// Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.
// У библиотеки basicLightbox есть метод для программного закрытия модального окна.

function onEscBtnPress(e) {
  const ESC_KEY_CODE = `Escape`;
  const isKeyCode = e.code === ESC_KEY_CODE;

  if (isKeyCode) {
    instance.close();
    window.removeEventListener("keydown", onEscBtnPress);
  }
}
console.log(galleryItems);
