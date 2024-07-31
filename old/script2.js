document.addEventListener("DOMContentLoaded", () => {
    const lightSwitch = document.getElementById("lightSwitch");
    const brightnessControl = document.getElementById("brightness");
    const colorPicker = document.getElementById("colorPicker");
    const lightStatus = document.getElementById("lightStatus");
    const cameraOverlay = document.getElementById("cameraOverlay");

    lightSwitch.addEventListener("change", () => {
        updateLightStatus();
    });

    brightnessControl.addEventListener("input", () => {
        updateLightStatus();
    });

    colorPicker.addEventListener("input", () => {
        updateLightStatus();
    });

    function updateLightStatus() {
        if (lightSwitch.checked) {
            const brightness = brightnessControl.value;
            const color = colorPicker.value;
            lightStatus.style.backgroundColor = color;
            lightStatus.style.opacity = brightness / 100;
        } else {
            lightStatus.style.backgroundColor = "#fff";
            lightStatus.style.opacity = 1;
        }
    }

    // Mock camera feed update
    setInterval(() => {
        cameraOverlay.style.visibility = cameraOverlay.style.visibility === "hidden" ? "visible" : "hidden";
    }, 1000);
});
