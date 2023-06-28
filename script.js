
  // JavaScript Code
  async function showMessage() {
    const textInput = document.getElementById("text").value;
    const delayInput = document.getElementById("delay").value;

    // Convert delayInput to a number
    const delay = parseInt(delayInput);

    // Wait for the specified delay
    await new Promise(resolve => setTimeout(resolve, delay));

    // Display the text on the screen
    const output = document.getElementById("output");
    output.innerText = textInput;
  }

  // Add event listener to the button
  document.getElementById("btn").addEventListener("click", showMessage);
	
