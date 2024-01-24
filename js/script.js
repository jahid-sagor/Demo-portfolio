let bac_top = document.querySelector(".bac-to-top")
let menu_bg = document.querySelector(".menu-bg")
let icon = document.querySelector(".bac-to-top i")


// ==================================type js start================================
let type = document.querySelector(".type")
let typetext = type.innerHTML;
let typeArr = typetext.split("")
type.innerHTML = ""
let typing = 0;

function typejs(){
    if(typing < typetext.length){
          type.innerHTML += typetext.charAt(typing)
          typing++
          typeArr = typetext.split("")
    }else{
          typeArr.pop()
          type.innerHTML = typeArr.join("")
          if(typeArr.length == 0){
              typing = 0;
          }
      }
  }
  setInterval(()=>{
      typejs()
  
  },150)

// ===================================type js end===================================

// ================================= back to top start==============================
bac_top.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
    
})

window.addEventListener("scroll",()=>{
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
        icon.style.display = "block"
    }else{
        icon.style.display = "none"
    }
})

// =============================== back to top end===============================

//========================= extra banner start===================================

window.addEventListener("scroll",()=>{
    let scrolling = this.window.scrollY
    
    if(scrolling > 730){
        menu_bg.classList.add("extra")
    }else{
        menu_bg.classList.remove("extra")
    }
})
//================================ extra banner  end===============================