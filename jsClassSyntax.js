'use strict';

//1) Переписать функцию-конструктор MyArray на классы.
// *Переписать методы unshift, push для неограниченного числа аргументов.

class MyArray {
    constructor(length = 5) {
        this._length = length;
    }
    pop() {
    if(this._length === 0) {
      return;
    }
    const lastItem = this[this._length-1]
    delete this[--this._length];
    return lastItem;
  }
    push(item) {
    this[this._length] = item;
    return ++this._length;
  }
    shift() {
    if ( this._length === 0 ) {
      return;
    }
    const fistItem = this[0];
    for(let i = 0; i < this._length - 1; i++) {
      this[i] = this[i+1];
    }
    delete this[--this._length];
    return fistItem
  }
}

const arr = new MyArray(5);

//2) Реализовать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

class RangeValidator {
    constructor(from, to, array) {
        this._from = from;
        this._to = to;
        this._array = [];
    }
    set from (v) {
         this._from = v;
    }
    get from () {
        return this._from;
    }
    set to (v) {
        this._to = v;
    }
    get to () {
        return this._to;
    }

    get range () {
         this._array.push(this._from, this._to);
         return this._array
    }
    validate(v) {
        return v > this._from  && v < this._to
    }
}

const some  = new RangeValidator(1,10);

