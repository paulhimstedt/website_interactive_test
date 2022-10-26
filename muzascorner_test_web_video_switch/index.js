var home_button = document.getElementById("home_button");
var contact_button = document.getElementById("contact_button");
var disco_button = document.getElementById("disco_button");
var about_button = document.getElementById("about_button");
var vid_conatiner = document.getElementById("vid-container");
var active_scene = "home";
var path = window.location.pathname;
var page = path.split("/").pop();
var nav_left = document.getElementById("bot_nav_left");
var nav_right = document.getElementById("bot_nav_right");
var main_content = document.getElementById("main_content")
var show_icon = document.getElementById("hero_content_invisible_icon");
var hide_icon = document.getElementById("hero_content_visible_icon");

nav_left.addEventListener("click", bot_nav_left);
nav_right.addEventListener("click", bot_nav_right)

pagename = page.split(".")[0]

function hide_hero_content() {
    show_icon.classList.remove("passive");
    hide_icon.classList.add("passive");
    main_content.classList.add("passive");
}

function show_hero_content() {
    show_icon.classList.add("passive");
    hide_icon.classList.remove("passive");
    main_content.classList.remove("passive");
}

function bot_nav_left() {
    console.log("left", active_scene)
    switch (active_scene) {
        case "home":
            disco_button_set_background();
            break;
        case "disco":
            about_buttonn_set_background();
            break;
        case "about":
            contact_buttonn_set_background();
            break;
        case "contact":
            home_button_set_background();
            break;
    }
}

function bot_nav_right() {
    console.log("right", active_scene)
    switch (active_scene) {
        case "home":
            contact_buttonn_set_background();
            break;
        case "contact":
            about_buttonn_set_background();
            break;
        case "about":
            disco_button_set_background();
            break;
        case "disco":
            home_button_set_background();
            break;
    }
}

function home_button_set_background() {
    if (active_scene != "home") {
        transition(active_scene, "home");
        active_scene = "home";
        return_content("home");
    }
}

function contact_buttonn_set_background() {
    if (active_scene != "contact") {
        transition(active_scene, "contact");
        active_scene = "contact";
        return_content("contact");
    }
}

function disco_button_set_background() {
    if (active_scene != "disco") {
        transition(active_scene, "disco");
        active_scene = "disco";
        return_content("disco");
    }
}

function about_buttonn_set_background() {
    if (active_scene != "about") {
        transition(active_scene, "about");
        active_scene = "about";
        return_content("about");
    }
}

function setupVideo() {
    var video = document.getElementById('myVideo')
    video.play();
    video.addEventListener('ended', function() {
        video.style.display = "none";
    })
}

function updateBackground(newBG) {
    newBG = String(newBG)
    document.getElementById("vid-container").style.backgroundImage = "url('src/images/" + newBG + ".png')";
}

function transition(current_scene, target_scene) {
    //console.log(current_scene, " & ", target_scene)
    setupVideo()
    var video = document.createElement('video');
    var bottom_pagination_content = document.getElementById("bottom_pagination_text");
    bottom_pagination_content.innerHTML = "home"
    bottom_pagination_content.innerHTML = target_scene;

    switch (current_scene) {
        case "home":
            switch (target_scene) {
                case "contact":
                    video.src = 'src/transitions/home_contact.mp4';
                    updateBackground(target_scene);
                    break;
                case "about":
                    video.src = 'src/transitions/home_about.mp4';
                    updateBackground(target_scene);
                    break;
                case "disco":
                    updateBackground(target_scene);
                    video.src = 'src/transitions/home_disco.mp4';
                    break;
            }
            break;
        case "contact":
            switch (target_scene) {
                case "home":
                    video.src = 'src/transitions/contact_home.mp4';
                    updateBackground(target_scene);
                    break;
                case "about":
                    video.src = 'src/transitions/contact_about.mp4';
                    updateBackground(target_scene);
                    break;
                case "disco":
                    video.src = 'src/transitions/contact_disco.mp4';
                    updateBackground(target_scene);
                    break;
            }
            break;
        case "about":
            switch (target_scene) {
                case "home":
                    video.src = 'src/transitions/about_home.mp4';
                    updateBackground(target_scene);
                    break;
                case "contact":
                    video.src = 'src/transitions/about_contact.mp4';
                    updateBackground(target_scene);
                    break;
                case "disco":
                    video.src = 'src/transitions/about_disco.mp4';
                    updateBackground(target_scene);
                    break;
            }
            break;
        case "disco":
            switch (target_scene) {
                case "home":
                    video.src = 'src/transitions/disco_home.mp4';
                    updateBackground(target_scene);
                    break;

                case "contact":
                    video.src = 'src/transitions/disco_contact.mp4';
                    updateBackground(target_scene);
                    break;

                case "about":
                    video.src = 'src/transitions/disco_about.mp4';
                    updateBackground(target_scene);
                    break;
            }
            break;
    }
    const container = document.getElementById('vid-container');
    video.addEventListener('ended', function() {
        container.removeChild(video);
    })
    video.autoplay = true;
    video.controls = false;
    video.muted = true;
    video.style.height = "100%";
    video.style.width = "100%";
    video.style.top = "0";
    video.style.left = "0";
    video.style.bottom = "0";
    video.style.right = "0";
    container.appendChild(video);
}