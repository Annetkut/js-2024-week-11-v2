// Получаем элементы
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Функция для добавления задачи
function addTask() {
    // Получаем текст из поля ввода
    let taskText = taskInput.value.trim();

    // Проверяем, что текст не пустой
    if(taskText !== ""){
        // Создаём новый элемент списка
        let newTask = document.createElement("li");

        // Устанавливаем текст элемента
        newTask.textContent = taskText;
        
        // Добавляем элемент в список
        taskList.append(newTask);
        
        // Очищаем поле ввода
        taskInput.value = "";

        // Добавляем обработчик события клика на элемент списка
        newTask.addEventListener("click", toggleTaskCompletion);
    }

    else {
        alert("Введите задачу перед добавлением!");
    }
};

// Функция для отметки задачи как выполненной
function toggleTaskCompletion() {
    this.classList.toggle("completed");
}

// Добавляем задачу при клике на кнопку
addButton.addEventListener("click", addTask);

// Добавляем задачу при нажатии Enter
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});