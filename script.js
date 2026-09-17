// ---------------------------------------------------------------
// Datos reales de proyectos legislativos.
// Editá/agregá objetos acá para actualizar la sección "Proyectos".
// ---------------------------------------------------------------
const CATEGORY_COLORS = {
  'Educación': 'var(--cat-educacion)',
  'Seguridad': 'var(--cat-seguridad)',
  'Salud y familias': 'var(--cat-salud)',
  'Protección animal': 'var(--cat-animal)',
  'Ambiente y tecnología': 'var(--cat-ambiente)',
  'Producción': 'var(--cat-produccion)'
};

const PROYECTOS = [
  { categoria: 'Educación', titulo: 'Legajo Digital Docente', descripcion: 'Digitaliza la inscripción y reinscripción docente ante las Juntas de Clasificación, terminando con las filas y el trámite en papel.', estado: 'En comisión de Cultura y Educación' },
  { categoria: 'Educación', titulo: 'Formación Docente en Educación Inclusiva', descripcion: 'Incorpora formación en educación inclusiva a los profesorados de Nivel Primario, con proyección a Inicial y Secundario.', estado: 'Listo para presentación' },
  { categoria: 'Educación', titulo: 'Trazabilidad de Títulos y Certificaciones Educativas', descripcion: 'Verificación digital con código QR para títulos docentes, evitando la falsificación de certificaciones.', estado: 'Redacción avanzada' },
  { categoria: 'Seguridad', titulo: 'Registro de Agresores Sexuales (RPCDIS)', descripcion: 'Registro público y gratuito de personas condenadas por delitos contra la integridad sexual, consultable por cualquier persona.', estado: 'Despacho unificado en tratamiento' },
  { categoria: 'Salud y familias', titulo: 'Alivio Financiero para Trabajadores', descripcion: 'Pone un tope a las tasas que cooperativas y financieras descuentan de los sueldos estatales, para frenar el sobreendeudamiento.', estado: 'En estudio' },
  { categoria: 'Salud y familias', titulo: 'Acompañamiento Psicológico en Enfermedades Autoinmunes', descripcion: 'Garantiza apoyo psicológico y traslados para pacientes oncohematológicos y autoinmunes del interior provincial.', estado: 'Redacción avanzada' },
  { categoria: 'Protección animal', titulo: 'Huellas Cuidadas', descripcion: 'Regula y acompaña a quienes cuidan animales en situación de calle, integrándolos al registro provincial existente.', estado: 'Redacción avanzada' },
  { categoria: 'Protección animal', titulo: 'Registro y Subsidio a Refugios de Animales', descripcion: 'Crea un régimen de subsidio para refugios de animales, complementario a la ley vigente de albergue.', estado: 'En coordinación con otro bloque' },
  { categoria: 'Ambiente y tecnología', titulo: 'Gemelo Digital Hídrico', descripcion: 'Modelo digital en tiempo real de las cuencas y acuíferos de Catamarca, con alerta temprana ante sequías y crecidas.', estado: 'En elaboración' },
  { categoria: 'Ambiente y tecnología', titulo: 'Cumbre Segura Catamarca', descripcion: 'Registro digital vía QR para quienes salen a hacer trekking o montañismo, pensado para actuar rápido ante una emergencia.', estado: 'En elaboración' },
  { categoria: 'Ambiente y tecnología', titulo: 'Uso Responsable de IA en el Sector Público', descripcion: 'Establece reglas claras para el uso de inteligencia artificial en la administración pública provincial.', estado: 'En revisión' },
  { categoria: 'Producción', titulo: 'PROVAGAN', descripcion: 'Facilita el acceso a insumos veterinarios y la regularización sanitaria de pequeños productores ganaderos del interior.', estado: 'Completado' }
];

// ---------------------------------------------------------------
// Agenda — reemplazá estos placeholders por fechas y lugares reales.
// ---------------------------------------------------------------
const AGENDA = [
  { fecha: '[FECHA]', lugar: '[LOCALIDAD / BARRIO]', detalle: '[Detalle: recorrida, audiencia pública o reunión vecinal]' },
  { fecha: '[FECHA]', lugar: '[LOCALIDAD / BARRIO]', detalle: '[Detalle de la actividad]' },
  { fecha: '[FECHA]', lugar: '[LOCALIDAD / BARRIO]', detalle: '[Detalle de la actividad]' }
];

const CATEGORIAS = ['Todos', 'Educación', 'Seguridad', 'Salud y familias', 'Protección animal', 'Ambiente y tecnología', 'Producción'];

let filtroActivo = 'Todos';

function renderStats() {
  document.getElementById('statProyectos').textContent = PROYECTOS.length;
}

function renderChips() {
  const wrap = document.getElementById('filterChips');
  wrap.innerHTML = '';
  CATEGORIAS.forEach((cat) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-chip' + (cat === filtroActivo ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      filtroActivo = cat;
      renderChips();
      renderProjects();
    });
    wrap.appendChild(btn);
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const filtrados = filtroActivo === 'Todos'
    ? PROYECTOS
    : PROYECTOS.filter((p) => p.categoria === filtroActivo);

  document.getElementById('filterCount').textContent =
    `Mostrando ${filtrados.length} de ${PROYECTOS.length} proyectos — ${filtroActivo === 'Todos' ? 'todas las áreas' : filtroActivo}`;

  grid.innerHTML = '';
  filtrados.forEach((p) => {
    const color = CATEGORY_COLORS[p.categoria] || 'var(--accent)';
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <span class="project-cat" style="color:${color}">${p.categoria}</span>
      <h3>${p.titulo}</h3>
      <p>${p.descripcion}</p>
      <div class="project-status">
        <span class="dot" style="background:${color}"></span>
        <span>${p.estado}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderAgenda() {
  const list = document.getElementById('agendaList');
  list.innerHTML = '';
  AGENDA.forEach((a) => {
    const item = document.createElement('div');
    item.className = 'agenda-item';
    item.innerHTML = `
      <div class="agenda-date">${a.fecha}</div>
      <div class="agenda-place">
        <strong>${a.lugar}</strong>
        <span>${a.detalle}</span>
      </div>
    `;
    list.appendChild(item);
  });
}

// ---------------------------------------------------------------
// Formulario de contacto.
// Se envía de verdad (POST) al Google Form configurado en index.html.
// El iframe oculto evita que el envío navegue fuera del sitio;
// cuando el iframe termina de cargar la respuesta, mostramos el
// mensaje de éxito.
// ---------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contactForm');
  const iframe = document.getElementById('hidden_iframe');
  const successMessage = document.getElementById('successMessage');
  const resetBtn = document.getElementById('resetForm');
  let submitted = false;

  form.addEventListener('submit', () => {
    submitted = true;
  });

  iframe.addEventListener('load', () => {
    if (!submitted) return; // ignora la primera carga (iframe vacío)
    form.hidden = true;
    successMessage.hidden = false;
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    form.hidden = false;
    successMessage.hidden = true;
    submitted = false;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderChips();
  renderProjects();
  renderAgenda();
  initContactForm();
});
