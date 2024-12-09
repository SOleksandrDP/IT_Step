//Функція для створення таблиці
function generateTable(inHeadersTabel, InSheets)
{
	//Отримуємо контейнер для таблиці
	const tableContainer = document.getElementById('table-container');
	
	//Створюємо елемент таблиці
	const table = document.createElement('table');
	
	//Створюємо заголовок таблиці
	const tbody = document.createElement('tbody');
	
	const CountColumns = 50;
	const CountRow = inHeadersTabel.length + 1;
	
	for (let i = 0; i < CountColumns; i++)
	{
		const headerRow = document.createElement('tr');
		const Colums = [];
		
		for (let j = 0; j < CountRow; j++)
		{
			if(i == 0 && j == 0)
			{
				const th = document.createElement('th');
				th.textContent = "";
				headerRow.appendChild(th);
			}
			else if(i == 0)
			{
				const th = document.createElement('th');
				th.textContent = inHeadersTabel[j-1];
				headerRow.appendChild(th);
			}
			else if(j == 0)
			{
				const th = document.createElement('th');
				th.textContent = i;
				headerRow.appendChild(th);
			}
			else 
			{
				const td = document.createElement('td');
				td.contentEditable = "true";
				td.addEventListener("dblclick", Td_Events_Logic, false);
				td.addEventListener("focusout", Td_Events_Logic, false);
				td.addEventListener("click", Td_Events_Logic, false);
				td.name = (i - 1) + ":" + (j - 1);
				headerRow.appendChild(td);
				
				const tdObj = {
								  i: i - 1,
								  j: j - 1,
								  td: td,
								  original_text: "",
								  displayed_text: "",
								  selected_cell: false,
								  involved_cell: false
								};
				Colums.push(tdObj);
			}
		}
		
		if(i != 0)
		{
			InSheets.obj.push(Colums);
		}
		
		tbody.appendChild(headerRow);
	}

	table.appendChild(tbody);

	// Додаємо таблицю до контейнера
	tableContainer.innerHTML = ''; // Очищаємо попередній вміст
	tableContainer.appendChild(table);
}