const areaForm = document.querySelector('form[name="area"]') as HTMLFormElement;

areaForm
  ? areaForm.addEventListener("submit", results)
  : console.error("Form with name 'area' not found");

function results(event: Event) {
  event.preventDefault();

  let radiusInput = document.getElementById("radiusInput") as HTMLInputElement;

  const radius = radiusInput ? parseInt(radiusInput.value) : 0;
  const area = areaCircle(radius).toFixed(2);
  const circumference = circumferenceCircle(radius).toFixed(2);

  let areaInput = document.getElementById("areaInput") as HTMLInputElement;

  areaInput ? (areaInput.value = area) : 0;

  let circumferenceInput = document.getElementById(
    "circumferenceInput"
  ) as HTMLInputElement;

  circumferenceInput ? (circumferenceInput.value = circumference) : 0;
}

function circumferenceCircle(radius: number): number {
  return 2 * 3.14 * radius;
}

function areaCircle(radius: number): number {
  return 3.14 * (radius * radius);
}
