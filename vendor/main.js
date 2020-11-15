const body=document.querySelector('#cont');
cont.addEventListener('mouseenter',eventSound);
cont.addEventListener('mouseleave',eventSoundEnd);




function eventSound(event) {
    const audio=document.querySelector("#oynatici1");
         audio.play(); 
    
    
};
function eventSoundEnd(event) {
    const audio=document.querySelector("#oynatici1");
    audio.pause();
    
}