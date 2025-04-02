var crsr=document.querySelector("#cursor")
var crsrblur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-10+"px"
    crsr.style.top=dets.y-10+"px"
    crsrblur.style.left=dets.x-200+"px"
    crsrblur.style.top=dets.y-200+"px"
})

 

gsap.to("#nav",{
    backgroundColor:"black",
    height:"60px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:1
    }
    

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})