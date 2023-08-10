function openFaq(n){
    const faq1 = document.querySelector('.faq1');
    const faq2 = document.querySelector('.faq2');
    const faq3 = document.querySelector('.faq3');
    const faq4 = document.querySelector('.faq4');
    const faq5 = document.querySelector('.faq5');
    const svg1 = document.querySelector('.svg-icon1');
    const svg2 = document.querySelector('.svg-icon2');
    const svg3 = document.querySelector('.svg-icon3');
    const svg4 = document.querySelector('.svg-icon4');
    const svg5 = document.querySelector('.svg-icon5');



    if(n==1){
        svg1.classList.toggle('svg-active')
        faq1.classList.toggle('active')
    }
    if(n==2){
        svg2.classList.toggle('svg-active')
        faq2.classList.toggle('active')
    }
    if(n==3){
        svg3.classList.toggle('svg-active')
        faq3.classList.toggle('active')
    }
    if(n==4){
        svg4.classList.toggle('svg-active')
        faq4.classList.toggle('active')
    }
    if(n==5){
        svg5.classList.toggle('svg-active')
        faq5.classList.toggle('active')
    }

}