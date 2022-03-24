const dodger = document.getElementById('dodger');

dodger.style.backgroundColor='#FF69B4';
dodger.style.bottom = '200px';


document.addEventListener("keydown", function (event) {
    console.log(event);
  });

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
    if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
});


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left >0) {
        dodger.style.left = `${left -10}px`;
    }

};

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left <360) {
        dodger.style.left=`${left +10}px`;
    }

};


function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom <380) {
        dodger.style.bottom=`${bottom +10}px`;
    }

};

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom >0) {
        dodger.style.bottom=`${bottom -10}px`;
    }

};