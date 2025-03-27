function clikedbtn(){
    alert("Did you click bro?");
}

arr = {"w": "tom-1.mp3", "a" : "tom-2.mp3", "s" : "tom-3.mp3", "d" : "tom-4.mp3","j" : "crash.mp3","k":"snare.mp3","l":"kick-bass.mp3"} ;

for (let el in arr) {
    document.querySelector("."+el).addEventListener("click",()=>{
        let adpath = 'sounds/' + arr[el] ;
        let ad = new Audio(adpath) ;
        ad.play();
    }) ;

}

document.addEventListener("keypress",(event)=>{

    let adpath = 'sounds/' + arr[event["key"]] ;
    let ad = new Audio(adpath) ;
    ad.play();
})

