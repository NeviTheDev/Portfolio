function update(){
    get("header").innerHTML = location.pathname.split("/").pop().replace(".html", "").replace(/_/g, " ").toUpperCase();
}