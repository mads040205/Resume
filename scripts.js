function revealEmail() {
  // Email is encoded to prevent bot scraping
  const parts = ['career', 'nathanriley', 'com'];
  const email = parts[0] + '@' + parts[1] + '.' + parts[2];
  
  const emailLink = document.getElementById('email-link');
  const printEmail = document.getElementById('print-email');
  
  // Always populate the print email span (even if not visible)
  if (!printEmail.textContent) {
    printEmail.textContent = email;
  }
  
  // First click: Show the email address
  if (emailLink.textContent === 'Email Me') {
    emailLink.textContent = email;
    emailLink.style.transform = 'scale(1.05)';
    setTimeout(() => {
      emailLink.style.transform = 'scale(1)';
    }, 200);
  } else {
    // Second click: Open email client
    emailLink.href = 'mailto:' + email;
    emailLink.onclick = null; // Remove click handler after second click
    // Trigger the mailto link
    window.location.href = 'mailto:' + email;
  }
}

// Populate email for print on page load
document.addEventListener('DOMContentLoaded', function() {
  const parts = ['career', 'nathanriley', 'com'];
  const email = parts[0] + '@' + parts[1] + '.' + parts[2];
  const printEmail = document.getElementById('print-email');
  if (printEmail) {
    printEmail.textContent = email;
  }
});
