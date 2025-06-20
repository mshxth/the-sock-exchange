let page = 1;
async function getData() { 
    try {
        const socks = await fetch(`http://localhost:9000/api/socks/${page}/10`).then(res => res.json());
	    updateHTML(socks);  // Update HTML after data is fetched
		
	    page++;
    }
	catch (e) {
        alert("No more data to fetch! starting over from the beginning.");
        page = 1;
    }
};

function updateHTML(socks) {
	let table = document.createElement('table');
	table.className = "table";  // Add CSS class to the table
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');

	// Create table headers
	let headers = Object.keys(socks[0].sockDetails);
	let tr = document.createElement('tr');

	for (let i = 0; i < headers.length; i++) {
		let th = document.createElement('th');
		th.textContent = headers[i];
		tr.appendChild(th);
	}

	thead.appendChild(tr);
	table.appendChild(thead);

	// Create table body
	socks.forEach(sock => {
		
		let tr = document.createElement('tr');
		for (let key in sock.sockDetails) {
			let td = document.createElement('td');
			td.textContent = sock.sockDetails[key];
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	});
	table.appendChild(tbody);

	// Clear the existing table if any
	let dataDiv = document.getElementById('data');
	dataDiv.innerHTML = '';
	// Append the new table
	dataDiv.appendChild(table);
}

// Call the function to fetch and update data
// getData();