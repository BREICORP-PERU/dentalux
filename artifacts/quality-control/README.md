# Control de calidad visual y editorial — DentaLux

Fecha de revisión: 26 de octubre de 2026.

## Evidencias

- `dentalux-desktop-full.png`: DentaLux, 1440 × 6916 px.
- `dentalux-mobile-full.png`: DentaLux, 390 × 11017 px.
- `dental-uchuya-desktop-full.png`: referencia Dental Uchuya, 1440 × 10053 px.
- `dental-uchuya-mobile-full.png`: referencia Dental Uchuya, 390 × 16627 px.

Las capturas de referencia se generaron desde `https://dentaluchuya.vercel.app`. Las de DentaLux se generaron desde el servidor local; no hubo despliegue.

## Comparación visual

| Área | Evaluación DentaLux frente a Dental Uchuya |
| --- | --- |
| Hero | La jerarquía, el contraste y el CTA son sólidos. DentaLux evita usar una fotografía no autorizada; por ello tiene menos calidez humana que el hero fotográfico de Uchuya. |
| Proporciones y tipografía | La escala es consistente en escritorio y móvil, con títulos claros y textos de lectura cómoda. |
| Fotografías | Uchuya conserva ventaja por su material clínico y profesional real. DentaLux muestra únicamente ilustraciones provisionales claramente identificadas. |
| Jerarquía de contenido | El recorrido reserva → información institucional → galería → equipo → preguntas → ubicación es claro, sin atribuir servicios no confirmados. |
| Espaciado | Ritmo amplio y consistente. No se detectó desbordamiento horizontal a 1440 px ni a 390 px. |
| Tarjetas | Bordes, radios, sombras e iconografía se mantienen coherentes. Las tarjetas de servicios pasaron a ser pasos institucionales. |
| Color | Negro, blanco y dorado son consistentes; los CTA dorados usan texto negro para conservar contraste. |
| Navegación móvil | Apertura, cierre con Escape, bloqueo de desplazamiento, foco inicial, trampa de foco y retorno al disparador verificados. |
| Galería Bento | Mantiene el patrón visual, pero con dos piezas provisionales. Deberá enriquecerse cuando existan fotografías auténticas aprobadas. |
| Footer | Coherente con la identidad y sin teléfono ni horario pendientes presentados como confirmados. |

## Veracidad comercial

- No aparecen María E., Carlos R. ni Ana L.
- No se renderiza la sección de testimonios mientras `siteConfig.testimonials` esté vacío.
- Los seis tratamientos permanecen solo en configuración con estado `pending`; no se muestran como oferta confirmada.
- No se publican estadísticas, años de experiencia, certificaciones, especialidades, nombres profesionales ni fotografías clínicas no aprobadas.
- El teléfono y el horario permanecen en configuración con estado `pending` y no se presentan como hechos confirmados.
- Se retiró del JSON-LD el código postal que no había sido aportado por el cliente.

## Pruebas de interacción

- 10 CTA utilizan exactamente `https://bit.ly/DENTALUXCITAS`.
- El enlace de reserva resolvió a un chat de WhatsApp y respondió HTTP 200; se conserva el enlace corto oficial, sin publicar el número pendiente como teléfono confirmado.
- Facebook, Instagram, TikTok y Google Maps respondieron HTTP 200.
- El iframe utiliza el código de Google Maps facilitado por el cliente.
- Menú móvil y lightbox: apertura, foco en control de cierre, cierre con Escape y retorno de foco correctos.
- Sin imágenes rotas, botones sin nombre accesible ni desbordamiento horizontal en la revisión automatizada.

## Conclusión

La implementación alcanza una ejecución visual consistente y profesional sin sacrificar veracidad comercial. No puede igualar todavía la credibilidad fotográfica de Dental Uchuya: para ello se necesitan fotografías reales autorizadas de la clínica, profesionales y espacios, además de contenido comercial validado.
