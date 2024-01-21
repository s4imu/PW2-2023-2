"use strict";
const areaForm = document.querySelector('form[name="area"]');
areaForm
    ? areaForm.addEventListener("submit", results)
    : console.error("Form with name 'area' not found");
function results(event) {
    event.preventDefault();
    let radiusInput = document.getElementById("radiusInput");
    const radius = radiusInput ? parseInt(radiusInput.value) : 0;
    const area = areaCircle(radius).toFixed(2);
    const circumference = circumferenceCircle(radius).toFixed(2);
    let areaInput = document.getElementById("areaInput");
    areaInput ? (areaInput.value = area) : 0;
    let circumferenceInput = document.getElementById("circumferenceInput");
    circumferenceInput ? (circumferenceInput.value = circumference) : 0;
}
function circumferenceCircle(radius) {
    return 2 * 3.142 * radius;
}
function areaCircle(radius) {
    return 3.142 * (radius * radius);
}
