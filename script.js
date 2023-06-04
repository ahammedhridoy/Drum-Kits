const kits = ["crash", "kick", "snare", "tom"];
const container = document.querySelector(".container");

kits.forEach((kit) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = kit;
  container.appendChild(button);
  const audio = document.createElement("audio");
  audio.src = "sound/" + kit + ".mp3";
  container.appendChild(audio);
  button.style.backgroundImage = "url(images/" + kit + ".png)";
  button.addEventListener("click", () => {
    audio.play();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audio.play();
      button.style.transform = "scale(.9)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 100);
    }
  });
});
