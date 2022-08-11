var home_button = document.getElementById("home_button");
var contact_button = document.getElementById("contact_button");
var discografie_button = document.getElementById("discografie_button");
var about_button = document.getElementById("about_button");
var active_scene = "home"

function home_button_set_background() {
    transition(active_scene, "home")
    document.body.style.backgroundImage = "url('/src/images/home.png')";
    active_scene = "home"
}

function contact_buttonn_set_background() {
    transition(active_scene, "contact")
    document.body.style.backgroundImage = "url('/src/images/contact.png')";
    active_scene = "contact"
}

function discografie_button_set_background() {
    transition(active_scene, "discografie")
    document.body.style.backgroundImage = "url('/src/images/disco.png')";
    active_scene = "diskografie"
}

function about_buttonn_set_background() {
    transition(active_scene, "about")
    document.body.style.backgroundImage = "url('/src/images/about.png')";
    active_scene = "contact"
}

function setupVideo() {
    var video = document.getElementById('myVideo')
    video.play();
    video.addEventListener('ended', function() {
        video.style.display = "none";
    })
}

function transition(current_scene, target_scene) {
    console.log(current_scene, " & ", target_scene)
        //setupVideo()
    const video = document.createElement('video');
    switch (current_scene) {
        case "home":
            switch (target_scene) {
                case "contact":
                    video.src = 'src/transitions/home_contact.mp4';
                    break;
                case "about":
                    video.src = 'src/transitions/home_about.mp4';
                    break;
                case "diskografie":
                    video.src = 'src/transitions/home_disco.mp4';
                    break;
            }
            break;
        case "contact":
            switch (target_scene) {
                case "home":
                    video.src = 'src/transitions/contact_home.mp4';
                    break;
                case "about":
                    video.src = 'src/transitions/contact_about.mp4';
                    break;
                case "diskografie":
                    video.src = 'src/transitions/contact_disco.mp4';
                    break;
            }
            break;
        case "about":
            switch (target_scene) {
                case "home":
                    video.src = 'src/transitions/about_home.mp4';
                    break;
                case "contact":
                    video.src = 'src/transitions/about_contact.mp4';
                    break;
                case "diskografie":
                    video.src = 'src/transitions/about_disco.mp4';
                    break;
            }
            break;
        case "diskografie":
            switch (target_scene) {
                case "home":
                    video.src = 'src/transitions/disco_home.mp4';
                    break;

                case "contact":
                    video.src = 'src/transitions/disco_contact.mp4';
                    break;

                case "about":
                    video.src = 'src/transitions/disco_about.mp4';
                    break;
            }
            break;


    }

    video.autoplay = true;
    video.controls = false;
    video.muted = true;
    const container = document.getElementById('vid-container');
    video.addEventListener('ended', function() {
        video.style.display = "none";
    })
    container.appendChild(video);
}