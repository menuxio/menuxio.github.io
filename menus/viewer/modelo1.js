// modelo1.js mejorado visualmente
export function render(menu, container) {
  // Limpiar clases anteriores
  container.className = "";

  // Aplicar estilos base para este modelo
  container.classList.add(
    "min-h-screen", "w-full", "bg-gradient-to-br", "from-gray-900", "to-gray-800", "text-white", "flex", "justify-center", "items-start", "pt-10", "px-4"
  );

  container.innerHTML = `
    <div class="bg-gray-900 bg-opacity-80 rounded-2xl shadow-xl max-w-3xl w-full p-8">
      <h1 class="text-4xl font-bold mb-4 text-center text-yellow-400">${menu.nombre || "Menú"}</h1>
      <p class="text-center text-gray-300 mb-8">${menu.descripcion || ""}</p>
      <ul class="space-y-6">
        ${menu.items.map(item => `
          <li class="border-b border-gray-700 pb-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-lg text-white">${item.nombre}</span>
              <span class="text-yellow-300 font-medium">${item.precio.toFixed(2)} €</span>
            </div>
            <p class="text-sm text-gray-400 mt-1">${item.descripcion || ""}</p>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}
