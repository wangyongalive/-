import Queue from './Queue.js';

function hotPotato(elementsList, num) {
    const queue = new Queue();
    const eliminatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }
    while (queue.size() > 1) { // 只要队列中的元素个数大于1 就一直遍历
        for (let i = 0; i < num; i++) // 将队首移到队尾
            queue.enqueue(queue.dequeue())
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminatedList.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);
