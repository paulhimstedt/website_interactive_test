var home_button = document.getElementById("home_button");
var contact_button = document.getElementById("contact_button");
var disco_button = document.getElementById("disco_button");
var about_button = document.getElementById("about_button");
var vid_conatiner = document.getElementById("vid-container");
var active_scene = "home"
    //document.body.style.backgroundImage = "url('/src/images/home.png')";

function home_button_set_background() {
    transition(active_scene, "home")
        //document.body.style.backgroundImage = "url('/src/images/home.png')";
    active_scene = "home"
}

function contact_buttonn_set_background() {
    transition(active_scene, "contact")
        //document.body.style.backgroundImage = "url('/src/images/contact.png')";
    active_scene = "contact"
}

function disco_button_set_background() {
    transition(active_scene, "disco")
        //document.body.style.backgroundImage = "url('/src/images/disco.png')";
    active_scene = "disco"
}

function about_buttonn_set_background() {
    transition(active_scene, "about")
        //document.body.style.backgroundImage = "url('/src/images/about.png')";
    active_scene = "contact"
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
        //document.body.style.backgroundImage = "url('src/images/" + newBG + ".png')";
        //document.body.style.backgroundImage = "url('src/images/" + newBG + ".png')";
    document.getElementById("vid-container").style.backgroundImage = "url('src/images/" + newBG + ".png')";
    //document.getElementById("myImage").style.backgroundImage = "url('src/images/" + newBG + ".png')";
}

function transition(current_scene, target_scene) {
    console.log(current_scene, " & ", target_scene)
    setupVideo()
    var video = document.createElement('video');
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
            console.log("removed image ");
        })
        /*sniff for existing vids*/
    let numb = document.getElementById("vid-container").childElementCount;
    let childs = document.getElementById("vid-container").childNodes
    console.log(numb)
        /*
        if (numb != 1) {
            for (let index = 1; index < numb; index++) {

                console.log(childs[index]);
                container.remove(video)
                    //replaceChildren
            }
        }*/
    video.autoplay = true;
    video.controls = false;
    video.muted = true;
    video.style.height = "100%";
    video.style.width = "100%";
    video.style.objectFit = "cover";
    video.style.objectPosition = "center center";
    video.style.top = "0";
    video.style.left = "0";
    video.style.right = "0";
    video.style.bottom = "0";

    container.appendChild(video);
}