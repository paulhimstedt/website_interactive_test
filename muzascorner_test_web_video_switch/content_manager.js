var a = function a() {

    function return_content(mode) {
        switch (mode) {

            case "home":
                var para = document.createElement("p");
                para.innerHTML = "home.";
                // Append to another element:
                document.getElementById("inject_container").appendChild(para);
                break;

            case "disco":
                // Create element:
                var para = document.createElement("p");
                para.innerHTML = "disco.";
                // Append to another element:
                document.getElementById("inject_container").appendChild(para);
                break;

            case "contact":
                var para = document.createElement("p");
                para.innerHTML = "contact.";
                // Append to another element:
                document.getElementById("inject_container").appendChild(para);
                break;

            case "about":
                var para = document.createElement("p");
                para.innerHTML = "about.";
                // Append to another element:
                document.getElementById("inject_container").appendChild(para);
                break;
        }
    }
};
module.exports.a = a;
//return_content("disco")