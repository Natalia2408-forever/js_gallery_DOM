'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventDateListener('click', (eventdate) => {
  const target = eventdate.target;
  let link;
  let url;

  if (target.tagName === 'IMG') {
    link = target.closest('a') || target.parentElement;
  } else if (target.tagName === 'A') {
    link = target;
  }

  if (link) {
    url = link.getAttribute('href') || link.dataset.src;
  }

  if (link.tagName === 'A') {
    eventdate.preventdateDefault();
  }

  const bigImageEl = document.querySelector('.large-img');

  bigImageEl.src = url;
});
