// Mint button logic placeholder
function startMint() {
  alert("Minting session started for $BABYTRUMP! 🚀");
  // You can integrate WalletConnect or Web3.js here later
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Music toggle
const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
const toggleBtn = document.getElementById('music-toggle');
let isPlaying = false;

toggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicIcon.src = 'https://cdn-icons-png.flaticon.com/512/727/727245.png';
  } else {
    music.play();
    musicIcon.src = 'https://cdn-icons-png.flaticon.com/512/727/727234.png';
  }
  isPlaying = !isPlaying;
});

// Auto-play when page loads (optional)
window.onload = () => {
  // music.play(); // Uncomment if you want auto-play
};



  // function startMint() {
  //   //const  mintButton = document.querySelector('button');
  //   mintButton.textContent = "Session started";
  //   mintButton.style.backgroundColor = "#4CAF50"; // Soft green success color
  //   mintButton.style.transform = "scale(1)";
  //   mintButton.disabled = true; // Optional: disable after click
  //   alert("Minting session started! 🍼 This would connect your wallet and mint $BABYTRUMP.");
  // }

function startMint() {
  const button = document.getElementById("mint-button");

  // Change text and color
  button.textContent = "Session started";
  button.style.background = "linear-gradient(45deg, #00ff99, #00ccff)";
  button.style.color = "#000";
  button.style.border = "2px solid #fff";

  // Optional: disable button to prevent double click
  button.disabled = true;
  button.style.cursor = "default";

  alert("Minting session started for $BABYTRUMP! 🚀");
}


function toggleAbout() {
  const panel = document.getElementById("about-text");
  panel.classList.toggle("show");
}

function toggleContact() {
  const panel = document.getElementById("contact-info");
  panel.classList.toggle("show");
}


// whitepaper ki js 


  function playTrumpVoice() {
   const  audio = document.getElementById("trumpVoice");
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

