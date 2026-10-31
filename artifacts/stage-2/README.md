# Etapa 2 — Servicios y Nosotros

Fecha de revisión: 26 de octubre de 2026.

## Alcance

- Reconstrucción exclusiva de las secciones `#servicios` y `#nosotros`.
- Hero, Navbar, Galería, Equipo, FAQ, Ubicación y Footer no fueron modificados.
- Los enlaces de reserva conservan `https://bit.ly/DENTALUXCITAS` desde `siteConfig`.

## Servicios

- El componente mantiene preparada la cuadrícula de servicios confirmados en tres columnas para escritorio.
- La lista interna conserva seis tratamientos con estado `pending`; ninguno aparece en la interfaz pública.
- Mientras no existan servicios confirmados, se muestran tres bloques institucionales orientados al paciente: motivo de la visita, coordinación de fecha y confirmación previa.
- No aparecen textos de estado editorial como “información pendiente” o “tratamientos por confirmar”.

## Nosotros

- Se sustituyó el bloque negro con el logotipo por una composición editorial asimétrica con fotografía protagonista.
- La imagen está identificada como referencial y no se atribuye a la sede, personal o pacientes reales.
- El contenido público utiliza únicamente nombre, dirección, Google Maps, redes sociales y reservas proporcionados por el cliente.
- No se publican estadísticas, certificaciones, años de experiencia ni perfiles profesionales.

## Imagen referencial

Archivo: `public/about-dentalux-referential.webp`.

- Dimensiones: 1122 × 1402 px.
- Peso: 177 466 bytes.
- Generada con la herramienta integrada de OpenAI y optimizada localmente a WebP.
- Resumen del prompt: conversación odontológica editorial y natural entre profesional y paciente, encuadre vertical 4:5, entorno contemporáneo con madera cálida y vegetación, sin logotipos, textos, certificados, ubicación identificable ni atribución a DentaLux.

## Verificación visual

| Captura | Resultado |
| --- | --- |
| `dentalux-stage2-desktop-1440.png` | Tres columnas y composición Nosotros en dos columnas. |
| `dentalux-stage2-tablet-768.png` | Servicios en dos columnas y Nosotros apilado. |
| `dentalux-stage2-mobile-390.png` | Flujo móvil completo, sin desbordamiento. |
| `dentalux-stage2-mobile-320.png` | Flujo móvil compacto, aclaración referencial y ubicación separadas. |

En todos los anchos: cero imágenes rotas, cero desbordamiento horizontal y cero tratamientos pendientes visibles.

## Punto de restauración

- Archivo: `.backups/dentalux-pre-stage2-20261026-110109.tar.gz`
- SHA-256: `652D75DCF1F5A32B8B6F23D3EC528DD4FEB91802C6D4204BCFE1AEA49C8F2960`
- Entradas: 97.
