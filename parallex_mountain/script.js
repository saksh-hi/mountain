var popup=document.querySelector(".main-pop")
var logo=document.querySelector(".logo")
var bigtxt=document.querySelector("big-txt")



var popupp=document.querySelector(".pop-up")
var popuppp=document.querySelector(".trips")
var popup2=document.querySelector(".main-pop2")
var popupp2=document.querySelector(".pop-up2")
var popuppp2=document.querySelector(".trips2")

var popup3=document.querySelector(".main-pop3")
var popupp3=document.querySelector(".pop-up3")
var popuppp3=document.querySelector(".trips3")
var flag = 0
popuppp.addEventListener("mouseover", function() {
    if (flag === 0) {
        popup.style.display="block"
        logo.style.display="none"
        // bigtxt.style.display="none"


        flag=1
    } else {
        popup.style.display="none"
        logo.style.display="block"
        // bigtxt.style.display="block"

        


flag=0
       
    }
})
// second one
var flag = 0
popuppp2.addEventListener("mouseover", function() {
    if (flag === 0) {
        popup2.style.display="block"
        logo.style.display="none"
       


        flag=1
    } else {
        popup2.style.display="none"
        logo.style.display="block"
     


flag=0
       
    }
})
var flag = 0
popuppp3.addEventListener("mouseover", function() {
    if (flag === 0) {
        popup3.style.display="block"
        logo.style.display="none"
       


        flag=1
    } else {
        popup3.style.display="none"
        logo.style.display=""

flag=0
       
    }
})



const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        start: "top top",
        scrub: 1
    }
})


gsap.from(".big-txt", {
    delay: 0.4,
    dusration: 1,
    opacity: 0,
    y: -60,
})
gsap.from(".para img", {
    delay: 1,
    dusration: 1,
    opacity: 0,
    y: -60,
})
const elem = gsap.utils.toArray(".parallex").forEach(elem => {
    const depth = elem.dataset.depth;
    const shifting = -(depth * (elem.offsetHeight * .9));
    t1.to(elem, {
            y: shifting,
            ease: "none"
        }, 0)
        .to("#overlay", {
            opacity: 0,
            ease: "none"
        }, 0)

});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});





gsap.from(".pg2-txt,.num1,.pg2-txtt", {
    opacity: 0,
    y: 60,
    scrollTrigger: {
        trigger: ".pg2-txt,.num1,.pg2-txtt",
        scroller: "body",
        start: "top 70%"
    }
})
gsap.from(".pg2-txtt1", {
    opacity: 0,
    y: 60,
    scrollTrigger: {
        trigger: ".pg2-txtt1 ",
        scroller: "body",
        start: "top 70%"
    }
})
gsap.from(".pg4-txt", {
    opacity: 0,
    y: 60,
    scrollTrigger: {
        trigger: ".pg4-txt ",
        scroller: "body",
        start: "top 70%"
    }
})
gsap.from(".nav,.nav2,.nav3,.placeholder,.icons", {
    opacity: 0,
    y: 60,
    scrollTrigger: {
        trigger: ".nav,.nav2,.nav3,.placeholder,.icons ",
        scroller: "body",
        start: "top 70%"
    }
})