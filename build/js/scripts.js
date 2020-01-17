'use strict';

const modalBtn = document.querySelector('.menu-btn-top');
const modalBtnClose = document.querySelector('.modal-btn-close');
const modalWindow = document.querySelector('.modal-menu-fall');

let openModalWindow = () => {
  modalWindow.classList.add('modal-active');
};

let closeModalWindow = () => {
  modalWindow.classList.remove('modal-active');
};

modalBtn.addEventListener('click', openModalWindow);
modalBtnClose.addEventListener('click', closeModalWindow);