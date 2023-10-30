// === Profil Start

// Infinite Scrolling
const innerScroller = document.querySelector('.inner-scroller');
const scrollerContent = Array.from(innerScroller.children);

scrollerContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute('aria-hidden', true);
    innerScroller.appendChild(duplicatedItem);
})

// === Profil End