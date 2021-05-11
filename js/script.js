{
    const tasks = [{
            content: "jakies zadanie",
            done: false,
        },
        {
            content: "jakies drugie zadanie",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="task__element"><button class="task__input"><i class="fa fa-check" aria-hidden="true"></i></button>
                <p class="task__label" for="scales"> ${task.content} </p>
                <button class="task__button"><i class="fa fa-trash-o"></i></button></li>
                
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render()
    };
    init();
}