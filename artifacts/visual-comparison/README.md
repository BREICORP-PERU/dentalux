# Evidencia visual y paleta DentaLux

## Logotipo oficial analizado

- Archivo fuente: `src/app/dentaluxlogo.png`
- Formato y dimensiones: PNG RGBA, 1080 × 1080 px
- SHA-256: `C3091031CC395C425AD67F37DC8DC621D0D41852E31842BE7EAAA3B5ED130D20`
- Píxeles totalmente transparentes: 854 139 de 1 166 400 (73,23 %)
- Píxeles parcialmente transparentes: 65 113 (5,58 %)
- Píxeles opacos: 247 148 (21,19 %)
- El archivo no incorpora un fondo negro sólido. El fondo es transparente; el negro se usa como superficie de presentación para conservar el contraste del texto blanco original.

## Dorado extraído del PNG

| Uso | RGB | HEX | Criterio |
| --- | --- | --- | --- |
| Dorado principal | 208, 176, 82 | `#D0B052` | Mediana por canales de los píxeles dorados visibles |
| Dorado oscuro | 126, 101, 37 | `#7E6525` | Zona oscura saturada del degradado; apta para texto sobre blanco |
| Dorado claro | 240, 225, 122 | `#F0E17A` | Zona luminosa saturada del degradado |

La referencia inicial `#D0AF51` queda confirmada como muy cercana. Se adopta `#D0B052` porque corresponde a la mediana obtenida directamente del archivo original.

## Contraste de combinaciones activas

- Negro `#111111` sobre dorado principal: 9,00:1
- Blanco `#FFFFFF` sobre negro: 18,88:1
- Dorado oscuro sobre blanco: 5,56:1
- Texto secundario `#626262` sobre blanco: 6,10:1
- Texto secundario sobre superficie `#F7F7F5`: 5,69:1
- Dorado claro sobre negro: 14,17:1

## Capturas

- `before-desktop.png`: referencia previa, escritorio.
- `after-desktop.png`: identidad corregida, escritorio a 1440 × 1000.
- `before-mobile.png`: referencia previa de la portada móvil.
- `after-mobile.png`: identidad corregida, emulación real a 390 × 844.
- `after-mobile-full.png`: recorrido completo de todas las secciones a 390 px.

La validación CDP registró `scrollWidth = 390` para `innerWidth = 390`; no existe desbordamiento horizontal en móvil.
