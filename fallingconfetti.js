let canvas = document.getElementById('layer2');

canvas.width = 640;
canvas.height = 480;

let ctx = canvas.getContext('2d');
let pieces = [];
let numberOfPieces = 200;
let lastUpdateTime = Date.now();

function randomColor () {
    
    let colors = ['#4b45ab', 
                  '#554fb8',
                  '#605ac7',
                  '#2a91a8',
                  '#2e9ab2',
                  '#32a5bf',
                  '#81b144',
                  '#85b944',
                  '#8fc549',
                  '#e0af27',
                  '#eeba2a',
                  '#fec72e',
                  '#bf342d',
                  '#ca3931',
                  '#d7423a',];
    
    return colors[Math.floor(Math.random() * colors.length)];
}

//Making confetti fall

function update () {
    
    let now = Date.now(),
        dt = now - lastUpdateTime;

    for (let i = pieces.length - 1; i >= 0; i--) {
        let p = pieces[i];

        if (p.y > canvas.height) {
            pieces.splice(i, 1);
            continue;
        }

        p.y += p.gravity * dt;
        p.rotation += p.rotationSpeed * dt;
    }


    while (pieces.length < numberOfPieces) {
        pieces.push(new Piece(Math.random() * canvas.width, -20));
    }

    lastUpdateTime = now;

    setTimeout(update, 1);
}

//Drawing the confetti

function draw () {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(function (p) {
        ctx.save();

        ctx.fillStyle = p.color; 

        ctx.translate(p.x + p.size / 2, p.y + p.size / 2); 
        ctx.rotate(p.rotation);

        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);

        ctx.restore();
    });

    requestAnimationFrame(draw);
}

//Adding animation to confetti

function Piece (x, y) {
    this.x = x;
    this.y = y;
    this.size = (Math.random() * 0.2 + 0.2) * 12;
    this.gravity = (Math.random() * 0.5 + 0.75) * 0.1;
    this.rotation = (Math.PI * 2) * Math.random();
    this.rotationSpeed = (Math.PI * 2) * (Math.random() - 0.5) * 0.001;
    this.color = randomColor();
}

//Creating a loop with the pieces falling

while (pieces.length < numberOfPieces) {
    pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
}

update();
draw();