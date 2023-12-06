const input = getRealInput();

const lines = input.split('\n')

let time = ''
let distance = ''

let result = 1

for (const line of lines) {
    const parts = line.split(':')
    let title = parts[0];
    let values = parts[1].replaceAll(' ', '')
    if (title === 'Time') {
        time += values
    } else if (title === 'Distance') {
        distance += values
    }
}

let possibleWins = 0;
for (let j = 1; j < time; j++) {
    const speed = j;
    const driveTime = time - j;
    const totalDistance = driveTime * speed;
    if (totalDistance > distance) {
        possibleWins++;
    }
}

console.log(possibleWins)

function getTestInput() {
    return `Time:      7  15   30
Distance:  9  40  200`
}

function getRealInput() {
    return `Time:        35     69     68     87
Distance:   213   1168   1086   1248`
}