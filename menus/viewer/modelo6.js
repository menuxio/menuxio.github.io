const body = document.getElementById("main-body");

body.innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-6 font-sans">
    <h1 id="nombre" class="text-4xl font-bold mb-6 text-center tracking-wider">Menú</h1>
    <p id="descripcion" class="text-center mb-10 text-gray-300"></p>
    <div id="menu-secciones" class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"></div>
    <footer class="mt-12 text-center text-sm text-gray-400">BORCELLE BAR</footer>
  </div>
`;

function renderMenu(menu) {
  document.getElementById("nombre").textContent = menu.nombre || "Menú";
  document.getElementById("descripcion").textContent = menu.descripcion || "";

  const categorias = {};
  menu.items.forEach(item => {
    const cat = item.categoria || 'Otros';
    if (!categorias[cat]) categorias[cat] = [];
    categorias[cat].push(item);
  });

  const contenedor = document.getElementById("menu-secciones");
  contenedor.innerHTML = '';

  for (const [nombreCategoria, items] of Object.entries(categorias)) {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2 class="text-yellow-400 text-xl font-semibold border-b border-yellow-500 mb-2">${nombreCategoria}</h2>
      <ul class="space-y-2">
        ${items.map(item => `
          <li class="flex flex-col border-b border-gray-700 pb-2">
            <div class="flex justify-between">
              <span class="font-semibold">${item.nombre}</span>
              <span class="text-yellow-300">${item.precio.toFixed(2)} €</span>
            </div>
            <p class="text-xs text-gray-300">${item.descripcion || ''}</p>
          </li>`).join('')}
      </ul>
    `;
    contenedor.appendChild(div);
  }
}
