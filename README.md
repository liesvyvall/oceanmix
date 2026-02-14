# OceanMix | Laguna Ojo de Liebre

Sitio web de OceanMix: ciencia y comunidad frente a la proliferación de macroalgas invasoras en la Laguna Ojo de Liebre, Baja California Sur.

El sitio comunica el problema ecológico, la metodología de intervención y las oportunidades de aprovechamiento de la biomasa extraída.

## Stack

- HTML5, CSS3 y JavaScript vanilla (sin frameworks ni dependencias)
- Fuente: Montserrat (Google Fonts)
- Deploy: GitHub Pages con dominio custom `oceanmix.com.mx`

## Estructura de archivos

```
├── index.html       Página principal (single page con scroll)
├── styles.css       Estilos y paleta de colores
├── script.js        Interactividad (nav, animaciones, galería, testimonios)
├── favicon.svg      Ícono del sitio
├── CNAME            Dominio custom para GitHub Pages
├── images/          Fotografías de campo y comunidad
└── README.md
```

## Secciones del sitio

1. **Hero** — Introducción y estadísticas clave
2. **Historia** — La laguna y su gente
3. **Crisis** — Impacto laboral, económico y ambiental
4. **¿Qué es OceanMix?** — Entender, Actuar, Aprovechar
5. **Cómo actuamos** — Metodología en 5 pasos
6. **Aprovechamiento** — Vías nutricional, biomateriales y científica
7. **Galería** — Fotografías de campo
8. **FAQ** — Preguntas frecuentes
9. **Contacto** — Colaboración

## Agregar fotos a la galería

1. Sube la imagen a la carpeta `/images/`
2. En `index.html`, dentro del `<div class="gallery">`, agrega una línea:

```html
<figure class="g-item"><img src="images/nombre.jpeg" alt="Descripción" loading="lazy"></figure>
```

El grid se ajusta automáticamente sin importar cuántas fotos haya. El lightbox también las detecta de forma automática.
