function findNeighbors(start) {
    const boardTiles = 8;
    const neighbors = [];
    let row = start[0];
    let column = start[1];

    if (row + 2 < boardTiles && column + 1 < boardTiles) neighbors.push({ tile: [row + 2, column + 1] });
    if (row + 2 < boardTiles && column - 1 >= 0) neighbors.push({ tile: [row + 2, column - 1] });
    if (row - 2 >= 0 && column + 1 < boardTiles) neighbors.push({ tile: [row - 2, column + 1] });
    if (row - 2 >= 0 && column - 1 >= 0) neighbors.push({ tile: [row - 2, column - 1] });
    
    if (row + 1 < boardTiles && column + 2 < boardTiles) neighbors.push({ tile: [row + 1, column + 2] });
    if (row + 1 < boardTiles && column - 2 >= 0) neighbors.push({ tile: [row + 1, column - 2] });
    if (row - 1 >= 0 && column + 2 < boardTiles) neighbors.push({ tile: [row - 1, column + 2] });
    if (row - 1 >= 0 && column - 2 >= 0) neighbors.push({ tile: [row - 1, column - 2] });
    return neighbors
}

function knightMoves(start, end, traversedNodes = [...start]) {
    const startingMove = { tile: start, previous: null }
    const queue = [startingMove]
    while (queue.length > 0) {
        const move = queue.shift();
        if (JSON.stringify(move.tile) === JSON.stringify(end)) {
            let traversed = move;
            let path = []
            while(traversed !== null){
                path.push(traversed.tile)
                traversed = traversed.previous
            }
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.reverse().forEach(position => console.log(position))
            return
        }
        let foundNeighbors = findNeighbors(move.tile);
        const neighbors = []
        foundNeighbors.forEach(possibleMove => {
            possibleMove.previous = move
            let flag = true;
            let current = move
            while(current.previous !== null){
                if(current.previous.tile === possibleMove){
                    flag = false;
                    break
                }
                current = current.previous
            }
            if(flag === true) neighbors.push(possibleMove);
        });
        queue.push(...neighbors);
    }
    return neighbors
}
knightMoves([3, 3], [7, 0])
