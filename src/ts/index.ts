'use strict';

/**
 * Adicionar evento em elemento
 */

function addEventOnElem(elem: HTMLElement | NodeList | Window, type: string, callback: EventListenerOrEventListenerObject) {
   if (elem instanceof NodeList) {
      for (let i = 0; i < elem.length; i++) {
         (elem[i] as HTMLElement).addEventListener(type, callback);
      }
   } else if (elem === window) {
      window.addEventListener(type, callback);
   } else {
      (elem as HTMLElement).addEventListener(type, callback);
   }
}

/**
 * Alternar a barra de navegação
 */

const navbar = document.querySelector("[data-navbar]") as unknown as HTMLElement;
const navTogglers = document.querySelectorAll("[data-nav-toggler]") as NodeListOf<HTMLElement>;
const navbarLinks = document.querySelectorAll("[data-nav-link]") as NodeListOf<HTMLElement>;
const overlay = document.querySelector("[data-overlay]") as unknown as HTMLElement;


function toggleNavbar() {
   navbar.classList.toggle("active");
   overlay.classList.toggle("active");
   document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

function closeNavbar() {
   navbar.classList.remove("active");
   overlay.classList.remove("active");
   document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Ativar o cabeçalho e o botão de volta ao topo quando a janela for rolada para baixo 100px
 */

const header = document.querySelector<HTMLElement>("[data-header]") as HTMLElement;
const backTopBtn = document.querySelector<HTMLElement>("[data-back-top-btn]") as HTMLElement;

function activeElemOnScroll() {
   if (window.scrollY > 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
   } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
   }
}

addEventOnElem(window, "scroll", activeElemOnScroll as EventListener);
