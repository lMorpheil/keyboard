export default class Render {
  constructor(props) {
    this.container = document.body;
    this.props = props;

    this.init();
  }

  init() {
    const wrapper = this.createWrapper('container');
    wrapper.insertAdjacentElement('afterbegin', this.createDisplay());
    wrapper.insertAdjacentElement('beforeend', this.createKeyboard(this.props));

    this.container.insertAdjacentElement('afterbegin', wrapper);
  }

  createWrapper(className) {
    const div = document.createElement('div');

    if (className) {
      div.classList = className;
    }

    return div;
  }

  createDisplay() {
    const displayWrapper = this.createWrapper();
    const textarea = document.createElement('textarea');
    textarea.classList.add('display');
    textarea.disabled = true;
    displayWrapper.insertAdjacentElement('afterbegin', textarea);

    return displayWrapper;
  }

  createKeyboard(props) {
    const keyboardWrapper = this.createWrapper('keyboard');

    props.forEach(((item) => {
      const el = this.createButton(item);

      keyboardWrapper.insertAdjacentElement('beforeend', el);
    }));

    return keyboardWrapper;
  }

  createButton(props) {
    const el = document.createElement('button');
    el.type = 'button';
    el.classList.add('btn');
    el.innerHTML = `<span>${props.symbol}</span>`;
    el.dataset.active = props.symbol;

    if (props.altSymbol) {
      el.innerHTML += `<span class='btn__alt'>${props.altSymbol}</span>`;
    }

    if (props.className) {
      el.classList += ` ${props.className}`;
    }

    if (props.data) {
      el.dataset = props.data;
    }

    return el;
  }
}
