function myFunction() {
    let x = document.getElementById("myDiv");
    if (x!.style.display === "none") {
        x!.style.display = "block";
    } else {
        x!.style.display = "none";
    }
}
myFunction()