const background_list = [
    "https://i.imgur.com/wfM74ee.jpg",
    "https://i.imgur.com/ebeXprX.jpg",
    "https://i.imgur.com/9ivo7aS.jpg",
    "https://i.imgur.com/38WMBJj.jpg",
    "https://i.imgur.com/Heybh2w.jpg",
    "https://i.imgur.com/L8v3uJH.jpg",
    "https://i.imgur.com/P8ZRzyJ.jpg",
    "https://i.imgur.com/ErSy7V0.png",
    "https://i.imgur.com/sSuKjkK.jpg",
    "https://i.imgur.com/kIrHb5j.jpg",
    "https://i.imgur.com/kYmgYBx.jpg",
    "https://i.imgur.com/O1vqlCe.jpg",
]

const music_list = [
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-01%2520-%2520Inside%2520the%2520Wall.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-02%2520-%2520Dead%2520City.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-03%2520-%2520Follow%2520the%2520Light.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-04%2520-%2520Intruder.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-05%2520-%2520Guardian.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-06%2520-%2520The%2520Notebooks.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-07%2520-%2520Slums.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-08%2520-%2520Rooftops.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-09%2520-%2520Town%2520Square.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-10%2520-%2520Communication.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-11%2520-%2520Secret%2520Lab.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-12%2520-%2520Dead%2520End.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-13%2520-%2520Raft.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-14%2520-%2520Fuse.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-15%2520-%2520Roberto%2520is%2520Out.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-16%2520-%2520Sewers.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-17%2520-%2520Hatching.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-18%2520-%2520Ant%2520Village.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-19%2520-%2520Midtown.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-20%2520-%2520Outlaws.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-21%2520-%2520Trash%2520Zone.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-22%2520-%2520Rikonium.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-23%2520-%2520Cells.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-24%2520-%2520Stealth.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-25%2520-%2520Courtyard.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-26%2520-%2520Last%2520Night.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-27%2520-%2520Clean%2520City.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-28%2520-%2520Control%2520Room.mp3",
    "https://downloads.khinsider.com/game-soundtracks/album/stray-original-soundtrack-2022/1-29%2520-%2520Daybreak.mp3",
]

document.body.style.backgroundImage = `url(${background_list[Math.floor(Math.random() * background_list.length)]})`;

let current_track_index = Math.floor(Math.random() * music_list.length);
let audio = new Audio(music_list[current_track_index]);

function play_music() {
    audio.play();
}

function pause_music() {
    audio.pause();
    audio.currentTime = 0;
}

function switch_music() {
    let new_track_index = Math.floor(Math.random() * music_list.length);
    while(new_track_index === current_track_index) {
        new_track_index = Math.floor(Math.random() * music_list.length);
    }
    current_track_index = new_track_index;
    audio.src = music_list[current_track_index];
    audio.play();
}

play_music();

function switch_background() {
    let new_background = background_list[Math.floor(Math.random() * background_list.length)];
    while(new_background === document.body.style.backgroundImage) {
        new_background = background_list[Math.floor(Math.random() * background_list.length)];
    }
    document.body.style.backgroundImage = `url(${new_background})`;
}

function toggle_background_blur() {
    const background_blur = document.getElementById('background_blur');
    const background_overlay = document.getElementById('background_overlay');

    if(background_blur.innerText.toLowerCase() === "toggle background blur (off)") {
        background_blur.innerText = "Toggle Background Blur (On)";
        background_overlay.style.backdropFilter = "none";
    } else {
        background_blur.innerText = "Toggle Background Blur (Off)";
        background_overlay.style.backdropFilter = "blur(5px)";
    }
}

function toggle_logo_overlay() {
    const toggle_logo = document.getElementById('toggle_logo');
    const logo_overlay = document.getElementById('logo_overlay');

    if(toggle_logo.innerText.toLowerCase() === "toggle logo (off)") {
        toggle_logo.innerText = "Toggle Logo (On)";
        logo_overlay.style.display = "none";
    } else {
        toggle_logo.innerText = "Toggle Logo (Off)";
        logo_overlay.style.display = "block";
    }
}

var rain_effect_background = function() {
    var increment = 0;
    var drops = "";

    while (increment < 100) {
        var random_100 = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        var random_5 = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        increment += random_5;
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (random_5 + random_5 - 1 + 100) + '%; animation-delay: 0.' + random_100 + 's; animation-duration: 0.5' + random_100 + 's;"><div class="stem" style="animation-delay: 0.' + random_100 + 's; animation-duration: 0.5' + random_100 + 's;"></div><div class="splat" style="animation-delay: 0.' + random_100 + 's; animation-duration: 0.5' + random_100 + 's;"></div></div>';
    }

    rain_effect.innerHTML += drops;
}

rain_effect_background();

function toggle_sound_music() {
    const toggle_music = document.getElementById('toggle_music');

    if(toggle_music.innerText.toLowerCase() === "toggle music (off)") {
        toggle_music.innerText = "Toggle Music (On)";
        pause_music();
    } else {
        toggle_music.innerText = "Toggle Music (Off)";
        play_music();
    }
}

function toggle_sound_rain() {
    const toggle_rain = document.getElementById('toggle_rain');

    if(toggle_rain.innerText.toLowerCase() === "toggle rain (off)") {
        toggle_rain.innerText = "Toggle Rain (On)";
    } else {
        toggle_rain.innerText = "Toggle Rain (Off)";
    }

    let drop = document.getElementsByClassName('drop');
    for(let i = 0; i < drop.length; i++) {
        if(drop[i].style.display === "none") {
            drop[i].style.display = "block";
        } else {
            drop[i].style.display = "none";
        }
    }
}

function toggle_sound_thunder() {
    const toggle_thunder = document.getElementById('toggle_thunder');

    if(toggle_thunder.innerText.toLowerCase() === "toggle thunder (off)") {
        toggle_thunder.innerText = "Toggle Thunder (On)";
    } else {
        toggle_thunder.innerText = "Toggle Thunder (Off)";
    }
}