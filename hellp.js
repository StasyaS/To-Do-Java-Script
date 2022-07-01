function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const dataID = [
    'a', 'b', 'c', 'q', 'w', 'r', 't', 'y', 'u', 'i', 'o', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'Z', '$', '_', 'd', 1, 2, 3, 4, 5, 6, 7, 8, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U'
];

const id = () => {
    let newId = "";
    for (let i = 0; i < 6; i++) {
        const s = dataID[randomInteger(0, dataID.length - 1)]
        newId += s;
    }
    return newId
}

