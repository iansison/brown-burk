const toggle = document.querySelector('.btn-nav');

const btnToggle = document.querySelector('.mobile-nav-toggle');

const nav = document.querySelector('.primary-navigation');

const companyLogo = document.querySelector('.company-logo');

console.log(`JS started`)




function addClassOnResize() {
    const minWidth = 1120;
  
    function handleResize() {
      if (window.innerWidth <= minWidth) {
        nav.classList.add('hidden');
      } else {
        nav.classList.remove('hidden');
      }
    }
  
    // Initial check when the page loads
    handleResize();
  
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
  }
  
  // Call the function
  addClassOnResize();



let toggleValue = 0;

toggle.addEventListener('click',(e) => {
    if(e.target.classList.contains('mobile-nav-toggle')) {
        if(!toggleValue) {
            nav.classList.remove('hidden');
            btnToggle.style.background = `url('img/close-btn.png')`
            toggleValue = 1;
        } else {
            nav.classList.add('hidden');
            btnToggle.style.background = `url('img/hamburger-menu.png')`
            toggleValue = 0;            
        }
    }
    return;
})


companyLogo.addEventListener('click', (e) => {
    // console.log(e.target.closest('.bb-logo'));
    const logo = e.target.closest('.bb-logo');
    if(!logo) return;
    window.location.href = 'index.html'
    // if(!e.target.closest('.bb-logo')) return;
})






nav.addEventListener('click', (e) => {
    console.log(`I'm still working`)
    const active = e.target.closest('.nav-link')
    if(!active) return;
    console.log(active)
    const links = document.querySelectorAll('.nav-link');
    links.forEach(el => {
        el.classList.remove('active')
    })
    active.classList.add('active');
    setTimeout( () => {
      if(active.dataset.link === 'Microlabs') window.location.href = `https://www.microlabsltd.com/`;
      else window.location.href = `${active.dataset.link}.html`
    },500)
})




// toggle.addEventListener('click',(e) => {
//     if(e.target.classList.contains('mobile-nav-toggle')) {
//         nav.classList.add('hidden');
//     }
// })


// toggle.addEventListener('click',(e) => {
//     if(e.target.classList.contains('mobile-nav-toggle')) {
//         nav.classList.remove('hidden');
//         btnToggle.style.background = `url('resources/close-btn.png')`
//     }
// })