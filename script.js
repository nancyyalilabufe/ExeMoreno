// ---------------------------------------------------------------
// Datos reales de proyectos legislativos.
// Editá/agregá objetos acá para actualizar la sección "Proyectos".
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Datos reales de proyectos legislativos, tal como figuran en la
// Nómina de Proyectos de CEDOP (cedop.gob.ar/buscar/Diputado/209).
// Editá/agregá objetos acá para actualizar la sección "Proyectos".
// El listado completo y actualizado siempre está en CEDOP — este
// enlace se muestra en la sección.
// ---------------------------------------------------------------
const CEDOP_URL = 'https://cedop.gob.ar/buscar/Diputado/209';

const CATEGORY_COLORS = {
  'Ley Provincial': 'var(--cat-educacion)',
  'Declaración': 'var(--cat-produccion)',
  'Resolución': 'var(--cat-salud)'
};

const PROYECTOS = [
  { numero: 547, gde: 'EX-2026-00054632- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'RÉGIMEN PROVINCIAL DE INTEGRIDAD, TRAZABILIDAD Y AUDITORÍA DE LA EMISIÓN DE TÍTULOS Y CERTIFICACIONES EDUCATIVAS.' },
  { numero: 537, gde: 'EX-2026-00054288- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CRÉASE EL PROGRAMA PROVINCIAL DE ALIVIO AL SOBREENDEUDAMIENTO ("EL PROGRAMA"), DESTINADO A REFINANCIAR DEUDAS DE AGENTES PÚBLICOS PROVINCIALES Y MUNICIPALES, Y DE FAMILIAS CATAMARQUEÑAS EN SITUACIÓN DE SOBREENDEUDAMIENTO.' },
  { numero: 536, gde: 'EX-2026-00054148- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'GARANTIZAR EL SUMINISTRO ELÉCTRICO DE EMERGENCIA A LAS LOCALIDADES DE LA PROVINCIA EN CUYO ÁMBITO SE EMPLACEN PARQUES DE GENERACIÓN DE ENERGÍA SOLAR FOTOVOLTAICA.' },
  { numero: 513, gde: 'EX-2026-00052760- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CREASE EN EL CICLO ORIENTADO DEL NIVEL DE EDUCACIÓN SECUNDARIA DE LA PROVINCIA DE CATAMARCA, LA ORIENTACIÓN EN MINERÍA Y RECURSOS NATURALES.' },
  { numero: 454, gde: 'EX-2026-00049956- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'ESTABLÉCESE EL RÉGIMEN PROVINCIAL COMPLEMENTARIO PARA EL REGISTRO, HABILITACIÓN, PRUEBA Y CIRCULACIÓN DENTRO DEL TERRITORIO PROVINCIAL DE VEHÍCULOS AUTÓNOMOS.' },
  { numero: 430, gde: 'EX-2026-00048789- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'DECLÁRASE EL ESTADO DE EMERGENCIA PROVINCIAL EN MATERIA DE DEDUCCIÓN DE HABERES, EN RAZÓN DE LA CRISIS ECONÓMICA QUE ATRAVIESA EL PAÍS Y DEL SOBREENDEUDAMIENTO QUE AFECTA A UN NÚMERO SIGNIFICATIVO DE AGENTES PÚBLICOS DE LA PROVINCIA DE CATAMARCA.' },
  { numero: 386, gde: 'EX-2026-00045518- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'MODIFICACIÓN DE LA LEY N° 5.356 – NORMAS DE USO Y TRATAMIENTO DE LOS SÍMBOLOS PATRIOS.' },
  { numero: 385, gde: 'EX-2026-00045444- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CRÉASE EL PROGRAMA PROVINCIAL DE FORMACIÓN DOCENTE EN EDUCACIÓN INCLUSIVA Y ATENCIÓN A LA DIVERSIDAD.' },
  { numero: 384, gde: 'EX-2026-00045283- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CRÉASE EL SISTEMA PROVINCIAL DE REGISTRO DIGITAL PARA LA SEGURIDAD EN SENDERISMO, TREKKING Y MONTAÑISMO, DENOMINADO "CUMBRE SEGURA CATAMARCA".' },
  { numero: 383, gde: 'EX-2026-00045243- -HCDCAT-DPEM', tipo: 'Declaración', extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO, CULTURAL Y ARTÍSTICO LA TRAYECTORIA DEL ESTUDIO SUPERIOR DE DANZAS ESPAÑOLAS DE LA CIUDAD CAPITAL DE LA PROVINCIA DE CATAMARCA.' },
  { numero: 381, gde: 'EX-2026-00045219- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CRÉASE EL PROTOCOLO PROVINCIAL DE CONTINUIDAD PEDAGÓGICA ANTE JORNADAS DE FRÍO EXTREMO.' },
  { numero: 343, gde: 'EX-2026-00040836- -HCDCAT-DPEM', tipo: 'Declaración', extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO LA REALIZACIÓN DEL EVENTO "CARROZAS DE LA INDEPENDENCIA", ORGANIZADO POR DOCENTES DEL NIVEL PRIMARIO DEL COLEGIO PRIVADO PADRE RAMÓN DE LA QUINTANA.' },
  { numero: 338, gde: 'EX-2026-00040069- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'ESTABLÉZCASE EL RÉGIMEN DE PROMOCIÓN DEL "COMPRE COOPERATIVO CATAMARQUEÑO".' },
  { numero: 266, gde: 'EX-2026-00035579- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CRÉASE EL REGISTRO PÚBLICO PROVINCIAL DE PERSONAS CONDENADAS POR DELITOS CONTRA LA INTEGRIDAD SEXUAL, EN EL ÁMBITO DEL PODER JUDICIAL DE LA PROVINCIA DE CATAMARCA, BAJO LA DEPENDENCIA DE LA CORTE DE JUSTICIA PROVINCIAL.' },
  { numero: 236, gde: 'EX-2026-00034355- -HCDCAT-DPEM', tipo: 'Declaración', extracto: 'DECLÁRASE DE INTERÉS LEGISLATIVO LA ACTUACIÓN DEL EQUIPO DE FÚTBOL FEMENINO BUSCAPINAS F.C., DEL COLEGIO DE ABOGADOS Y ABOGADAS DE LA PROVINCIA DE CATAMARCA.' },
  { numero: 189, gde: 'EX-2026-00030742- -HCDCAT-DPEM', tipo: 'Declaración', extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO, LA REALIZACIÓN DEL "5° EDICIÓN DE CULTURA COOPERATIVA 2026".' },
  { numero: 188, gde: 'EX-2026-00030729- -HCDCAT-DPEM', tipo: 'Declaración', extracto: 'DECLÁRASE DE INTERÉS LEGISLATIVO, POR LA TRAYECTORIA INSTITUCIONAL DEL CENTRO VECINAL "PTE. RAMÓN S. CASTILLO" DEL BARRIO PILOTO DE LA CIUDAD CAPITAL.' },
  { numero: 187, gde: 'EX-2026-00030712- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'ESTABLÉCESE LA DIGITALIZACIÓN DEL PROCESO DE INSCRIPCIÓN Y REINSCRIPCIÓN DE DOCENTES ANTE LAS JUNTAS DE CLASIFICACIÓN DEPENDIENTES DEL MINISTERIO DE EDUCACIÓN.' },
  { numero: 181, gde: 'EX-2026-00029744- -HCDCAT-DPEM', tipo: 'Declaración', extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO LA TRAYECTORIA Y EL RECIENTE LOGRO INTERNACIONAL DE LA BANDA CATAMARQUEÑA "LOS HIJOS DE HARRI".' },
  { numero: 166, gde: 'EX-2026-00028678- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CRÉASE EL PROCEDIMIENTO PROVINCIAL DE ACTUACIÓN ANTE LA SOSPECHA FUNDADA O DETECCIÓN DE ARMAS, EXPLOSIVOS, ARTEFACTOS SIMULADOS U OBJETOS POTENCIALMENTE PELIGROSOS EN EL ÁMBITO EDUCATIVO.' },
  { numero: 163, gde: 'EX-2026-00028561- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CRÉASE EL REGISTRO PROVINCIAL DE APOYO ESCOLAR Y TUTORÍAS (REPAT), EN EL ÁMBITO DEL MINISTERIO DE EDUCACIÓN DE LA PROVINCIA DE CATAMARCA, COMO SISTEMA PÚBLICO DE VALIDACIÓN, ORGANIZACIÓN Y VINCULACIÓN DE SERVICIOS EDUCATIVOS COMPLEMENTARIOS.' },
  { numero: 142, gde: 'EX-2026-00026957- -HCDCAT-DPEM', tipo: 'Declaración', extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO AL PROYECTO "FORTALEZA HECHA FALDA", INICIATIVA FORMATIVA, CREADA Y COORDINADA POR LA PROFESORA ROMINA SALVATIERRA.' },
  { numero: 141, gde: 'EX-2026-00026947- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'ESTABLÉCESE LA COBERTURA INTEGRAL DE INFUSORES SUBCUTÁNEOS CONTINUOS DE INSULINA Y DE SISTEMAS DE MONITOREO CONTINUO DE GLUCOSA EN SANGRE, NO INVASIVOS E INDOLOROS, Y DE LOS MEDICAMENTOS E INSUMOS DE ÚLTIMA TECNOLOGÍA PARA PACIENTES NIÑOS, NIÑAS Y ADOLESCENTES HASTA LOS DIECIOCHO (18) AÑOS DE EDAD INCLUSIVE CON PATOLOGÍA DIAGNOSTICADA DE DIABETES MELLITUS TIPO 1 (DM1) Y TIPO 2 (DM2).' },
  { numero: 140, gde: 'EX-2026-00026914- -HCDCAT-DPEM', tipo: 'Ley Provincial', extracto: 'CREASE UN DISTINTIVO VEHICULAR DE USO VOLUNTARIO PARA CONDUCTORES DE SETENTA AÑOS O MÁS.' },
  { numero: 139, gde: 'EX-2026-00026894- -HCDCAT-DPEM', tipo: 'Declaración', extracto: 'DECLÁRASE DE INTERÉS PARLAMENTARIO A LA "COMPAÑÍA DE DANZAS FEMENINA EULALIAS", INICIATIVA ARTÍSTICA Y CULTURAL CREADA Y COORDINADA POR LAS PROFESORAS VERÓNICA ANAHÍ CATIVA Y ANDREA MELINA CORBALÁN.' }
];

// ---------------------------------------------------------------
// Comisiones que integra (fuente: CEDOP / diputadoscatamarca.gob.ar).
// ---------------------------------------------------------------
const COMISIONES = [
  { nombre: 'Legislación General', rol: 'Presidente' },
  { nombre: 'Peticiones y Poderes' },
  { nombre: 'Legislación Social y del Trabajo' },
  { nombre: 'Obras y Servicios Públicos' }
];

// ---------------------------------------------------------------
// Agenda — reemplazá estos placeholders por fechas y lugares reales.
// ---------------------------------------------------------------
const AGENDA = [
  { fecha: '[FECHA]', lugar: '[LOCALIDAD / BARRIO]', detalle: '[Detalle: recorrida, audiencia pública o reunión vecinal]' },
  { fecha: '[FECHA]', lugar: '[LOCALIDAD / BARRIO]', detalle: '[Detalle de la actividad]' },
  { fecha: '[FECHA]', lugar: '[LOCALIDAD / BARRIO]', detalle: '[Detalle de la actividad]' }
];

const CATEGORIAS = ['Todos', 'Ley Provincial', 'Declaración'];

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
    : PROYECTOS.filter((p) => p.tipo === filtroActivo);

  document.getElementById('filterCount').textContent =
    `Mostrando ${filtrados.length} de ${PROYECTOS.length} expedientes — ${filtroActivo === 'Todos' ? 'todos los tipos' : filtroActivo}`;

  grid.innerHTML = '';
  filtrados.forEach((p) => {
    const color = CATEGORY_COLORS[p.tipo] || 'var(--accent)';
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <span class="project-cat" style="color:${color}">${p.tipo} · N° ${p.numero}</span>
      <p class="project-extracto">${p.extracto}</p>
      <div class="project-status">
        <span class="dot" style="background:${color}"></span>
        <span>${p.gde}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderComisiones() {
  const wrap = document.getElementById('comisionesList');
  if (!wrap) return;
  wrap.innerHTML = '';
  COMISIONES.forEach((c) => {
    const item = document.createElement('div');
    item.className = 'comision-card';
    item.innerHTML = `
      <span class="comision-nombre">${c.nombre}</span>
      ${c.rol ? `<span class="comision-rol">${c.rol}</span>` : ''}
    `;
    wrap.appendChild(item);
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
  renderComisiones();
  renderAgenda();
  initContactForm();
});
