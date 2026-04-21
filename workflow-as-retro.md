# Workflow AS Retro

## 1. Idea madre

Este proyecto nacio con una idea simple:

- construir una pagina web de arquitectura
- aprender a trabajar en pareja humano + agente
- usar referencias reales para no inventar calidad desde cero
- convertir gusto, criterio y material existente en una pagina con valor comercial

La idea correcta que aparecio temprano fue esta:

- primero se define el workflow
- despues se trabaja el referente
- despues la marca
- despues el contenido real disponible
- recien ahi se diseña y se construye

## 2. El modelo de colaboracion que mejor funciono

Somos dos engranajes:

- el usuario mueve la direccion, el gusto, la correccion y el negocio
- el agente mueve estructura, sintesis, traduccion a decisiones y ejecucion tecnica

Cuando uno gira, el otro tambien.

La clave no es "que el agente adivine todo".
La clave es:

- preguntar bien al principio
- construir rapido despues
- iterar en versiones
- corregir fino sin perder historial

## 3. Decisiones reales tomadas en este proyecto

### Negocio y objetivo

- tipo de sitio: pagina preview
- objetivo: monetizar interes, no mostrar todo el estudio
- CTA principal: llevar a Instagram
- destino de links y botones:
  - `https://www.instagram.com/as_estudioarquitecturachiloe`

### Marca

- nombre: `AS estudio arquitectura chiloe`
- branding base:
  - azul imperial
  - grises
  - blanco

### Direccion visual

- referencia estructural principal: BIG
- referencia de sistema visual y contraste: Coinbase
- tono final buscado:
  - mas editorial que corporativo
  - sobrio
  - silencioso
  - premium

### Activos entregados

- `logotipo.png`
- `isotipo.png`
- `imagotipo.png`
- carpeta de imagenes con:
  - `casa bahia pillul`
  - `casa Leonard`

### Contenido y reglas

- como no habia informacion completa, se autorizo usar copy provisional
- regla aprobada:
  - todo texto inventado debe quedar como provisional o referencial

## 4. Aciertos del proceso

### Acierto 1: partir por el workflow

Antes de disenar, se definio como trabajar.
Eso evito improvisar cada decision.

### Acierto 2: usar un referente real

Analizar BIG antes de construir subio el nivel del criterio:

- estructura
- tono
- ritmo editorial
- forma de mostrar proyectos

### Acierto 3: convertir el analisis en documento

Se creo:

- `BIG-blueprint.md`
- `AS-workflow.md`

Eso transformo intuiciones en reglas de trabajo.

### Acierto 4: trabajar con versiones

Las iteraciones `indexv2` a `indexv7` permitieron:

- corregir sin miedo
- volver atras
- comparar decisiones
- evitar perder una direccion visual util

### Acierto 5: separar workflow de construccion

Se entendio algo clave:

- en fase workflow hay que preguntar mucho
- en fase construccion hay que preguntar menos y ejecutar mas

## 5. Errores detectados

### Error 1: usar mal el isotipo

El isotipo fue usado como recurso visual donde no correspondia.
La correccion correcta del usuario fue:

- no reemplazarlo
- no forzarlo
- eliminarlo si no aporta

Leccion:
- no todo asset de marca debe aparecer porque existe
- cada elemento debe justificar su presencia

### Error 2: sobre-diseñar algunos bloques antes de cerrar criterio

En algunos momentos se agregaron:

- botones innecesarios
- capsulas decorativas
- bloques intermedios que no eran esenciales

Leccion:
- cuando el proyecto quiere verse editorial, menos es mas

### Error 3: no cerrar antes el uso del logo

Hubo varias vueltas con:

- logo como capsula
- logo sin capsula
- logo demasiado ancho
- logo demasiado presente

Leccion:
- definir temprano:
  - si la marca va como firma
  - como sello
  - como boton
  - o como recurso compositivo

### Error 4: mezclar ramas de version

Se trabajaron `indexv5`, `indexv6`, `indexv7`, pero despues el usuario volvio a pedir cambios sobre una version anterior.

Leccion:
- siempre confirmar sobre que version se sigue
- si hay duda, crear nueva version y declarar la base exacta

## 6. Historial corto de iteraciones

### `preview.html` / `preview.css`

- primera base estructural
- semantica correcta
- primer uso de imagenes y copy

### `indexv2`

- integracion de marca
- look mas editorial
- header gris
- titulos mas modernos
- botones mas reactivos
- galeria con JS para cambiar imagen principal

### `indexv3`

- simplificacion fuerte
- se elimina seccion `Estudio`
- se elimina boton extra en franja intermedia
- se ajusta el cierre visual final

### `indexv4`

- vuelve la capsula del logotipo
- pero mas angosta

### `indexv5`

- se elimina un bloque visual no deseado del hero
- se ajusta texto
- se corrigen espaciados del bloque de contacto

### `indexv6`

- se limpia el isotipo de la interfaz
- se eliminan rastros visuales innecesarios

### `indexv7`

- se iguala la logica de spacing entre bloques superior e inferior en contacto

## 7. Lo que aprendimos sobre comunicacion

La mejor forma de pedir cambios no es "hazlo mejor".
La mejor forma es pedir:

- componente exacto
- cambio exacto
- referencia visual
- intencion del cambio

Ejemplos buenos:

- "quita ese boton"
- "hazlo mas corto"
- "iguala el spacing del bloque inferior con el superior"
- "no reemplaces, elimina"

Esto reduce interpretacion y mejora velocidad.

## 8. Regla fuerte para futuros proyectos

### En fase workflow

Siempre preguntar:

- objetivo del sitio
- rubro
- referencia principal
- marca
- paleta
- tono
- CTA
- activos disponibles
- que si quiere mostrar y que no

### En fase construccion

Preguntar menos.

Hacer mas:

- proponer
- ejecutar
- versionar
- corregir fino

## 9. Hasta donde se puede resolver dentro del sistema actual

Este sistema funciona bien para:

- estrategia de estructura
- copy
- HTML/CSS/JS
- iteracion rapida
- criterio de diseno
- modular versiones

## 10. Cuando conviene ir a otro sistema o depurador

Conviene pasar a otro sistema cuando ocurre una de estas cosas:

### Caso 1: micro-ajuste visual repetido

Si el mismo detalle visual lleva 3 o mas rondas y sigue sin cerrar,
ya no falta criterio: falta feedback visual mas directo.

Ejemplo:

- altura exacta de una linea
- micro-separaciones
- balance de blancos
- sensacion final de un header

### Caso 2: hace falta inspeccion visual en vivo

Si el problema depende de:

- hover real
- responsive exacto
- scroll real
- comportamiento dinamico

conviene entrar con navegador, inspector o sistema con mejor loop visual.

### Caso 3: conflicto de ramas o versiones

Si ya no esta claro:

- cual es la version vigente
- que cambio vive en que archivo
- donde conviene seguir

hay que pausar y reordenar.

### Caso 4: bug tecnico dificil de aislar

Si aparece un problema que mezcla:

- JS
- CSS
- layout
- assets
- browser quirks

conviene depurar con herramientas mas especializadas.

## 11. Regla de escalamiento

Antes de ir a otro sistema:

1. identificar el problema exacto
2. decir sobre que version pasa
3. aislar si es:
   - criterio
   - contenido
   - estilo
   - comportamiento
   - bug
4. recien ahi derivar

Ir a otro sistema no debe reemplazar el workflow.
Debe servir para destrabar una parte puntual.

## 12. Estado del metodo al cierre de este aprendizaje

Lo que si quedo claro:

- el workflow tiene que existir antes del diseno
- el referente se analiza antes de construir
- la marca se usa con disciplina
- la versionacion es obligatoria
- preguntar al inicio acelera todo lo demas
- en build hay que iterar rapido
- si un asset no aporta, se elimina

## 13. Frase operativa para recordar

No estamos tratando de "hacer una pagina".
Estamos construyendo un sistema de trabajo compartido para producir paginas mejores con menos ruido y mas claridad.
