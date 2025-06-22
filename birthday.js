const images = [
  { id: "gift-img-happy", gif: "images/happy.gif" },
  { id: "gift-img-hot", gif: "images/hot.gif" },
  {
    id: "gift-img-genius",
    gif: "images/sisters-youre-the-best-sister-ever.gif",
  },
  { id: "gift-img-badass", gif: "images/NickoleKidman.gif" }, // Make sure the file name is correct!
  { id: "gift-img-cheers", gif: "images/the cake.gif" },
];

images.forEach(({ id, gif }) => {
  const el = document.getElementById(id);
  let toggled = false;
  if (el) {
    el.addEventListener("click", () => {
      if (!toggled) {
        el.style.backgroundImage = `url("${gif}")`;
      } else {
        el.style.backgroundImage = `url("images/gift-cover.jpg")`;
      }
      toggled = !toggled;
    });
  }
});

const hintText = document.getElementById("gift-hint-text");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (hintText) {
  hintText.textContent = isMobile
    ? "Кликни на подарок 📱"
    : "Наведи мышкой на подарок 🖱";
}
