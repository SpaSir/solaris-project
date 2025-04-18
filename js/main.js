document.addEventListener("DOMContentLoaded", () => {
  includeHTML("components/header.html", "header", () => {
    const openBtn = document.getElementById('openLoginBtn');
    const overlay = document.getElementById('loginOverlay');

    if (openBtn && overlay) {
      openBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
      });
    }
  });

  includeHTML("components/footer.html", "footer");
});

function includeHTML(file, containerId, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
      if (callback) callback(); // вызываем колбэк после загрузки
    });
}

function closeModal() {
  const overlay = document.getElementById('loginOverlay');
  if (overlay) overlay.style.display = 'none';
}
  