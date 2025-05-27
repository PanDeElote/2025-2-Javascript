"use strict";

let students = [];

window.onload = function () { //WINDOW ONLOAD es lo que se carga antes que todo lo demás
  const stored = localStorage.getItem("students");
  if (stored) {
    students = JSON.parse(stored); //Para convetir todas tus weas guardadas DE STRING A OBJETOS
    displayStudents();
    updateAverage();
  }
}

function addStudent() { //Función para únicamente ingresar datos
  const name = document.getElementById("nameInput").value.trim();
  if (name === "" || name === isNaN) {
    alert("Debes de capturar un nombre válido");
    return;
  }
  const grade = parseFloat(document.getElementById("gradeInput").value);
  if (grade > 100 || grade < 0) { //NOTA GENERAL: es mejor que lo que vaya dentro del IF sean las restricciones
    alert("Debes de capturar una calificación válida");
    return;
  }

  const student = {
    name,
    grade,
    status: grade >= 70 ? "Passed" : "Failed",  //OPERADOR TERNARIO. Hace lo mismo que un IF
  };

  students.push(student);

  saveToLocalStorage();
  displayStudents();
  updateAverage();
}

function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = ``;

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${students[i].name} - ${students[i].grade} - ${students[i].status} </p>
    `;
    list.appendChild(li);
  }
}

function updateAverage() {
  if (students.length === 0) { //NOTA GENERAL: Asegurarse siempre que el array NO está vacío
    return;
  }
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].grade;
  }
  let average = total / students.length;

  document.getElementById("averageDisplay").textContent = `Average Grade: ${average.toFixed(2)}`;
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}