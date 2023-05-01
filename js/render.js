export default class Render {
  constructor(props, lang) {
    this.container = document.body;
    this.props = props;
    this.lang = lang;

    this.init();
  }

  init() {
    const wrapper = Render.createWrapper('container');
    wrapper.insertAdjacentElement('afterbegin', Render.createDisplay());
    wrapper.insertAdjacentElement('beforeend', Render.createKeyboard(this.props, this.lang));

    this.container.insertAdjacentElement('afterbegin', wrapper);
  }

  static createWrapper(className) {
    const div = document.createElement('div');

    if (className) {
      div.classList = className;
    }

    return div;
  }

  static createDisplay() {
    const displayWrapper = Render.createWrapper();
    const textarea = document.createElement('textarea');
    textarea.classList.add('display');
    displayWrapper.insertAdjacentElement('afterbegin', textarea);

    return displayWrapper;
  }

  static createKeyboard(props, lang) {
    const keyboardWrapper = Render.createWrapper('keyboard');
    props.forEach(((item) => {
      const el = Render.createButton(item, lang);

      keyboardWrapper.insertAdjacentElement('beforeend', el);
    }));

    return keyboardWrapper;
  }

  static createButton(props, lang) {
    const el = document.createElement('button');
    el.type = 'button';
    el.classList.add('btn');
    el.innerHTML = `<span>${Array.isArray(props.symbol) ? props.symbol[lang] : props.symbol}</span>`;
    el.dataset.active = Array.isArray(props.symbol) ? props.symbol[lang] : props.symbol;
    el.dataset.code = props.code ? props.code : '';

    if (props.altSymbol) {
      el.innerHTML += `<span class='btn__alt'>${props.altSymbol}</span>`;
    }

    if (props.className) {
      el.classList += ` ${props.className}`;
    }

    return el;
  }
}
