const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = e.target.getAttribute('href');
        Router.go(url);
      });
    })
    // event handler for URL changes
    window.addEventListener('popstate', (e) => {
      Router.go(e.state.route, false)
    });

    // check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Navigating to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;

    switch(route) {
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = "Home Page";
        break;
      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = "Order Page";
        break;
    }

    if (pageElement) {
      let main = document.querySelector("main");
      main.innerHTML = '';
      main.appendChild(pageElement);
      window.scrollTo(0,0);
    }
    
  }
}

export default Router;