var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener("DOMContentLoaded", function() {
	const video = document.getElementById("player1");
	const volume = document.getElementById("volume");
	const play = document.getElementById("play");
	const pause = document.getElementById("pause")
	const slower = document.getElementById("slower")
	const faster = document.getElementById("faster");
	const skip = document.getElementById("skip");
	const mute = document.getElementById("mute");
	const slider = document.getElementById("slider");
	const vintage = document.getElementById("vintage")
	const orig = document.getElementById("orig")

	video.autoplay = false;
	video.loop = false;

	function updateVolume() {
		volume.innerHTML = `${Math.round(video.volume * 100)}%`;
	  }

	play.addEventListener("click", function() {
	if (video.paused) {
		video.play();
		updateVolume();
	}
	});

	pause.addEventListener("click", function() {
		if (!video.paused) {
			video.pause();
		}
	})

	slower.addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("Current speed is " + video.playbackRate);
	})

	faster.addEventListener("click", function() {
		video.playbackRate *= 1/0.9; 
		console.log("Current speed is " + video.playbackRate);
	});

	skip.addEventListener("click", function() {
		if (video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
		  } else {
			video.currentTime += 10};
		console.log("Current location is " + video.currentTime);
	});

	mute.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            mute.innerHTML = 'Mute';
        } else {
            video.muted = true;
            mute.innerHTML = 'Unmute'};
    });

	slider.addEventListener("input", function() {
		video.volume = slider.value/100;
        volume.innerHTML = `${Math.round(slider.value)}%`;
	});

	vintage.addEventListener("click", function(){
		video.classList.add("oldSchool");
	})

	orig.addEventListener("click", function(){
		video.classList.remove("oldSchool");	
		
	})
})