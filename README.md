# Eira Social Media: sitio web

Contenido que conecta, marcas que inspiran.

Sitio estático (HTML, CSS y JavaScript, sin dependencias) en español, inglés y portugués.

## Estructura

```
index.html          Página principal (landing)
metodologia.html    Método EIRA (página aparte)
assets/css/         Estilos
assets/js/app.js    Textos en ES/EN/PT, gráficos y cotizador
assets/img/         Logo y trabajos del portafolio
vercel.json         Configuración para Vercel
```

## Editar textos

Todos los textos están en `assets/js/app.js`, dentro del objeto `T` (claves `es`, `en` y `pt`).
El número de WhatsApp está en la constante `WA` y la lista de marcas en `BRANDS`.

## Probar en tu computadora

Abre `index.html` en el navegador. No necesita instalar nada.

## Publicar

1. Crea un repositorio en GitHub y sube todos estos archivos (respetando las carpetas).
2. En vercel.com, entra con tu cuenta de GitHub, elige "Add New… > Project" e importa el repositorio.
3. En "Framework Preset" deja "Other". No hace falta comando de build ni carpeta de salida.
4. Haz clic en "Deploy". Cada cambio que subas a GitHub se publica solo.
