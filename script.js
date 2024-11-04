var tl = gsap.timeline()

tl.from(".header-top-left, .header-top-right,.navbar-brand,.collapse, .welcome-hero-txt,.list-topics-content",{
    opacity:0,
    duration:1,
    delay:.1,
    stagger:1
})


gsap.from("#page #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:180
})
gsap.from("#works .works-content",{
    
    scale:0,
    delay:1,
    duration:1,
    rotate:180,
    scrollTrigger:{
        trigger:"#works .works-content",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})


gsap.from(".single-explore-item",{
    opacity:5,
    delay:1,
    duration:1,
    y:60
})

