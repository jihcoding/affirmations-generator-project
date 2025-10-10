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

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "682o04ta365f8dfdebf99e4a809fea32";
  let prompt = `You are an affirmation generator AI. The user gives you an idea, advice or emotion: ${instructionsInput.value}`;
  let context = `User instructions: You are an affirmation generator AI. Keep it at least 30 words, warm tone, human-like and emotionally authentic. Include 1-2 emojis in the end of affirmation text that naturally fit the tone of the affirmation. After the text end it with 
  '- Shecodes AI' preceded by an "em" and "strong" element and separate each line using HTML tag "br".`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let affirmationElement = document.querySelector("#affirmations-text");
  affirmationElement.classList.remove("hidden");
  affirmationElement.innerHTML = `<div class="generating">⏳ Generating an affirmation about ${instructionsInput.value}</div>`;


  axios.get(apiURL).then(displayAffirmation);
}

let affirmationsFormElement = document.querySelector(
  "#affirmations-generator-form"
);
affirmationsFormElement.addEventListener("submit", generateAffirmations);
