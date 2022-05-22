function addUser(){
    window.location = "pgc.html"
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
}