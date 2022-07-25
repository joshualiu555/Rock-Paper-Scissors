let element = document.getElementById("start-game");
if (element) {
    element.addEventListener("click", function() {
        let num = document.getElementById("first-to").value;
        if (!isNaN(num) && num.length > 0) {
            let username = document.getElementById("username").value;
            if (username.length === 0) username = "Player";
            let first_to = num;

            window.localStorage.setItem("username", username);
            window.localStorage.setItem("first_to", first_to);

            window.location.href = "game.html";
        } else {
            alert("Type in a number");
        }
    });
}
