document.addEventListener("DOMContentLoaded", () => {
  const plants = document.querySelectorAll(".plant");

  plants.forEach((plant) => {
    plant.setAttribute("draggable", true);

    plant.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });

  const terrarium = document.getElementById("terrarium");

  terrarium.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  terrarium.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const plant = document.getElementById(id);
    const rect = terrarium.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    plant.style.position = "absolute";
    plant.style.left = `${e.clientX}px`; // 마우스 커서 X 위치
    plant.style.top = `${e.clientY}px`; // 마우스 커서 Y 위치

    // 크기 고정
    plant.style.width = "100px"; // 필요한 크기로 설정
    plant.style.height = "auto"; // 비율에 맞추어 조정할 경우

    terrarium.appendChild(plant);
  });
});
