'use strict';

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModalWindow = e => {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModalWindow = e => {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

btnsOpenModal.forEach(button => {
  button.addEventListener('click', openModalWindow);
});

btnCloseModal.addEventListener('click', closeModalWindow);
overlayEl.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', e => {
  if (e.code === 'Escape' && !modalEl.classList.contains('hidden'))
    closeModalWindow(e);
});
