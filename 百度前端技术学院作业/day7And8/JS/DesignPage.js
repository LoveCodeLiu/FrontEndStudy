//代码参考于https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Practical_positioning_examples
const tabs = document.querySelectorAll('.tabs > div');
const banners = document.querySelectorAll('.panels > div');
for(let i = 0; i < tabs.length;i++) {
    const tab = tabs[i];
    setTabHandler(tab, i);
}
function setTabHandler(tab, pos) {
    tab.onclick = function() {
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active-tab");
        }
        tab.classList.add("active-tab");

        for(let i = 0; i < banners.length; i++) {
            banners[i].classList.remove("active-panel")
        }
        banners[pos].classList.add("active-panel");
    }
}

const cards = document.querySelectorAll('.select .card > div');
const pages = document.querySelectorAll('.content > div');
for(let i = 0; i < cards.length;i++) {
    const card = cards[i];
    setCardHandler(card, i);
}
function setCardHandler(card, pos) {
    card.onclick = function() {
        for(let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("active-card");
        }
        card.classList.add("active-card");

        for(let i = 0; i < pages.length; i++) {
            pages[i].classList.remove("active-page")
        }
        pages[pos].classList.add("active-page");
    }
}
