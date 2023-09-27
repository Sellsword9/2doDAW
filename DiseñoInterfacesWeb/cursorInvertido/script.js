const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});


function toggleColorScheme() {
    document.body.classList.toggle('dark-mode');
  }

function checkSystemColorScheme() {
    console.log('checkSystemColorScheme() called');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
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




