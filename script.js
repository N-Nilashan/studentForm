function getValue() {
    let nameValue = document.getElementById("name").value;
    let ageValue = document.getElementById("age").value;
    let courseValue = document.getElementById("course").value;
    let emailValue = document.getElementById("emailValue").value;

    // Handle radio buttons
    let genderValue = document.querySelector('input[name="gender"]:checked');
    genderValue = genderValue ? genderValue.value : "Not specified";

    let value56 = document.getElementById("addedValue");
    let valueList = document.createElement("tr");
    valueList.innerHTML = `<td>${nameValue}</td><td>${ageValue}</td><td>${courseValue}</td><td>${genderValue}</td><td>${emailValue}</td><td><button onclick="deleteRow(this)">Delete</button></td>`;

    value56.appendChild(valueList);
}
function deleteRow(button) {
    // Navigate up to the row and remove it
    let row = button.parentNode.parentNode;
    row.remove();
}