{
    const tasks = [
        // {
        //     content: "jakies zadanie",
        //     done: false,
        // },
        // {
        //     content: "jakies drugie zadanie",
        //     done: true,
        // },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const clearNewTaskInput = (newTaskInput) => {
        newTaskInput.focus();
        newTaskInput.value = "";
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const render = () => {
        let htmlString = "";

        for (const work of tasks) {
            htmlString += `
                <li class="task__element  ${work.done ? "task__element--done" : ""}">
                <button class="task__input js-done">${work.done ? "<i class=\"fa fa-check\" aria-hidden=\"true\"></i>" : ""}</button>
                <p class="task__label"> ${work.content} </p>
                <button class="task__button js-remove"><i class="fa fa-trash-o"></i></button></li>        
          `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);

            })

        });


        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);
            })

        });

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskInput = document.querySelector(".js-newTask");
        const newTaskContent = newTaskInput.value.trim();

        if (newTaskContent === "") {
            newTaskInput.focus();
        } else {
            addNewTask(newTaskContent);
            clearNewTaskInput(newTaskInput);
        }
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit)

    };
    init();
}