function toggleColorScheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  function checkSystemColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Call the function to check the system color scheme on page load
  checkSystemColorScheme();