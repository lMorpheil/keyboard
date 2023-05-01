export default class Handler {
  constructor() {
    this.display = document.querySelector('.display');
    this.keyboard = document.querySelector('.keyboard');
    this.init();
  }

  init() {
    this._handlerClick();
    this._handlerKeyup();
  }

  _handlerClick() {
    let caps = false;
    this.keyboard.addEventListener('click', (ev) => {
      const target = ev.target.closest('.btn');

      if (!target) {
        return;
      }

      this._push(target);

      if (target.dataset.active === 'backspace') {
        this.display.innerHTML = this.display.innerHTML.slice(0, -1);
        return;
      }

      if (target.dataset.active === 'enter') {
        this.display.innerHTML += '\n';
        return;
      }

      if (target.dataset.active === 'tab') {
        this.display.innerHTML += '\t';
        return;
      }

      if (target.dataset.active === 'caps lock') {
        caps = !caps;
        return;
      }

      if (target.dataset.active === 'shift' || target.dataset.active === 'ctrl' || target.dataset.active === 'win' || target.dataset.active === 'alt') {
        return;
      }

      this.display.innerHTML += caps ? target.dataset.active.toUpperCase() : target.dataset.active;
    });
  }

  _handlerKeyup() {

  }

  _push(target) {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    audio.play();
    target.classList.add('active');
    setTimeout(() => {
      target.classList.remove(('active'));
    }, 200);
  }
}
