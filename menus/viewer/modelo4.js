export function render(menu, container) {
  // Limpiar estilos previos
  container.className = "";

  container.classList.add(
    "min-h-screen", "w-full", "bg-slate-900", "text-white", "px-4", "py-8", "flex", "justify-center"
  );

  container.innerHTML = `
    <div class="w-full max-w-3xl">
      <h1 class="text-3xl font-bold mb-2 text-center text-yellow-400">${menu.nombre}</h1>
      <p class="mb-8 text-center text-gray-400">${menu.descripcion}</p>
      <div class="space-y-4">
        ${menu.categorias.map((categoria, idx) => `
          <div class="border border-gray-700 rounded-lg overflow-hidden">
            <button 
              onclick="document.getElementById('cat-${idx}').classList.toggle('hidden')" 
              class="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-700 transition-colors font-semibold text-white">
              ${categoria.nombre}
            </button>
            <div id="cat-${idx}" class="hidden bg-gray-900 px-4 py-3 space-y-3">
              ${(categoria.item || []).map(item => `
                <div class="border-b border-gray-700 pb-2">
                  <div class="flex justify-between">
                    <span class="text-base">${item.nombre}</span>
                    <span class="text-yellow-300 font-medium">${item.precio.toFixed(2)} ${item.currency || '€'}</span>
                  </div>
                  <p class="text-sm text-gray-400">${item.descripcion || ''}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}



export const useLogo = false;