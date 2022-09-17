const urlInString = 'https://m.olx.ua/d/uk/obyavlenie/prodam-invalidnuyu-kolyasku-IDOJM5U.html'
console.log(new URL(urlInString))




// const navLinks = document.querySelectorAll('a');

// const handleLocation = async () => {
//     const path = window.location.pathname

//     const route = routes[path]
//     const html = await fetch(route).then(data => data.text())
//     const contentContainer = document.querySelector('.content')

//     contentContainer.innerHTML = html
// }

// const handleNavLink = (e) => {
//     e.preventDefault();
//     history.pushState({}, '', e.target.href);
//     handleLocation()
//   }

// navLinks.forEach((link) => link.addEventListener('click', handleNavLink));


// const routes = {
//     "/": () => document.createElement('h1', ' hello world'),
//     "/about": "/about.html",
//     "/contacts": "/contacts.html",
// }



// window.onpopstate = handleLocation

// handleLocation()
