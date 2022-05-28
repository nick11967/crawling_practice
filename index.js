fetch("data2.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  let mainContainer = document.getElementById("sportsData");
  for(let i = 0;i < data[sports].length; i++){
    let div = document.createElement("div");
    div.innerHTML = data[sports][i];
    mainContainer.appendChild(div);
  }
}
