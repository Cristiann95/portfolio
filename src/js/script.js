const navBar = document.querySelector('.navbar');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop && scrollTop > 0) {
        navBar.classList.add('hide')
    } else if (scrollTop < lastScrollTop || scrollTop === 0) {
        navBar.classList.remove('hide');
    }

    lastScrollTop = scrollTop;
});


// Email
const email = document.getElementById('email'); 

const nameEmail = 'cristian.wktp';
const domain = 'gmail.com';
email.href = `mailto:${nameEmail}@${domain}`