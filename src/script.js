function displayAffirmation(response) {
  new Typewriter("#affirmations-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmations(event) {
  event.preventDefault();

  id = "user-instructions";
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "682o04ta365f8dfdebf99e4a809fea32";
  let prompt = `Generate a lovely affirmations ${instructionsInput.value}`;
  let context = `User instructions: You are an affirmation generator AI, that generates short, calming affirmations to uplift the user's mood. 
    Keep it under 20 words, warm tone, human-like and emotionally authentic. Include 1-2 emojis in the end of affirmation text that naturally fit the tone of the affirmation. 
    End the text with 'Shecodes AI' preceded by an "em" and "strong" element.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating affirmations");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayAffirmation);
}

let affirmationsFormElement = document.querySelector(
  "#affirmations-generator-form"
);
affirmationsFormElement.addEventListener("submit", generateAffirmations);
