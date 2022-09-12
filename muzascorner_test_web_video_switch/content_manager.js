function clear_inject_container() {
    container = document.getElementById("inject_container");
    container.innerHTML = '';
}

function return_content(mode) {
    switch (mode) {

        case "home":
            var brute_home_content = document.createElement("div");;
            brute_home_content.innerHTML = '<div class="card w-96 bg-base-100 shadow-xl image-full" id="home_content_container"><figure><img src="src/images/origami_small.PNG" alt="Origami" /></figure><div class="card-body"><h2 class="card-title">Origami Freestyle out now!!</h2><p>Bro den willst du echt nicht verpassen!</p><div class="card-actions justify-end"><button class="btn btn-primary">Hör rein</button></div></div></div>';

            clear_inject_container();
            document.getElementById("inject_container").appendChild(brute_home_content);
            break;

        case "disco":
            clear_inject_container();
            break;

        case "contact":
            clear_inject_container();
            break;

        case "about":
            clear_inject_container();
            break;
    }
}