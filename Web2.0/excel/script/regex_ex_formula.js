function IsCalcText(text) {
	if(text.startsWith("="))
	{
		return true;
	}
	
	return false;
}
	
function GetParsText(text) {
	if(IsCalcText(text))
	{
		return text.substr(1);
	}
	
	return text;
}
	
function GetRangeOfCells(inHeadersTabel, text) {
	const user = "";
	//const TestFormula = "=SUM(I2:I10)";
	const CountColumns = inHeadersTabel.length + 1;
	for (let i = 0; i < CountColumns; i++)
	{
		if(inHeadersTabel[i] == text)
		{
			return i;
		}
	}
	
	return user;
}
	
function getTargetObj(name) {
	const ids = name.split(":");
	
	if(ids.length <= 1)
	{
		return null;
	}
	
	return Sheets.obj[ids[0]][ids[1]];
}
	
function getAllRangeOfCells(inHeadersTabel, name) {
	// Регулярний вираз для розбору діапазону
	const regex = /^([A-Z]+)(\d+):([A-Z]+)(\d+)$/;

	// Застосовуємо регулярний вираз
	const matches = name.match(regex);
		
	if(matches.length <= 4)
	{
		return null;
	}
	console.log(matches[1]);
	console.log(matches[2]);
	console.log(matches[3]);
	console.log(matches[4]);
	return {start_i: GetRangeOfCells(inHeadersTabel, matches[1]), i: matches[2], start_j: GetRangeOfCells(inHeadersTabel, matches[3]), j: matches[4]};
}
	
function parseFormula(inHeadersTabel, formula) {
	// Перевіряємо, чи це формула (рядок починається з '=')
	if (!IsCalcText(formula))
	{
		return null;
	}

	// Видаляємо '=' на початку
	formula = formula.slice(1);

	// Використовуємо регулярний вираз для отримання функції та діапазону комірок
	const regex = /^([A-Z]+)\(([\w\d]+:[\w\d]+)\)$/;
	const matches = formula.match(regex);

	if (!matches || matches.length <= 1) {
		return null; // Якщо не вдалося розпарсити
	}
	
	const ids = matches[2].split(":");
	if (ids.length <= 1) {
		return null; // Якщо не вдалося розпарсити
	}

	const funcName = matches[1];  // Назва функції (SUM)
	const range = getAllRangeOfCells(inHeadersTabel, matches[2]);     // Діапазон комірок (I2:I10)

	return {
		functionName: funcName,
		range: range
		};
}