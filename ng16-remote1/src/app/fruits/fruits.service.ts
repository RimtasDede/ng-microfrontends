import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }

  getList(color?: string) {
    const fruits = [
      {
        name: 'Apple',
        color: 'green',
      },
      {
        name: 'Orange',
        color: 'orange',
      },
      {
        name: 'Banana',
        color: 'yellow',
      },
      {
        name: 'Pineapple',
        color: 'yellow',
      },
      {
        name: 'Tangerine',
        color: 'orange',
      },
      {
        name: 'Pear',
        color: 'green'
      },
      {
        name: 'Lemon',
        color: 'yellow'
      },
      {
        name: 'Peach',
        color: 'red'
      },
    ];

    return fruits.filter(fruit => !color || fruit.color === color);
  }

}
