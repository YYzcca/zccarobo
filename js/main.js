const svg = document.querySelector('.svg');
const hide = document.querySelector('.hide');

svg.addEventListener('mouseover', () => {
    hide.style.opacity = "1";
    hide.style.visibility = "visible";
    hide.style.transform = "translateY(-100%)";
})

svg.addEventListener('mouseout', () => {
    hide.style.visibility = "hidden";
    hide.style.opacity = "0";
    hide.style.transform = "translateY(-80%)";
})



// rightAr.addEventListener('click', () => {
//     slider.style.transform = "translate(-66%)";
//     polosa.style.right = "auto";
//     polosa.style.left = "40%";
// });

// leftAr.addEventListener('click', () => {
//     slider.style.transform = "none"
//     polosa.style.left = "0";
//     polosa.style.right = "auto";
// });




const leftAr = document.getElementById('left');
const rightAr = document.getElementById('right');
const slider = document.querySelector('.slider-row');
const polosa = document.querySelector('.polosa');
const radioBtn1 = document.getElementById('poloskaPosition1');
const radioBtn2 = document.getElementById('poloskaPosition2');
const radioBtn3 = document.getElementById('poloskaPosition3');
const radioAll = document.querySelectorAll('.input-polos')
let slideOffset = 0;
let offset = 0;
const mas = document.querySelectorAll('.slide-card-hide');
const masAll = document.querySelectorAll('.slide-card');
const leng = mas.length;
const lengAll = masAll.length;
let zig = 100/lengAll;
let heil = (100/lengAll)*3;
let allProc = zig * lengAll;

radioAll.forEach((e) => {
    e.style.width = 100/leng + '%';
    e.addEventListener('click', () => {
        offset = 0;
        slideOffset = 0;
        if(radioBtn1.checked){
            slideOffset = 0;
            polosa.style.left = offset + '%';
            slider.style.right = slideOffset + 'px';
        }
        if(radioBtn2.checked){
            offset = offset + zig;
            slideOffset = slideOffset + 390;
            polosa.style.left = offset + '%';
            slider.style.right = slideOffset + 'px';
        }
        if(radioBtn3.checked){
            offset = offset + zig * leng;
            slideOffset = slideOffset + 390 * leng;
            polosa.style.left = offset + '%';
            slider.style.right = slideOffset + 'px';
        }
    })
})
function polos() {
    polosa.style.width = heil + '%';
}
polos();



rightAr.addEventListener('click', () => {
    slideOffset = slideOffset + 390;
    offset = offset + zig;
    if (slideOffset > 390 * leng){
        slideOffset = 0;
    }
    slider.style.right = slideOffset + 'px';
    if(offset > allProc - heil + 1){
        offset = 0;
    }
    polosa.style.left = offset + '%';
})

leftAr.addEventListener('click', () => {
    slideOffset = slideOffset - 390;
    offset = offset - zig;
    if (slideOffset < 0){
        slideOffset = 390 * leng;
    }
    slider.style.right = slideOffset + 'px';
    if(offset < 0){
        offset = allProc - heil + 1;
    }
    polosa.style.left = offset + '%';
})

const modalBtn = document.querySelectorAll('.modal-a');
const html = document.getElementById('modal-id');
const closeBtn = document.querySelector('.close-btn');
const modal = document.getElementById('modal');

window.onload = function() {
    window.location.hash = '';
};

html.addEventListener('click', () => {
    html.style.opacity = "0";
    html.style.visibility = "hidden";
})

const inCardImg = document.querySelectorAll('#inCardImg');
const inModalImg = document.getElementById('inModalImg');
const modalName = document.getElementById('modalName')

modalBtn.forEach(function(e){
    e.addEventListener('click', () => {
        html.style.opacity = "0.6";
        html.style.visibility = "visible";

        inCardImg.forEach((i) => {
            let imgSrc = e.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src');
            let name = e.previousElementSibling.previousElementSibling.innerText;
            let job = e.previousElementSibling.innerText;
            inModalImg.setAttribute("src", imgSrc);
            modalName.innerText = name;
            modalName.nextElementSibling.innerText = job;
        })
    })
})

closeBtn.addEventListener('click', () => {
    html.style.opacity = "0";
    html.style.visibility = "hidden";
})

const adBtn = document.getElementById('modalNavOne');
const expBtn = document.getElementById('modalNavTwo');
const expopBtn = document.getElementById('opTwo');
const adopBtn = document.getElementById('opOne');
const aducation = document.querySelector('.aducation');
const exp = document.querySelector('.exp');
const modalInputAll = document.querySelectorAll('.modal-input');
const opAll = document.getElementById('mySelect');

    opAll.addEventListener('change', () => {
        aducation.style.transform = "translateX(0)";
        exp.style.transform = "translateX(0)";
        if (expopBtn.selected){
            aducation.style.display = "none";
            exp.style.display = "inline";
        }
        if (adopBtn.selected){
            aducation.style.display = "inline";
            exp.style.display = "none";
        }
    })

modalInputAll.forEach((e) => {
    e.addEventListener('change', () => {
        if (adBtn.checked){
            aducation.style.position = "static";
            aducation.style.transform = "none";
            exp.style.position = "absolute";
            exp.style.transform = "translateX(150%)";
        }
        if (expBtn.checked){
            aducation.style.position = "absolute";
            aducation.style.transform = "translateX(-150%)";
            exp.style.position = "static";
            exp.style.transform = "none";
        }
    })
})

const menuBtnCont = document.querySelector('.brgr-itms');
const menuBtn = document.getElementById('brgrBtn');
const mobileMenuNav = document.querySelectorAll('#mobileMenuNav');
const num = document.querySelector('.nav-hidden-ic');

mobileMenuNav.forEach((e) => {
    e.addEventListener('click', () => {
        menuBtnCont.classList.remove('brgr-close');
        menuBtn.style.position = "relative";
        menuBtn.style.right = "0";
        menuBtn.style.top = "0";
        num.style.display = "inline-block";
        document.body.style.overflow = 'scroll';
    })
})

menuBtn.addEventListener('click', () => {
    if (menuBtnCont.classList.contains('brgr-close')){
        num.style.display = "inline-block";
        menuBtn.style.position = "relative";
        menuBtn.style.right = "0";
        menuBtn.style.top = "0";
        menuBtnCont.classList.remove('brgr-close');
        menuBtn.href = "#modal-id";
        if (window.innerWidth <= 576){
            document.body.style.overflow = 'scroll';
        }
    } else {
        num.style.display = "none";
        menuBtnCont.classList.add('brgr-close');
        menuBtn.href = "#mobile-menu";
        if (window.innerWidth <= 576){
            document.body.style.overflow = 'hidden';
        } else {
            menuBtn.style.position = "fixed";
            menuBtn.style.right = "20px";
            menuBtn.style.top = "20px";
        }
    };
})


