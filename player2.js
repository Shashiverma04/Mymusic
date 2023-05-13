var music=[["Saami.jpg","Saami Saami Hindi - Pushpa.mp3","Saami","| Sunidhi C |"],
    ["Muskurahat.jpg","Muskurahat - Arijit Singh.mp3","Muskurahat","| Arijit Singh |"],
    ["tummere.jpg","Tum Mere - Darshan Raval.mp3","Tum Mere","| Darshan Raval |"]];

var music_name=document.getElementById('name');
var writer_name=document.getElementById('writer');
var Audio=document.getElementById('aud');
var pause=document.getElementById('cle');
var slider=document.getElementById('Seeker');
var pic=document.getElementById('imag');
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let volum=document.getElementById("Seekers");
const volume_button=document.getElementById("volume_button");

var i=0;
let timer;

window.onload=function()
{
    minut();
}

// forward fun
function forward() {
    var vid_currentTime = Audio.currentTime;
    Audio.currentTime = vid_currentTime + 5;
}

// backward fun
function backward() {
    var vid_currentTime = Audio.currentTime;
    Audio.currentTime = vid_currentTime - 5;
}

// change pause button and play and pause music fun
function change() 
{
    if (pause.className == "glyphicon glyphicon-play") 
    {
        pause.className = "glyphicon glyphicon-pause";
        rotate();
        playAudio();   
    } 
    else 
    {
        pause.className = "glyphicon glyphicon-play";
        pauseAudio();
        stop_rotate();
    }
    minut();

    timer=setInterval(ranger,1000);
}

// change play pause button
function changefun() {
    if (pause.className == "glyphicon glyphicon-pause") 
    {
        pause.className = "glyphicon glyphicon-play";
    }
}

// change duration fun
function change_duration() {
    slider_position=Audio.duration*(slider.value/100);
    Audio.currentTime=slider_position;
}

// next fun
function next() {
    if (i<music.length-1) 
    {
        i++;
        music_name.innerHTML=music[i][2]
        writer_name.innerHTML=music[i][3]
        pic.src=music[i][0];
        aud.src=music[i][1];
    }

    else if (i==music.length-1)
    {
        i=0;
        music_name.innerHTML=music[i][2];
        writer_name.innerHTML=music[i][3];
        pic.src=music[i][0];
        aud.src=music[i][1];
    }   
    change_image();
    minut();
    console.log(i);
}

// back song fun
function back() {
    if(i>0)
    {
        i--;
        music_name.innerHTML=music[i][2]
        writer_name.innerHTML=music[i][3]
        pic.src=music[i][0];
        aud.src=music[i][1];            
    }

    else if (i==0)
    {
        i=music.length-1;
        writer_name.innerHTML=music[i][3];
        music_name.innerHTML=music[i][2];
        pic.src=music[i][0];
        aud.src=music[i][1];
    }
    minut();
    change_image();
    console.log(i);       
}

// Play audio fun
function playAudio() 
{ 
    Audio.play(); 
} 

// Pause audio fun
function pauseAudio() 
{ 
    Audio.pause(); 
    pic.classList.remove("create");
}

// Range
function ranger() {
    var position=0;
    if(!isNaN(Audio.duration))
    {
        position=Audio.currentTime*(100/Audio.duration);
        slider.value=position;
        // minut();
    }
    minut();   
}

// seconds and minutes
function minut() {
    let curr_min=Math.floor(Audio.currentTime/60);
    let curr_sec=Math.floor(Audio.currentTime-curr_min*60);
    let dur_min=Math.floor(Audio.duration/60);
    let dur_sec=Math.floor(Audio.duration-dur_min*60);

    if (curr_sec<10) 
    {
        curr_sec='0'+curr_sec;
    }
    if(curr_min<10)
    {
        curr_min='0'+curr_min;
    }
    if (dur_min<10) 
    {
        dur_min='0'+dur_min;
    }
    if (dur_sec<10) 
    {
        dur_sec='0'+dur_sec;
    }

    curr_time.textContent=curr_min+" : "+curr_sec;
    total_duration.textContent=dur_min+" : "+dur_sec;
}

// Download song
 function rotate() {
    pic.style.animationPlayState="running";
    pic.classList.add("clear");
 }

// Stop Rotate
 function stop_rotate() {
     pic.style.animationPlayState="paused";
 }

// Change Image
 function change_image() {
    pic.style.animationPlayState="paused";
    pic.classList.remove("clear");
 }

// Reload
function reload() {
    Audio.load();
    // change();
    pause.className = "glyphicon glyphicon-play";
    pic.classList.remove("clear");
}


// VOLUME change
function volume_change() {
    Audio.volume = volum.value/100;    
    if (Audio.volume>0.5 ) 
    {
        volume_button.className="glyphicon glyphicon-volume-up";
    }
    else if(Audio.volume<=0.5 && Audio.volume!=0)
    {
        volume_button.className="glyphicon glyphicon-volume-down";
    }
    else if (Audio.volume==0) 
    {
        volume_button.className="glyphicon glyphicon-volume-off";
    }
}

// Volume on change
function volume() {
    if (volum.style.display == "inline") 
    {
        volum.style.display="none";
    }
    else
    {
        volum.style.display="inline";
    }
    
}