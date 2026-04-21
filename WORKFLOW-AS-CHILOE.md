# Workflow · Construcción de landings premium
## Caso: AS · estudio arquitectura Chiloé (v7 → v10 → v11)

Este archivo documenta el **método de trabajo** usado en esta sesión para transformar una landing plana (v7) en una experiencia de producto premium estilo Antigravity (v10/v11). Sirve como plantilla para futuros proyectos.

---

## 0. Filosofía del workflow

> **No escribir código antes de alinear dirección.** Cada decisión se toma en conjunto, por hitos, con preguntas concretas y opciones acotadas (A/B/C/D). El código llega solo después de que las 4-5 decisiones clave estén cerradas.

El valor de este método no está en "Claude escribe rápido". Está en:

1. **Evitar slop** — decisiones intencionales en vez de defaults genéricos.
2. **Trazabilidad** — cada cambio tiene una razón registrada.
3. **Iteración barata** — después del hito base, los cambios son quirúrgicos.
4. **Reutilización** — el mismo proceso sirve para cualquier proyecto web.

---

## 1. Insumos iniciales (lo que el usuario aporta)

Para arrancar necesito mínimo:

- **Archivo base** (ej: `indexv7.html` + css + js) o "página en blanco".
- **Referencias estéticas** (carpetas tipo `antigravity-reference-kit/MEMORIA-ANTIGRAVITY.md`, otros sitios, PDFs).
- **Skills de apoyo** activos en el proyecto:
  - `frontend-design.md` — anti-slop, tipografía distintiva, compromiso estético bold.
  - `web-artifacts-builder.md` — stack React/Vite (opcional, se puede ignorar).
  - `emil-design-eng` — polish de UI fino.
- **Paleta de color** (hex exactos).
- **Assets disponibles** (carpeta `imagenes/` con rutas).

---

## 2. Hitos del workflow

### Hito 0 — Alineación de dirección (SIEMPRE antes de código)

Pregunto **4 decisiones agrupadas** con opciones acotadas:

1. **Dirección estética** (A/B/C/D concretos, uno por tono — editorial, SaaS premium, brutalista, etc.).
2. **Stack técnico** (vanilla HTML/CSS/JS vs React bundleado vs otro).
3. **Intensidad de motion** (ligero CSS-only / medio + typed+parallax / pesado con GSAP ScrollTrigger + canvas particles).
4. **Copy** (mantener textos originales o reescribir según reglas de la referencia).

**Formato de respuesta esperado**: corto, tipo `A / vanilla / pesado / reescribir`.

### Hito 1 — Preguntas finas antes de código

Una vez cerrada la dirección, pregunto 4-5 afinaciones:

1. **Tipografía** — 4 opciones concretas (Satoshi, Geist, Archivo, General Sans, etc.) + recomendación argumentada. Nunca Inter/Roboto/Arial/Space Grotesk (prohibidos por `frontend-design.md`).
2. **Estructura de secciones** — propongo lista ordenada basada en la matriz de la referencia; usuario aprueba o edita.
3. **Hero media** — imagen específica de las disponibles, o video.
4. **Libs externas** — CDN vs local (GSAP suele ir CDN).
5. **Parámetros clave** (densidad partículas, intensidad de scrub, etc.).

### Hito 2 — Construcción base (primera build)

Genero **3 archivos** en paralelo:

- `indexvN.html` — estructura semántica con hooks `data-*` para el JS.
- `indexvN.css` — sistema de tokens completo (ver sección 4 de este doc).
- `indexvN.js` — motion + interactions, wrapper en IIFE.

Antes de crear, **anuncio qué voy a hacer en 3-5 bullets** para que el usuario pueda abortar si algo no cuadra.

### Hito 3 — Iteración quirúrgica (nueva versión)

Usuario abre la página, reporta 3-5 cambios puntuales. Yo:

1. Reconozco cada cambio con interpretación explícita ("entendí X, voy a hacer Y").
2. Creo **nueva versión numerada** (v10 → v11) copiando archivos — NO sobrescribo la versión anterior.
3. Aplico cada cambio con `Edit` puntual, no rewrite completo.
4. Entrego con resumen de qué cambió técnicamente por punto.
5. Cierro con nuevas preguntas para el siguiente ciclo.

### Hito N — Repetir Hito 3 hasta finalizar

Cada versión = un set de cambios cerrado. Siempre numerada. Siempre con resumen técnico.

---

## 3. Dirección estética para "Antigravity-style SaaS premium"

Lo que hace que se sienta premium y no slop:

### Tipografía
- **Display + mono** siempre (no solo una sans).
- Elegida: **Satoshi** (Fontshare) + **JetBrains Mono** (Google Fonts).
- Prohibidas: Inter, Roboto, Arial, Space Grotesk, system-ui por defecto.

### Paleta (este proyecto)
```
--white:          #ffffff
--surface-1:      #f4f6fa   (gris claro superficie)
--surface-2:      #e8ebf0   (gris un poco más fuerte)
--grey-header:    #67707d   (gris header)
--grey-header-dk: #5c6571
--text-0:         #111318   (texto principal)
--text-2:         #626b78   (texto secundario)
--blue-600:       #21409a   (azul imperial marca)
--blue-500:       #3d63d3   (azul hover/brillo)
```

### Principios Antigravity aplicados
1. **Hero corto** — titular breve + CTA doble, no 3 párrafos.
2. **Prueba visual temprana** — galería/demo antes de la explicación larga.
3. **Sistema de tokens** desde el inicio, no colores hardcodeados.
4. **Motion con propósito** — jerarquiza, no decora.
5. **Profundidad de producto** — header con 4+ rutas sugeridas.
6. **Cierre fuerte en footer** — wordmark grande, no lista seca.
7. **CTA repetido** con contextos distintos (4-5 veces).

### Motion stack (pesado)
- **GSAP 3 + ScrollTrigger** (CDN).
- **Canvas particles vanilla** con distribución Poisson-inspired + repulsión al mouse + conexiones.
- **Typed header rotatorio** (vanilla).
- **Custom cursor** con difference blend + estado hover.
- **Pin horizontal scroll** en galería (ScrollTrigger + scrub).
- **Morphing** de imágenes con preload + CSS transition.
- **Counters** animados al entrar en viewport.
- **Reveals** con stagger y delay data-attributes.
- **Marquee seamless** con dos filas idénticas y translate -50%.
- **Parallax** del hero image con scrub.

### Anti-slop checklist
- [ ] ¿Tipografía distintiva (no Inter)?
- [ ] ¿Paleta comprometida (no "gris todo")?
- [ ] ¿Asimetría o grid-breaking en algún bloque?
- [ ] ¿Un detalle memorable (typed header, wordmark gigante, cursor custom)?
- [ ] ¿Motion con timeline orquestado (no animaciones sueltas al azar)?
- [ ] ¿Grain overlay u otra textura sutil?
- [ ] ¿Blur usado como jerarquía (header, chips, botones ghost)?

---

## 4. Sistema de tokens CSS (plantilla reutilizable)

```css
:root {
  /* palette — reemplazar con la del proyecto */
  --white, --surface-0/1/2, --grey-*, --text-0/1/2, --blue-*

  /* typography */
  --ff-display, --ff-body, --ff-mono
  --fs-xs (12) → --fs-hero clamp(64, 10vw, 148)

  /* grid */
  --grid-columns: 12
  --page-margin: 72px (desktop) → 40px (tablet) → 20px (mobile)
  --grid-gutter: 32px
  --shell-max: 1480px

  /* radii */
  --r-sm: 6, --r-md: 12, --r-lg: 20, --r-xl: 32, --r-pill: 9999

  /* motion */
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1)
  --ease-out-quart, --ease-in-out
  --dur-1 (180ms) → --dur-4 (1100ms)

  /* shadows */
  --shadow-1/2/3 + --shadow-blue (tint de marca)
}
```

Breakpoints: **1600 / 1024 / 767 / 425** (match Antigravity).

---

## 5. Estructura de secciones (matriz reusable)

Secuencia editorial validada en este proyecto:

1. **Header fijo** con blur scroll-state.
2. **Hero** — foto + partículas + typed header + CTA doble + chip flotante + scroll indicator.
3. **Strip/Marquee** — bullets técnicos sobre fondo oscuro, seamless.
4. **Prueba visual** — pin horizontal con 6-12 slides, progress bar + counter.
5. **Philosophy/Manifiesto** — grid 3fr/9fr con head sticky + 3 principios grandes.
6. **Proyectos** — cards con hero image morphable + 6 thumbnails + meta dl + CTA.
7. **Servicios** — grid 4 col + 1 wide oscuro, con radial gradient on hover.
8. **Statement band** — quote + 3 contadores animados, con radial blur azul.
9. **Contacto** — head sticky + lead + dl list + actions + fine print.
10. **Footer** — 3 cols de links + wordmark gigante azul + bottom line.

---

## 6. Convenciones de archivos

- Versionado: `indexvN.html/css/js` — **NUNCA sobrescribir versión anterior**.
- Iterar = copiar archivos + Edit puntual.
- Nombres en inglés en código, comentarios/copy en español.
- Comentarios CSS en bloques `/* ==== SECCIÓN ==== */` para navegar rápido.
- JS siempre en IIFE `(() => { ... })()` con helpers `$` / `$$`.
- `prefers-reduced-motion` respetado en todas las animaciones.
- `pointer: coarse` desactiva cursor custom en mobile.

---

## 7. Historia de decisiones (este proyecto)

### v7 → v10 (reestructuración completa)

| Decisión | Valor |
|---|---|
| Dirección | Antigravity-style SaaS premium |
| Stack | Vanilla HTML/CSS/JS |
| Motion | Pesado (GSAP + canvas) |
| Copy | Reescribir hero corto |
| Fonts | Satoshi + JetBrains Mono |
| Hero img | `casa Leonard/exteriores/01.png` |
| GSAP | CDN jsDelivr 3.12.5 |
| Partículas | Densidad protagonista |

### v10 → v11 (afinación iteración 1)

| Cambio | Implementación |
|---|---|
| Marquee infinito sin corte | Restructura: 2 `.strip__row` dentro de `.strip__track`, `width: max-content`, `translateX(0 → -50%)`. |
| Proof: 12 → 6 fragmentos | Título "Seis fragmentos", 3 imágenes por casa (ext 01+03 + int 01 de cada). |
| Philosophy max width | Grid 5fr/7fr → 3fr/9fr, gap 96px, remove `max-width: 52ch`, h3 de `--fs-xl` → `--fs-2xl`. |
| Wordmark footer 3x azul | `fill: var(--blue-600)`, font-size 640px en viewBox 1600×780, overflow visible. |

---

## 8. Preguntas-plantilla por hito

### Arrancar un proyecto nuevo
1. Dirección: A (editorial) / B (SaaS premium) / C (brutalista) / D (otra)
2. Stack: vanilla / React bundleado / otro
3. Motion: ligero / medio / pesado
4. Copy: mantener / reescribir según reglas Antigravity

### Después del Hito 0
1. Tipografía: Satoshi / Geist / Archivo / General Sans / otra
2. ¿Apruebas esta estructura de N secciones?
3. Hero media: ¿cuál imagen/video de la carpeta?
4. CDN vs local para libs externas
5. Densidad de efecto (partículas/parallax): sutil / notoria

### Después del Hito 2
1. Primera impresión — ¿tono correcto o muy tech/editorial?
2. Motion más fuerte — ¿lo dejamos o lo bajamos?
3. Cursor custom — ¿on o off?
4. Words/copy editables (typed words, manifiesto, stats)
5. ¿Falta sección o sobra?

### Después de cada iteración
1. ¿El cambio X ya resuelve lo reportado?
2. ¿Nuevos bugs visuales que notaste?
3. ¿Algo del motion que moleste en uso real?
4. ¿Siguiente set de cambios o cerramos?

---

## 9. Errores a no repetir

- ❌ Saltarse el Hito 0 y empezar a escribir sin alinear dirección.
- ❌ Proponer "cualquier cosa" en vez de 3-4 opciones concretas.
- ❌ Sobrescribir versión anterior (perder trazabilidad).
- ❌ Rewrite completo cuando basta un `Edit`.
- ❌ Usar Inter/Roboto/Space Grotesk por default.
- ❌ Paleta "timid" (todo gris claro, sin acento fuerte).
- ❌ Motion sin timeline orquestado (animaciones sueltas al azar).
- ❌ Hero con 3 párrafos (anti-regla Antigravity).
- ❌ Terminar sin preguntas para siguiente iteración.

---

## 10. Prompts reutilizables para futuros proyectos

### Prompt de arranque
> "Voy a construir una landing para [proyecto]. Base: [archivo.html]. Referencia estética: [carpeta o URL]. Paleta: [hex]. Assets en [carpeta]. Usa el método WORKFLOW-AS-CHILOE.md — pregúntame por hitos antes de escribir código."

### Prompt de iteración
> "Abrí vN y quiero estos cambios: [1, 2, 3]. Crea v(N+1) aplicando solo esos cambios. Dime qué tocaste técnicamente y déjame preguntas para el siguiente ciclo."

### Prompt de cierre
> "Estamos cerrando. Resume el historial de decisiones en una tabla (v7 → vfinal) y actualiza WORKFLOW-AS-CHILOE.md con el aprendizaje nuevo de esta sesión."

---

## 11. Siguiente iteración (v11 → v12) — queda pendiente

Preguntas abiertas al cerrar esta sesión:

1. ¿Marquee ya corre continuo sin corte en v11?
2. ¿Pin horizontal con 6 slides se siente bien o muy corto?
3. ¿Philosophy width ya respira?
4. ¿Wordmark 3x azul aprobado o más grande/controlado?
5. Contadores del band (12/34/2) son inventados — dar reales.

---

_Última actualización: sesión v7 → v11. Mantener este doc vivo con cada proyecto nuevo._
