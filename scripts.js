function revealEmail() {
  // Email is encoded to prevent bot scraping
  const parts = ['career', 'madalynriley', 'com'];
  const email = parts[0] + '@' + parts[1] + '.' + parts[2];
  
  const emailLink = document.getElementById('email-link');
  const printEmail = document.getElementById('print-email');
  
  // First click: Show the email address
  if (emailLink.textContent === 'Email Me') {
    emailLink.textContent = email;
    emailLink.style.transform = 'scale(1.05)';
    setTimeout(() => {
      emailLink.style.transform = 'scale(1)';
    }, 200);
    
    // Also populate print email when revealing
    if (printEmail) {
      printEmail.textContent = email;
    }
  } else {
    // Second click: Open email client
    emailLink.href = 'mailto:' + email;
    emailLink.onclick = null; // Remove click handler after second click
    // Trigger the mailto link
    window.location.href = 'mailto:' + email;
  }
}

// Only populate email for print when printing
window.addEventListener('beforeprint', function() {
  const parts = ['career', 'madalynriley', 'com'];
  const email = parts[0] + '@' + parts[1] + '.' + parts[2];
  const printEmail = document.getElementById('print-email');
  if (printEmail) {
    printEmail.textContent = email;
  }
});
