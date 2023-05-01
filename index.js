import Render from './js/render.js';
import Hendler from './js/handler.js';

const data = [
  {
    className: 'btn_bg_dark',
    symbol: '`',
    altSymbol: '~',
  },
  {
    symbol: '1',
    altSymbol: '!',
  },
  {
    symbol: '2',
    altSymbol: '@',
  },
  {
    symbol: '3',
    altSymbol: '#',
  },
  {
    symbol: '4',
    altSymbol: '$',
  },
  {
    symbol: '5',
    altSymbol: '%',
  },
  {
    symbol: '6',
    altSymbol: '^',
  },
  {
    symbol: '7',
    altSymbol: '&',
  },
  {
    symbol: '8',
    altSymbol: '*',
  },
  {
    symbol: '9',
    altSymbol: '(',
  },
  {
    symbol: '0',
    altSymbol: ')',
  },
  {
    symbol: '-',
    altSymbol: '_',
  },
  {
    symbol: '=',
    altSymbol: '+',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'backspace',
  },

  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'tab',
  },
  {
    symbol: 'q',
  },
  {
    symbol: 'w',
  },
  {
    symbol: 'e',
  },
  {
    symbol: 'r',
  },
  {
    symbol: 't',
  },
  {
    symbol: 'y',
  },
  {
    symbol: 'u',
  },
  {
    symbol: 'i',
  },
  {
    symbol: 'o',
  },
  {
    symbol: 'p',
  },
  {
    symbol: '[',
  },
  {
    symbol: ']',
  },
  {
    symbol: '\\',
    altSymbol: '/',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'del',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'caps lock',
  },

  {
    symbol: 'a',
  },
  {
    symbol: 's',
  },
  {
    symbol: 'd',
  },
  {
    symbol: 'f',
  },
  {
    symbol: 'g',
  },
  {
    symbol: 'h',
  },
  {
    symbol: 'j',
  },
  {
    symbol: 'k',
  },
  {
    symbol: 'l',
  },
  {
    symbol: ';',
  },
  {
    symbol: '\'',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'enter',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'shift',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    symbol: ';',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'shift',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'ctrl',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'win',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'alt',
  },
  {
    className: 'btn_type_space',
    symbol: ' ',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'alt',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'ctrl',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'shift',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'shift',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'shift',
  },
];

class App {
  constructor() {
    this.render = new Render(data);
    this.handler = new Hendler();
  }
}

window.Project = new App();
