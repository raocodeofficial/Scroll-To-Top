const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  }else{
    scrollBtn.style.display = "none";
  }
});

function scrollToTop(){
    window.scrollTo({top:0,behavior:"smooth"})
}
