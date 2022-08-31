const canvas = document.querySelector('canvas');
canvas.width = 1200;
canvas.height = 600;
let ctx = canvas.getContext('2d');
const rock = new Image();
rock.src = ".vscode/rock.png"
let messi = new Image();
messi.src = ".vscode/messi.png"
const jellyfish = new Image();
jellyfish.src = ".vscode/jellyfish.webp"
const patrick = new Image();
patrick.src = ".vscode/patrick.webp"

function x() {
    let r = Math.random();
    if (r < 0.5) {
        return 1
    }
    return 0
}

let maze = [
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 1, 0],
    [0, 1, 0, x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 1, 0],
    [0, 1, 0, x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, 1, 0],
    [0, 1, 0, x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), 0, 1, 0],
    [0, 1, 0, x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), 0, 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, x(), 0, 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), 0, 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), 0, 0, 0, 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, x(), 0, x(), x(), 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), 0, x(), x(), 1, 2],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), 0, x(), x(), 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), 0, x(), x(), 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 0, x(), x(), x(), 0, x(), x(), 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), 0, x(), x(), 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), 0, x(), x(), 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), 0, 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, 0, 0, 0, x(), x(), x(), x(), x(), 0, 0, x(), x(), 0, 0, 0, x(), x(), 1, 0],
    [0, 1, x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), 0, x(), x(), x(), 0, x(), x(), x(), x(), 1, 0],
    [0, 1, x(), x(), x(), 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), x(), x(), 0, x(), x(), x(), 0, x(), x(), x(), x(), 1, 0],
    [0, 1, x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), 0, 0, 0, x(), x(), x(), 0, 0, 0, x(), x(), 1, 0],
    [0, 1, 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, x(), x(), x(), 0, x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, 1, 0],
    [0, 1, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 0, 0, 0, 0, x(), x(), x(), x(), x(), x(), x(), x(), x(), 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
]

// function map(m) {
//     for (let i = 0; i < m.length; i++) {
//         for (let j = 0; j < m[i].length; j++) {
//             if (m[i][j] === 1) {
//                 ctx.beginPath();
//                 ctx.drawImage(rock, j * 25, i * 25, 25, 25);
//             } else if (m[i][j] === 2) {
//                 ctx.drawImage(patrick, j * 25, i * 25, 25, 25);
//             }
//         }
//     }
// }

class Player {
    constructor(img, width, height, x, y, color) {
        this.width = width;
        this.height = height;
        this.x = x; //between index 0 and 47
        this.y = y; //between index 0 and 23
        this.color = color;
        this.img = img;
    }
    clearPlayer() {
        ctx.clearRect(this.img, this.x, this.y, this.width, this.height)
    }
    updatePlayer() {
        ctx.fillStyle = this.color;
        ctx.drawImage(this.img, this.x * this.width, this.y * this.height, this.width, this.height);
    }
    move(keyCode) {
        if (keyCode === 37 && maze[this.y][this.x - 1] === 0) this.x -= 1;
        if (keyCode === 38 && maze[this.y - 1][this.x] === 0) this.y -= 1;
        if (keyCode === 39 && maze[this.y][this.x + 1] === 0) this.x += 1;
        if (keyCode === 40 && maze[this.y + 1][this.x] === 0) this.y += 1;
        // console.log(this.x, this.y, maze.length, maze[0].length, maze[this.y][this.x])
    }
}

const player = new Player(messi, 25, 25, 0, 12, 'blue');

class Monsters {
    constructor(img, x, y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
    }
    drawMonster() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    updateMonster() {
        this.y += 1;
        if (this.y > canvas.height - this.height) {
            this.y = 0;
        }
    }
}

let randomPosition = [];
for (let i = 0; i < randomPosition.length; i++) {
    randomPosition[i];
}
let myFrameCount = 0;

// let monsterOne = new Monsters(jellyfish, 12, 20);

// setInterval(() => {
//     myFrameCount++;
//     // player.move(e.keyCode)
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     map(maze);
//     player.updatePlayer()
//     if (myFrameCount % 250 === 0) {
//         randomPosition.push(new Monsters(jellyfish, Math.random() * (canvas.width - 35), 0));
//     }
//     for (let i = 0; i < randomPosition.length; i++) {
//         randomPosition[i].updateMonster()
//     }

//     // ctx.clearRect(0, 0, canvas.width, canvas.height)
//     for (let i = 0; i < randomPosition.length; i++) {
//         randomPosition[i].drawMonster()
//         if (col(randomPosition[i])) {
//             // alert('Press the key')
//             console.log('collision detected')
//         }
//     }
// }, 20)

// randomPosition.push(monsterOne);

function col(monster) {
    if ((player.x * player.width) < monster.x + monster.width && (player.x * player.width) + player.width > monster.x && (player.y * player.height) < monster.y + monster.width && (player.y * player.height) + player.height > monster.y) {
        return true
    }
}


// document.addEventListener('keydown', (e) => {
//     player.move(e.keyCode)
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     map(maze)
//     player.updatePlayer()
// });

// document.addEventListener('keyup', (e) => {
//     player.newX = 0;
//     player.newY = 0;
// })

function startGame() {
    let start = document.querySelector("#start");
    let canvasGame = document.querySelector("canvas");
    let gameOver = document.querySelector("#game-over");
    start.style.display = "none";
    canvasGame.style.display = "inline-block";
    gameOver.style.display = "none";
    function map(m) {
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[i].length; j++) {
                if (m[i][j] === 1) {
                    ctx.beginPath();
                    ctx.drawImage(rock, j * 25, i * 25, 25, 25);
                } else if (m[i][j] === 2) {
                    ctx.drawImage(patrick, j * 25, i * 25, 25, 25);
                }
            }
        }
    }
    document.addEventListener('keydown', (e) => {
        player.move(e.keyCode)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        map(maze)
        player.updatePlayer()
    });
    document.addEventListener('keyup', (e) => {
        player.newX = 0;
        player.newY = 0;
    })
    setInterval(() => {
        myFrameCount++;
        // player.move(e.keyCode)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        map(maze);
        player.updatePlayer()
        if (myFrameCount % 250 === 0) {
            randomPosition.push(new Monsters(jellyfish, Math.random() * (canvas.width - 35), 0));
        }
        for (let i = 0; i < randomPosition.length; i++) {
            randomPosition[i].updateMonster()
        }

        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < randomPosition.length; i++) {
            randomPosition[i].drawMonster()
            if (col(randomPosition[i])) {
                // alert('Press the key')
                console.log('collision detected')
            }
        }
    }, 20)

}