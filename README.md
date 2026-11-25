# Cervicales app

App de una sola página para dolor cervical: te guía la sesión de ejercicios paso por paso, te
recuerda las pausas activas y lleva el registro de dolor, adherencia, sueño y actividad.

**→ https://julianrodriguezia1.github.io/cervicales-app/**

Se puede instalar en el teléfono desde el navegador y funciona sin internet.

---

## Esto no es consejo médico

Es un proyecto personal. La Chartered Society of Physiotherapy recomienda **consultar a un
fisioterapeuta antes de empezar cualquier rutina nueva**, y eso vale acá también.

**Parar y consultar de inmediato** si aparece: pérdida de control de vejiga o intestino,
hormigueo en **ambos** brazos o **ambas** piernas, adormecimiento genital o anal, debilidad
muscular, falta de equilibrio, dificultad para caminar, disfunción sexual, hormigueo o brazo
frío. La app repite esta lista adentro.

---

## De dónde sale cada indicación

Cada ejercicio, dosis y consejo de la app tiene su fuente citada en pantalla. Nada está inventado
para llenar un hueco: **donde el protocolo original no publica un número, la app lo dice con la
palabra FALTA** en vez de improvisar uno.

Las tres cosas que ordenan el programa, y que van contra lo que uno esperaría:

1. **Los estiramientos solos no funcionan.** Cochrane 2015 (PMID 25629215): *"when only
   stretching exercises were used no beneficial effects may be expected"*. El RCT de JAMA
   (PMID 12759322) lo cuantifica: el grupo que solo estiraba ganó **+10 %** de fuerza cervical en
   un año; el que hizo fuerza, **+110 %** — y bajó más el dolor.
2. **La postura no es la causa.** La evidencia transversal la asocia al dolor (PMID 31773477),
   pero la longitudinal no encontró que lo cause (PMID 40845624, PMID 33290371). Lo que sí
   predijo dolor futuro fue **dormir mal y moverse poco**. Y lo único que previno dolor nuevo en
   un ensayo aleatorizado (PMID 33906239) fueron las **pausas activas**.
3. **La adherencia es el tratamiento.** PMID 40273517: el ejercicio de cuello iguala a la terapia
   manual **solo con adherencia alta**. Por eso la app mide y recuerda, en vez de solo describir.

La dosis sale del protocolo del ensayo de Ylinen (PMID 12759322), reproducido con series y
repeticiones en PMID 25995604. Los números del escritorio salen del *Computer Workstations eTool*
de OSHA. El resto de las fuentes son folletos de fisioterapia del NHS británico.

---

## Qué hace

- **Sesión guiada**, un ejercicio por pantalla, con la dosis y la fuente. Detecta en qué semana
  del programa estás y muestra la carga que corresponde. Cuatro variantes: fuerza con banda,
  fuerza con la mano (con cronómetro), la variante de resistencia, o la corta de 2 minutos por día
  (PMID 21177034).
- **Pausa activa** de 1 minuto con cronómetro, y recordatorio cada 30, 45 o 60 minutos.
- **Registro diario**: dolor 0-10, sesión hecha, sueño 1-5, minutos de actividad.
- **Revisión**: compara tus primeras dos semanas contra las últimas dos y dice qué corresponde
  hacer según las fuentes — incluido el caso en que el dolor no bajó pero la adherencia fue baja.
- **El plan completo** adentro de la app, para no depender de un PDF.

## Tus datos

Se guardan **solo en tu navegador** (`localStorage`). No hay servidor, no hay cuenta, no hay
analítica y nada sale de tu dispositivo. Si limpiás los datos del navegador, se pierden: usá el
botón **Respaldo JSON**. También exporta a CSV.

## Técnico

Un solo archivo HTML sin dependencias ni build. El service worker lo hace funcionar sin internet.
Se puede clonar y abrir `index.html` con doble clic; también funciona así.

MIT.
