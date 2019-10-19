export class EnumItem {
  // tslint:disable-next-line: variable-name
  _text: string;
  // tslint:disable-next-line: variable-name
  _value: string;

  constructor() {
  }

  set Text(val) {
    this._text = val;
  }
  get Text() {
    return this._text;
  }

  set Value(val) {
    this._value = val;
  }

  get Value() {
    return this._value;
  }
}
