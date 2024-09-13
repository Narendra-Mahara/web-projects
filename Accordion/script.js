let questions = document.getElementsByClassName("question");
let answers = document.getElementsByClassName("answer");
let icons = document.getElementsByTagName("ion-icon");

for (let i = 0; i < questions.length; i++) {
  let question = questions[i];
  let answer = answers[i];
  let icon = icons[i];
  let isExpanded = false;  // Replaces `temp` for clarity

  question.addEventListener("click", () => {
    if (!isExpanded) {
      answer.style.maxHeight = answer.scrollHeight + "px";  // Expand the answer smoothly
      answer.style.paddingBottom = "20px";  // Add padding to the bottom of the answer
      icon.style.transform = "rotate(180deg)";
    } else {
      answer.style.maxHeight = "0px";  // Collapse the answer smoothly
      answer.style.paddingBottom = "0px";  // Remove padding from the bottom of the answer
      icon.style.transform = "rotate(0deg)";
    }
    isExpanded = !isExpanded;  // Toggle the state
  });
}
