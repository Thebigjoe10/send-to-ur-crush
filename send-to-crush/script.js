const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const wrapper = document.querySelector(".wrapper");

// Function to move the No button randomly within the wrapper
function moveNoButton() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "You got Rickrolled 😘";
  gif.src =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Check if the device is mobile based on screen width
const isMobileDevice = () => {
  return window.innerWidth <= 768; // Treat devices with screen width <= 768px as mobile
};

// For larger screens (laptops/desktops) - move No button on mouseover
if (!isMobileDevice()) {
  noBtn.addEventListener("mouseover", () => {
    moveNoButton();
  });
}

// For smaller screens (mobile devices) - move No button on click
if (isMobileDevice()) {
  noBtn.addEventListener("click", () => {
    moveNoButton();
  });
}

// Optional: Listen for window resize to dynamically adjust behavior if screen size changes
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    noBtn.addEventListener("mouseover", () => {
      moveNoButton();
    });
    noBtn.removeEventListener("click", moveNoButton);
  } else {
    noBtn.addEventListener("click", () => {
      moveNoButton();
    });
    noBtn.removeEventListener("mouseover", moveNoButton);
  }
});
