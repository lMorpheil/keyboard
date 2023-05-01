export default class Handler {
  constructor(data) {
    this.data = data;
    this.display = document.querySelector('.display');
    this.keyboard = document.querySelector('.keyboard');
    this.caps = false;
    this.init();
  }

  init() {
    this.handlerClick();
    this.handlerKey();
  }

  handlerClick() {
    this.keyboard.addEventListener('mousedown', (ev) => {
      const target = ev.target.closest('.btn');

      if (!target) {
        return;
      }

      this.push(target);

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
        this.caps = !this.caps;
        target.classList.toggle('btn_color_active');
        this.keyboard.classList.toggle('active');
        return;
      }

      if (target.dataset.active === 'del') {
        const cursorPosition = this.display.selectionStart;
        this.display.innerHTML = this.display.innerHTML.slice(0, cursorPosition)
            + this.display.innerHTML.slice(cursorPosition + 1);
        this.display.focus();
        this.display.selectionStart = cursorPosition;
        return;
      }

      if (
        target.dataset.active === 'shift'
          || target.dataset.active === 'ctrl'
          || target.dataset.active === 'win' || target.dataset.active === 'alt') {
        if (target.dataset.active === 'shift') {
          this.keyboard.classList.add('active');

          target.addEventListener('mouseup', () => {
            this.keyboard.classList.remove('active');
          });
        }
        return;
      }

      if (
        target.dataset.active === 'up'
          || target.dataset.active === 'down'
          || target.dataset.active === 'right' || target.dataset.active === 'left') {
        if (target.dataset.active === 'up') {
          this.display.innerHTML += '▲';
        } else if (target.dataset.active === 'down') {
          this.display.innerHTML += '▼';
        } else {
          this.display.innerHTML += target.dataset.active === 'right' ? '►' : '◄';
        }
        return;
      }

      this.display.innerHTML += this.caps
        ? target.dataset.active.toUpperCase() : target.dataset.active;
    });
  }

  handlerKey() {
    document.addEventListener('keydown', (ev) => {
      ev.preventDefault();
      const key = this.keyboard.querySelector(`[data-code='${ev.code}']`);

      this.push(key);

      if (key.dataset.active === 'backspace') {
        this.display.innerHTML = this.display.innerHTML.slice(0, -1);
        return;
      }

      if (key.dataset.active === 'enter') {
        this.display.innerHTML += '\n';
        return;
      }

      if (key.dataset.active === 'tab') {
        this.display.innerHTML += '\t';
        return;
      }

      if (key.dataset.active === 'caps lock') {
        this.caps = !this.caps;
        if (this.keyboard.classList.contains('active')) {
          this.keyboard.classList.remove('active');
        } else {
          this.keyboard.classList.add('active');
        }
        key.classList.toggle('btn_color_active');

        return;
      }

      if (key.dataset.active === 'del') {
        const cursorPosition = this.display.selectionStart;
        this.display.innerHTML = this.display.innerHTML.slice(0, cursorPosition)
            + this.display.innerHTML.slice(cursorPosition + 1);
        this.display.focus();
        this.display.selectionStart = cursorPosition;
        return;
      }

      if (key.dataset.active === 'shift' || key.dataset.active === 'ctrl' || key.dataset.active === 'win' || key.dataset.active === 'alt') {
        if (key.dataset.active === 'shift') {
          this.keyboard.classList.add('active');

          document.addEventListener('keyup', () => {
            if (key.dataset.active === 'shift') {
              this.keyboard.classList.remove('active');
            }
          });
        }
        return;
      }

      if (key.dataset.active === 'up' || key.dataset.active === 'down' || key.dataset.active === 'right' || key.dataset.active === 'left') {
        if (key.dataset.active === 'up') {
          this.display.innerHTML += '▲';
        } else if (key.dataset.active === 'down') {
          this.display.innerHTML += '▼';
        } else {
          this.display.innerHTML += key.dataset.active === 'right' ? '►' : '◄';
        }
        return;
      }

      this.display.innerHTML += key.dataset.active;
    });
  }

  push(target) {
    target.classList.add('active');
    this.keyboard.addEventListener('mouseup', () => {
      target.classList.remove(('active'));
    });
    document.addEventListener('keyup', () => {
      target.classList.remove(('active'));
    });
  }
}
