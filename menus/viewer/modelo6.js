function render(menu, container) {
  // Limpiar estilos previos y aplicar fondo oscuro correctamente
  container.className = "min-h-screen w-full bg-gradient-to-br from-gray-800 to-black text-white flex justify-center px-4 sm:px-6 md:px-10 py-8";

  container.innerHTML = `
    <div class="w-full max-w-6xl">
      <h1 id="nombre" class="text-4xl font-bold mb-6 text-center tracking-wider text-yellow-400">${menu.nombre || "Menú"}</h1>
      <p id="descripcion" class="text-center mb-10 text-gray-300">${menu.descripcion || ""}</p>
      <div id="menu-secciones" class="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
      <footer class="mt-12 text-center text-sm text-gray-500">BORCELLE BAR</footer>
    </div>
  `;

  const categorias = {};
  menu.items.forEach(item => {
    const cat = item.categoria || 'Otros';
    if (!categorias[cat]) categorias[cat] = [];
    categorias[cat].push(item);
  });

  const secciones = container.querySelector("#menu-secciones");
  secciones.innerHTML = '';

  for (const [nombreCategoria, items] of Object.entries(categorias)) {
    const div = document.createElement("div");

    const itemsHtml = items.map(item => `
      <li class="flex flex-col border-b border-gray-700 pb-2">
        <div class="flex justify-between">
          <span class="font-semibold">${item.nombre}</span>
          <span class="text-yellow-300">${item.precio.toFixed(2)} €</span>
        </div>
        <p class="text-xs text-gray-400">${item.descripcion || ''}</p>
      </li>
    `).join('');

    div.innerHTML = `
      <h2 class="text-yellow-400 text-xl font-semibold border-b border-yellow-500 mb-3">${nombreCategoria}</h2>
      <ul class="space-y-2">${itemsHtml}</ul>
    `;

    secciones.appendChild(div);
  }
}

export { render };
