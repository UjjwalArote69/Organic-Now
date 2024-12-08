gsap.registerPlugin(ScrollTrigger);

function locomotive() {

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locomotive();

gsap.registerPlugin(ScrollTrigger);

function initializeLocomotiveScroll() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        
    });

    // Horizontal scroll for section5
    ScrollTrigger.create({
        trigger: ".section5 .horizontal-scroll",
        scroller: ".smooth-scroll",
        start: "top top",
        // markers: true,
        end: () => document.querySelector(".horizontal-scroll").scrollWidth,
        scrub: true,
        // pin: ".section5",
        invalidateOnRefresh: true,
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

initializeLocomotiveScroll();


