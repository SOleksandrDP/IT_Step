const gridSize = 20;
let ctx = null;
let rows = 500;
let cols = 500;

let _x = 0;
let _y = 0;

let direction = "right";
let directionIndex = 0;
let allowedDirectionIndex = 0;

let grid = null;

let lastDirection = [];

const directions = [
            [0, 1],  // Право
            [1, 0],  // Вниз
            [0, -1], // Ліво
            [-1, 0], // Вгору
        ];

function DOMContentLoadedComplite()
{
	generateCanvas();
}

function generateCanvas()
{
    const canvas = document.getElementById('GameSnakeCanvas');
    ctx = canvas.getContext('2d'); // Контекст для 2D-графіки
	
	rows = canvas.height / gridSize;
	cols = canvas.width / gridSize;
	
	grid = Array.from({ length: rows }, () => Array(cols).fill(false));
	
	_x = Math.floor(Math.random() * rows);
	_y = Math.floor(Math.random() * cols);
	
	drawSnake();
}

function drawRectangle(row, col) {
    const x = col * gridSize;
    const y = row * gridSize;

    ctx.fillStyle = "red";
    ctx.fillRect(x, y, gridSize, gridSize);

    grid[row][col] = true;
}

function canMove(row, col) {
    return (
		row >= 0 &&
		col >= 0 &&
		row < rows &&
		col < cols &&
		!grid[row][col]
    );
}

function getNextPosition() {
	lastDirection = updatedDirections();
	
	if(lastDirection.length == 0)
	{
		console.log("Game Over!");
		return { row: _x, col: _y };
	}
	
	allowedDirectionIndex = Math.floor(Math.random() * lastDirection.length);
	directionIndex = lastDirection[allowedDirectionIndex];
	
    let nextRow = _x + directions[directionIndex][0];
    let nextCol = _y + directions[directionIndex][1];
	
	console.log("getNextPosition - i: " + _x + " / nextRow: " + nextRow + " / j: " + _y + " / nextCol: " + nextCol);

    return { row: nextRow, col: nextCol };
}

function updatedDirections()
{
	let allowedMove = false;
	let currentDirection = [];
	
	for (let i = 0; i < directions.length; i++)
	{
		if(canMove(_x + directions[i][0], _y + directions[i][1]))
		{
			allowedMove = true;
			currentDirection.push(i);
		}
	}
	
	if(allowedMove == false)
	{
		
	}
	
	return currentDirection;
}

function drawSnake() {
	if(canMove(_x, _y))
	{
		drawRectangle(_x, _y);
	}
	
    const nextPosition = getNextPosition();
    _x = nextPosition.row;
    _y = nextPosition.col;

    const emptyCells = grid.flat().filter(cell => !cell).length;
    if (emptyCells > 0) {
        setTimeout(drawSnake, 200);
    } else {
        console.log("Всі клітинки заповнені!");
    }
}
	
//Execution of the script when the page is loaded
document.addEventListener('DOMContentLoaded', DOMContentLoadedComplite);