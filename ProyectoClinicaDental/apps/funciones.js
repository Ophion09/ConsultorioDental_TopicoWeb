export function showAlert(mensaje, tipo) {
  const alertaError = document.querySelector(".bg-red-100");
  const alertaSucces = document.querySelector(".bg-green-100");

  const alerta = document.createElement("P");

  if (!alertaError && !alertaSucces) {
    // Si no hay una alerta previa, entonces crea una

    if (tipo === "error") {
      alerta.classList.add(
        "bg-red-100",
        "border-red-400",
        "text-red-700",
        "px-4",
        "py-3",
        "rounded",
        "max-w-lg",
        "mx-auto",
        "mt-6",
        "text-center"
      );
    } else {
      alerta.classList.add(
        "bg-green-100",
        "border-green-400",
        "text-green-700",
        "px-4",
        "py-3",
        "rounded",
        "max-w-lg",
        "mx-auto",
        "mt-6",
        "text-center"
      );
    }

    const alertaDiv = document.createElement("DIV");
    alertaDiv.classList.add("text-center");

    const alertaStrong = document.createElement("STRONG");
    alertaStrong.classList.add("font-bold");
    alertaStrong.textContent = `${tipo}!`;

    const alertaSpan = document.createElement("SPAN");
    alertaSpan.classList.add("block", "sm:inline");
    alertaSpan.textContent = mensaje;

    const formulario = document.querySelector("#formulario");

    alerta.appendChild(alertaStrong);
    alerta.appendChild(alertaSpan);
    alertaDiv.appendChild(alerta);

    formulario.appendChild(alertaDiv);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

export function isEmpty(obj) {
  return !Object.values(obj).every((input) => input !== ""); // Esto me dara true debido al ! del inicio, es un object method
}

export function limpiarHMTL(selector) {
  while (selector.firstChild) {
    // Mientras haya algo en ese selector
    selector.removeChild(selector.firstChild);
  }
}
export function showSpinner(selector) {
  limpiarHMTL(selector); // Esto es para que puedas pasar de parametro donde quieres que limpie antes de poner el spinner
  const spinner = document.createElement("DIV");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
    <div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div>`;

  selector.appendChild(spinner);
}
