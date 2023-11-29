const myProjects = [
    {
        name: "Tourism Website ",
        description: "The Website is written for <span class='improtantText'> Unilabi </span> project",
        image_url: "imgs/projects/tourism.png",
        code: "https://github.com/peiraki/Unilab",
        live: "https://peiraki.github.io/Unilab/index.html"
    },
    {
        name: "Stop Smoking",
        description: "Here Are 50 Reasons to Stop Smoking",
        image_url: "imgs/projects/noSmoke.png",
        code: "https://github.com/peiraki/noSmoke",
        live: "https://peiraki.github.io/noSmoke/"
    },
    {
        name: "Puzzle",
        description: "Here Is Puzzle Game",
        image_url: "imgs/projects/puzzle.png",
        code: "https://github.com/peiraki/PuzzleNT",
        live: "https://peiraki.github.io/PuzzleNT/"
    },
    {
        name: "Rock Paper Scissors",
        description: "Rock Paper Scissors Game",
        image_url: "imgs/projects/rockPaperScissors.png",
        code: "https://github.com/peiraki/rockPaperScissors",
        live: "https://peiraki.github.io/rockPaperScissors"
    },
    {
        name: "Tic Tac Toe",
        description: "Tic Tac Toe Game",
        image_url: "imgs/projects/ticTacToe.png",
        code: "https://github.com/peiraki/ticTacToe",
        live: "https://peiraki.github.io/ticTacToe"
    },
    {
        name: "Bero && Urban",
        description: "Bero Store and Urban Store Collaboration",
        image_url: "imgs/projects/bero.png",
        code: "https://github.com/peiraki/Bero-Urban",
        live: "https://peiraki.github.io/Bero-Urban/"
    },
    {
        name: "Calculator",
        description: "Online calculator for quick calculations",
        image_url: "imgs/projects/calc.png",
        code: "https://github.com/peiraki/Calc",
        live: "https://peiraki.github.io/Calc/"
    },
    {
        name: "Color Picker",
        description: "Pick, Save and Delete Colors You Want",
        image_url: "imgs/projects/colorPicker.png",
        code: "https://github.com/peiraki/colorPicker/",
        live: "https://peiraki.github.io/colorPicker/"
    },
    {
        name: "Jumping Man",
        description: "This Is My First JS Game",
        image_url: "imgs/projects/runningMan.png",
        code: "https://github.com/peiraki/Jumping-Man---First-Game-JS",
        live: "https://peiraki.github.io/Jumping-Man---First-Game-JS/"
    },
]
// shuffling arrays function
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// call project to go on web
shuffle(myProjects)

let myProLength = myProjects.length
console.log(myProLength)
// console.log(myProjects[1].name)
for (let index = 0; index < 4; index++) {
    const element = myProjects[index];
    projectsBox.innerHTML += `
        <div class="projectBox">
        <h5>${myProjects[index].name}</h5>
        <img src="${myProjects[index].image_url}" alt="${myProjects[index].name} image">
        <p>${myProjects[index].description}</p>
        <div class="btnsBox">
            <a href="${myProjects[index].code}" target="_blank"> <input type="button"value="See Code"></a>
            <a href="${myProjects[index].live}" target="_blank"> <input type="button"value="Live"></a>
        </div>
        </div>
    `
}
