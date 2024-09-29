document.addEventListener('DOMContentLoaded', function () {
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.backgroundColor = "#f8bbd0"; 
  document.body.style.color = "#333";

  // Header
  const header = document.createElement('header');
  header.style.backgroundColor = "#e6e6fa";
  header.style.color = "#333";
  header.style.padding = "10px 0";
  header.style.textAlign = "center";
  header.innerHTML = `
    <h1>Chloe Ting Fan Page</h1>
    <nav>
      <ul style="list-style: none; padding: 0;">
        <li style="display: inline; margin: 0 15px;">
          <a href="#home" style="color: #333; text-decoration: none;">Home</a>
        </li>
        <li style="display: inline; margin: 0 15px;">
          <a href="#myJourney" style="color: #333; text-decoration: none;">My Fitness Journey</a>
        </li>
        <li style="display: inline; margin: 0 15px;">
          <a href="#workouts" style="color: #333; text-decoration: none;">Workouts</a>
        </li>
        <li style="display: inline; margin: 0 15px;">
          <a href="#contact" style="color: #333; text-decoration: none;">Contact</a>
        </li>
      </ul>
    </nav>
  `;
  document.body.appendChild(header);

  // Main content area
  const main = document.createElement('main');
  main.id = "content";
  main.style.padding = "20px";
  document.body.appendChild(main);

  // Footer
  const footer = document.createElement('footer');
  footer.style.textAlign = "center";
  footer.style.padding = "10px";
  footer.style.backgroundColor = "#e6e6fa";
  footer.style.color = "#333";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = `<p>Follow me on <a href="https://chloeting.com/veems" target="_blank" style="color: #333;">My Chloe Ting Account</a></p>`;
  document.body.appendChild(footer);

  // Navigation function
  function navigateTo(page) {
    // Clear the main content area
    main.innerHTML = '';

    if (page === 'home') {
      main.innerHTML = `
        <h2>Welcome to My Chloe Ting Fan Page</h2>
        <p>This page is dedicated to my fitness journey and experiences with Chloe Ting's workouts.</p>
      `;
    } else if (page === 'myJourney') {
      main.innerHTML = `
        <h2>My Fitness Journey</h2>
        <p>I love to do full-body workouts, HIIT, abs exercises, and planks. Chloe Ting's workouts have become a major part of my daily routine and have helped me stay fit and healthy. Staying committed is key to reaching fitness goals!</p>
      `;
    } else if (page === 'workouts') {
      main.innerHTML = `
        <h2>Favorite Workouts</h2>
        <p>I love doing full-body workouts and weight loss workouts. My favorite challenges are Chloe Ting's "Shred" challenges. Staying active through daily workouts is important, but maintaining a nutritious diet is equally essential!</p>
      `;
    } else if (page === 'contact') {
      main.innerHTML = `
        <h2>Contact Me</h2>
        <p>Join me on my fitness journey by connecting through <a href="https://chloeting.com/veems" target="_blank">my profile</a>.</p>        <p>Let's connect! DM me if you'd like to do team challenges together, and let's support and motivate each other on this fitness journey!</p>
      `;
    }
  }

 
  function handleHashChange() {
    const page = location.hash.substring(1); 
    navigateTo(page || 'home'); 
  }

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();

});
