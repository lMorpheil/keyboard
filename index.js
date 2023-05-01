// eslint-disable-next-line import/extensions
import Render from './js/render.js';
// eslint-disable-next-line import/extensions
import Hendler from './js/handler.js';

const data = [
  {
    className: 'btn_bg_dark',
    symbol: ['`', 'ё'],
    altSymbol: '~',
    code: 'Backquote',
  },
  {
    symbol: '1',
    altSymbol: '!',
    code: 'Digit1',
  },
  {
    symbol: '2',
    altSymbol: '@',
    code: 'Digit2',
  },
  {
    symbol: '3',
    altSymbol: '#',
    code: 'Digit3',
  },
  {
    symbol: '4',
    altSymbol: '$',
    code: 'Digit4',
  },
  {
    symbol: '5',
    altSymbol: '%',
    code: 'Digit5',
  },
  {
    symbol: '6',
    altSymbol: '^',
    code: 'Digit6',
  },
  {
    symbol: '7',
    altSymbol: '&',
    code: 'Digit7',
  },
  {
    symbol: '8',
    altSymbol: '*',
    code: 'Digit8',
  },
  {
    symbol: '9',
    altSymbol: '(',
    code: 'Digit9',
  },
  {
    symbol: '0',
    altSymbol: ')',
    code: 'Digit0',
  },
  {
    symbol: '-',
    altSymbol: '_',
    code: 'Minus',
  },
  {
    symbol: '=',
    altSymbol: '+',
    code: 'Equal',
  },
  {
    className: 'btn_bg_dark btn_color_grey btn_size_big',
    symbol: 'backspace',
    code: 'Backspace',
  },

  {
    className: 'btn_bg_dark btn_color_grey btn_size_little',
    symbol: 'tab',
    code: 'Tab',
  },
  {
    symbol: ['q', 'й'],
    code: 'KeyQ',
  },
  {
    symbol: ['w', 'ц'],
    code: 'KeyW',
  },
  {
    symbol: ['e', 'у'],
    code: 'KeyE',
  },
  {
    symbol: ['r', 'к'],
    code: 'KeyR',
  },
  {
    symbol: ['t', 'е'],
    code: 'KeyT',
  },
  {
    symbol: ['y', 'н'],
    code: 'KeyY',
  },
  {
    symbol: ['u', 'г'],
    code: 'KeyU',
  },
  {
    symbol: ['i', 'ш'],
    code: 'KeyI',
  },
  {
    symbol: ['o', 'щ'],
    code: 'KeyO',
  },
  {
    symbol: ['p', 'з'],
    code: 'KeyP',
  },
  {
    symbol: ['[', 'х'],
    code: 'KeyQ',
  },
  {
    symbol: [']', 'ъ'],
    code: 'BracketLeft',
  },
  {
    symbol: '\\',
    altSymbol: '/',
    code: 'Backslash',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'del',
    code: 'Delete',
  },
  {
    className: 'btn_bg_dark btn_color_grey btn_size_big',
    symbol: 'caps lock',
    code: 'CapsLock',
  },

  {
    symbol: ['a', 'ф'],
    code: 'KeyA',
  },
  {
    symbol: ['s', 'ы'],
    code: 'KeyS',
  },
  {
    symbol: ['d', 'в'],
    code: 'KeyD',
  },
  {
    symbol: ['f', 'а'],
    code: 'KeyF',
  },
  {
    symbol: ['g', 'п'],
    code: 'KeyG',
  },
  {
    symbol: ['h', 'р'],
    code: 'KeyH',
  },
  {
    symbol: ['j', 'о'],
    code: 'KeyJ',
  },
  {
    symbol: ['k', 'л'],
    code: 'KeyK',
  },
  {
    symbol: ['l', 'д'],
    code: 'KeyL',
  },
  {
    symbol: [';', 'ж'],
    code: 'Semicolon',
  },
  {
    symbol: ['\'', 'э'],
    altSymbol: '"',
    code: 'Quote',
  },
  {
    className: 'btn_bg_dark btn_color_grey btn_size_big',
    symbol: 'enter',
    code: 'Enter',
  },
  {
    className: 'btn_bg_dark btn_color_grey btn_size_big',
    symbol: 'shift',
    code: 'ShiftLeft',
  },
  {
    symbol: ['z', 'я'],
    code: 'KeyZ',
  },
  {
    symbol: ['x', 'ч'],
    code: 'KeyX',
  },
  {
    symbol: ['c', 'с'],
    code: 'KeyC',
  },
  {
    symbol: ['v', 'м'],
    code: 'KeyV',
  },
  {
    symbol: ['b', 'и'],
    code: 'KeyB',
  },
  {
    symbol: ['n', 'т'],
    code: 'KeyN',
  },
  {
    symbol: ['m', 'ь'],
    code: 'KeyM',
  },
  {
    symbol: [',', 'б'],
    code: 'Comma',
  },
  {
    symbol: ['.', 'ю'],
    code: 'Period',
  },
  {
    symbol: ['/', '.'],
    code: 'Slash',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'up',
    code: 'ArrowUp',
  },
  {
    className: 'btn_bg_dark btn_color_grey btn_size_big',
    symbol: 'shift',
    code: 'ShiftRight',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'ctrl',
    code: 'ControlLeft',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'win',
    code: 'MetaLeft',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'alt',
    code: 'AltLeft',
  },
  {
    className: 'btn_type_space',
    symbol: ' ',
    code: 'Space',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'alt',
    code: 'AltRight',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'ctrl',
    code: 'ControlRight',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'left',
    code: 'ArrowLeft',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'down',
    code: 'ArrowDown',
  },
  {
    className: 'btn_bg_dark btn_color_grey',
    symbol: 'right',
    code: 'ArrowRight',
  },
];

class App {
  constructor() {
    this.render = new Render(data, 0);
    this.handler = new Hendler(data);
  }
}

window.Project = new App();
