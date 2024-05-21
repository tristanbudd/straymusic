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

document.body.style.backgroundImage = `url(${background_list[Math.floor(Math.random() * background_list.length)]})`;

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

const volume_slider = document.getElementById('volume_slider');
music_audio.volume = volume_slider.value;
rain_audio.volume = volume_slider.value;
var is_playing_music = true;
var is_playing_rain = true;
var currentTrackIndex = 0;

music_audio.addEventListener('ended', function() {
    currentTrackIndex = (currentTrackIndex + 1) % music_audio.children.length;

    music_audio.src = music_audio.children[currentTrackIndex].src;
    music_audio.play();
});

function switch_music() {
    currentTrackIndex = (currentTrackIndex + 1) % music_audio.children.length;

    music_audio.src = music_audio.children[currentTrackIndex].src;
    music_audio.play();
}

function toggle_sound_music() {
    const toggle_music = document.getElementById('toggle_music');
    const music_audio = document.getElementById('music_audio');

    if(toggle_music.innerText.toLowerCase() === "toggle music (off)") {
        toggle_music.innerText = "Toggle Music (On)";
    } else {
        toggle_music.innerText = "Toggle Music (Off)";
    }

    if (is_playing_music) {
        music_audio.pause();
        is_playing_music = false;
    } else {
        music_audio.play();
        is_playing_music = true;
    }
}

volume_slider.addEventListener('input', function() {
    music_audio.volume = volume_slider.value;
    rain_audio.volume = volume_slider.value / 2;
});

function toggle_sound_rain() {
    const rain_audio = document.getElementById('rain_audio');
    const toggle_rain = document.getElementById('toggle_rain');

    if(toggle_rain.innerText.toLowerCase() === "toggle rain (off)") {
        toggle_rain.innerText = "Toggle Rain (On)";
    } else {
        toggle_rain.innerText = "Toggle Rain (Off)";
    }

    if (is_playing_rain) {
        rain_audio.pause();
        is_playing_rain = false;
    } else {
        rain_audio.play();
        is_playing_rain = true;
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

window.onload = function() {
    const toggle_dropdown = document.getElementById('toggle_dropdown');
    const drop_down_settings = document.getElementById('drop_down_settings');
    const toggle_audio = document.getElementById('toggle_audio');
    const music_audio = document.getElementById('music_audio');
    const rain_audio = document.getElementById('rain_audio');

    toggle_dropdown.addEventListener('click', function () {
        if (drop_down_settings.style.display === "none") {
            drop_down_settings.style.display = "block";
        } else {
            drop_down_settings.style.display = "none";
        }
    });

    toggle_audio.addEventListener('click', function () {
        if (toggle_audio.innerHTML === "<div class=\"toggle-audio-button\"><i class=\"fa-solid fa-play\" style=\"padding-left: 11px; padding-right: 11px;\" aria-hidden=\"true\"></i></div>") {
            toggle_audio.innerHTML = "<div class=\"toggle-audio-button\"><i class=\"fa-solid fa-pause\" style=\"padding-left: 12px; padding-right: 13px;\" aria-hidden=\"true\"></i></div>";
            music_audio.play();
            rain_audio.play();
            rain_audio.volume = 0.5;
        } else {
            toggle_audio.innerHTML = "<div class=\"toggle-audio-button\"><i class=\"fa-solid fa-play\" style=\"padding-left: 11px; padding-right: 11px;\" aria-hidden=\"true\"></i></div>";
            music_audio.pause();
            rain_audio.pause();
        }
    });
}
