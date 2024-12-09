const MathematicalCalculations = ["SUM", "AVERAGE", "COUNT", "MAX", "MIN", "/", "*", "+", "-"];
const isErrorFormula = "#ERROR";

function getActiveObj()
{
	return Sheets.obj;
}

function IsCheckEqualTo(inFormula) {
	if(inFormula == "")
	{
		return {
            isValid: false,
			isError: false
        };
	}
	
	if(!inFormula.startsWith("="))
	{
		console.log("Формула не містить жодного знака '='");
		return {
            isValid: false,
			isError: false
        };
	}
	
	// Перевіряємо, чи формула містить більше одного знака "="
    const equalSignsCount = (inFormula.match(/=/g) || []).length;
    if (equalSignsCount > 1)
	{
		console.log("Формула містить більше одного знака '='");
        return {
            isValid: false,
			isError: true
        };
    }
	
	return {
            isValid: true,
			isError: false
        };
}
	
function GetFormulaWithoutEqualTo(inFormula) {
	let equalTo = IsCheckEqualTo(inFormula);
	
	if(equalTo.isError)
	{
		return isErrorFormula;
	}
	
	if(equalTo.isValid)
	{
		return inFormula.slice(1);
	}
	
	return inFormula;
}
	
function GetRangeOfCells(inHeadersTabel, inFormula) {
	const user = "";
	//const TestFormula = "=SUM(I2:I10)";
	const CountColumns = inHeadersTabel.length + 1;
	for (let i = 0; i < CountColumns; i++)
	{
		if(inHeadersTabel[i] == inFormula)
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
	
	return getActiveObj()[ids[0]][ids[1]];
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
	//console.log(matches[1]);
	//console.log(matches[2]);
	//console.log(matches[3]);
	//console.log(matches[4]);
	return {start_i: GetRangeOfCells(inHeadersTabel, matches[1]), i: matches[2], start_j: GetRangeOfCells(inHeadersTabel, matches[3]), j: matches[4]};
}
	
function parseFormula(inHeadersTabel, inFormula)
{
	// Видаляємо '=' на початку
	let formula = GetFormulaWithoutEqualTo(inFormula);
	
	if(formula == isErrorFormula)
	{
		return {
			operationType: isErrorFormula
		};
	}
	
	if(formula == inFormula || inFormula == "")
	{
		return {
			operationType: "",
			text: formula
		};
	}
	
	//Перевіряємо формулу на одиноччне число значення
	let NumFormula = valizationSingleNumFormula(formula);
	console.log(NumFormula);
	if(NumFormula.isValid)
	{
		return {
			operationType: "",
			value: NumFormula.value
		};
	}
	//Перевіряємо формулу на одиноччне число значення
	
	//Перевіряємо обчислення данних використовуючи eval
	let evalFormula = parseAndEvaluateComplexFormula(formula);
	console.log("evalFormula");
	console.log(evalFormula);
	if(evalFormula.isValid)
	{
		return {
			operationType: "",
			value: evalFormula.result
		};
	}
	//Перевіряємо обчислення данних використовуючи eval
	

	// Використовуємо регулярний вираз для отримання функції та діапазону комірок
	const regex = /^([A-Z]+)\(([^)]+)\)$/;
	const matches = formula.match(regex);

	if (!matches || matches.length <= 1)
	{
		console.log("matches.length - Якщо не вдалося розпарсити");
		return null; // Якщо не вдалося розпарсити
	}
	
	const ids = matches[2].split(":");
	if (ids.length <= 1)
	{
		console.log("matches[2] - Якщо не вдалося розпарсити");
		return null; // Якщо не вдалося розпарсити
	}
	
	const funcName = searchOperation(matches[1]);  // Назва функції (SUM)
	const range = getAllRangeOfCells(inHeadersTabel, matches[2]);     // Діапазон комірок (I2:I10)
	
	console.log(funcName);
	
	return {
		operationType: funcName,
		range: range
		};
}

function valizationSingleNumFormula(inFormula)
{
	// Регулярний вираз для перевірки формату
    const regex = /^(\d+)$/;
	
	// Перевіряємо відповідність формату формули
    const match = inFormula.match(regex);
    if (match) {
        return {
            isValid: true,
            value: parseInt(match[1], 10) // Повертаємо значення числа
        };
    } else {
        return {
            isValid: false,
            error: "Одиночне число має неправильний формат"
        };
    }
}

function parseAndEvaluateComplexFormula(inFormula)
{
    // Перевіряємо, чи формула містить лише дозволені символи
    if (!/^[\d+\-*/().\s]+$/.test(inFormula)) {
        return {
            isValid: false,
            error: "Формула містить недозволені символи",
            result: null
        };
    }

    // Обчислення формули
    try {
        const result = eval(inFormula); // Обчислення з врахуванням пріоритетів операторів
        return {
            isValid: true,
            error: null,
            result
        };
    } catch (e) {
        return {
            isValid: false,
            error: "Помилка обчислення формули",
            result: null
        };
    }
}

function searchOperation(InFuncName)
{
	return MathematicalCalculations.find(element => element.includes(InFuncName));
}