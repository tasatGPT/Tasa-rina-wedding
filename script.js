
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function submitForm(e) {
  e.preventDefault();
  alert("Terima kasih sudah mengisi RSVP!");
  e.target.reset();
}
