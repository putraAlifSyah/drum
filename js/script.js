window.addEventListener('keydown', function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const kotak=document.querySelector(`div[data-key="${e.keyCode}"]`)
    kotak.classList.add("playing")
    if(!audio){
        return
    }
    audio.currentTime=0
    audio.play()

})
const kotak=document.querySelectorAll(`div[data-key]`)
kotak.forEach(e=>e.addEventListener('transitionend', function(e){
    // if(e.properyName!=="transform")return;
    this.classList.remove("playing")
}))