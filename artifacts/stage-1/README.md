# Etapa 1 — Hero y Navbar

Fecha: 26 de octubre de 2026.

## Alcance aplicado

- Hero fotográfico inmersivo inspirado en la estructura visual de Dental Uchuya.
- Degradados negros, acentos dorados, titular de alta jerarquía y profundidad visual.
- CTA principal al canal oficial de reservas y CTA secundario a `#nosotros`.
- Navbar integrada sobre la fotografía y variante blanca al desplazarse.
- Menú móvil enriquecido, conservando cierre con Escape, trampa de foco y retorno al disparador.
- Información limitada a nombre, dirección y enlace oficial confirmados.
- Servicios, Nosotros, Galería, Equipo, FAQ, Ubicación y Footer no se modificaron en esta etapa.

## Imagen referencial

Archivo final: `public/hero-dentalux-referential.webp` (1672 × 941 px, 145 520 bytes).

La imagen fue generada con la herramienta integrada de OpenAI para esta implementación. Se presenta expresamente como recurso ilustrativo y no representa la sede, los profesionales ni los pacientes reales de DentaLux.

Resumen del prompt: fotografía editorial natural de una consulta odontológica contemporánea; entorno luminoso con vegetación tropical, madera cálida y detalles dorados; sujetos ubicados a la derecha y espacio negativo oscuro a la izquierda; sin logotipos, textos, certificados, ubicación identificable ni atribución a DentaLux.

## Evidencias

- `dentalux-stage1-desktop.png`: 1440 × 900 px.
- `dentalux-stage1-mobile.png`: 390 × 844 px.
- `dentalux-stage1-mobile-menu.png`: 390 × 844 px.

No se detectó desbordamiento horizontal ni imágenes rotas. La composición recupera el peso fotográfico y la jerarquía del Hero de Dental Uchuya, manteniendo una identidad propia en negro, blanco y dorado.

## Ajustes finales aprobados conceptualmente

- El texto dorado `comienza aquí` usa un tono claro sólido y sombra de contraste en móvil.
- El encuadre móvil desplaza el rostro de la profesional hacia el borde derecho para separarlo del titular.
- El CTA flotante permanece oculto mientras el CTA principal del Hero es visible y aparece después mediante `IntersectionObserver`.
- La aclaración de imagen referencial se integró en el flujo del contenido, con mayor contraste y lectura.
- Menú verificado a 320, 375 y 390 px, incluida una altura de 480 px con desplazamiento funcional.
- A 320 px el menú conserva foco inicial en el botón de cierre, cierre con Escape y retorno del foco al botón de apertura.

Capturas finales:

- `dentalux-stage1-final-desktop.png`: 1440 × 900 px.
- `dentalux-stage1-final-mobile-390.png`: 390 × 844 px.
- `dentalux-stage1-final-mobile-375.png`: 375 × 667 px.
- `dentalux-stage1-final-mobile-320-low.png`: 320 × 568 px.
- `dentalux-stage1-final-menu-320-low.png`: menú a 320 × 568 px.
- `dentalux-stage1-final-menu-320-bottom.png`: parte inferior del menú desplazable a 320 × 480 px.
- `dentalux-stage1-final-menu-375.png` y `dentalux-stage1-final-menu-390.png`: comprobaciones adicionales.
- `dentalux-stage1-final-after-hero.png`: aparición del CTA flotante después del Hero.

## Punto de restauración

- Archivo: `.backups/dentalux-pre-stage1-20261026-102623.tar.gz`
- SHA-256: `635B478E795B56A4BA3D8F16F54E50F4DA51033D405A7EFF4733B4D033C07AC1`
- Entradas: 82.
