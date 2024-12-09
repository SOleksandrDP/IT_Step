let selected_cell = null;
const MathematicalCalculations = ["SUM", "AVERAGE", "COUNT", "MAX", "MIN"];
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
			//e.target.contentEditable = false;
			e.target.classList.remove("selected_cell");
			const tdFocusOutObj = getTargetObj(e.target.name);
			if(tdFocusOutObj)
			{
				tdFocusOutObj.original_text = e.target.textContent;
				e.target.textContent = GetParsText(tdFocusOutObj.original_text);
				parseFormula(HeadersTabel, tdFocusOutObj.original_text);
			}
		break;
		case "click":
			console.log("click");
			//e.target.contentEditable = true;
			e.target.classList.add("selected_cell");
			const tdClickObj = getTargetObj(e.target.name);
			
			if(selected_cell !== null && selected_cell !== tdClickObj)
			{
				//selectedCells.td.contentEditable = false;
				selected_cell.td.classList.remove("selected_cell");
			}
			
			if(tdClickObj)
			{
				selected_cell = tdClickObj;
				e.target.textContent = tdClickObj.original_text;
			}
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

function UpdateCellProcessing(ActiveCellName)
{
	const td_obj = getTargetObj(ActiveCellName);
	
	if(selected_cell == td_obj)
	{
		console.log("UpdateCellProcessing - selected_cell == td_obj");
		return;
	}
	
	selected_cell = td_obj;
	
	if(selected_cell.displayed_text != selected_cell.td.textContent)
	{
		selected_cell.original_text = selected_cell.td.textContent;
	}
	else 
	{
		
	}
	
	selected_cell.td.textContent = selected_cell.displayed_text;
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