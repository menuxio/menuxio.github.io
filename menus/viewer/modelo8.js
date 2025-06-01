function render(menu, container) {
  const config = menu.configuracion || {};
  const {
    backgroundColor = "#000000",
    textColor = "#f97316",
    titleColor = "#f97316",
    descriptionColor = "#9ca3af",
    categoryColor = "#f97316",
    itemTitleColor = "#ffffff",
    itemDescriptionColor = "#6b7280",
    priceColor = "#f97316",
    fontFamily = "sans",
    titleSize = "text-3xl",
    categorySize = "text-xl",
    itemSize = "text-base"
  } = config;

  container.className = `min-h-screen w-full px-4 py-6 flex justify-center`;
  container.style.backgroundColor = backgroundColor;
  container.style.color = textColor;

  container.innerHTML = `
    <div class="w-full max-w-md font-${fontFamily}" id="app-view">
      <div id="vista-home">
        <div id="header" class="flex flex-col items-center mb-6">
          ${
            menu.logo
              ? `<img src="${menu.logo}" alt="Logo" class="w-full max-h-60 object-cover rounded-md shadow mb-4">`
              : `<h1 class="${titleSize} font-bold mb-1" style="color: ${titleColor}">${menu.nombre}</h1>`
          }
        </div>
        <div class="text-center text-sm mb-6" style="color: ${descriptionColor}">${menu.descripcion || ""}</div>
        <div id="categorias" class="space-y-2"></div>
      </div>

      <div id="vista-categoria" class="hidden">
        <button class="text-sm mb-4 hover:underline" style="color: ${categoryColor}" onclick="volverHome()">← Volver</button>
        <h2 class="${categorySize} font-bold mb-4" id="cat-title" style="color: ${categoryColor}"></h2>
        <div id="cat-items" class="space-y-4"></div>
      </div>
    </div>
  `;

  const vistaHome = container.querySelector("#vista-home");
  const vistaCategoria = container.querySelector("#vista-categoria");
  const catTitle = container.querySelector("#cat-title");
  const catItems = container.querySelector("#cat-items");
  const categoriasDiv = container.querySelector("#categorias");

  const categorias = menu.categorias || [];

  categorias.forEach(categoria => {
    const nombreCat = categoria.nombre || "Otros";
    const items = categoria.item || [];

    const resumen = items.map(i => i.nombre).slice(0, 5).join(", ") + (items.length > 5 ? "..." : "");
    const btn = document.createElement("button");
    btn.className = "w-full text-left p-4 rounded-lg transition-colors";
    btn.style.backgroundColor = "#111";
    btn.style.color = textColor;
    btn.innerHTML = `
      <div class="font-bold uppercase mb-1" style="color: ${categoryColor}">${nombreCat} ›</div>
      <div class="text-sm truncate" style="color: ${descriptionColor}">${resumen}</div>
    `;
    btn.onclick = () => mostrarCategoria(nombreCat, items);
    categoriasDiv.appendChild(btn);
  });

  function mostrarCategoria(nombreCat, items) {
    vistaHome.classList.add("hidden");
    vistaCategoria.classList.remove("hidden");
    catTitle.textContent = nombreCat;

    catItems.innerHTML = items.map(item => `
      <div class="flex justify-between border-b pb-2" style="border-color: #1f2937;">
        <div>
          <div class="font-semibold ${itemSize}" style="color: ${itemTitleColor}">${item.nombre}</div>
          <div class="text-sm" style="color: ${itemDescriptionColor}">${item.descripcion || ""}</div>
        </div>
        <div class="font-semibold whitespace-nowrap pl-4" style="color: ${priceColor}">${item.precio.toFixed(2)}€</div>
      </div>
    `).join("");
  }

  window.volverHome = () => {
    vistaCategoria.classList.add("hidden");
    vistaHome.classList.remove("hidden");
  };
}

export { render };
export const useLogo = true;
