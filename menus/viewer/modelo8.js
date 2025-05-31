function render(menu, container) {
  container.className = "min-h-screen w-full bg-black text-orange-400 px-4 py-6 flex justify-center";

  container.innerHTML = `
    <div class="w-full max-w-md font-sans" id="app-view">
      <div id="vista-home">
        <div id="header" class="flex flex-col items-center mb-6">
          ${
            menu.logo
              ? `<img src="${menu.logo}" alt="Logo" class="max-h-40 object-contain mb-4">`
              : `<h1 class="text-3xl font-bold mb-1">${menu.nombre}</h1>`
          }
        </div>
        <div class="text-center text-sm text-gray-400 mb-6">${menu.descripcion || ""}</div>
        <div id="categorias" class="space-y-2"></div>
      </div>

      <div id="vista-categoria" class="hidden">
        <button class="text-sm mb-4 text-orange-300 hover:underline" onclick="volverHome()">← Volver</button>
        <h2 class="text-xl font-bold mb-4 text-orange-400" id="cat-title"></h2>
        <div id="cat-items" class="space-y-4"></div>
      </div>
    </div>
  `;

  const vistaHome = container.querySelector("#vista-home");
  const vistaCategoria = container.querySelector("#vista-categoria");
  const catTitle = container.querySelector("#cat-title");
  const catItems = container.querySelector("#cat-items");
  const categoriasDiv = container.querySelector("#categorias");

  // Agrupar por categoría
  const categorias = {};
  menu.items.forEach(item => {
    const cat = item.categoria || "Otros";
    if (!categorias[cat]) categorias[cat] = [];
    categorias[cat].push(item);
  });

  Object.entries(categorias).forEach(([cat, items]) => {
    const resumen = items.map(i => i.nombre).slice(0, 5).join(", ") + (items.length > 5 ? "..." : "");
    const btn = document.createElement("button");
    btn.className = "w-full text-left p-4 bg-[#111] rounded-lg hover:bg-[#1c1c1c] transition-colors";
    btn.innerHTML = `
      <div class="font-bold uppercase mb-1">${cat} ›</div>
      <div class="text-sm text-gray-400 truncate">${resumen}</div>
    `;
    btn.onclick = () => mostrarCategoria(cat, items);
    categoriasDiv.appendChild(btn);
  });

  function mostrarCategoria(nombreCat, items) {
    vistaHome.classList.add("hidden");
    vistaCategoria.classList.remove("hidden");
    catTitle.textContent = nombreCat;

    catItems.innerHTML = items.map(item => `
      <div class="flex justify-between border-b border-gray-800 pb-2">
        <div>
          <div class="font-semibold text-white">${item.nombre}</div>
          <div class="text-sm text-gray-500">${item.descripcion || ""}</div>
        </div>
        <div class="text-orange-400 font-semibold whitespace-nowrap pl-4">${item.precio.toFixed(2)}€</div>
      </div>
    `).join("");
  }

  window.volverHome = () => {
    vistaCategoria.classList.add("hidden");
    vistaHome.classList.remove("hidden");
  };
}

export { render };
