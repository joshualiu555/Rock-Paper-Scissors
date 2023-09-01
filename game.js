let username = window.localStorage.getItem("username");

function addElement(find_id, tag, text, add_id) {
    let element = document.createElement(tag);
    element.appendChild(document.createTextNode(text));
    if (add_id.length > 0) element.id = add_id;
    document.getElementById(find_id).appendChild(element);
}

addElement("players-scores", "h1", username, "");
addElement("players-scores", "h1", "CPU", "");
addElement("players-scores", "h1", "0", "user_score");
addElement("players-scores", "h1", "0", "cpu_score");

function end_game(message) {
    result.innerHTML = message + " Click any key to restart.";
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("first_to");
    document.addEventListener("keydown", () => window.location.href = "landing.html");
}

let first_to = parseInt(window.localStorage.getItem("first_to"), 10);
let user_score = 0;
let cpu_score = 0;

let choices = ["rock", "paper", "scissor"];
let result = document.getElementById("result");
function find_winner(user_choice) {
    if (choice !== -1) {
        let cpu_choice = Math.floor(Math.random() * 3);
        let winner = (3 + user_choice - cpu_choice) % 3;
        if (winner === 1) {
            user_score++;
            if (user_score === first_to) end_game("YOU WIN!!!");
            else result.innerHTML = `You win! You chose ${choices[user_choice]} and the CPU chose ${choices[cpu_choice]}.`;
        } else if (winner === 2) {
            cpu_score++;
            if (cpu_score === first_to) end_game("YOU LOSE :(");
            else result.innerHTML = `You lose! You chose ${choices[user_choice]} and the CPU chose ${choices[cpu_choice]}.`;
        } else {
            result.innerHTML = `It's a tie! You both chose ${choices[user_choice]}.`;
        }
        document.getElementById("user_score").innerHTML = user_score.toString();
        document.getElementById("cpu_score").innerHTML = cpu_score.toString();

        for (let i = 0; i < 3; i++) icons[choice].style.border = "none";
        choice = -1;
    }
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let choice = -1;
let icons = [rock, paper, scissor];

function select(idx, element) {
    for (let i = 0; i < 3; i++) icons[i].style.border = "none";
    choice = idx;
    element.style.border = "4px solid white";
    element.style.borderRadius = "50%";
}

rock.addEventListener("click", function() {select(0, rock)});
paper.addEventListener("click", function() {select(1, paper)});
scissor.addEventListener("click", function() {select(2, scissor)});

let shoot = document.getElementById("shoot");
shoot.addEventListener("click", function() {find_winner(choice)});
