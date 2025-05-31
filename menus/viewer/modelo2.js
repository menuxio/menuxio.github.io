// modelo2.js mejorado visualmente
export function render(menu, container) {
  // Limpiar estilos anteriores
  container.className = "";

  // Estilos base: fondo claro moderno con texto neutro oscuro
  container.classList.add(
    "min-h-screen", "w-full", "bg-gray-50", "text-gray-800", "flex", "justify-center", "items-start", "pt-10", "px-4"
  );

  container.innerHTML = `
    <div class="bg-white rounded-xl shadow-md w-full max-w-3xl p-8">
      <h1 class="text-4xl font-extrabold text-orange-500 mb-4 text-center">${menu.nombre}</h1>
      <p class="italic text-center text-gray-500 mb-8">${menu.descripcion}</p>
      <div class="divide-y divide-gray-300">
        ${menu.items.map(item => `
          <div class="py-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-lg">${item.nombre}</span>
              <span class="text-orange-500 font-medium">${item.precio.toFixed(2)} €</span>
            </div>
            <p class="text-sm text-gray-500 mt-1">${item.descripcion || ''}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
