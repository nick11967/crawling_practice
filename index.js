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
  div.innerHTML = data.sports;
  mainContainer.appendChild(div);
}
