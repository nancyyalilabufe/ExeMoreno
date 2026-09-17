# Sitio institucional — Exequiel Moreno

Este es un sitio real, en HTML/CSS/JavaScript puro. No necesita instalar nada
para verlo: abrí `index.html` con doble clic y te lo muestra el navegador.
Para publicarlo en internet, seguí los pasos de abajo.

---

## 1. Conectar el formulario de contacto (para que las consultas lleguen a algún lado)

El formulario ya está armado y diseñado. Le falta un solo dato: a dónde
mandar lo que la gente escribe. Vamos a usar **Google Forms** por detrás
(gratis, sin código de servidor, y las respuestas quedan en una planilla de
Google que podés mirar cuando quieras, o recibir por mail).

### Paso 1 — Creá el formulario en Google
1. Entrá a [forms.google.com](https://forms.google.com) con la cuenta de
   Gmail que quieras usar para esto.
2. Creá un formulario nuevo con **exactamente estas 3 preguntas**, en este
   orden (el tipo de respuesta entre paréntesis):
   - **Nombre** (Respuesta corta)
   - **Email** (Respuesta corta)
   - **Tu consulta** (Párrafo)
3. Arriba a la derecha, activá **"Respuestas" → ícono de la planilla verde**
   para que cada envío se guarde en una Google Sheet automáticamente.
4. En el mismo panel de "Respuestas", tocá los tres puntitos (⋮) →
   **"Recibir notificaciones por correo de nuevas respuestas"** para que te
   llegue un mail cada vez que alguien escribe.

### Paso 2 — Sacá los datos que necesita el sitio
1. En tu formulario, tocá los tres puntitos (⋮) arriba a la derecha →
   **"Obtener enlace para completar automáticamente"**.
2. Completá los 3 campos con cualquier texto de prueba (por ejemplo
   "PRUEBA") y tocá **"Obtener enlace"**, después **"Copiar enlace"**.
3. Pegá ese enlace en un bloc de notas. Vas a ver algo así:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform?usp=pp_url&entry.111111=PRUEBA&entry.222222=PRUEBA&entry.333333=PRUEBA
   ```
4. De ahí sacás 4 datos:
   - El **ID del formulario**: la parte larga entre `/d/e/` y `/viewform`
     (en el ejemplo: `1FAIpQLSf...`)
   - El **entry.111111** que quedó pegado al campo "Nombre"
   - El **entry.222222** que quedó pegado al campo "Email"
   - El **entry.333333** que quedó pegado al campo "Tu consulta"

   (Para saber cuál `entry` es cuál: fijate en qué orden completaste los
   campos de prueba, o abrí el formulario, click derecho → "Inspeccionar" →
   buscá `entry.` cerca de cada pregunta. Si esto te resulta confuso, mandame
   el enlace completo del Paso 2.3 y te digo yo cuál es cuál.)

### Paso 3 — Pegalo en el sitio
Abrí `index.html`, buscá esta parte (cerca de la sección de Contacto):

```html
<form id="contactForm" class="contact-form"
      action="https://docs.google.com/forms/u/0/d/e/TU_FORM_ID/formResponse"
      method="POST" target="hidden_iframe">
```

Reemplazá `TU_FORM_ID` por el ID del Paso 2. Después, en los tres campos de
abajo, reemplazá:
- `entry.TU_ENTRY_ID_NOMBRE` → tu `entry.111111` del campo Nombre
- `entry.TU_ENTRY_ID_EMAIL` → tu `entry.222222` del campo Email
- `entry.TU_ENTRY_ID_MENSAJE` → tu `entry.333333` del campo Tu consulta

Guardá el archivo. Listo — el formulario ya manda cada consulta a tu
Google Sheet y te avisa por mail.

---

## 2. Publicarlo con GitHub Pages (gratis)

Igual que hiciste con `seguimiento-legislativo`:

1. Creá un repositorio nuevo en GitHub (por ejemplo `sitio-exequiel-moreno`).
2. Subí estos archivos y carpetas tal cual están: `index.html`, `css/`,
   `js/`, `images/`.
3. En el repositorio: **Settings → Pages → Source: main branch → Save**.
4. En un par de minutos, tu sitio va a estar en:
   `https://TU-USUARIO.github.io/sitio-exequiel-moreno/`

## 3. Conectar el dominio propio

Cuando compres el dominio (por ejemplo `exequielmoreno.com.ar`):

1. En el mismo repositorio, creá un archivo llamado `CNAME` (sin
   extensión) con una sola línea adentro: tu dominio, por ejemplo
   `exequielmoreno.com.ar`.
2. En el panel de tu proveedor de dominio, agregá un registro **CNAME**
   que apunte `www` (o el que uses) a `TU-USUARIO.github.io`.
3. En GitHub: **Settings → Pages**, escribí el dominio en "Custom domain"
   y activá **"Enforce HTTPS"** cuando esté disponible (puede tardar unas
   horas en habilitarse).

Si te trabás en cualquiera de estos pasos, mandame captura y seguimos
juntas.

---

## Editar contenido

- **Proyectos y agenda**: editá el archivo `js/script.js`, arriba de todo
  están los arrays `PROYECTOS` y `AGENDA` — cada uno es una lista de
  objetos con los datos. Agregar uno nuevo es copiar el formato de los
  que ya están.
- **Textos, colores, biografía**: editá directamente `index.html` (textos)
  y `css/style.css` (colores, tipografía, espaciados — los colores están
  centralizados arriba del archivo, en `:root`).
- **Foto**: reemplazá `images/moreno-hero.jpg` por otra con el mismo
  nombre de archivo, o cambiá la ruta en `index.html`.
