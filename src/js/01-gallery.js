import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const galleryItem = galleryItems.map((image) => 
`<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</div>`
).join("");

galleryRef.insertAdjacentHTML('beforeend', galleryItem);

galleryRef.addEventListener('click', getBigImage);

function getBigImage(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return
    }
    const bigImage = e.target.dataset.source
    console.log(bigImage)
const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${bigImage}">
	`)
  instance.show()

    document.addEventListener("keydown",(e) => {
          if (e.code !== "Escape") {
            return;
          }
          instance.close();
        },
        { once: true }
      );
}