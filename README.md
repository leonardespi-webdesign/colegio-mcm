# Colegio María del Carmen Muriel — sitio web

Sitio estático bilingüe (ES/EN) construido con Astro 5 + Tailwind v4, siguiendo el patrón de contenido editable vía YAML usado en los otros sitios de `code/work/` (`idiomas-ein`, `ULTREC`).

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build estático en dist/
npm run preview   # sirve el build de dist/
```

## Editar contenido

Todo el copy del sitio vive en dos archivos YAML, sin tocar código:

- `src/content/content.es.yml` — contenido en español (default)
- `src/content/content.en.yml` — contenido en inglés (mismo schema)

Datos no traducibles (redes sociales, dominio, Analytics) están en `src/config/site.ts`.

Cada campo lleva un comentario `[CONFIRMADO]` o `[ASUNCIÓN]` — el cuestionario original del cliente llegó casi vacío, así que la mayoría del copy es una suposición razonable pendiente de validar con Rosa Valladares (Directora General) antes de publicar.

**Alcance (actualizado 2026-08-28):** el sitio ya no cubre solo cursos de idiomas/intercambio — se agregó `niveles_educativos` (primaria: CCT, turno, distintivos) y `nosotros.diferenciadores` ("¿Por qué María del Carmen Muriel?"), con nueva página `/niveles-educativos` y link de nav. Ambos usan datos confirmados por conocimiento directo del colegio (inglés diario, grupos reducidos, danza regional, catecismo/valores, certificación Cambridge al concluir primaria) o por registro público SEP (CCT). Preescolar queda fuera a propósito — ver pendiente #12.

## Pendientes del cliente antes de publicar

Estos NO son bugs ni código incompleto — son datos/decisiones que solo el cliente puede dar:

1. **Número de WhatsApp real** — se asumió que el teléfono de contacto (55 5659 9322) también recibe WhatsApp (`content.*.yml` → `contacto.whatsapp`). Confirmar o reemplazar.
2. **Formulario de contacto** — `formulario.formspree_url` tiene un valor placeholder (`PENDIENTE_CONFIGURAR`). Crear una cuenta en [Formspree](https://formspree.io) (o servicio equivalente) y actualizar la URL en ambos archivos de contenido.
3. ~~**Idiomas realmente ofrecidos**~~ — **resuelto.** Confirmado vía flyer real "Un Mundo de Idiomas": 8 idiomas (Inglés, Francés, Italiano, Alemán, Japonés, Coreano, Chino, Ruso).
4. **Fotos reales — parcialmente resuelto.** El logo, el hero, la sección "Nosotros" y una galería de vida escolar ahora usan fotografía real del colegio (`public/images/`). Sigue pendiente: fotos por idioma (todos los cursos comparten una foto genérica), fotos reales del intercambio en Londres/París (siguen siendo de stock), y fotos/headshots de maestros. **Además**: las fotos de la galería incluyen menores identificables — confirmar con el cliente que se cuenta con consentimiento de los padres/tutores para el uso de estas fotografías en el sitio, antes de publicar.
5. **Testimonios, maestros y logros** — siguen vacíos intencionalmente (`testimonios: []`, `maestros: []`, `logros: []`); no hay material fuente (fotos, nombres, cifras) para poblarlos sin inventar datos. **`acreditaciones` ya no está vacío** — se confirmaron las certificaciones Oxford University Press y Cambridge University Press & Assessment (corroboradas en 3 flyers reales distintos).
6. **Aviso de Privacidad** — plantilla LFPDPPP adaptada con los datos reales del cliente, pero **requiere revisión legal** antes de publicarse (el cuestionario no confirmó si ya cuentan con uno).
7. **Dominio propio** — si el cliente registra uno, agregar un archivo `public/CNAME` con el dominio y actualizar `site` en `astro.config.mjs` y `src/config/site.ts`.
8. **Google Analytics / Search Console** — no configurado. Agregar el ID en `src/config/site.ts` cuando el cliente lo confirme.
9. **Redes sociales** — `src/config/site.ts` tiene los campos vacíos; llenar cuando se confirmen los perfiles reales.
10. **Contradicción de años de trayectoria — sin resolver, no publicar.** Un flyer real ("Inscripciones Abiertas") afirma "más de 60 años de experiencia en educación"; otra fotografía (banner de capilla) referencia "125 años" ligados a "1901" para la congregación religiosa afiliada. Ninguna cifra es consistente con la fundación confirmada de 1987 (39 años). El sitio solo publica `fundacion: 1987` — no publicar "60+ años" ni "125 años" en ningún lugar hasta que el cliente aclare directamente con Rosa Valladares si 1987 es la fundación de este plantel/entidad específica, mientras "60+ años"/"1901" corresponden a una historia institucional más amplia que antecede al colegio.
11. **Contradicciones de directorios externos (Google/SEP) vs. datos confirmados por flyer — sin resolver, no publicar.** Una investigación de directorios públicos (ficha de Google, registros SEP) el 2026-08-28 encontró varias cifras distintas a las ya marcadas `[CONFIRMADO]` en este sitio (que vienen de flyers reales). El sitio **no** se actualizó con ninguna de estas — quedan aquí para que quien hable con Rosa Valladares las resuelva de una vez:
    - **Teléfono**: la ficha de Google muestra `55 5554 5062`; el sitio publica `55 5659 9322` (flyer "Inscripciones Abiertas").
    - **Dirección**: algunos registros educativos muestran `Xicoténcatl 298, Col. del Carmen`; el sitio publica `Aguayo 43` (mismo flyer). Es posible que sean accesos distintos del mismo inmueble — no publicar ambas direcciones sin confirmar.
    - **Horario**: la ficha de Google muestra cierre a las 15:00; el sitio publica cierre a las 14:00 (horario regular, mismo flyer).
    - **Año de fundación**: ya había una contradicción sin resolver (ver punto 10, `fundacion: 1987` vs "60+ años"/1901). La nueva investigación suma dos datos más: un registro de la CCT de primaria (`09PPR0301P`) que la fecha en 1982, y un registro gubernamental de "Colegio María del Carmen Muriel A.C." con constitución en 1962. Tres/cuatro cifras distintas (1962, 1982, 1987, "60+ años") — ninguna se publica como definitiva.
    - **Valoración de Google (3.9/5, 31 reseñas)**: no se incorpora al sitio — es un dato que cambia solo y no pertenece a contenido estático versionado.
12. **Preescolar — situación actual sin confirmar, no publicado.** Existe una CCT de preescolar (`09PJN5649X`, históricamente 3 grupos/3 docentes) asociada al mismo domicilio. Algunas fuentes de 2026 la muestran inactiva; datos SEP anteriores la mostraban activa. El sitio **no** incluye preescolar en `niveles_educativos` ni en el menú — confirmar con dirección si actualmente se ofrece y bajo qué CCT antes de agregarlo.
13. **Identidad religiosa — sin especificar.** `nosotros.diferenciadores` y `niveles_educativos` mencionan "formación en valores y fe" / catecismo (confirmado como parte de la oferta real, no un flyer) pero **no** nombran una congregación o denominación específica — pendiente de confirmar con el colegio qué identidad/filosofía religiosa comunican oficialmente.
14. **Cifras de matrícula del ciclo 2022-2023 — no publicadas.** Un registro SEP de ese ciclo reportaba 112 alumnos, 6 grupos, 6 docentes y 6 aulas en primaria. Es un dato de un ciclo anterior, no una cifra actual — se documenta aquí como contexto, pero no aparece en el sitio.
15. **Canal de contacto de marca anterior** — parte del catálogo de cursos de enriquecimiento (Python, IA, Excel, Ajedrez, idiomas en línea) provenía de material promocional bajo una marca anterior ("Esclavas de la Inmaculada Niña", dominio `cmc.edu.mx`, contacto "Julieta Casales", teléfono 221 925 3794). El cliente confirmó que es la misma entidad que el colegio bajo branding heredado; el contenido de cursos se incorporó al sitio reatribuido a los datos de contacto actuales y confirmados del colegio (55 5659 9322, `inf.colegiomariadelcarmenmuriel@gmail.com`). El canal/dominio anterior presumiblemente sigue activo en algún lugar y podría confundir a interesados que lo encuentren — seguimiento operativo del cliente, no algo que este código pueda resolver.

## Despliegue (GitHub Pages)

El workflow en `.github/workflows/astro.yml` construye y despliega automáticamente a GitHub Pages en cada push a `main`, usando `actions/configure-pages` para inyectar `--site`/`--base` dinámicamente (no requiere hardcodear el subpath del repo).

Pasos para activarlo (no incluidos en este commit — requieren acceso al repo remoto):

1. Crear el repositorio en GitHub y hacer push de `main`.
2. En **Settings → Pages**, configurar "Source" como **GitHub Actions**.
3. Si hay dominio propio, agregar `public/CNAME` con el dominio antes del siguiente build.

## i18n

Rutas en español sin prefijo (`/cursos`), rutas en inglés bajo `/en/` (`/en/cursos`), configurado en `astro.config.mjs` (`i18n.routing.prefixDefaultLocale: false`). Cada página real vive como componente en `src/components/pages/*.astro` (recibe `lang` como prop); los archivos bajo `src/pages/` y `src/pages/en/` son wrappers de una línea para evitar duplicar markup.
