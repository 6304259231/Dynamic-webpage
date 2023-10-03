console.log("welcome")

    let getdata = document.getElementById("get-data")
    
    getdata.addEventListener("click", function () {
    const resultsTableBody = document.getElementById("results-table-body");
    const loadDataButton = document.getElementById("load-data");
  
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://ergast.com/api/f1/2004/1/results.json", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const jsonData = JSON.parse(xhr.responseText);

                const raceResults = jsonData.MRData.RaceTable.Races[0].Results;
                
                resultsTableBody.innerHTML = ""; 
               
                raceResults.forEach((result) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${result.position}</td>
                        <td>${result.Driver.givenName} ${result.Driver.familyName}</td>
                        <td>${result.Constructor.name}</td>
                        <td>${result.grid}</td>
                        <td>${result.laps}</td>
                        <td>${result.status}</td>
                    `;
                    resultsTableBody.appendChild(row);
                    jsonData.innerHTML = "";
                });
            } else {
                console.error("Error loading data:", xhr.status);
            }
        };

        xhr.send();
});
