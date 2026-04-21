# Memoria Antigravity

## Proposito

Esta memoria convierte el analisis de la captura local de `Google Antigravity` en un kit reusable para futuros proyectos. No es una copia del sitio ni del repo fuente original. Es una lectura de arquitectura, sistema visual, motion design, estructura editorial y patrones de producto detectables desde la carpeta local disponible.

La idea no es replicar la obra de Google, sino abstraer:

- que decisiones tecnicas generan percepcion de calidad
- que decisiones editoriales hacen que el sitio se sienta serio
- que piezas del sistema son trasladables a paginas para clientes
- como convertir una landing bonita en un ecosistema de producto

## Alcance Del Analisis

La carpeta auditada contiene una captura compilada del sitio:

- `Google Antigravity.html`
- `Google Antigravity_files/styles-7KLEMMT6.css`
- `Google Antigravity_files/main-OUJ24QGL.js.descarga`
- assets estaticos locales

Esto significa:

- si podemos leer mucho de la arquitectura real
- no tenemos el repo fuente original
- no tenemos el chunk remoto adicional completo
- algunas inferencias deben tratarse como inferencias y no como confirmaciones absolutas

## Resumen Ejecutivo

Antigravity no destaca solo por "verse moderno". Destaca porque combina cuatro capas al mismo tiempo:

1. Un sistema visual riguroso:
   tipografia variable, grid consistente, espaciado disciplinado, tokens centralizados y una paleta muy controlada.
2. Un sistema de movimiento programado:
   reveals, scroll choreography, typed headers, sliders, morphing, video y capas de blur usadas con criterio.
3. Una arquitectura de producto:
   no es solo un home; hay rutas, casos de uso, producto, blog, pricing, changelog, docs, releases y descargas.
4. Una matriz editorial:
   el hero vende percepcion y direccion; la explicacion profunda llega mas abajo; el sitio no intenta explicar todo arriba.

La leccion principal para proyectos serios es esta:

> lo que transmite capacidad tecnica no es una animacion aislada, sino la coherencia entre sistema visual, jerarquia de contenido, motion y profundidad de producto.

## Evidencia Auditada

### Archivos Base

- HTML principal: `Google Antigravity.html`
- CSS principal: `Google Antigravity_files/styles-7KLEMMT6.css`
- JS principal: `Google Antigravity_files/main-OUJ24QGL.js.descarga`

### Tamano De Archivos Capturados

- `Google Antigravity.html`: `255046` bytes
- `styles-7KLEMMT6.css`: `20647` bytes
- `main-OUJ24QGL.js.descarga`: `1701016` bytes
- `gtm.js.descarga`: `401570` bytes
- miniaturas principales: entre `1.9 MB` y `2.1 MB`

### Advertencia Metodologica

Como el bundle esta minificado y parte del sitio se apoya en un chunk remoto preloaded, algunas cosas se pueden confirmar con precision y otras solo con alta probabilidad.

### Confirmado

- Angular `20.3.11`
- SPA con router
- tipografias `Google Sans Flex`, `Google Sans Code`, `Google Symbols`
- GSAP y plugins de scroll / drag
- particulas distribuidas con `PoissonDiskSampling`
- sistema de tokens CSS
- analytics con GTM
- cookie notification bar

### Inferido Con Alta Probabilidad

- presencia de una capa grafica avanzada para particulas y morphing
- uso de canvas para particulas y fondos interactivos
- orquestacion de motion por secciones a traves de componentes dedicados

### No Confirmado Al 100 Por Ciento

- uso directo de `Three.js`

No aparece confirmado de forma limpia en la captura local disponible. Puede existir en el chunk remoto, pero no debe afirmarse como hecho cerrado sin ese archivo.

## Stack Tecnologico

### Framework Principal

El HTML muestra `ng-version="20.3.11"`, por lo que la pagina esta montada en Angular 20.

Eso implica varias cosas muy importantes:

- la web se piensa como aplicacion, no como landing suelta
- hay componentes reales por seccion
- hay routing
- hay estado de UI
- hay posibilidad de layouts distintos por area

### Tipo De Aplicacion

Es una SPA con rutas y vistas:

- home
- product
- use cases
- blog
- download
- pricing
- changelog
- support
- terms
- interest form
- press
- releases
- docs
- auth callbacks

La percepcion de "sitio gigante" viene tambien de esto. El visitante nota que detras del home hay producto real.

### Librerias Y Mecanicas Detectadas

- `GSAP`
- `ScrollTrigger`
- `Draggable`
- `CustomEase`
- soporte de inercia en sliders
- `PoissonDiskSampling`
- `canvas`

### Lo Que No Usa Como Base Visible

No hay evidencia de:

- Tailwind
- Bootstrap
- jQuery
- Next.js
- Vue
- Svelte

## Inventario De Componentes Detectados

Tags personalizados detectados en el HTML capturado:

- `app-root`
- `app-header`
- `app-button`
- `typed-header`
- `youtube-video-section`
- `landing-agent-first`
- `feature-explorer-new`
- `use-cases`
- `landing-try-solutions`
- `landing-latest-blogs`
- `download-section`
- `app-footer`
- `app-antigravity-footer`
- `landing-main-particles-component`
- `landing-morphing-particles-component`
- `modal-youtube`
- `app-slider`
- `slider-arrow-controls`
- `app-custom-cursor`

Frecuencias de algunos componentes en el DOM capturado:

- `app-button`: `15`
- `typed-header`: `6`
- `landing-main-particles-component`: `2`
- `landing-morphing-particles-component`: `2`
- `app-custom-cursor`: `3`

Eso muestra una arquitectura basada en bloques reutilizables y no en una sola plantilla larga.

## Arbol De La Landing

Arbol simplificado del home:

```text
app-root
|- app-header
|- landing / main
|  |- landing-main-particles-component
|  |- typed-header
|  |- youtube-video-section
|  |- landing-agent-first
|  |- feature-explorer-new
|  |- use-cases
|  |- landing-try-solutions
|  |- landing-latest-blogs
|  `- download-section
`- app-footer
```

Lectura de negocio del arbol:

- `header`: navegacion y acceso rapido
- `hero + particles + typed header`: impresion inicial y status premium
- `youtube-video-section`: demostracion
- `agent-first` y `feature explorer`: explicacion funcional
- `use-cases`: segmentacion por audiencia
- `try solutions` o pricing / org split: conversion diferenciada
- `latest blogs`: prueba de vida y contenido
- `download`: cierre de conversion
- `footer`: ecosistema completo

## Arbol De Producto

Arbol de rutas detectado en el bundle:

```text
/
|- blog
|  `- :id
|- use-cases
|  `- :id
|- download
|  `- linux
|- changelog
|- pricing
|- support
|- product
|- terms
|- interest-form
|- press
|- releases
|- docs
|  `- :page
|- auth-success
|- verification-success
`- oauth-callback
```

Leccion trasladable:

- una pagina seria no termina en el home
- el home debe insinuar que existe sistema detras
- la arquitectura de informacion tambien vende confianza

## Sistema Visual

### Tipografias

Fuentes detectadas:

- `Google Sans Flex`
- `Google Sans Code`
- `Google Symbols`

#### Rol De Cada Una

- `Google Sans Flex`: voz principal del producto
- `Google Sans Code`: acento tecnico, snippets y tono de herramienta
- `Google Symbols`: iconografia textual coherente con la tipografia

#### Leccion

No mezclar una fuente cualquiera con iconos desconectados. Aqui la tipografia y la iconografia pertenecen a la misma familia de lenguaje visual.

### Escala Tipografica

El CSS define una escala completa por tokens:

- `--9xl-size` a `--xs-size`
- clases `landing-main`, `heading-00`, `heading-0` ... `heading-9`
- `body`
- `caption`
- `small`
- `call-to-action`

Hay dos ideas finas aqui:

- la escala es amplia pero muy controlada
- cada tamano tiene line-height y letter-spacing propios

Esto evita que el sitio se sienta "plantillero".

### Grid Y Layout

Variables clave:

- `--grid-columns: 12`
- `--page-margin: 72px`
- `--grid-gutter: 64px`

Breakpoints:

- `1600px`
- `1024px`
- `767px`
- `425px`

En tablet:

- `8` columnas
- margen `40px`

En mobile:

- `4` columnas
- margen `16px`

Leccion:

- no basta con "responsive"
- hay una re-composicion real del sistema

### Color

La paleta visible se apoya mucho en:

- grises estructurales
- azul como acento funcional
- blancos y overlays

Tonos destacados:

- `--palette-grey-1200: #121317`
- `--palette-grey-800: #45474D`
- `--palette-grey-10: #F8F9FC`
- `--palette-blue-600: #3279F9`

No es una paleta exuberante. Es una paleta de producto serio:

- base neutral
- contraste alto
- color de accion medido

### Shape Language

Radios definidos:

- `4px`
- `8px`
- `16px`
- `24px`
- `36px`
- `48px`
- `9999px`

Lectura:

- cards y bloques: esquinas amplias y suaves
- chips y botones: rounded
- la geometria se siente tecnicamente refinada, no corporativa antigua

### Blur Y Overlay

Uso recurrente de:

- `backdrop-filter: blur(5px)`
- `blur(6px)`
- `blur(8px)`
- `blur(10px)`
- `blur(16px)`

Se usa en:

- header
- dropdowns
- botones secundarios
- overlays de video
- chips

Leccion:

- el blur no es un adorno de moda
- funciona como jerarquia, separacion y premium finish

## Motion System

### Motion Como Infraestructura

El sitio no usa animacion como "extra". La animacion es parte de la arquitectura.

Se detectan:

- timeline central
- reveals de opacidad y desplazamiento
- scroll driven fades
- sliders con drag e inercia
- typing secuencial
- lineas activas y tabs animadas
- autoplay condicionado al viewport

### Hero

Elementos claves:

- `min-height: 100svh`
- video de fondo fijo
- `object-fit: cover`
- fade del video segun scroll
- titular tipeado
- particulas de fondo

Por que funciona:

- comunica "producto vivo"
- comunica sofisticacion sin saturar de texto
- la primera impresion es de sistema, no de brochure

### Typed Header

El componente `typed-header` crea una escritura letra por letra con cursor propio.

Efecto perceptivo:

- precision
- sensacion de software
- refinamiento tecnico

Peligro al copiarlo:

- usarlo en demasiados lugares lo vuelve gimmick
- en Antigravity se usa con disciplina

### Particulas

Detectado:

- `landing-main-particles-component`
- `landing-morphing-particles-component`
- `canvas`
- `PoissonDiskSampling`

Funcion:

- densidad configurable
- escala configurable
- sensacion de capa viva
- soporte atmosferico del hero y de algunos bloques

Principio reusable:

- si vas a usar fondos complejos, que refuercen la direccion del bloque
- no usar particulas por usar particulas

### Sliders

El bundle contiene una implementacion de loop horizontal con:

- centrado
- drag
- autoplay
- pausa en hover
- activacion solo en viewport
- indicadores y nav manual
- easing custom

Leccion:

- un carrusel premium necesita comportamiento fino
- autoplay sin control suele parecer barato
- aqui el slider esta tratado como componente de producto

### Video Y Cursor

Se detectan:

- `modal-youtube`
- `app-custom-cursor`
- overlays con CTA de reproduccion

Leccion:

- el video no se incrusta de forma torpe
- se empaqueta como experiencia

### Footer Premium

El footer no es una lista seca. Tiene:

- wordmark SVG grande
- filtros
- blur
- marca expandida
- links completos

Esto hace que el sitio cierre fuerte, no se desplome al final.

## Sistema Editorial

### Regla Maestra

Antigravity no intenta vender todo en el primer pantallazo.

Secuencia editorial detectada:

1. Impresion tecnica
2. Senal clara de producto
3. Demo o prueba visual
4. Explicacion de capacidades
5. Segmentacion por perfiles
6. Profundidad de ecosistema
7. Conversion

### Densidad Aproximada De Copy

Conteos aproximados obtenidos del DOM renderizado:

| Bloque | Caracteres aprox. | Palabras aprox. | Lectura |
|---|---:|---:|---|
| Header | 617 | 63 | Navegacion y acceso |
| Hero | 122 | 48 | Claim breve y CTA |
| Intro video | 38 | 5 | Disparador de demo |
| Teaser de capacidades | 416 | 107 | Catalogo rapido |
| Bloque de features | 1167 | 540 | Desarrollo principal |
| Use cases / posicionamiento | 913 | 156 | Segmentacion |
| Pricing / org split | 132 | 21 | Conversion dual |
| Latest blogs | 330 | 51 | Social proof / vida |
| Download final | 105 | 41 | Cierre |
| Footer | 146 | 20 | Ecosistema |

Importante:

- el hero es corto
- la explicacion larga no desaparece, pero baja
- primero convencen con forma, despues con detalle

### Lecciones De Copy

- no meter tres parrafos en el hero
- no intentar explicar el stack completo arriba
- abrir con una idea fuerte
- mostrar producto pronto
- segmentar por perfil real
- usar titulares con dos capas: principal + apoyo

## Matriz De Secciones Y Funcion

### 1. Header

Funcion:

- navegar
- mostrar profundidad
- abrir dropdowns
- sostener conversion siempre visible

Patrones:

- fixed
- blur
- estados por scroll
- menu mobile separado

### 2. Hero

Funcion:

- provocar respeto tecnico
- posicionar producto
- activar CTA

Patrones:

- video fijo
- particulas
- logo
- headline tipeado
- CTA doble

### 3. Video Section

Funcion:

- convertir promesa en prueba

Patrones:

- thumbnail / wrapper premium
- cursor personalizado
- modal

### 4. Agent First / Features

Funcion:

- traducir "wow" en funcionalidades

Patrones:

- iconos
- bullets
- cards
- imagenes / video
- explicaciones medianas

### 5. Use Cases

Funcion:

- decirle a cada perfil "esto es para ti"

Patrones:

- `Professional`
- `Frontend`
- `Fullstack`
- morphing visual
- CTA por caso

### 6. Conversion Intermedia

Funcion:

- separar ruta developer / organizacion

Patrones:

- dos carriles de accion
- lenguaje de disponibilidad
- formularios o notify me para org

### 7. Latest Blogs

Funcion:

- demostrar que el producto vive
- demostrar pensamiento continuo

Patrones:

- featured article
- tabs
- filtro de tags

### 8. Download Final

Funcion:

- cerrar la pagina con una accion evidente

Patrones:

- deteccion de OS
- botones por plataforma
- typed header final

### 9. Footer

Funcion:

- cerrar con marca y sistema

Patrones:

- SVG marca
- doble bloque de links
- enlaces corporativos

## Principios Reutilizables Para Otros Proyectos

### Lo Que Si Conviene Copiar Como Principio

- hero corto con alta percepcion tecnica
- demo visual antes de la explicacion larga
- sistema de tokens desde el inicio
- tipografia fuerte y coherente
- CTA repetido a lo largo del recorrido
- use cases por audiencia real
- profundidad de producto detras del home
- motion con proposito
- cierre fuerte en footer

### Lo Que No Conviene Copiar Literalmente

- logos
- copy exacto
- SVGs de marca
- miniaturas o assets
- look and feel identico

## Traduccion A Paginas Para Clientes Serios

### Cliente B2B De Servicios

Traducir asi:

- hero con claim fuerte y prueba de solvencia
- seccion de metodologia
- seccion de capacidades
- seccion de casos / industrias
- seccion de credibilidad
- CTA final

No hace falta usar particulas si el cliente no soporta ese tono. Lo importante es:

- jerarquia
- precision
- control visual

### SaaS O Producto Digital

Traducir asi:

- hero con demo
- sistema de features por modulo
- casos de uso
- pricing
- changelog
- docs

### Agencia Premium

Traducir asi:

- hero muy sintetico
- prueba visual temprana
- proceso y capacidades
- verticales atendidas
- casos / resultados
- cierre con calendario o contacto

## Checklist De Reutilizacion

### Sistema

- Definir tokens de color.
- Definir escala tipografica completa.
- Definir grid y page margins.
- Definir radios y shapes.
- Definir easings.

### Hero

- Limitar el copy principal.
- Incluir prueba visual o producto en 1 o 2 scrolls maximo.
- Evitar saturacion textual.
- Dar un CTA primario y uno secundario.

### Motion

- Definir solo 3 a 5 familias de animacion.
- Reutilizar las mismas curvas y duraciones.
- Animar para jerarquizar, no para decorar.

### Contenido

- Separar claim, explicacion, prueba y conversion.
- Escribir por audiencia real.
- Repetir CTA con contexto distinto.

### Producto

- Si el proyecto es serio, no dejar el home solo.
- Crear al menos 3 o 4 rutas de respaldo.

## Prompts Reutilizables

### Prompt 1

"Analiza este proyecto y propon un home premium inspirado en principios de Antigravity, sin copiar branding ni assets. Necesito sistema visual, motion, jerarquia de secciones y CTA para un cliente serio."

### Prompt 2

"Usa la memoria Antigravity para redisenar esta landing. Conserva la marca actual, pero aplica una arquitectura de producto: hero corto, demo visual temprana, bloques de capacidades, use cases y cierre de conversion."

### Prompt 3

"Construye un design system base para este proyecto tomando como referencia la disciplina de Antigravity: tokens, escala tipografica, grid responsive, botones, cards, overlays, motion y patrones de seccion."

### Prompt 4

"Transforma esta pagina informativa en una experiencia que transmita capacidad tecnica. Quiero principios inspirados en Antigravity: percepcion premium, claridad de producto y modularidad por secciones."

## Riesgos Al Aplicarlo Mal

- Sobrecargar de animaciones.
- Copiar el look en vez del sistema.
- Meter demasiado texto en el hero.
- Usar fondos complejos sin relacion con la narrativa.
- Hacer un home premium con interiores pobres.
- Poner videos y sliders sin control de performance.

## Limitaciones Del Analisis

- No se audito el repo fuente original.
- No se confirmo el chunk remoto adicional.
- No se pueden atribuir todas las decisiones internas del equipo.
- Los conteos editoriales son aproximados y provienen del DOM renderizado local.

## Conclusiones Practicas

Antigravity funciona porque mezcla:

- rigor de sistema
- motion disciplinado
- narrativa corta arriba
- profundidad abajo
- arquitectura de producto real

La referencia correcta no es "quiero una pagina que se vea como Antigravity".

La referencia correcta es:

> quiero una pagina que haga sentir al usuario que hay un equipo tecnico serio, un sistema visual maduro y un producto o servicio construido con criterio.

Si logras eso, ya estas copiando lo importante y evitando copiar lo superficial.
