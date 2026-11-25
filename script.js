// ===============================================================
//  SITIO EXEQUIEL MORENO — DATOS EDITABLES
//  Todo lo que se ve en la página sale de las listas de este
//  bloque. Para actualizar el sitio, editá solo esta parte.
// ===============================================================

// ---------------------------------------------------------------
// 1) DATOS DE IMPACTO (franja de números debajo de la portada)
//    - Los que dicen "auto" se calculan solos con las listas de abajo.
//    - Los que tienen valor: null NO se muestran. Cuando tengas el
//      número, reemplazá null por el número (ej: valor: 12).
// ---------------------------------------------------------------
const DATOS_IMPACTO = [
  { etiqueta: 'proyectos de ley presentados', valor: 'auto-leyes' },
  { etiqueta: 'declaraciones de interés', valor: 'auto-declaraciones' },
  { etiqueta: 'departamentos recorridos', valor: 'auto-departamentos' },
  { etiqueta: 'leyes sancionadas', valor: null },
  { etiqueta: 'vecinos y vecinas atendidos', valor: null },
  { etiqueta: 'instituciones visitadas', valor: null }
];

// ---------------------------------------------------------------
// 2) PROYECTOS
//    Fuente: Nómina de Proyectos de CEDOP (cedop.gob.ar/buscar/Diputado/209).
//    Campos:
//      titulo  → nombre corto y claro (el que lee la gente)
//      tema    → se usa para los filtros
//      estado  → 'Presentado' | 'Despacho de comisión' | 'Media sanción' | 'Ley'
//      destacado + resumen → aparece arriba, con la línea de avance
//    Revisá los estados: los que no se conocían quedaron en 'Presentado'.
// ---------------------------------------------------------------
const CEDOP_URL = 'https://cedop.gob.ar/buscar/Diputado/209';

const ETAPAS = ['Presentado', 'Despacho de comisión', 'Media sanción', 'Ley'];

const PROYECTOS = [
  { id: 9413, numero: 338, tipo: 'Ley Provincial', tema: 'Economía y trabajo', estado: 'Media sanción',
    titulo: 'Compre Cooperativo Catamarqueño',
    destacado: true,
    resumen: 'Da prioridad a las cooperativas catamarqueñas cuando el Estado provincial compra bienes y servicios, para que la plata pública quede trabajando en la provincia.',
    extracto: 'ESTABLÉZCASE EL RÉGIMEN DE PROMOCIÓN DEL "COMPRE COOPERATIVO CATAMARQUEÑO".' },

  { id: 9261, numero: 187, tipo: 'Ley Provincial', tema: 'Educación', estado: 'Despacho de comisión',
    titulo: 'Legajo Digital Docente',
    destacado: true,
    resumen: 'Que docentes de toda la provincia puedan inscribirse y reinscribirse ante las Juntas de Clasificación de forma digital, sin viajar ni hacer filas.',
    extracto: 'ESTABLÉCESE LA DIGITALIZACIÓN DEL PROCESO DE INSCRIPCIÓN Y REINSCRIPCIÓN DE DOCENTES ANTE LAS JUNTAS DE CLASIFICACIÓN DEPENDIENTES DEL MINISTERIO DE EDUCACIÓN.' },

  { id: 9340, numero: 266, tipo: 'Ley Provincial', tema: 'Seguridad', estado: 'Despacho de comisión',
    titulo: 'Registro público de condenados por delitos sexuales',
    destacado: true,
    resumen: 'Crea un registro público, dentro del Poder Judicial, de personas condenadas por delitos contra la integridad sexual, para proteger a las familias.',
    extracto: 'CRÉASE EL REGISTRO PÚBLICO PROVINCIAL DE PERSONAS CONDENADAS POR DELITOS CONTRA LA INTEGRIDAD SEXUAL, EN EL ÁMBITO DEL PODER JUDICIAL DE LA PROVINCIA DE CATAMARCA, BAJO LA DEPENDENCIA DE LA CORTE DE JUSTICIA PROVINCIAL.' },

  { id: 9507, numero: 430, tipo: 'Ley Provincial', tema: 'Economía y trabajo', estado: 'Presentado',
    titulo: 'Emergencia por los descuentos sobre los sueldos estatales',
    destacado: true,
    resumen: 'Declara la emergencia frente al sobreendeudamiento de agentes públicos por los descuentos directos sobre sus haberes.',
    extracto: 'DECLÁRASE EL ESTADO DE EMERGENCIA PROVINCIAL EN MATERIA DE DEDUCCIÓN DE HABERES, EN RAZÓN DE LA CRISIS ECONÓMICA QUE ATRAVIESA EL PAÍS Y DEL SOBREENDEUDAMIENTO QUE AFECTA A UN NÚMERO SIGNIFICATIVO DE AGENTES PÚBLICOS DE LA PROVINCIA DE CATAMARCA.' },

  { id: 9215, numero: 141, tipo: 'Ley Provincial', tema: 'Salud', estado: 'Presentado',
    titulo: 'Cobertura de bombas de insulina para chicos con diabetes',
    destacado: true,
    resumen: 'Cobertura integral de bombas de insulina, sensores de glucosa e insumos para chicos y chicas de hasta 18 años con diabetes.',
    extracto: 'ESTABLÉCESE LA COBERTURA INTEGRAL DE INFUSORES SUBCUTÁNEOS CONTINUOS DE INSULINA Y DE SISTEMAS DE MONITOREO CONTINUO DE GLUCOSA EN SANGRE, NO INVASIVOS E INDOLOROS, Y DE LOS MEDICAMENTOS E INSUMOS DE ÚLTIMA TECNOLOGÍA PARA PACIENTES NIÑOS, NIÑAS Y ADOLESCENTES HASTA LOS DIECIOCHO (18) AÑOS DE EDAD INCLUSIVE CON PATOLOGÍA DIAGNOSTICADA DE DIABETES MELLITUS TIPO 1 (DM1) Y TIPO 2 (DM2).' },

  { id: 9621, numero: 547, tipo: 'Ley Provincial', tema: 'Educación', estado: 'Presentado',
    titulo: 'Títulos educativos verificables',
    destacado: true,
    resumen: 'Que cada título y certificado educativo de la provincia se pueda verificar y auditar, para cortar de raíz los títulos falsos.',
    extracto: 'RÉGIMEN PROVINCIAL DE INTEGRIDAD, TRAZABILIDAD Y AUDITORÍA DE LA EMISIÓN DE TÍTULOS Y CERTIFICACIONES EDUCATIVAS.' },

  { id: 9613, numero: 537, tipo: 'Ley Provincial', tema: 'Economía y trabajo', estado: 'Presentado',
    titulo: 'Programa de alivio al sobreendeudamiento',
    extracto: 'CRÉASE EL PROGRAMA PROVINCIAL DE ALIVIO AL SOBREENDEUDAMIENTO ("EL PROGRAMA"), DESTINADO A REFINANCIAR DEUDAS DE AGENTES PÚBLICOS PROVINCIALES Y MUNICIPALES, Y DE FAMILIAS CATAMARQUEÑAS EN SITUACIÓN DE SOBREENDEUDAMIENTO.' },
  { id: 9612, numero: 536, tipo: 'Ley Provincial', tema: 'Ambiente y energía', estado: 'Presentado',
    titulo: 'Energía de emergencia en localidades con parques solares',
    extracto: 'GARANTIZAR EL SUMINISTRO ELÉCTRICO DE EMERGENCIA A LAS LOCALIDADES DE LA PROVINCIA EN CUYO ÁMBITO SE EMPLACEN PARQUES DE GENERACIÓN DE ENERGÍA SOLAR FOTOVOLTAICA.' },
  { id: 9589, numero: 513, tipo: 'Ley Provincial', tema: 'Educación', estado: 'Presentado',
    titulo: 'Bachiller en Minería y Recursos Naturales',
    extracto: 'CREASE EN EL CICLO ORIENTADO DEL NIVEL DE EDUCACIÓN SECUNDARIA DE LA PROVINCIA DE CATAMARCA, LA ORIENTACIÓN EN MINERÍA Y RECURSOS NATURALES.' },
  { id: 9530, numero: 454, tipo: 'Ley Provincial', tema: 'Tránsito y tecnología', estado: 'Presentado',
    titulo: 'Régimen provincial de vehículos autónomos',
    extracto: 'ESTABLÉCESE EL RÉGIMEN PROVINCIAL COMPLEMENTARIO PARA EL REGISTRO, HABILITACIÓN, PRUEBA Y CIRCULACIÓN DENTRO DEL TERRITORIO PROVINCIAL DE VEHÍCULOS AUTÓNOMOS.' },
  { id: 9462, numero: 386, tipo: 'Ley Provincial', tema: 'Educación', estado: 'Presentado',
    titulo: 'Modificación de la ley de símbolos patrios',
    extracto: 'MODIFICACIÓN DE LA LEY N° 5.356 – NORMAS DE USO Y TRATAMIENTO DE LOS SÍMBOLOS PATRIOS.' },
  { id: 9461, numero: 385, tipo: 'Ley Provincial', tema: 'Educación', estado: 'Presentado',
    titulo: 'Formación docente en educación inclusiva',
    extracto: 'CRÉASE EL PROGRAMA PROVINCIAL DE FORMACIÓN DOCENTE EN EDUCACIÓN INCLUSIVA Y ATENCIÓN A LA DIVERSIDAD.' },
  { id: 9460, numero: 384, tipo: 'Ley Provincial', tema: 'Seguridad', estado: 'Presentado',
    titulo: 'Cumbre Segura Catamarca',
    extracto: 'CRÉASE EL SISTEMA PROVINCIAL DE REGISTRO DIGITAL PARA LA SEGURIDAD EN SENDERISMO, TREKKING Y MONTAÑISMO, DENOMINADO "CUMBRE SEGURA CATAMARCA".' },
  { id: 9459, numero: 383, tipo: 'Declaración', tema: 'Cultura y comunidad', estado: 'Presentado',
    titulo: 'Estudio Superior de Danzas Españolas',
    extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO, CULTURAL Y ARTÍSTICO LA TRAYECTORIA DEL ESTUDIO SUPERIOR DE DANZAS ESPAÑOLAS DE LA CIUDAD CAPITAL DE LA PROVINCIA DE CATAMARCA.' },
  { id: 9457, numero: 381, tipo: 'Ley Provincial', tema: 'Educación', estado: 'Presentado',
    titulo: 'Continuidad pedagógica en jornadas de frío extremo',
    extracto: 'CRÉASE EL PROTOCOLO PROVINCIAL DE CONTINUIDAD PEDAGÓGICA ANTE JORNADAS DE FRÍO EXTREMO.' },
  { id: 9417, numero: 343, tipo: 'Declaración', tema: 'Cultura y comunidad', estado: 'Presentado',
    titulo: '"Carrozas de la Independencia"',
    extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO LA REALIZACIÓN DEL EVENTO "CARROZAS DE LA INDEPENDENCIA", ORGANIZADO POR DOCENTES DEL NIVEL PRIMARIO DEL COLEGIO PRIVADO PADRE RAMÓN DE LA QUINTANA.' },
  { id: 9310, numero: 236, tipo: 'Declaración', tema: 'Cultura y comunidad', estado: 'Presentado',
    titulo: 'Buscapinas F.C., fútbol femenino',
    extracto: 'DECLÁRASE DE INTERÉS LEGISLATIVO LA ACTUACIÓN DEL EQUIPO DE FÚTBOL FEMENINO BUSCAPINAS F.C., DEL COLEGIO DE ABOGADOS Y ABOGADAS DE LA PROVINCIA DE CATAMARCA.' },
  { id: 9263, numero: 189, tipo: 'Declaración', tema: 'Cultura y comunidad', estado: 'Presentado',
    titulo: '5ª edición de Cultura Cooperativa 2026',
    extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO, LA REALIZACIÓN DEL "5° EDICIÓN DE CULTURA COOPERATIVA 2026".' },
  { id: 9262, numero: 188, tipo: 'Declaración', tema: 'Cultura y comunidad', estado: 'Presentado',
    titulo: 'Centro Vecinal "Pte. Ramón S. Castillo"',
    extracto: 'DECLÁRASE DE INTERÉS LEGISLATIVO, POR LA TRAYECTORIA INSTITUCIONAL DEL CENTRO VECINAL "PTE. RAMÓN S. CASTILLO" DEL BARRIO PILOTO DE LA CIUDAD CAPITAL.' },
  { id: 9255, numero: 181, tipo: 'Declaración', tema: 'Cultura y comunidad', estado: 'Presentado',
    titulo: 'Banda "Los Hijos de Harri"',
    extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO LA TRAYECTORIA Y EL RECIENTE LOGRO INTERNACIONAL DE LA BANDA CATAMARQUEÑA "LOS HIJOS DE HARRI".' },
  { id: 9240, numero: 166, tipo: 'Ley Provincial', tema: 'Seguridad', estado: 'Presentado',
    titulo: 'Escuelas Seguras: protocolo ante armas y amenazas',
    extracto: 'CRÉASE EL PROCEDIMIENTO PROVINCIAL DE ACTUACIÓN ANTE LA SOSPECHA FUNDADA O DETECCIÓN DE ARMAS, EXPLOSIVOS, ARTEFACTOS SIMULADOS U OBJETOS POTENCIALMENTE PELIGROSOS EN EL ÁMBITO EDUCATIVO.' },
  { id: 9236, numero: 163, tipo: 'Ley Provincial', tema: 'Educación', estado: 'Presentado',
    titulo: 'Registro de Apoyo Escolar y Tutorías (REPAT)',
    extracto: 'CRÉASE EL REGISTRO PROVINCIAL DE APOYO ESCOLAR Y TUTORÍAS (REPAT), EN EL ÁMBITO DEL MINISTERIO DE EDUCACIÓN DE LA PROVINCIA DE CATAMARCA, COMO SISTEMA PÚBLICO DE VALIDACIÓN, ORGANIZACIÓN Y VINCULACIÓN DE SERVICIOS EDUCATIVOS COMPLEMENTARIOS.' },
  { id: 9216, numero: 142, tipo: 'Declaración', tema: 'Cultura y comunidad', estado: 'Presentado',
    titulo: 'Proyecto "Fortaleza hecha falda"',
    extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO AL PROYECTO "FORTALEZA HECHA FALDA", INICIATIVA FORMATIVA, CREADA Y COORDINADA POR LA PROFESORA ROMINA SALVATIERRA.' },
  { id: 9214, numero: 140, tipo: 'Ley Provincial', tema: 'Tránsito y tecnología', estado: 'Presentado',
    titulo: 'Distintivo voluntario para conductores mayores de 70',
    extracto: 'CREASE UN DISTINTIVO VEHICULAR DE USO VOLUNTARIO PARA CONDUCTORES DE SETENTA AÑOS O MÁS.' },
  { id: 9213, numero: 139, tipo: 'Declaración', tema: 'Cultura y comunidad', estado: 'Presentado',
    titulo: 'Compañía de Danzas Femenina "Eulalias"',
    extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO A LA "COMPAÑÍA DE DANZAS FEMENINA EULALIAS", INICIATIVA ARTÍSTICA Y CULTURAL CREADA Y COORDINADA POR LAS PROFESORAS VERÓNICA ANAHÍ CATIVA Y ANDREA MELINA CORBALÁN.' }
];

// ---------------------------------------------------------------
// 3) COMISIONES (fuente: CEDOP / diputadoscatamarca.gob.ar)
// ---------------------------------------------------------------
const COMISIONES = [
  { nombre: 'Legislación General', rol: 'Presidente' },
  { nombre: 'Peticiones y Poderes' },
  { nombre: 'Legislación Social y del Trabajo' },
  { nombre: 'Obras y Servicios Públicos' }
];

// ---------------------------------------------------------------
// 4) RECORRIDAS
//    Cada recorrida nueva: copiá un bloque { ... } y completalo.
//    El campo "departamento" tiene que estar escrito igual que en la
//    lista DEPARTAMENTOS de abajo: así se pinta solo en el mapa y
//    suma en "departamentos recorridos".
//    foto: opcional, nombre del archivo subido al repo (ej: 'fotos/belen.jpg').
// ---------------------------------------------------------------
const RECORRIDAS = [
  {
    fecha: '2026',
    departamento: 'Antofagasta de la Sierra',
    lugares: 'Antofalla · Vega Las Cuevas',
    detalle: 'Recorrida por la Puna catamarqueña: visita a Antofalla y a familias de la Vega Las Cuevas, junto al Salar de Antofalla.',
    foto: '',
    enlace: 'https://www.instagram.com/exequiel.moreno/'
  }
];

const DEPARTAMENTOS = [
  'Ambato', 'Ancasti', 'Andalgalá', 'Antofagasta de la Sierra',
  'Belén', 'Capayán', 'Capital', 'El Alto',
  'Fray Mamerto Esquiú', 'La Paz', 'Paclín', 'Pomán',
  'Santa María', 'Santa Rosa', 'Tinogasta', 'Valle Viejo'
];


// ---------------------------------------------------------------
// 5) NOTICIAS (los "Leer más" llevan a la nota en exequielmoreno.com.ar)
//    imagen: opcional. Si la dejás vacía, se muestra una tarjeta con color.
// ---------------------------------------------------------------
const NOTICIAS = [
  {
    titulo: 'Moreno presentó un proyecto de alivio fiscal para comerciantes, pymes y nuevos emprendimientos en Catamarca',
    resumen: 'Propone bajar las retenciones y percepciones excesivas de Ingresos Brutos y hacer más fácil recuperar los saldos a favor.',
    etiqueta: 'Proyecto',
    imagen: 'https://exequielmoreno.com.ar/wp-content/uploads/2026/11/instagram-Df0ngTyjMm5-823x1024.jpg',
    enlace: 'https://exequielmoreno.com.ar/moreno-presento-un-proyecto-de-alivio-fiscal-para-comerciantes-pymes-y-nuevos-emprendimientos-en-catamarca/'
  },
  {
    titulo: 'Exequiel Moreno recorrió Antofagasta de la Sierra y fortaleció su vínculo con las comunidades del interior',
    resumen: 'Visita a localidades de la Puna catamarqueña, con encuentros con vecinos, productores y cooperativistas.',
    etiqueta: 'Recorrida',
    imagen: 'https://exequielmoreno.com.ar/wp-content/uploads/2026/11/instagram-Df25J9ItkUG-576x1024.jpg',
    enlace: 'https://exequielmoreno.com.ar/exequiel-moreno-recorrio-antofagasta-de-la-sierra-y-fortalecio-su-vinculo-con-las-comunidades-del-interior/'
  },
  {
    titulo: 'Diputados dio media sanción al proyecto de Exequiel Moreno para fortalecer las cooperativas catamarqueñas',
    resumen: 'El Estado provincial va a priorizar la compra de bienes y servicios a cooperativas radicadas en Catamarca.',
    etiqueta: 'Media sanción',
    imagen: '',
    enlace: 'https://exequielmoreno.com.ar/diputados-dio-media-sancion-al-proyecto-de-exequiel-moreno-para-fortalecer-las-cooperativas-catamarquenas/'
  }
];

// ---------------------------------------------------------------
// 6) INSTAGRAM y TIKTOK — publicación nueva: copiá un bloque y cambiá
//    el enlace, la imagen y el texto.
// ---------------------------------------------------------------
const INSTAGRAM = [
  { enlace: 'https://www.instagram.com/p/Df5rb8ujK8g/',
    imagen: 'https://exequielmoreno.com.ar/wp-content/uploads/2026/11/instagram-Df5rb8ujK8g-1024x683.jpg',
    texto: 'Sesión con agenda de derechos y salud pública: media sanción al régimen de licencias parentales y a la adhesión a la Ley Nicolás.' },
  { enlace: 'https://www.instagram.com/p/Df25J9ItkUG/',
    imagen: 'https://exequielmoreno.com.ar/wp-content/uploads/2026/11/instagram-Df25J9ItkUG-576x1024.jpg',
    texto: 'Despedida de Antofagasta de la Sierra y el compromiso con las comunidades de la Puna.' },
  { enlace: 'https://www.instagram.com/p/Df0ngTyjMm5/',
    imagen: 'https://exequielmoreno.com.ar/wp-content/uploads/2026/11/instagram-Df0ngTyjMm5-823x1024.jpg',
    texto: 'Proyecto para aliviar la carga de Ingresos Brutos en emprendimientos, pymes y comercios.' }
];

const TIKTOK = [
  { enlace: 'https://www.tiktok.com/@exequiel.moreno/video/7709255448355966228',
    imagen: 'https://exequielmoreno.com.ar/wp-content/uploads/2026/08/tiktok-7709255448355966228-576x1024.jpg',
    texto: 'Despedida de Antofagasta de la Sierra.' },
  { enlace: 'https://www.tiktok.com/@exequiel.moreno/video/7706891822806650133',
    imagen: 'https://exequielmoreno.com.ar/wp-content/uploads/2026/08/tiktok-7706891822806650133-576x1024.jpg',
    texto: 'La historia de Gervasio Reales y Bartolina Alancay en Vega Las Cuevas, cerca del Salar de Antofalla.' },
  { enlace: 'https://www.tiktok.com/@exequiel.moreno/video/7706697438618275092',
    imagen: 'https://exequielmoreno.com.ar/wp-content/uploads/2026/08/tiktok-7706697438618275092-576x1024.jpg',
    texto: 'Visita a Antofalla para escuchar a vecinos y productores.' }
];

// ===============================================================
//  A PARTIR DE ACÁ ES EL FUNCIONAMIENTO — no hace falta tocarlo.
// ===============================================================

const TEMA_COLORS = {
  'Educación': 'var(--cat-educacion)',
  'Economía y trabajo': 'var(--cat-produccion)',
  'Seguridad': 'var(--cat-seguridad)',
  'Salud': 'var(--cat-salud)',
  'Ambiente y energía': 'var(--cat-ambiente)',
  'Tránsito y tecnología': 'var(--cat-animal)',
  'Cultura y comunidad': '#9A5B3C'
};

const TEMAS = ['Todos', ...Array.from(new Set(PROYECTOS.map((p) => p.tema)))];

let filtroActivo = 'Todos';
let textoBusqueda = '';

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function departamentosVisitados() {
  return new Set(RECORRIDAS.map((r) => r.departamento).filter((d) => DEPARTAMENTOS.includes(d)));
}

function valorDato(v) {
  if (v === 'auto-leyes') return PROYECTOS.filter((p) => p.tipo === 'Ley Provincial').length;
  if (v === 'auto-declaraciones') return PROYECTOS.filter((p) => p.tipo === 'Declaración').length;
  if (v === 'auto-departamentos') return departamentosVisitados().size;
  return v;
}

function renderStats() {
  const wrap = document.getElementById('statsStrip');
  wrap.innerHTML = '';
  DATOS_IMPACTO.forEach((d) => {
    const valor = valorDato(d.valor);
    if (valor === null || valor === undefined || valor === '') return;
    const el = document.createElement('div');
    el.className = 'stat';
    el.innerHTML = `
      <span class="stat-num" data-target="${typeof valor === 'number' ? valor : ''}">${typeof valor === 'number' ? 0 : escapeHtml(valor)}</span>
      <span class="stat-label">${escapeHtml(d.etiqueta)}</span>`;
    wrap.appendChild(el);
  });
  animarNumeros();
}

function animarNumeros() {
  const nums = document.querySelectorAll('.stat-num[data-target]:not([data-target=""])');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target);
      const inicio = performance.now();
      const dur = 900;
      const paso = (t) => {
        const k = Math.min(1, (t - inicio) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });
  nums.forEach((n) => obs.observe(n));
}

function renderAboutChips() {
  const wrap = document.getElementById('aboutChips');
  if (!wrap) return;
  wrap.innerHTML = TEMAS.filter((t) => t !== 'Todos')
    .map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join('');
}

function stepperHtml(estado) {
  const idx = Math.max(0, ETAPAS.indexOf(estado));
  return `
    <ol class="stepper" aria-label="Etapa del trámite: ${escapeHtml(estado)}">
      ${ETAPAS.map((e, i) => `
        <li class="${i < idx ? 'done' : ''} ${i === idx ? 'current' : ''}">
          <span class="step-dot"></span><span class="step-label">${e}</span>
        </li>`).join('')}
    </ol>`;
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  grid.innerHTML = '';
  PROYECTOS.filter((p) => p.destacado).forEach((p) => {
    const color = TEMA_COLORS[p.tema] || 'var(--accent)';
    const card = document.createElement('article');
    card.className = 'featured-card reveal';
    card.innerHTML = `
      <span class="project-cat" style="color:${color}">${escapeHtml(p.tema)}</span>
      <h3>${escapeHtml(p.titulo)}</h3>
      <p>${escapeHtml(p.resumen || '')}</p>
      ${stepperHtml(p.estado)}
      <a href="https://cedop.gob.ar/buscar/Proyecto/${p.id}" target="_blank" rel="noopener" class="project-cedop-link">Expte. N° ${p.numero} en CEDOP ↗</a>`;
    grid.appendChild(card);
  });
}

function renderChips() {
  const wrap = document.getElementById('filterChips');
  wrap.innerHTML = '';
  TEMAS.forEach((tema) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-chip' + (tema === filtroActivo ? ' active' : '');
    btn.textContent = tema;
    btn.setAttribute('aria-pressed', tema === filtroActivo);
    btn.addEventListener('click', () => {
      filtroActivo = tema;
      renderChips();
      renderProjects();
    });
    wrap.appendChild(btn);
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');

  let filtrados = filtroActivo === 'Todos' ? PROYECTOS : PROYECTOS.filter((p) => p.tema === filtroActivo);

  if (textoBusqueda.trim()) {
    const q = textoBusqueda.trim().toLowerCase();
    filtrados = filtrados.filter((p) =>
      (p.titulo + ' ' + p.extracto + ' ' + (p.resumen || '')).toLowerCase().includes(q) ||
      String(p.numero).includes(q)
    );
  }

  document.getElementById('filterCount').textContent =
    `Mostrando ${filtrados.length} de ${PROYECTOS.length} expedientes`;

  grid.innerHTML = '';
  if (!filtrados.length) {
    grid.innerHTML = '<p class="empty-state">No encontramos proyectos con esa búsqueda.</p>';
    return;
  }
  filtrados.forEach((p) => {
    const color = TEMA_COLORS[p.tema] || 'var(--accent)';
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <span class="project-cat" style="color:${color}">${escapeHtml(p.tema)} · ${escapeHtml(p.tipo)}</span>
      <h3>${escapeHtml(p.titulo)}</h3>
      <details class="extracto">
        <summary>Ver extracto oficial</summary>
        <p>${escapeHtml(p.extracto)}</p>
      </details>
      <div class="project-status">
        <span class="status-badge status-${ETAPAS.indexOf(p.estado)}">${escapeHtml(p.estado)}</span>
        <a href="https://cedop.gob.ar/buscar/Proyecto/${p.id}" target="_blank" rel="noopener" class="project-cedop-link">N° ${p.numero} ↗</a>
      </div>`;
    grid.appendChild(card);
  });
  observeReveal();
}

function initProjectSearch() {
  const input = document.getElementById('projectSearch');
  if (!input) return;
  input.addEventListener('input', (e) => {
    textoBusqueda = e.target.value;
    renderProjects();
  });
}

function renderComisiones() {
  const wrap = document.getElementById('comisionesList');
  if (!wrap) return;
  wrap.innerHTML = '';
  COMISIONES.forEach((c) => {
    const item = document.createElement('div');
    item.className = 'comision-card reveal';
    item.innerHTML = `
      <span class="comision-nombre">${escapeHtml(c.nombre)}</span>
      ${c.rol ? `<span class="comision-rol">${escapeHtml(c.rol)}</span>` : ''}`;
    wrap.appendChild(item);
  });
  observeReveal();
}

function renderRecorridas() {
  const visitados = departamentosVisitados();
  document.getElementById('deptosCount').textContent = visitados.size;

  const deptos = document.getElementById('deptosGrid');
  deptos.innerHTML = DEPARTAMENTOS.map((d) =>
    `<span class="depto ${visitados.has(d) ? 'visited' : ''}">${escapeHtml(d)}</span>`).join('');

  const grid = document.getElementById('recorridasGrid');
  grid.innerHTML = '';
  RECORRIDAS.forEach((r) => {
    const card = document.createElement('article');
    card.className = 'recorrida-card reveal';
    card.innerHTML = `
      ${r.foto ? `<img src="${escapeHtml(r.foto)}" alt="Recorrida por ${escapeHtml(r.departamento)}" class="recorrida-foto">` : `<div class="recorrida-foto recorrida-foto-vacia"><span>${escapeHtml(r.departamento)}</span></div>`}
      <div class="recorrida-body">
        <span class="recorrida-fecha">${escapeHtml(r.fecha)} · ${escapeHtml(r.departamento)}</span>
        <h3>${escapeHtml(r.lugares)}</h3>
        <p>${escapeHtml(r.detalle)}</p>
        ${r.enlace ? `<a href="${escapeHtml(r.enlace)}" target="_blank" rel="noopener" class="project-cedop-link">Ver fotos y videos ↗</a>` : ''}
      </div>`;
    grid.appendChild(card);
  });
  observeReveal();
}


function renderNoticias() {
  const grid = document.getElementById('noticiasGrid');
  if (!grid) return;
  grid.innerHTML = '';
  NOTICIAS.forEach((n) => {
    const card = document.createElement('article');
    card.className = 'noticia-card reveal';
    card.innerHTML = `
      ${n.imagen
        ? `<img src="${escapeHtml(n.imagen)}" alt="" class="noticia-img" loading="lazy" onerror="this.outerHTML='<div class=&quot;noticia-img noticia-img-vacia&quot;></div>'">`
        : '<div class="noticia-img noticia-img-vacia"></div>'}
      <div class="noticia-body">
        <span class="recorrida-fecha">${escapeHtml(n.etiqueta || '')}</span>
        <h3>${escapeHtml(n.titulo)}</h3>
        <p>${escapeHtml(n.resumen)}</p>
        <a href="${escapeHtml(n.enlace)}" target="_blank" rel="noopener" class="project-cedop-link">Leer más ↗</a>
      </div>`;
    grid.appendChild(card);
  });
  observeReveal();
}

function renderSocial(lista, gridId, red) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';
  lista.forEach((post) => {
    const a = document.createElement('a');
    a.className = 'social-card reveal';
    a.href = post.enlace;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `
      <div class="social-thumb">
        <img src="${escapeHtml(post.imagen)}" alt="Publicación de ${red} de Exequiel Moreno" loading="lazy" onerror="this.style.display='none'">
        ${red === 'TikTok' ? '<span class="play-icon" aria-hidden="true">▶</span>' : ''}
      </div>
      <p>${escapeHtml(post.texto)}</p>
      <span class="project-cedop-link">Ver en ${red} ↗</span>`;
    grid.appendChild(a);
  });
  observeReveal();
}

function initHeroVideo() {
  const v = document.querySelector('.hero-bg');
  if (!v) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) v.pause();
}

// Animación de aparición al hacer scroll
let revealObserver = null;
function observeReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => revealObserver.observe(el));
}

// Formulario de contacto: se envía al Google Form configurado en index.html.
function initContactForm() {
  const form = document.getElementById('contactForm');
  const iframe = document.getElementById('hidden_iframe');
  const successMessage = document.getElementById('successMessage');
  const resetBtn = document.getElementById('resetForm');
  let submitted = false;

  form.addEventListener('submit', () => { submitted = true; });

  iframe.addEventListener('load', () => {
    if (!submitted) return;
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
  initHeroVideo();
  renderNoticias();
  renderSocial(INSTAGRAM, 'instagramGrid', 'Instagram');
  renderSocial(TIKTOK, 'tiktokGrid', 'TikTok');
  renderAboutChips();
  renderFeatured();
  renderChips();
  renderProjects();
  initProjectSearch();
  renderComisiones();
  renderRecorridas();
  initContactForm();
});
