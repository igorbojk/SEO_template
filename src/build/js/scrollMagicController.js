var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '.priorities-title',
    triggerHook: 0.8
})
    .setClassToggle('.priorities-title', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.priorities .sliders-container',
    triggerHook: 0.8
})
    .setClassToggle('.priorities .sliders-container', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.principles h3',
    triggerHook: 0.8
})
    .setClassToggle('.principles h3', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.principles .principles-container',
    triggerHook: 0.8
})
    .setClassToggle('.principles .principles-container', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.club-is-not h3',
    triggerHook: 0.8
})
    .setClassToggle('.club-is-not h3', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.club-is-not .not-items-container',
    triggerHook: 0.8
})
    .setClassToggle('.club-is-not .not-items-container', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.clubs-life .clubs-life-title',
    triggerHook: 0.8
})
    .setClassToggle('.clubs-life .clubs-life-title', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.clubs-life h6',
    triggerHook: 0.8
})
    .setClassToggle('.clubs-life h6', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.clubs-life h6',
    triggerHook: 0.8
})
    .setClassToggle('.clubs-life h6', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.clubs-life .events h3',
    triggerHook: 0.8
})
    .setClassToggle('.clubs-life .events h3', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.clubs-life .events .row',
    triggerHook: 0.8
})
    .setClassToggle('.clubs-life .events .row', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.club-house-slider-container',
    triggerHook: 0,
    duration: $('.house-info').height() - 140
})
    .setPin('.club-house-slider-container', {pushFollowers: false})
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.house-info',
    triggerHook: 0.8
})
    .setClassToggle('.house-info', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.upcoming-events h3',
    triggerHook: 0.8
})
    .setClassToggle('.upcoming-events h3', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.upcoming-events h6',
    triggerHook: 0.8
})
    .setClassToggle('.upcoming-events h6', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.upcoming-events h3.m-b-72',
    triggerHook: 0.8
})
    .setClassToggle('.upcoming-events h3.m-b-72', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.upcoming-events .events-container',
    triggerHook: 0.8
})
    .setClassToggle('.upcoming-events .events-container', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.advice-presentation',
    triggerHook: 0.8
})
    .setClassToggle('.advice-presentation', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.club-advice h3',
    triggerHook: 0.8
})
    .setClassToggle('.club-advice h3', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.club-advice .advice-slider-container',
    triggerHook: 0.8
})
    .setClassToggle('.club-advice .advice-slider-container', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.blog',
    triggerHook: 0.8
})
    .setClassToggle('.blog', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.partners h3',
    triggerHook: 0.8
})
    .setClassToggle('.partners h3', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.partners .flex-container',
    triggerHook: 0.8
})
    .setClassToggle('.partners .flex-container', 'active')
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.projects h3',
    triggerHook: 0.8
})
    .setClassToggle('.projects h3', 'active')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.projects .row',
    triggerHook: 0.8
})
    .setClassToggle('.projects .row', 'active')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.clubs-formats h3',
    triggerHook: 0.8
})
    .setClassToggle('.clubs-formats h3', 'active')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.clubs-formats .format-row',
    triggerHook: 0.8
})
    .setClassToggle('.clubs-formats .format-row', 'active')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.action-info .action-info-row',
    triggerHook: 0.8
})
    .setClassToggle('.action-info .action-info-row', 'active')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.recent-events .container',
    triggerHook: 0.8
})
    .setClassToggle('.recent-events .container', 'active')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.club-advice h5',
    triggerHook: 0.8
})
    .setClassToggle('.club-advice h5', 'active')
    // .addIndicators()
    .addTo(controller);

