var video;

window.addEventListener("load", function() {
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	// console.log("Play Video");
    video.play();
    document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is", video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is", video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    // if (video.currentTime === video.duration) {
    //     video.currentTime = 0;
    // }
    console.log("Video current time is", video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted === true) {
        video.muted = false;
        this.innerHTML = "Mute";
    }
    else {
        video.muted = true;
        this.innerHTML = "Unmute";
    }
})

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.getElementById("volume").innerHTML = this.value + "%";
})

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
})
