let generateAdviceButton = document.getElementById("generate-advice-button");
let adviceId = document.getElementById("advice-id");
let adviceContent = document.getElementById("advice-content");
generateAdviceButton.addEventListener("click", async () => {
  try {
    let url = "https://api.adviceslip.com/advice";
    let response = await fetch(url);

    let body = await response.json();
    let advice = body.slip.advice;
    let id = body.slip.id;

    if (id) {
      adviceId.innerHTML = id;
    }
    if (advice) {
      adviceContent.innerHTML = advice;
    }
  } catch (error) {
    adviceContent.innerHTML = "Sometimes, errors are a good thing!";
  }
});
