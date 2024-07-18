document.addEventListener("DOMContentLoaded", () => {
    const room = document.getElementById("room");
    const walls = document.getElementById("walls");
    const wallColorInput = document.getElementById("wallColor");

    wallColorInput.addEventListener("input", (e) => {
        walls.style.backgroundColor = e.target.value;
    });

    document.getElementById("addChair").addEventListener("click", () => {
        addFurniture("chair");
    });

    document.getElementById("addTable").addEventListener("click", () => {
        addFurniture("table");
    });

    function addFurniture(type) {
        const furniture = document.createElement("div");
        furniture.classList.add("furniture", type);
        furniture.style.top = "50px";
        furniture.style.left = "50px";
        room.appendChild(furniture);

        let isDragging = false;
        let offsetX, offsetY;

        furniture.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                furniture.style.top = `${e.clientY - room.offsetTop - offsetY}px`;
                furniture.style.left = `${e.clientX - room.offsetLeft - offsetX}px`;
            }
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });
    }
});
