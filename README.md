# eira social media · sitio completo

Un solo proyecto con dos partes:

| Dirección | Qué es | Quién la ve |
|---|---|---|
| `/` | Web pública de eira (ES / EN / PT) | Clientes |
| `/metodologia` | Cómo trabajamos + Método EIRA | Clientes |
| `/plataforma-interna` | Emisión de propuestas, contratos y certificados (clave de 4 dígitos) | Solo el equipo |

La web pública **no tiene ningún enlace** a la plataforma, y la plataforma está marcada para que
Google no la indexe. Solo entra quien conoce la dirección y la clave.

## Estructura

```
index.html                     Web pública
metodologia.html               Cómo trabajamos + Método EIRA
plataforma-interna/index.html  Plataforma interna (un solo archivo, funciona sin internet)
assets/                        Estilos, textos (assets/js/app.js) e imágenes de la web
vercel.json                    Configuración para Vercel
netlify.toml                   Configuración para Netlify
robots.txt                     Evita que Google indexe la plataforma
```

## Publicar en Vercel (actualizar el sitio actual)

1. En tu repositorio de GitHub, sube todo el contenido de esta carpeta, reemplazando lo anterior.
   Debe quedar `index.html`, `metodologia.html`, `vercel.json`, `netlify.toml`, `robots.txt`
   y las carpetas `assets` y `plataforma-interna` en la raíz.
2. Vercel publica solo en 1 o 2 minutos.
3. Entra a `https://eira-plum.vercel.app/` y a `https://eira-plum.vercel.app/plataforma-interna`.

## Publicar en Netlify

**Opción rápida:** entra a https://app.netlify.com/drop y arrastra esta carpeta completa.

**Opción conectada a GitHub (recomendada):** en Netlify, "Add new site > Import an existing project",
elige el mismo repositorio de GitHub. Deja vacío el comando de build y escribe `.` como carpeta de
publicación. Cada cambio en GitHub se publica en Vercel y en Netlify a la vez.

## Editar

- Textos de la web: `assets/js/app.js` (objetos `T` y `T_UPDATE`, en español, inglés y portugués).
- Datos de la agencia en la plataforma: dentro de la plataforma, en "Datos de eira".
- Clave inicial de la plataforma: **2026** (cámbiala en "Datos de eira").

## Importante sobre la plataforma

El historial y la numeración (que empieza en 51) se guardan en el navegador de cada computadora,
y también por dirección: lo emitido en Vercel no aparece en Netlify y viceversa. Usen siempre la
misma dirección y la misma computadora para mantener una sola numeración.
