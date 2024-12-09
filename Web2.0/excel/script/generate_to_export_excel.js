function tableToExcel() {
	let table = document.getElementById('table-container');
	let rows = table.querySelectorAll('tr');
	let csvContent = [];

	rows.forEach(row => {
		let cols = row.querySelectorAll('td, th');
		let rowData = [];
		cols.forEach(cell => {
			rowData.push(cell.textContent);
		});
		csvContent.push(rowData.join(","));
	});

	// Конвертуємо у CSV-формат
	let csvString = csvContent.join("\n");

	// Створюємо Blob для завантаження
	let blob = new Blob([csvString], { type: 'text/csv' });

	// Створюємо посилання для завантаження
	let link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = 'spreadsheet.csv';
	link.click();
}

function AddListenerToButtonExel()
{
	document.getElementById('export-excel').addEventListener('click', tableToExcel);
}

//Execution of the script when the page is loaded
document.addEventListener('DOMContentLoaded', AddListenerToButtonExel);