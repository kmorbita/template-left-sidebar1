let toggle = false;
function toggleSidebar() {
    let aside = document.querySelector("aside")
    let header = document.querySelector(".header")
    let link = document.querySelectorAll(".link")
    let sidebar_li = document.querySelectorAll(".sidebar li")
    let sidebar_title = document.querySelector(".sidebar-title")
    let sidebar_header = document.querySelector(".sidebar-header")
    toggle = !toggle;
    if (toggle) {
        aside.style.width = "5%";
        // header.style.width = "95%";
        sidebar_li.forEach((item) => {
            item.style.justifyContent = "center";
        })
        sidebar_title.style.display = "none";
        sidebar_header.style.justifyContent = "center";
        links(link, "none");
    } else {
        aside.style.width = "15%";
        // header.style.width = "85%";
        sidebar_li.forEach((item) => {
            item.style.justifyContent = "";
        })
        sidebar_title.style.display = "block";
        sidebar_header.style.justifyContent = "space-between";
        links(link, "block");
    }
}

function links(link, style) {
    for (let i of link) {
        i.style.display = style;
    }
}