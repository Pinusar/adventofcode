const input = getRealInput();

const lines = input.split('\n')

const times = []
const distances = []

let result = 1

for (const line of lines) {
    const parts = line.split(':')
    let title = parts[0];
    let values = parts[1].trim().split(/\s+/).map(v => parseInt(v));
    if (title === 'Time') {
        times.push(...values)
    } else if (title === 'Distance') {
        distances.push(...values)
    }
}

for (let i = 0; i < times.length; i++) {
    const time = times[i]
    const currentRecord = distances[i]
    let possibleWins = 0;
    for (let j = 1; j < time; j++) {
        const speed = j;
        const driveTime = time - j;
        const totalDistance = driveTime * speed;
        if (totalDistance > currentRecord) {
            possibleWins++;
        }
    }
    result *= possibleWins;
}

console.log(result)

function getTestInput() {
    return `Time:      7  15   30
Distance:  9  40  200`
}

function getRealInput() {
    return `Time:        35     69     68     87
Distance:   213   1168   1086   1248`
}