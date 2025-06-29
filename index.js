// 1. Remove the existing <main> element with id 'main'.
// This element is present in your provided index.html, and the test expects it to be removed.
const mainElementToRemove = document.getElementById("main");
if (mainElementToRemove) { // Good practice: ensure the element exists before trying to remove it
  mainElementToRemove.remove();
}

// 2. Create an <h1> node and assign it to a variable named 'newHeader'.
const newHeader = document.createElement("h1");

// 3. Give the 'newHeader' variable (the <h1> node) an id of 'victory'.
newHeader.id = "victory";

// 4. Set the text content of the <h1> to "Mark is the champion".
// (Based on your previous HTML, the test is likely looking for "Mark is the champion" specifically,
// rather than a generic "YOUR-NAME" placeholder at this stage of the test.)
newHeader.textContent = "Mark is the champion";

// 5. Append the newHeader <h1> element to the body.
document.body.append(newHeader);