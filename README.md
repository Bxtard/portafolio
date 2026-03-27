# Bryan Estrada — Portafolio Personal

Portafolio web personal con estetica **vaporwave** construido con [Astro](https://astro.build). Sitio 100% estatico, sin frameworks JS adicionales — solo Astro, CSS y JavaScript vanilla.

## Estructura del proyecto

```text
/
├── public/
│   └── profile.jpg
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Tech.astro
│   │   ├── Experience.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── astro.config.mjs
```

## Secciones

- **Hero** — Nombre con efecto glitch, typewriter, grid de perspectiva y particulas.
- **Sobre mi** — Perfil profesional con foto y tarjeta glassmorphism.
- **Tecnologias** — Grid de logos con animacion flotante (SimpleIcons CDN).
- **Experiencia** — Timeline vertical neon + educacion.
- **Contacto** — Links a LinkedIn, GitHub y email.

## Caracteristicas

- Tema oscuro (vaporwave) y tema claro con toggle y persistencia en localStorage.
- Paleta neon: magenta, cyan y purpura sobre fondos oscuros.
- Tipografia retro-futurista (Orbitron + Share Tech Mono).
- Efectos CSS: glitch, scanlines, grid de perspectiva, glassmorphism, glow neon.
- Responsive y mobile-first.

## Comandos

| Comando             | Accion                                         |
| :------------------ | :--------------------------------------------- |
| `npm install`       | Instala las dependencias                       |
| `npm run dev`       | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`     | Genera el sitio estatico en `./dist/`          |
| `npm run preview`   | Previsualiza el build localmente               |

## Stack

Astro &bull; HTML &bull; CSS &bull; JavaScript
