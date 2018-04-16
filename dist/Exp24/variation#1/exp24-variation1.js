'use strict';

var showSticky = 3000;
var hideSticky = 13200;
var currentScroll = void 0;

var $stickyShareTools = document.querySelector('.sticky-share-tools');
var $newIconsSticky = document.querySelector('.sticky-share-wrapper .sticky-share ul.new-icons');
var $iconsSticky = document.querySelector('.sticky-share-wrapper .sticky-share ul');

var $stickyHeaderTemplate = '';

var $stickyBannerTemplate = '<div class="sticky-banner-container">hola sticky</div>';

function changeText() {
    var title = doccument.querySelector('header h1.headline').innerHTML;

    document.querySelector('.sticky-banner-title').innerHTML = title;
}

function addStickyBanner() {
    var container = document.querySelector('main');

    var template = document.createElement($stickyBannerTemplate);

    document.querySelector('.article-closer').insertBefore(template, container);
}

document.addEventListener('DOMContentLoaded', function () {
    changeText();
    addStickyBanner();

    window.addEventListener('scroll', function () {
        currentScroll = window.scrollY || document.documentElement.scrollTop;

        if ($stickyShareTools.classList.contains('_show')) {
            console.log('tiene show');
        }

        if (currentScroll >= showSticky) {}
        console.log(currentScroll);
    });
}, false);
//# sourceMappingURL=exp24-variation1.js.map