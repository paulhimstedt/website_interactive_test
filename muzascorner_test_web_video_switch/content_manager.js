var current = "home";

function return_content(mode) {

    switch (mode) {

        case "home":
            console.log("home")
            document.getElementById(current + "_container").classList.add("passive");
            current = "home";
            document.getElementById("home_container").classList.remove("passive");
            break;

        case "disco":
            console.log("disco")
            document.getElementById(current + "_container").classList.add("passive");
            current = "disco";
            document.getElementById("disco_container").classList.remove("passive");
            break;

        case "contact":
            console.log("contact")
            document.getElementById(current + "_container").classList.add("passive");
            current = "contact";
            document.getElementById("contact_container").classList.remove("passive");
            break;

        case "about":
            console.log("about")
            document.getElementById(current + "_container").classList.add("passive");
            current = "about";
            document.getElementById("about_container").classList.remove("passive");
            break;
    }
}