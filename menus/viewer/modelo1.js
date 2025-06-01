export function render(menu, container) {
  const config = menu.configuracion || {};

  // Estilos por defecto
  const bg = config.background || "bg-gradient-to-br from-gray-900 to-gray-800";
  const textColor = config.textColor || "text-white";
  const accent = config.accentColor || "text-yellow-300";
  const headerColor = config.headerColor || "text-yellow-400";
  const sectionTitleColor = config.sectionTitleColor || "text-green-300";
  const descriptionColor = config.descriptionColor || "text-gray-300";
  const itemDescriptionColor = config.itemDescriptionColor || "text-gray-400";
  const fontSize = config.fontSize || "text-base";
  const titleSize = config.titleSize || "text-4xl";
  const subtitleSize = config.subtitleSize || "text-2xl";
  const font = config.fontFamily || "font-sans";

  const categorias = menu.categorias || [];
  container.className = `min-h-screen w-full ${bg} ${textColor} ${font} flex justify-center items-start pt-10 px-4`;

  container.innerHTML = `
    <div class="bg-gray-900 bg-opacity-80 rounded-2xl shadow-xl max-w-3xl w-full p-8">
      <h1 class="${titleSize} font-bold mb-4 text-center ${headerColor}">${menu.nombre || "Menú"}</h1>
      <p class="text-center ${descriptionColor} mb-8">${menu.descripcion || ""}</p>

      ${categorias.map(categoria => `
        <div class="mb-8">
          <h2 class="${subtitleSize} font-semibold mb-4 border-b border-gray-700 pb-2 ${sectionTitleColor}">${categoria.nombre}</h2>
          <ul class="space-y-4">
            ${(categoria.item || []).map(item => `
              <li class="border-b border-gray-700 pb-2">
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-lg">${item.nombre}</span>
                  <span class="${accent} font-medium">${item.precio.toFixed(2)} ${item.currency || "€"}</span>
                </div>
                <p class="text-sm ${itemDescriptionColor} mt-1">${item.descripcion || ""}</p>
              </li>
            `).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  `;
}

export const useLogo = false;
