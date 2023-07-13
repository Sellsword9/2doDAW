function toggleColorScheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  function checkSystemColorScheme() {
    console.log('checkSystemColorScheme() called');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.toggle('dark-mode');
      console.log('checkSystemColorScheme() toggled');
    }
    else
    {
        console.log('checkSystemColorScheme() not toggled');
    }
  }
  
  // Call the function to check the system color scheme on page load
  checkSystemColorScheme();