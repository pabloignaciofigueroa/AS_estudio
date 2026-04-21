# Blueprint del referente BIG

Fuente analizada:
- [BIG _ Bjarke Ingels Group.html](/C:/Users/pablo/Desktop/aa/big%20page/BIG%20_%20Bjarke%20Ingels%20Group.html:3)
- [02iq8h40tjp.9.css](/C:/Users/pablo/Desktop/aa/big%20page/BIG%20_%20Bjarke%20Ingels%20Group_files/02iq8h40tjp.9.css:1)

## 1. Qué hace que esta web se sienta premium

No transmite confianza por decir mucho. La transmite por:

- selección visual muy fuerte
- orden editorial extremo
- navegación simple pero rica en filtros
- tipografía neutra y precisa
- mucho aire en blanco
- ritmo repetitivo y consistente en todas las fichas
- sensación de archivo vivo, no de landing comercial

La web no intenta vender con frases grandilocuentes. Demuestra autoridad mostrando obra, sistema y criterio.

## 2. ADN visual que debemos replicar

### Paleta

- fondo blanco absoluto
- texto negro absoluto
- grises suaves para navegación secundaria y metadatos
- casi sin color decorativo

Regla:
- si usamos color, que venga de la fotografía
- la interfaz debe mantenerse sobria, silenciosa y editorial

### Tipografía

Detectado:
- usan `Everett` como sans principal

Sensación tipográfica:
- neutral
- contemporánea
- técnica pero elegante
- sin dramatismo

Qué debemos buscar si no usamos Everett:
- una grotesk contemporánea limpia
- tracking levemente abierto en labels
- títulos sin florituras
- mayúsculas para navegación y metadatos

### Espaciado

La calidad percibida viene mucho del aire:

- márgenes generosos
- separación consistente entre bloques
- textos cortos y bien contenidos
- nada se siente apretado

## 3. Estructura visible del sitio

## Header

Patrones detectados:
- logo arriba a la izquierda
- navegación principal colapsable
- buscador pequeño arriba
- filtro/categorías arriba a la derecha
- header fijo

Menú principal detectado:
- Projects
- News
- About
- Sustainability
- People
- Careers
- Contact

Conclusión:
- el header no intenta dominar
- funciona como capa de navegación sobre un archivo visual

## Navegación por categorías

Detectado en el referente:
- Architecture
- Interiors
- Landscape
- Planning
- Products

Y subcategorías por disciplina:
- Culture
- Education
- Work
- Hospitality
- Residential
- Infrastructure
- Space
- Sports
- Health
- Civic Spaces
- Parks
- Gardens
- Campus
- City
- Region
- Lighting
- Furniture
- Consumer Products
- Mobility
- Installations

Aprendizaje para nuestra web:
- no basta con “Inicio / Proyectos / Contacto”
- una web de arquitectura buena se siente profunda cuando clasifica el trabajo
- las categorías aumentan confianza porque muestran especialización real

## Home / archivo de proyectos

Patrón dominante:
- la home es básicamente un archivo curado de proyectos
- no una landing tradicional con hero + claims + botones

Qué aparece:
- listado muy amplio de proyectos
- imagen dominante por proyecto
- nombre del proyecto
- ciudad + país
- a veces información extendida vía metadata y etiquetas

Ejemplos visibles extraídos del HTML:
- Tennessee Performing Arts Center / Nashville, United States
- NOT A HOTEL Setouchi / Sagishima, Japan
- East Side Coastal Resiliency / New York, United States
- BIG HQ / Copenhagen, Denmark
- CityWave / Milan, Italy
- Gelephu International Airport / Gelephu, Bhutan
- CopenHill / Copenhagen, Denmark
- One High Line / New York, United States
- The Spiral / New York, United States
- Google Bay View / Mountain View, United States

Conclusión:
- la home no habla de la oficina primero
- primero pone la obra al frente
- la marca se valida por volumen, diversidad y consistencia

## 4. Patrón de ficha/proyecto

Cada proyecto, en esencia, tiene:

1. Imagen o pieza visual dominante
2. Nombre del proyecto
3. Ubicación
4. Disciplina / categoría
5. Estado o metadata adicional
6. En algunos casos tags conceptuales y técnicos

Esto produce dos niveles de lectura:

- lectura rápida: imagen + nombre + ciudad
- lectura experta: filtros, estado, tags, tipologías, escalas

Para nuestro proyecto, eso significa que cada card debería tener mínimo:

- foto principal potente
- nombre corto
- comuna/ciudad + país
- tipo de proyecto
- año o estado

Ideal:
- superficie
- materialidad principal
- estatus: construido, en obra, conceptual

## 5. Tono de marca

El tono no es:
- vendedor
- emocional
- cercano
- explicativo de más

El tono sí es:
- seguro
- institucional
- preciso
- silencioso
- internacional

Cómo escribir para una web inspirada en BIG:
- frases cortas
- verbos concretos
- pocas promesas
- más evidencia que adjetivos

Ejemplo de tono correcto:
- “Residencias en la costa sur de Chile.”
- “Arquitectura residencial, interiorismo y planificación.”
- “Proyectos concebidos desde el paisaje, la luz y la materialidad.”

Ejemplo de tono incorrecto:
- “Creamos espacios soñados para transformar tu vida con pasión y excelencia.”

## 6. Señales de confianza que sí debemos copiar

- archivo amplio de proyectos
- nombres de obras claros
- ubicaciones específicas
- categorías por especialidad
- consistencia editorial
- fotografías de alta calidad
- interfaz limpia, sin ruido
- marca contenida, no gritona

Señales de confianza que podemos sumar en nuestra versión:
- años de proyecto
- superficie
- programa
- estado de obra
- equipo o colaboradores
- publicaciones o premios

## 7. Decisiones técnicas visibles en el referente

Detectado en CSS:
- tipografía custom cargada por `@font-face`
- layout muy apoyado en utilidades tipo Tailwind
- navegación fija
- alto uso de `uppercase`
- widths editoriales como `70vw`, `74vw`, `90vw`
- grillas grandes en desktop
- textos con `line-clamp`
- escalado de layout en móvil
- logo con animación de trazos SVG

Referencias:
- font Everett y variables globales en [02iq8h40tjp.9.css](/C:/Users/pablo/Desktop/aa/big%20page/BIG%20_%20Bjarke%20Ingels%20Group_files/02iq8h40tjp.9.css:1)
- tamaños y grillas como `w-[70vw]`, `max-w-[74vw]`, `xl:grid-cols-[auto_minmax(580px,60%)_minmax(auto,40%)_1fr]` en [02iq8h40tjp.9.css](/C:/Users/pablo/Desktop/aa/big%20page/BIG%20_%20Bjarke%20Ingels%20Group_files/02iq8h40tjp.9.css:2)

Qué replicar:
- composición amplia y respirada
- grilla sobria
- navegación fija
- microinteracciones discretas

Qué no necesitamos copiar literal:
- complejidad completa del buscador
- catálogo de cientos de tags
- lógica de datos gigantesca
- escalado exacto del sitio original

## 8. Traducción práctica para nuestra web de arquitectura

Si vamos a hacer una versión inspirada en BIG para un estudio local o propio, la estructura recomendada sería:

## Opción A: home tipo archivo editorial

Secciones:
- header fijo
- intro mínima de marca
- filtro por categorías
- listado de proyectos
- bloque estudio
- bloque servicios
- contacto / footer

Esto es lo más fiel al espíritu BIG.

## Opción B: híbrido archivo + captación

Secciones:
- header fijo
- hero con una frase breve
- proyectos destacados
- archivo filtrable
- estudio
- servicios
- proceso
- contacto

Esto mantiene la sofisticación de BIG, pero funciona mejor si queremos captar clientes.

## 9. Reglas para no arruinar la referencia

No hacer:
- demasiados colores
- fondos oscuros porque sí
- textos largos en hero
- botones gigantes
- sombras pesadas
- cards con bordes decorativos
- animaciones exageradas
- tono comercial tipo agencia

Sí hacer:
- blanco, negro y gris
- imágenes grandes
- tipografía contenida
- títulos sobrios
- datos concretos
- sistema de categorías
- ritmo editorial repetible

## 10. Blueprint de contenido para nuestra primera versión

## Header

- logo
- proyectos
- estudio
- servicios
- contacto
- filtro de categorías

## Intro mínima

- nombre del estudio
- una línea de posicionamiento

Ejemplo:
- “Arquitectura residencial y espacial pensada desde el paisaje.”

## Archivo de proyectos

Cada proyecto debe incluir:
- imagen
- nombre
- ubicación
- categoría
- año o estado

## Estudio

Texto breve:
- quiénes son
- cómo piensan
- qué tipo de encargos hacen

## Servicios

- arquitectura
- interiorismo
- remodelación
- planificación
- visualización o acompañamiento de obra

## Contacto

- email
- ciudad base
- Instagram
- formulario simple o link directo

## 11. Workflow que nace de este referente

1. Elegir si haremos versión `archivo editorial` o `híbrida de captación`
2. Seleccionar 8 a 16 proyectos con las mejores fotos
3. Definir categorías reales del estudio
4. Escribir metadata de cada proyecto
5. Diseñar una grilla blanca, silenciosa y amplia
6. Construir header fijo + filtros
7. Implementar cards de proyecto consistentes
8. Agregar una capa mínima de estudio/servicios/contacto
9. Pulir tipografía, espaciado y ritmo visual

## 12. Decisión recomendada para nosotros

Recomiendo usar BIG como referente en:

- estructura editorial
- sistema de archivo
- tono sobrio
- navegación por categorías
- uso del blanco y la tipografía

Y adaptarlo, no copiarlo, en:

- branding
- naming
- textos
- orden de secciones
- nivel de captación comercial

## 13. Qué ya tenemos a favor en esta carpeta

Detectado:
- carpeta `imagenes` con material de proyectos residenciales
- al menos proyectos como `casa bahía pillul` y `casa Leonard`

Esto alcanza para construir una primera versión inspirada en BIG si:
- elegimos buenas fotos hero
- ordenamos bien la metadata
- reducimos el número de secciones a las necesarias

## 14. Siguiente paso ideal

Antes de diseñar o programar, necesitamos definir:

- nombre del estudio
- si la home será archivo puro o híbrida
- lista inicial de proyectos
- categorías reales
- idioma principal de la web

Con eso, ya podemos pasar del análisis a una primera implementación visual.
