export function render(menu, container) {
  container.className = "min-h-screen w-full bg-black text-white px-6 sm:px-8 md:px-12 py-6";

  container.innerHTML = `
    <h1 class="text-2xl font-bold mb-2" id="nombre">${menu.nombre}</h1>
    <p class="text-gray-500 mb-6" id="descripcion">${menu.descripcion}</p>
    <div id="vista-home"></div>
    <div id="vista-categoria" class="hidden"></div>
  `;

  const vistaHome = document.getElementById('vista-home');
  const vistaCategoria = document.getElementById('vista-categoria');

  // Usamos directamente las categorías del menú
  const categorias = menu.categorias || [];

  function mostrarHome() {
    vistaHome.classList.remove('hidden');
    vistaCategoria.classList.add('hidden');
    vistaHome.innerHTML = '';

    categorias.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'block w-full text-left py-3 border-b border-gray-700 hover:bg-gray-800 px-4';
      btn.innerHTML = `<span class='text-orange-400 font-bold uppercase'>${cat.nombre}</span>`;
      btn.onclick = () => mostrarCategoria(cat);
      vistaHome.appendChild(btn);
    });
  }

  function mostrarCategoria(categoria) {
    const items = categoria.item || [];
    vistaHome.classList.add('hidden');
    vistaCategoria.classList.remove('hidden');
    vistaCategoria.innerHTML = `
      <button class="text-sm mb-4 text-orange-400" onclick="mostrarHome()">&#8592; Volver</button>
      <h2 class="text-xl font-bold mb-2">${categoria.nombre}</h2>
      <div class="space-y-4">
        ${items.map(item => `
          <div class="flex justify-between border-b border-gray-700 pb-1">
            <span class="font-medium">${item.nombre}</span>
            <span class="text-orange-400">${item.precio.toFixed(2)} ${item.currency || '€'}</span>
          </div>
          <p class="text-sm text-gray-400 mb-2">${item.descripcion || ''}</p>
        `).join('')}
      </div>
    `;
  }

  window.mostrarHome = mostrarHome;
  mostrarHome();
}



export const useLogo = false;