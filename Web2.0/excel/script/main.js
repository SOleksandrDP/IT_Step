let selected_cell = null;
const HeadersTabel = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const Sheets = new Object();
Sheets.id = 0;
Sheets.title = "Sheet1";
Sheets.obj = [];
	
function Td_Events_Logic(e) {
	//console.log(e);
	switch (e.type) {
		case "dblclick":
			console.log("dblclick");
		break;
		case "focusout":
			console.log("focusout");
			UpdateDeActiveCellProcessing(e.target.name);
		break;
		case "click":
			console.log("click");
			UpdateActiveCellProcessing(e.target.name);
		break;
	}
}

function ClearFocusLastCell()
{
	if(selected_cell == null)
	{
		console.log("ClearFocusLastCell - selected_cell don't found");
		return;
	}
	
	for (let i = 0; i < Sheets.obj.length; i++)
	{
		
	}
}

function UpdateDeActiveCellProcessing(DeActiveCellName)
{
	const td_obj = getTargetObj(DeActiveCellName);
	
	if(!td_obj)
	{
		console.log("Cell not found");
		return;
	}
	
	if(selected_cell)
	{
		selected_cell.td.classList.remove("selected_cell");
		selected_cell.td.classList.remove("fail_cell");
	}
	
	td_obj.original_text = td_obj.td.textContent;
	let oparationData = parseFormula(HeadersTabel, td_obj.original_text);
	
	console.log("oparationData:");
	console.log(oparationData);
	
	td_obj.displayed_text = oparationData.value; //TODO
	
	td_obj.td.textContent = td_obj.displayed_text;
	
	if(oparationData.value == isErrorFormula)
	{
		td_obj.td.classList.add("fail_cell");
	}
	
	selected_cell = null;
}

function UpdateActiveCellProcessing(ActiveCellName)
{
	const td_obj = getTargetObj(ActiveCellName);
	
	if(!td_obj)
	{
		console.log("Cell not found");
		return;
	}
	
	if(selected_cell == td_obj)
	{
		console.log("You cannot select the same cell twice.");
		return;
	}
	
	selected_cell = td_obj;
	
	if(selected_cell.td.classList.contains("fail_cell"))
	{
		selected_cell.td.classList.remove("fail_cell");
	}
	
	selected_cell.td.textContent = selected_cell.original_text;
	selected_cell.td.classList.add("selected_cell");
}
	
function AddSheet() {
	const SheetContainer = document.getElementById('footer-container');
	
	const AddDiv = document.createElement('div');
	AddDiv.textContent = "Sheet1";
	AddDiv.classList.add("SheetStyle");
	
	//SheetContainer.innerHTML = ''; // Очищаємо попередній вміст
	SheetContainer.appendChild(AddDiv);
}

function DOMContentLoadedComplite()
{
	generateTable(HeadersTabel, Sheets);
	AddListener();
}

//Added function event listeners
function AddListener()
{
	document.getElementById('add-sheet').addEventListener('click', AddSheet);
}
	
//Execution of the script when the page is loaded
document.addEventListener('DOMContentLoaded', DOMContentLoadedComplite);