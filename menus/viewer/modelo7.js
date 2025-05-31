function render(menu, container) {
  // Fondo negro completo, centrado y con espaciado horizontal cómodo
  container.className = "min-h-screen w-full bg-black text-yellow-400 px-4 sm:px-6 md:px-8 py-6 flex justify-center";

  container.innerHTML = `
    <div class="w-full max-w-3xl font-sans" id="app-view">
      <div id="vista-home">
        <h1 class="text-4xl font-bold mb-4 text-center text-yellow-400">${menu.nombre || "Menú"}</h1>
        <p class="text-center mb-6 text-gray-400">${menu.descripcion || ""}</p>
        <div id="categorias"></div>
      </div>

      <div id="vista-categoria" class="hidden">
        <button class="text-sm mb-4 text-yellow-300 hover:underline" onclick="volverHome()">&#8592; Volver</button>
        <h2 class="text-2xl font-bold mb-4 text-yellow-400" id="cat-title"></h2>
        <div id="cat-items" class="space-y-4"></div>
      </div>
    </div>
  `;

  const categoriasDiv = container.querySelector("#categorias");
  const vistaHome = container.querySelector("#vista-home");
  const vistaCategoria = container.querySelector("#vista-categoria");
  const catTitle = container.querySelector("#cat-title");
  const catItems = container.querySelector("#cat-items");

  const categorias = {};
  menu.items.forEach(item => {
    const cat = item.categoria || 'Otros';
    if (!categorias[cat]) categorias[cat] = [];
    categorias[cat].push(item);
  });

  Object.entries(categorias).forEach(([cat, items]) => {
    const btn = document.createElement("button");
    btn.className = "block w-full text-left py-3 px-4 border-b border-gray-700 text-yellow-300 hover:bg-gray-800 transition-colors uppercase font-bold tracking-wide";
    btn.textContent = cat;
    btn.onclick = () => mostrarCategoria(cat, items);
    categoriasDiv.appendChild(btn);
  });

  function mostrarCategoria(nombreCat, items) {
    vistaHome.classList.add("hidden");
    vistaCategoria.classList.remove("hidden");
    catTitle.textContent = nombreCat;
    catItems.innerHTML = items.map(item => `
      <div class="border-b border-gray-700 pb-2">
        <div class="flex justify-between items-center">
          <span class="font-medium text-white">${item.nombre}</span>
          <span class="text-yellow-300 font-semibold">${item.precio.toFixed(2)} €</span>
        </div>
        <p class="text-sm text-gray-400 mt-1">${item.descripcion || ''}</p>
      </div>
    `).join('');
  }

  window.volverHome = () => {
    vistaCategoria.classList.add("hidden");
    vistaHome.classList.remove("hidden");
  };
}

export { render };
