//face generator


function randomNum(rangeNum) {
    return Math.floor(Math.random() * rangeNum);
}

var numOfFaces = 5;

function generateFaces() {

    var leftSide = document.getElementById("left-side");
    var rightSide = document.getElementById("right-side");
    var body = document.querySelector("body");
    var img;
    var leftSideImgs;

    for (var i = 0; i < numOfFaces; i++) {
        img = document.createElement('img');
        img.src = "smile.png";
        img.style.position = 'absolute';
        img.style.top = randomNum(450) + 'px';
        img.style.left = randomNum(450) + 'px';
        leftSide.appendChild(img);
    }

    leftSideImgs = leftSide.cloneNode(true);
    leftSideImgs.removeChild(leftSideImgs.lastChild);
    rightSide.appendChild(leftSideImgs);

    leftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        while (leftSide.firstChild) {
            leftSide.removeChild(leftSide.firstChild);

            if (rightSide.firstChild) {
                rightSide.removeChild(rightSide.firstChild);
            }

        }
        numOfFaces += 5;
        generateFaces();
    };
    body.onclick = function gameOver() {
        alert("Game Over!");
        leftSide.innerHTML = '';
        rightSide.innerHTML = '';
        numOfFaces = 5;
        generateFaces();
    };
}
document.onload = generateFaces();
