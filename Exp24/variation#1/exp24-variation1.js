let showSticky = 3000;
let hideSticky = 13200;
let currentScroll;

const $stickyShareTools = document.querySelector('.sticky-share-tools');
const $newIconsSticky = document.querySelector('.sticky-share-wrapper .sticky-share ul.new-icons');
const $iconsSticky = document.querySelector('.sticky-share-wrapper .sticky-share ul');

const $stickyHeaderTemplate =  ``;

const $stickyBannerTemplate = `<div class="sticky-banner-container">hola sticky</div>`;

function changeText() {
    let title = doccument.querySelector('header h1.headline').innerHTML;

    document.querySelector('.sticky-banner-title').innerHTML = title;
}

function addStickyBanner() {
    let container = document.querySelector('main');

    let template = document.createElement($stickyBannerTemplate);

    document.querySelector('.article-closer').insertBefore(template, container);
    
}

document.addEventListener('DOMContentLoaded', function() {
    changeText();
    addStickyBanner();
    
    window.addEventListener('scroll', function() {
        currentScroll = window.scrollY || document.documentElement.scrollTop;

        if ( $stickyShareTools.classList.contains('_show') ) {
            console.log('tiene show');
        }

        if ( currentScroll >= showSticky ) {
            
        }
        console.log(currentScroll);
    })
}, false);