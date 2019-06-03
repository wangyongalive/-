import {swap} from '../util.js';

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        swap(array, randomIndex, i);
    }
    return array;
}

console.log(shuffle([2, 3, 5, 7, 8, 95, 8]));

