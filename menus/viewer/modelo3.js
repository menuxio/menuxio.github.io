export function render(menu, container) {
  container.className = "";

  container.classList.add(
    "min-h-screen", "w-full", "bg-gray-900", "text-white", "flex", "justify-center", "pt-10", "px-4"
  );

  const categorias = menu.categorias || [];

  container.innerHTML = `
    <div class="w-full max-w-3xl bg-gray-800 bg-opacity-90 rounded-xl shadow-lg p-6">
      <h1 class="text-3xl font-bold uppercase tracking-wide border-b border-gray-600 pb-3 mb-6 text-center text-yellow-400">${menu.nombre}</h1>

      ${categorias.map(categoria => `
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-yellow-300 border-b border-gray-700 pb-1 mb-4">${categoria.nombre}</h2>
          <div class="space-y-4">
            ${(categoria.item || []).map(item => `
              <div class="flex justify-between items-start border-b border-gray-700 pb-3">
                <div>
                  <span class="block text-base font-medium text-white">${item.nombre}</span>
                  ${item.descripcion ? `<p class="text-sm text-gray-400">${item.descripcion}</p>` : ""}
                </div>
                <span class="text-yellow-300 font-semibold">${item.precio.toFixed(2)} ${item.currency || '€'}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}



export const useLogo = false;