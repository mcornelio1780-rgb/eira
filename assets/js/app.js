const WA = "51944376685";
const WORK = [["Paco Bazán","assets/img/work-paco.jpg"],["Yolo Podcast","assets/img/work-yolo.jpg"],["Pozuzo Beef","assets/img/work-pozuzo.jpg"],["Move Better","assets/img/work-movebetter.jpg"],["Find Your Voice (UPC)","assets/img/work-fyv.jpg"],["Marathon","assets/img/work-marathon.jpg"],["Nexa","assets/img/work-nexa.jpg"],["Ramona Deco Atelier","assets/img/work-ramona.jpg"]];

const BRANDS = ["UPC","Limly","SPOT, Sociedad Peruana de Ortopedia y Traumatología","Clínica San Bernardo","Miguel Zevallos","Nexa","Pozuzo Beef","Yolo Podcast","Paco Bazán","Allisson Villalva","Move Better","Ramona Deco Atelier","Giani Beauty Spa","Marathon","Art New Line","Find Your Voice","Franja Peruana","Apuesta Total","Fridays"];
const ICON = {
  brand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7L12 3Z"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="6" width="13" height="12" rx="2.5"/><path d="M15.5 10.5l6-3.5v10l-6-3.5"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l5.5-3.5L10 8.5Z"/></svg>',
  check:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.2 4L19 7"/></svg>',
  strategy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
  community:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.7 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/></svg>',
  content:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M10 9.5v5l4-2.5-4-2.5Z"/></svg>',
  ads:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
  reach:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9Z"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/></svg>',
  click:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 9l11 4-5 2-2 5-4-11Z"/><path d="M4 4l2 2M4 10h2M10 4v2"/></svg>',
  msg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5Z"/></svg>',
  coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/></svg>',
  reel:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7L8 5Z"/></svg>',
  carousel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><rect x="7" y="7" width="13" height="13" rx="2"/><path d="M4 16V5a1 1 0 0 1 1-1h11"/></svg>'
};

const T = {
es:{
 "mp.title":"Método EIRA: así trabajamos tus redes","mp.sub":"Nuestra metodología explicada paso a paso: cómo diagnosticamos, creamos, publicamos y medimos para que tu marca crezca de forma orgánica.","mp.ctaTitle":"¿Quieres aplicar el método a tu marca?","mp.ctaSub":"Cuéntanos tu caso y te enviamos una propuesta a tu medida.","mp.back":"Volver al inicio",
 "nav.services":"Servicios","nav.method":"Metodología","nav.work":"Trabajos","nav.results":"Resultados","nav.quote":"Cotizar","nav.faq":"Preguntas","nav.cta":"Cotiza tu proyecto",
 "hero.title":"Contenido que conecta, marcas que inspiran.",
 "hero.sub":"En Eira creamos la estrategia, la identidad y el contenido audiovisual de tu marca según quién eres: marca personal o empresa, B2B o B2C. Crecimiento orgánico, sin plantillas genéricas.",
 "hero.cta1":"Cotiza tu proyecto","hero.cta2":"Escríbenos por WhatsApp",
 "hero.note":"No trabajamos con paquetes cerrados: cada propuesta se arma a la medida de tu marca después de un diagnóstico.",
 "hero.feed":"Feed planificado con estrategia","hero.s1v":"+101K","hero.s1":"visualizaciones en un mes","hero.s2v":"+10K","hero.s2":"seguidores ganados","hero.s3v":"+19","hero.s3":"marcas acompañadas",
 "tiles":["Reel","Carrusel","Story","Entrevista","Detrás de cámara","Lanzamiento","UGC","Live","Campaña"],
 "prof.title":"Cada marca necesita una estrategia distinta",
 "prof.sub":"Una marca personal no comunica igual que una empresa, y una empresa B2B no vende igual que una B2C. Por eso empezamos entendiendo tu caso antes de proponer nada.",
 "prof.focus":"En qué nos enfocamos","prof.nets":"Redes donde solemos empezar",
 "profiles":[
  {tab:"Marca personal",title:"Autoridad y cercanía alrededor de tu nombre.",pts:["Narrativa y posicionamiento como referente en tu tema.","Videos que muestran cómo piensas y trabajas.","Una comunidad que confía en ti antes de comprarte."],nets:["Instagram","TikTok","LinkedIn"]},
  {tab:"Empresa B2C",title:"Convertir atención en ventas y clientes que vuelven.",pts:["Contenido que muestra el producto o servicio en uso real.","UGC y colaboraciones que llegan a quien de verdad compra.","Comunidad y atención que fidelizan después de la compra."],nets:["Instagram","TikTok","Facebook"]},
  {tab:"Empresa B2B",title:"Confianza y oportunidades comerciales con otras empresas.",pts:["Contenido educativo que demuestra experiencia y criterio.","Entrevistas y casos que respaldan la decisión de compra.","Presencia constante donde están quienes deciden."],nets:["LinkedIn","Instagram","YouTube"]}
 ],
 "svc.title":"Nuestros 4 servicios",
 "svc.sub":"Puedes contratarlos por separado o combinarlos. Después del diagnóstico te recomendamos la mezcla que tu marca realmente necesita.",
 "svc.inc":"Qué incluye","svc.get":"Lo que recibes","svc.ideal":"Ideal para",
 "services":[
  {n:"Estrategia de contenido",s:"Grillas, pilares y crecimiento orgánico: decidimos qué publicar, cuándo y para qué, para que tu cuenta crezca sin depender de la pauta.",inc:["Auditoría de tus redes y de tu competencia","Definición de público y pilares de contenido","Grilla mensual de publicaciones","Copys y llamados a la acción","Revisión de métricas y ajustes"],get:["Estrategia documentada","Grilla de contenidos mensual","Reporte de crecimiento"],ideal:"Marcas que publican sin rumbo o quieren crecer de forma orgánica y constante."},
  {n:"Branding y rebranding",s:"Identidad y posicionamiento digital: construimos o renovamos cómo se ve, suena y se percibe tu marca en redes.",inc:["Diagnóstico de marca y posicionamiento","Propuesta de valor y tono de voz","Identidad visual para redes","Optimización de perfiles: bio, highlights y portadas","Línea gráfica para el feed"],get:["Guía de marca para redes","Plantillas editables","Perfiles optimizados"],ideal:"Marcas nuevas o que sienten que su imagen ya no las representa."},
  {n:"Producción audiovisual",s:"Guiones, grabación y edición: videos cortos pensados para cada red, desde la idea hasta la pieza final.",inc:["Ideas y guiones para reels y TikToks","Dirección y grabación","Edición con subtítulos y ritmo para redes","Adaptación de formatos por plataforma","Cobertura de eventos"],get:["Videos listos para publicar","Clips para reels, TikTok y stories","Archivos en los formatos de cada red"],ideal:"Marcas personales, negocios y eventos que necesitan video constante y de calidad."},
  {n:"Contenido para marcas",s:"UGC, entrevistas y campañas: contenido con personas reales que genera confianza y muestra tu marca en acción.",inc:["Contenido UGC con creadores","Entrevistas y formatos de calle","Testimonios de clientes","Campañas y lanzamientos","Colaboraciones con otras cuentas"],get:["Piezas UGC y entrevistas editadas","Plan de campaña","Contenido listo para orgánico o anuncios"],ideal:"Marcas que quieren mostrar su producto con caras reales y generar confianza."}
 ],
 "m.title":"Método EIRA",
 "m.sub":"Cuatro etapas que se repiten cada mes. Así tus redes mejoran con datos y no por intuición.",
 "steps":[
  {k:"E",n:"Escuchar",d:"Antes de crear, entendemos. Revisamos tus cuentas, tu competencia, tu público y lo que tu marca necesita lograr.",o:["Auditoría de redes","Mapa de audiencia","Objetivos y KPIs"]},
  {k:"I",n:"Idear",d:"Convertimos lo aprendido en una estrategia clara: identidad, pilares de contenido, formatos, grilla y guiones.",o:["Estrategia y pilares","Grilla mensual","Guiones y conceptos de campaña"]},
  {k:"R",n:"Realizar",d:"Grabamos, editamos y publicamos. Producimos entrevistas, UGC y campañas con el tono de tu marca.",o:["Grabación y edición","Publicación y comunidad","UGC, entrevistas y campañas"]},
  {k:"A",n:"Analizar",d:"Medimos lo que pasó, explicamos qué funcionó y por qué, y ajustamos el siguiente mes con esos aprendizajes.",o:["Reporte mensual","Reunión de resultados","Ajustes para el siguiente ciclo"]}
 ],
 "m.mixTitle":"Mezcla de contenido según tu perfil","m.mixSub":"Qué tipo de publicaciones priorizamos según el tipo de marca.",
 "m.ref":"Distribución referencial. La ajustamos con los datos reales de tu cuenta.",
 "mix":{"Marca personal":[["Valor y enseñanza",35],["Historia personal",25],["Comunidad",20],["Venta",20]],"Empresa B2C":[["Producto en uso",30],["Entretenimiento",25],["UGC y prueba social",25],["Promoción",20]],"Empresa B2B":[["Educativo y autoridad",40],["Entrevistas y casos",25],["Cultura y equipo",15],["Conversión",20]]},
 "m.funTitle":"Embudo de contenido","m.funSub":"Cada pieza cumple un rol: atraer, convencer, convertir o fidelizar.",
 "funnel":[["Descubrir","Reels, tendencias y colaboraciones para que nuevas personas te conozcan."],["Considerar","Carruseles, entrevistas y testimonios que generan confianza."],["Convertir","UGC, ofertas claras y llamados a WhatsApp o a tu web."],["Fidelizar","Stories, contenido de comunidad y respuesta rápida en mensajes."]],
 "m.ganttTitle":"Tus primeros 90 días","m.ganttSub":"Así se ve normalmente el arranque. Los tiempos exactos dependen de cada marca.",
 "m.week":"Sem",
 "gantt":[["Diagnóstico y auditoría",1,2,"violet"],["Branding y estrategia",2,4,"violet"],["Guiones y grabación",3,12,"blush"],["Edición y publicación",4,12,"sky"],["UGC, entrevistas y campañas",6,12,"mint"],["Reporte y ajustes",4,4,"sun"],["",8,8,"sun"],["",12,12,"sun"]],
 "m.kpiTitle":"Lo que medimos","m.kpiSub":"No reportamos solo seguidores. Elegimos las métricas que se conectan con tu objetivo.",
 "kpis":[["reach","Alcance y visualizaciones","Cuántas personas nuevas ven tu marca."],["heart","Interacción","Guardados, compartidos y comentarios que muestran interés real."],["users","Crecimiento de comunidad","Seguidores que encajan con tu público objetivo."],["play","Retención de video","Cuánto tiempo ven tus videos y en qué momento los dejan."],["click","Clics y visitas","Tráfico hacia tu web, catálogo o enlace en bio."],["msg","Mensajes y leads","Conversaciones por WhatsApp o DM que pueden convertirse en ventas."]],
 "w.title":"Trabajos destacados","w.sub":"Una muestra del contenido que producimos para nuestras marcas.",
 "work":["Marca personal y reels","Clips de podcast","Contenido de producto","Cobertura de evento","Entrevistas","Contenido deportivo","Contenido institucional","Video para eventos"],
 "r.title":"Lo que hemos logrado","r.sub":"Resultados reales de las cuentas que gestionamos.","r.brands":"Con quién hemos trabajado","r.brandsSub":"Marcas personales, empresas, clínicas, educación, gastronomía, belleza, deporte y entretenimiento.",
 "cases":[["+101K","visualizaciones en un mes, sin pauta"],["+10K","seguidores ganados en las cuentas que gestionamos"],["+6","eventos organizados de principio a fin"]],
 "q.title":"Cotiza tu proyecto en 2 minutos",
 "q.sub":"No publicamos precios fijos porque cada marca es distinta. Cuéntanos tu caso y lo recibimos por WhatsApp para agendar una llamada y enviarte una propuesta a tu medida.",
 "why":["El costo cambia si eres marca personal o empresa.","En empresas influye el tamaño y si vendes a personas (B2C) o a otras empresas (B2B).","Tu situación actual define cuánto hay que construir desde cero."],
 "q.back":"Atrás","q.next":"Siguiente","q.send":"Enviar y agendar por WhatsApp","q.restart":"Empezar de nuevo",
 "q.errPick":"Elige una opción para continuar.","q.errName":"Escribe tu nombre para continuar.","q.errSvc":"Elige al menos un servicio.",
 "qs":[
  {t:"Tu marca",h:"Así entendemos qué tipo de estrategia necesitas."},
  {t:"Tu empresa",h:"El tamaño y el modelo de negocio cambian la estrategia."},
  {t:"Situación y objetivo",h:"Dónde estás hoy y a dónde quieres llegar."},
  {t:"Servicios y redes",h:"Puedes elegir varios. Si no estás seguro, elige «No lo sé»."},
  {t:"Tus datos",h:"Para saber con quién conversamos."}
 ],
 "f.type":"Tipo de marca","o.type":["Marca personal","Empresa","Emprendimiento"],
 "f.size":"Tamaño del equipo","o.size":["1 a 10 personas","11 a 50","51 a 200","Más de 200"],
 "f.model":"A quién le vendes","o.model":["A personas (B2C)","A empresas (B2B)","A ambos"],
 "f.sit":"Situación de tus redes","o.sit":["No tenemos redes o recién empezamos","Publicamos, pero sin estrategia","Tenemos estrategia, pero no vemos resultados","Funcionan y queremos escalar"],
 "f.goal":"Objetivo principal","o.goal":["Que más gente me conozca","Generar ventas o mensajes","Posicionarme como referente","Construir comunidad","Lanzar algo nuevo"],
 "f.svc":"Servicios que te interesan","o.svc":["Estrategia de contenido","Branding y rebranding","Producción audiovisual","Contenido para marcas (UGC, entrevistas, campañas)","No lo sé, quiero asesoría"],
 "f.nets":"Redes que quieres trabajar","o.nets":["Instagram","TikTok","Facebook","LinkedIn","YouTube"],
 "f.name":"Tu nombre","f.brand":"Nombre de la marca","f.ig":"Instagram o web (opcional)","f.country":"País","f.sector":"Rubro","f.msg":"¿Algo más que debamos saber? (opcional)",
 "ph.sector":"Ej.: clínica, restaurante, marca personal","ph.ig":"@tumarca",
 "s.title":"Resumen de tu solicitud","s.scope":"Alcance sugerido",
 "scopes":[["Esencial","Presencia ordenada y constante en 1 o 2 redes, con una base estratégica clara."],["Crecimiento","Estrategia, identidad y video trabajando juntos para crecer y vender."],["Integral","Un equipo completo: estrategia, producción audiovisual, UGC y campañas en varias redes."]],
 "s.note":"Este alcance es una referencia inicial, no una cotización. El precio final lo conversamos contigo por WhatsApp.",
 "wa.hello":"Hola Eira, quiero cotizar un proyecto de redes sociales.","wa.scope":"Alcance sugerido","wa.end":"¿Podemos agendar un espacio para conversar?",
 "wa.generic":"Hola Eira, quiero información sobre sus servicios",
 "faq.items":[
  ["¿Tengo que contratar los 4 servicios?","No. Cada servicio se puede contratar por separado. Después del diagnóstico te recomendamos la combinación que tiene sentido para tu objetivo y tu presupuesto."],
  ["¿Cuánto tiempo toma ver resultados?","El alcance y la interacción suelen empezar a moverse en las primeras semanas. Las ventas y el crecimiento sostenido se construyen con constancia, por eso planificamos en ciclos de al menos 3 meses."],
  ["¿Qué necesitan de mi parte?","Acceso a tus cuentas, la información de tu marca y una persona de contacto para aprobar contenidos y coordinar grabaciones. Nosotros nos encargamos del resto."],
  ["¿Trabajan con marcas de otros países?","Sí. La estrategia y la edición las trabajamos de forma remota, y coordinamos todo por videollamada y WhatsApp. Las grabaciones presenciales se coordinan según la ubicación."]
 ],
 "f.title":"Preguntas frecuentes",
 "end.title":"¿Lista tu marca para crecer en redes?","end.sub":"Agenda un espacio por WhatsApp y conversemos sobre lo que tu marca necesita.","end.cta":"Agendar por WhatsApp",
 "foot.tag":"Contenido que conecta, marcas que inspiran. Estrategia, branding y contenido audiovisual para marcas que quieren crecer.",
 "theme.dark":"Modo oscuro","theme.light":"Modo claro"
},
en:{
 "mp.title":"The EIRA method: how we run your social media","mp.sub":"Our methodology step by step: how we diagnose, create, publish and measure so your brand grows organically.","mp.ctaTitle":"Want to apply the method to your brand?","mp.ctaSub":"Tell us about your case and we’ll send you a tailored proposal.","mp.back":"Back to home",
 "nav.services":"Services","nav.method":"Method","nav.work":"Work","nav.results":"Results","nav.quote":"Get a quote","nav.faq":"FAQ","nav.cta":"Get a quote",
 "hero.title":"Content that connects, brands that inspire.",
 "hero.sub":"At Eira we build your brand’s strategy, identity and video content around who you are: personal brand or company, B2B or B2C. Organic growth, no generic templates.",
 "hero.cta1":"Get a quote","hero.cta2":"Message us on WhatsApp",
 "hero.note":"We don’t sell fixed packages: every proposal is built for your brand after a diagnosis.",
 "hero.feed":"A feed planned with strategy","hero.s1v":"+101K","hero.s1":"views in one month","hero.s2v":"+10K","hero.s2":"followers gained","hero.s3v":"+19","hero.s3":"brands supported",
 "tiles":["Reel","Carousel","Story","Interview","Behind the scenes","Launch","UGC","Live","Campaign"],
 "prof.title":"Every brand needs a different strategy",
 "prof.sub":"A personal brand doesn’t speak like a company, and a B2B company doesn’t sell like a B2C one. That’s why we start by understanding your case before proposing anything.",
 "prof.focus":"What we focus on","prof.nets":"Where we usually start",
 "profiles":[
  {tab:"Personal brand",title:"Authority and closeness around your name.",pts:["A story and positioning that make you a reference in your field.","Videos that show how you think and work.","A community that trusts you before they buy from you."],nets:["Instagram","TikTok","LinkedIn"]},
  {tab:"B2C company",title:"Turning attention into sales and returning customers.",pts:["Content that shows your product or service in real use.","UGC and collaborations that reach the people who actually buy.","Community care that builds loyalty after the purchase."],nets:["Instagram","TikTok","Facebook"]},
  {tab:"B2B company",title:"Trust and business opportunities with other companies.",pts:["Educational content that proves expertise and judgment.","Interviews and cases that support the buying decision.","Consistent presence where decision-makers are."],nets:["LinkedIn","Instagram","YouTube"]}
 ],
 "svc.title":"Our 4 services",
 "svc.sub":"Hire them separately or combine them. After the diagnosis we recommend the mix your brand actually needs.",
 "svc.inc":"What’s included","svc.get":"What you get","svc.ideal":"Ideal for",
 "services":[
  {n:"Content strategy",s:"Content grids, pillars and organic growth: we decide what to post, when and why, so your account grows without relying on ads.",inc:["Audit of your accounts and competitors","Audience and content pillars","Monthly content grid","Captions and calls to action","Metrics review and adjustments"],get:["Documented strategy","Monthly content grid","Growth report"],ideal:"Brands posting without direction or wanting steady organic growth."},
  {n:"Branding & rebranding",s:"Digital identity and positioning: we build or refresh how your brand looks, sounds and is perceived on social media.",inc:["Brand and positioning diagnosis","Value proposition and tone of voice","Visual identity for social media","Profile optimization: bio, highlights and covers","Feed visual style"],get:["Social media brand guide","Editable templates","Optimized profiles"],ideal:"New brands, or brands whose image no longer represents them."},
  {n:"Video production",s:"Scripts, filming and editing: short videos made for each platform, from idea to final cut.",inc:["Ideas and scripts for reels and TikToks","Direction and filming","Editing with captions and social pacing","Format adaptation per platform","Event coverage"],get:["Ready-to-post videos","Clips for reels, TikTok and stories","Files in each platform’s formats"],ideal:"Personal brands, businesses and events that need consistent, quality video."},
  {n:"Branded content",s:"UGC, interviews and campaigns: content with real people that builds trust and shows your brand in action.",inc:["UGC with creators","Interviews and street formats","Customer testimonials","Campaigns and launches","Collaborations with other accounts"],get:["Edited UGC and interview pieces","Campaign plan","Content ready for organic or ads"],ideal:"Brands that want to show their product with real faces and build trust."}
 ],
 "m.title":"The EIRA method",
 "m.sub":"Four stages that repeat every month, so your social media improves with data, not hunches.",
 "steps":[
  {k:"E",n:"Explore",d:"Before creating, we understand. We review your accounts, competitors, audience and what your brand needs to achieve.",o:["Social media audit","Audience map","Goals and KPIs"]},
  {k:"I",n:"Ideate",d:"We turn what we learned into a clear strategy: identity, content pillars, formats, grid and scripts.",o:["Strategy and pillars","Monthly grid","Scripts and campaign concepts"]},
  {k:"R",n:"Realize",d:"We film, edit and publish. We produce interviews, UGC and campaigns in your brand’s voice.",o:["Filming and editing","Publishing and community","UGC, interviews and campaigns"]},
  {k:"A",n:"Analyze",d:"We measure what happened, explain what worked and why, and adjust next month with those learnings.",o:["Monthly report","Results meeting","Adjustments for the next cycle"]}
 ],
 "m.mixTitle":"Content mix by profile","m.mixSub":"The kind of posts we prioritize depending on the type of brand.",
 "m.ref":"Reference split. We adjust it with your account’s real data.",
 "mix":{"Personal brand":[["Value and teaching",35],["Personal story",25],["Community",20],["Sales",20]],"B2C company":[["Product in use",30],["Entertainment",25],["UGC and social proof",25],["Promotion",20]],"B2B company":[["Educational and authority",40],["Interviews and cases",25],["Culture and team",15],["Conversion",20]]},
 "m.funTitle":"Content funnel","m.funSub":"Every piece has a job: attract, convince, convert or retain.",
 "funnel":[["Discover","Reels, trends and collaborations so new people find you."],["Consider","Carousels, interviews and testimonials that build trust."],["Convert","UGC, clear offers and calls to WhatsApp or your site."],["Retain","Stories, community content and fast replies in DMs."]],
 "m.ganttTitle":"Your first 90 days","m.ganttSub":"This is what a typical start looks like. Exact timing depends on each brand.",
 "m.week":"Wk",
 "gantt":[["Diagnosis and audit",1,2,"violet"],["Branding and strategy",2,4,"violet"],["Scripts and filming",3,12,"blush"],["Editing and publishing",4,12,"sky"],["UGC, interviews and campaigns",6,12,"mint"],["Report and adjustments",4,4,"sun"],["",8,8,"sun"],["",12,12,"sun"]],
 "m.kpiTitle":"What we measure","m.kpiSub":"We don’t just report followers. We pick the metrics that connect to your goal.",
 "kpis":[["reach","Reach and views","How many new people see your brand."],["heart","Engagement","Saves, shares and comments that show real interest."],["users","Community growth","Followers who match your target audience."],["play","Video retention","How long people watch your videos and where they drop off."],["click","Clicks and visits","Traffic to your site, catalog or link in bio."],["msg","Messages and leads","WhatsApp or DM conversations that can become sales."]],
 "w.title":"Featured work","w.sub":"A sample of the content we produce for our brands.",
 "work":["Personal brand and reels","Podcast clips","Product content","Event coverage","Interviews","Sports content","Institutional content","Event video"],
 "r.title":"What we’ve achieved","r.sub":"Real results from the accounts we manage.","r.brands":"Who we’ve worked with","r.brandsSub":"Personal brands, companies, clinics, education, food, beauty, sports and entertainment.",
 "cases":[["+101K","views in one month, with no paid ads"],["+10K","followers gained across the accounts we manage"],["+6","events organized from start to finish"]],
 "q.title":"Get a quote in 2 minutes",
 "q.sub":"We don’t publish fixed prices because every brand is different. Tell us about your case, we’ll receive it on WhatsApp, and we’ll book a call to send you a tailored proposal.",
 "why":["Cost changes if you’re a personal brand or a company.","For companies, size matters, and so does selling to people (B2C) or to businesses (B2B).","Where you are today defines how much has to be built from scratch."],
 "q.back":"Back","q.next":"Next","q.send":"Send and book on WhatsApp","q.restart":"Start over",
 "q.errPick":"Choose an option to continue.","q.errName":"Enter your name to continue.","q.errSvc":"Choose at least one service.",
 "qs":[
  {t:"Your brand",h:"This tells us what kind of strategy you need."},
  {t:"Your company",h:"Size and business model change the strategy."},
  {t:"Situation and goal",h:"Where you are today and where you want to go."},
  {t:"Services and platforms",h:"You can pick several. Not sure? Choose “I’m not sure”."},
  {t:"Your details",h:"So we know who we’re talking to."}
 ],
 "f.type":"Type of brand","o.type":["Personal brand","Company","Startup / small business"],
 "f.size":"Team size","o.size":["1 to 10 people","11 to 50","51 to 200","More than 200"],
 "f.model":"Who you sell to","o.model":["To people (B2C)","To businesses (B2B)","Both"],
 "f.sit":"Your social media today","o.sit":["No accounts yet or just starting","We post, but without a strategy","We have a strategy but no results","It works and we want to scale"],
 "f.goal":"Main goal","o.goal":["Get more people to know me","Generate sales or messages","Become a reference in my field","Build a community","Launch something new"],
 "f.svc":"Services you’re interested in","o.svc":["Content strategy","Branding & rebranding","Video production","Branded content (UGC, interviews, campaigns)","I’m not sure, I want advice"],
 "f.nets":"Platforms you want to work on","o.nets":["Instagram","TikTok","Facebook","LinkedIn","YouTube"],
 "f.name":"Your name","f.brand":"Brand name","f.ig":"Instagram or website (optional)","f.country":"Country","f.sector":"Industry","f.msg":"Anything else we should know? (optional)",
 "ph.sector":"E.g. clinic, restaurant, personal brand","ph.ig":"@yourbrand",
 "s.title":"Your request summary","s.scope":"Suggested scope",
 "scopes":[["Essential","An organized, consistent presence on 1 or 2 platforms, with a clear strategic base."],["Growth","Strategy, identity and video working together to grow and sell."],["Full","A complete team: strategy, video production, UGC and campaigns across platforms."]],
 "s.note":"This scope is a starting reference, not a quote. We’ll discuss the final price with you on WhatsApp.",
 "wa.hello":"Hi Eira, I’d like a quote for a social media project.","wa.scope":"Suggested scope","wa.end":"Can we book a time to talk?",
 "wa.generic":"Hi Eira, I’d like information about your services",
 "faq.items":[
  ["Do I have to hire all 4 services?","No. Each service can be hired separately. After the diagnosis we recommend the combination that makes sense for your goal and budget."],
  ["How long until I see results?","Reach and engagement usually start moving in the first weeks. Sales and steady growth come from consistency, so we plan in cycles of at least 3 months."],
  ["What do you need from me?","Access to your accounts, your brand information and a contact person to approve content and coordinate shoots. We take care of the rest."],
  ["Do you work with brands in other countries?","Yes. Strategy and editing are done remotely, and we coordinate everything by video call and WhatsApp. In-person shoots depend on location."]
 ],
 "f.title":"Frequently asked questions",
 "end.title":"Is your brand ready to grow on social media?","end.sub":"Book a time on WhatsApp and let’s talk about what your brand needs.","end.cta":"Book on WhatsApp",
 "foot.tag":"Content that connects, brands that inspire. Strategy, branding and video content for brands that want to grow.",
 "theme.dark":"Dark mode","theme.light":"Light mode"
},
pt:{
 "mp.title":"Método EIRA: como trabalhamos suas redes","mp.sub":"Nossa metodologia passo a passo: como diagnosticamos, criamos, publicamos e medimos para que sua marca cresça de forma orgânica.","mp.ctaTitle":"Quer aplicar o método na sua marca?","mp.ctaSub":"Conte o seu caso e enviamos uma proposta sob medida.","mp.back":"Voltar ao início",
 "nav.services":"Serviços","nav.method":"Metodologia","nav.work":"Trabalhos","nav.results":"Resultados","nav.quote":"Orçamento","nav.faq":"Perguntas","nav.cta":"Peça um orçamento",
 "hero.title":"Conteúdo que conecta, marcas que inspiram.",
 "hero.sub":"Na Eira criamos a estratégia, a identidade e o conteúdo audiovisual da sua marca de acordo com quem você é: marca pessoal ou empresa, B2B ou B2C. Crescimento orgânico, sem modelos genéricos.",
 "hero.cta1":"Peça um orçamento","hero.cta2":"Fale com a gente no WhatsApp",
 "hero.note":"Não trabalhamos com pacotes fechados: cada proposta é feita sob medida para a sua marca depois de um diagnóstico.",
 "hero.feed":"Feed planejado com estratégia","hero.s1v":"+101K","hero.s1":"visualizações em um mês","hero.s2v":"+10K","hero.s2":"seguidores conquistados","hero.s3v":"+19","hero.s3":"marcas acompanhadas",
 "tiles":["Reel","Carrossel","Story","Entrevista","Bastidores","Lançamento","UGC","Live","Campanha"],
 "prof.title":"Cada marca precisa de uma estratégia diferente",
 "prof.sub":"Uma marca pessoal não se comunica como uma empresa, e uma empresa B2B não vende como uma B2C. Por isso começamos entendendo o seu caso antes de propor qualquer coisa.",
 "prof.focus":"No que focamos","prof.nets":"Redes por onde costumamos começar",
 "profiles":[
  {tab:"Marca pessoal",title:"Autoridade e proximidade em torno do seu nome.",pts:["Narrativa e posicionamento como referência no seu tema.","Vídeos que mostram como você pensa e trabalha.","Uma comunidade que confia em você antes de comprar."],nets:["Instagram","TikTok","LinkedIn"]},
  {tab:"Empresa B2C",title:"Transformar atenção em vendas e clientes que voltam.",pts:["Conteúdo que mostra o produto ou serviço em uso real.","UGC e colaborações que chegam a quem realmente compra.","Comunidade e atendimento que fidelizam depois da compra."],nets:["Instagram","TikTok","Facebook"]},
  {tab:"Empresa B2B",title:"Confiança e oportunidades comerciais com outras empresas.",pts:["Conteúdo educativo que demonstra experiência e critério.","Entrevistas e cases que apoiam a decisão de compra.","Presença constante onde estão os tomadores de decisão."],nets:["LinkedIn","Instagram","YouTube"]}
 ],
 "svc.title":"Nossos 4 serviços",
 "svc.sub":"Você pode contratá-los separadamente ou combiná-los. Depois do diagnóstico recomendamos a combinação que a sua marca realmente precisa.",
 "svc.inc":"O que inclui","svc.get":"O que você recebe","svc.ideal":"Ideal para",
 "services":[
  {n:"Estratégia de conteúdo",s:"Grades, pilares e crescimento orgânico: decidimos o que publicar, quando e para quê, para que sua conta cresça sem depender de anúncios.",inc:["Auditoria das suas redes e da concorrência","Definição de público e pilares de conteúdo","Grade mensal de publicações","Legendas e chamadas para ação","Revisão de métricas e ajustes"],get:["Estratégia documentada","Grade de conteúdo mensal","Relatório de crescimento"],ideal:"Marcas que publicam sem direção ou querem crescer de forma orgânica e constante."},
  {n:"Branding e rebranding",s:"Identidade e posicionamento digital: construímos ou renovamos como sua marca é vista, ouvida e percebida nas redes.",inc:["Diagnóstico de marca e posicionamento","Proposta de valor e tom de voz","Identidade visual para redes","Otimização de perfis: bio, destaques e capas","Linha gráfica do feed"],get:["Guia de marca para redes","Templates editáveis","Perfis otimizados"],ideal:"Marcas novas ou que sentem que a imagem já não as representa."},
  {n:"Produção audiovisual",s:"Roteiros, gravação e edição: vídeos curtos pensados para cada rede, da ideia à peça final.",inc:["Ideias e roteiros para reels e TikToks","Direção e gravação","Edição com legendas e ritmo para redes","Adaptação de formatos por plataforma","Cobertura de eventos"],get:["Vídeos prontos para publicar","Cortes para reels, TikTok e stories","Arquivos nos formatos de cada rede"],ideal:"Marcas pessoais, negócios e eventos que precisam de vídeo constante e de qualidade."},
  {n:"Conteúdo para marcas",s:"UGC, entrevistas e campanhas: conteúdo com pessoas reais que gera confiança e mostra sua marca em ação.",inc:["Conteúdo UGC com criadores","Entrevistas e formatos de rua","Depoimentos de clientes","Campanhas e lançamentos","Colaborações com outras contas"],get:["Peças UGC e entrevistas editadas","Plano de campanha","Conteúdo pronto para orgânico ou anúncios"],ideal:"Marcas que querem mostrar o produto com rostos reais e gerar confiança."}
 ],
 "m.title":"Método EIRA",
 "m.sub":"Quatro etapas que se repetem todo mês. Assim suas redes melhoram com dados, e não por intuição.",
 "steps":[
  {k:"E",n:"Escutar",d:"Antes de criar, entendemos. Analisamos suas contas, sua concorrência, seu público e o que sua marca precisa alcançar.",o:["Auditoria de redes","Mapa de público","Objetivos e KPIs"]},
  {k:"I",n:"Idealizar",d:"Transformamos o que aprendemos em uma estratégia clara: identidade, pilares de conteúdo, formatos, grade e roteiros.",o:["Estratégia e pilares","Grade mensal","Roteiros e conceitos de campanha"]},
  {k:"R",n:"Realizar",d:"Gravamos, editamos e publicamos. Produzimos entrevistas, UGC e campanhas com o tom da sua marca.",o:["Gravação e edição","Publicação e comunidade","UGC, entrevistas e campanhas"]},
  {k:"A",n:"Analisar",d:"Medimos o que aconteceu, explicamos o que funcionou e por quê, e ajustamos o mês seguinte com esses aprendizados.",o:["Relatório mensal","Reunião de resultados","Ajustes para o próximo ciclo"]}
 ],
 "m.mixTitle":"Mix de conteúdo por perfil","m.mixSub":"Que tipo de publicação priorizamos conforme o tipo de marca.",
 "m.ref":"Distribuição de referência. Ajustamos com os dados reais da sua conta.",
 "mix":{"Marca pessoal":[["Valor e ensino",35],["História pessoal",25],["Comunidade",20],["Venda",20]],"Empresa B2C":[["Produto em uso",30],["Entretenimento",25],["UGC e prova social",25],["Promoção",20]],"Empresa B2B":[["Educativo e autoridade",40],["Entrevistas e cases",25],["Cultura e equipe",15],["Conversão",20]]},
 "m.funTitle":"Funil de conteúdo","m.funSub":"Cada peça tem uma função: atrair, convencer, converter ou fidelizar.",
 "funnel":[["Descobrir","Reels, tendências e colaborações para que novas pessoas conheçam você."],["Considerar","Carrosséis, entrevistas e depoimentos que geram confiança."],["Converter","UGC, ofertas claras e chamadas para WhatsApp ou site."],["Fidelizar","Stories, conteúdo de comunidade e resposta rápida no direct."]],
 "m.ganttTitle":"Seus primeiros 90 dias","m.ganttSub":"É assim que costuma ser o começo. Os prazos exatos dependem de cada marca.",
 "m.week":"Sem",
 "gantt":[["Diagnóstico e auditoria",1,2,"violet"],["Branding e estratégia",2,4,"violet"],["Roteiros e gravação",3,12,"blush"],["Edição e publicação",4,12,"sky"],["UGC, entrevistas e campanhas",6,12,"mint"],["Relatório e ajustes",4,4,"sun"],["",8,8,"sun"],["",12,12,"sun"]],
 "m.kpiTitle":"O que medimos","m.kpiSub":"Não reportamos só seguidores. Escolhemos as métricas ligadas ao seu objetivo.",
 "kpis":[["reach","Alcance e visualizações","Quantas pessoas novas veem sua marca."],["heart","Interação","Salvamentos, compartilhamentos e comentários que mostram interesse real."],["users","Crescimento da comunidade","Seguidores que combinam com seu público-alvo."],["play","Retenção de vídeo","Quanto tempo assistem seus vídeos e onde param."],["click","Cliques e visitas","Tráfego para seu site, catálogo ou link na bio."],["msg","Mensagens e leads","Conversas no WhatsApp ou direct que podem virar vendas."]],
 "w.title":"Trabalhos em destaque","w.sub":"Uma amostra do conteúdo que produzimos para nossas marcas.",
 "work":["Marca pessoal e reels","Cortes de podcast","Conteúdo de produto","Cobertura de evento","Entrevistas","Conteúdo esportivo","Conteúdo institucional","Vídeo para eventos"],
 "r.title":"O que já conquistamos","r.sub":"Resultados reais das contas que gerenciamos.","r.brands":"Com quem já trabalhamos","r.brandsSub":"Marcas pessoais, empresas, clínicas, educação, gastronomia, beleza, esporte e entretenimento.",
 "cases":[["+101K","visualizações em um mês, sem anúncios"],["+10K","seguidores conquistados nas contas que gerenciamos"],["+6","eventos organizados do início ao fim"]],
 "q.title":"Peça seu orçamento em 2 minutos",
 "q.sub":"Não publicamos preços fixos porque cada marca é diferente. Conte o seu caso, recebemos pelo WhatsApp e agendamos uma conversa para enviar uma proposta sob medida.",
 "why":["O custo muda se você é marca pessoal ou empresa.","Nas empresas, influem o tamanho e se você vende para pessoas (B2C) ou para empresas (B2B).","Sua situação atual define quanto precisa ser construído do zero."],
 "q.back":"Voltar","q.next":"Próximo","q.send":"Enviar e agendar pelo WhatsApp","q.restart":"Começar de novo",
 "q.errPick":"Escolha uma opção para continuar.","q.errName":"Escreva seu nome para continuar.","q.errSvc":"Escolha pelo menos um serviço.",
 "qs":[
  {t:"Sua marca",h:"Assim entendemos que tipo de estratégia você precisa."},
  {t:"Sua empresa",h:"O tamanho e o modelo de negócio mudam a estratégia."},
  {t:"Situação e objetivo",h:"Onde você está hoje e aonde quer chegar."},
  {t:"Serviços e redes",h:"Você pode escolher vários. Não tem certeza? Escolha «Não sei»."},
  {t:"Seus dados",h:"Para saber com quem vamos conversar."}
 ],
 "f.type":"Tipo de marca","o.type":["Marca pessoal","Empresa","Empreendimento"],
 "f.size":"Tamanho da equipe","o.size":["1 a 10 pessoas","11 a 50","51 a 200","Mais de 200"],
 "f.model":"Para quem você vende","o.model":["Para pessoas (B2C)","Para empresas (B2B)","Para ambos"],
 "f.sit":"Situação das suas redes","o.sit":["Não temos redes ou estamos começando","Publicamos, mas sem estratégia","Temos estratégia, mas sem resultados","Funcionam e queremos escalar"],
 "f.goal":"Objetivo principal","o.goal":["Que mais pessoas me conheçam","Gerar vendas ou mensagens","Me posicionar como referência","Construir comunidade","Lançar algo novo"],
 "f.svc":"Serviços de interesse","o.svc":["Estratégia de conteúdo","Branding e rebranding","Produção audiovisual","Conteúdo para marcas (UGC, entrevistas, campanhas)","Não sei, quero orientação"],
 "f.nets":"Redes que quer trabalhar","o.nets":["Instagram","TikTok","Facebook","LinkedIn","YouTube"],
 "f.name":"Seu nome","f.brand":"Nome da marca","f.ig":"Instagram ou site (opcional)","f.country":"País","f.sector":"Setor","f.msg":"Algo mais que devemos saber? (opcional)",
 "ph.sector":"Ex.: clínica, restaurante, marca pessoal","ph.ig":"@suamarca",
 "s.title":"Resumo da sua solicitação","s.scope":"Escopo sugerido",
 "scopes":[["Essencial","Presença organizada e constante em 1 ou 2 redes, com uma base estratégica clara."],["Crescimento","Estratégia, identidade e vídeo trabalhando juntos para crescer e vender."],["Integral","Uma equipe completa: estratégia, produção audiovisual, UGC e campanhas em várias redes."]],
 "s.note":"Este escopo é uma referência inicial, não um orçamento. O preço final conversamos com você pelo WhatsApp.",
 "wa.hello":"Olá Eira, quero um orçamento para um projeto de redes sociais.","wa.scope":"Escopo sugerido","wa.end":"Podemos agendar um horário para conversar?",
 "wa.generic":"Olá Eira, quero informações sobre seus serviços",
 "faq.items":[
  ["Preciso contratar os 4 serviços?","Não. Cada serviço pode ser contratado separadamente. Depois do diagnóstico recomendamos a combinação que faz sentido para seu objetivo e orçamento."],
  ["Em quanto tempo vejo resultados?","Alcance e interação costumam se mover nas primeiras semanas. Vendas e crescimento sustentável vêm com constância, por isso planejamos em ciclos de pelo menos 3 meses."],
  ["O que vocês precisam de mim?","Acesso às suas contas, as informações da marca e uma pessoa de contato para aprovar conteúdos e coordenar gravações. Nós cuidamos do resto."],
  ["Vocês trabalham com marcas de outros países?","Sim. A estratégia e a edição são feitas de forma remota, e coordenamos tudo por videochamada e WhatsApp. Gravações presenciais dependem da localização."]
 ],
 "f.title":"Perguntas frequentes",
 "end.title":"Sua marca está pronta para crescer nas redes?","end.sub":"Agende um horário pelo WhatsApp e vamos conversar sobre o que sua marca precisa.","end.cta":"Agendar pelo WhatsApp",
 "foot.tag":"Conteúdo que conecta, marcas que inspiram. Estratégia, branding e conteúdo audiovisual para marcas que querem crescer.",
 "theme.dark":"Modo escuro","theme.light":"Modo claro"
}};


const COLORS = {violet:"var(--c1)",blush:"var(--c2)",sky:"var(--c3)",mint:"var(--c4)",sun:"var(--c2)"};
const MIXC = ["var(--c1)","var(--c2)","var(--c3)","var(--c4)"];
const SVC_BG = ["#F5F4F0","#C5CCE0","#AEB8D6","#8E9BC0"];
const SVC_IC = ["strategy","brand","camera","mic"];

let lang = "es", prof = 0, step = 0, mixI = 0, openSvc = 0;
const store = {get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const t = k => T[lang][k];

function waLink(text){return "https://wa.me/"+WA+"?text="+encodeURIComponent(text)}

function applyStatic(){
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent = t(el.dataset.i18n)});
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang===lang));
  document.querySelectorAll(".wa-link").forEach(a=>a.href = waLink(t("wa.generic")));
  updateThemeBtn();
}

function renderTiles(){
  const order=[1,2,4,3,1,4,2,3,4];
  const cols = order.map(n=>`var(--c${n})`), ic = order.map(n=>`var(--t${n})`);
  const icons = ["reel","carousel","","carousel","reel","","carousel","reel",""];
  $("#tiles").innerHTML = t("tiles").map((n,i)=>`<div class="tile" style="background:${cols[i]};color:${ic[i]};animation-delay:${0.15+i*0.07}s">${icons[i]?ICON[icons[i]]:""}<span>${esc(n)}</span></div>`).join("");
}

function renderProfiles(){
  const P = t("profiles");
  $("#profTabs").innerHTML = P.map((p,i)=>`<button type="button" role="tab" aria-selected="${i===prof}" data-i="${i}">${esc(p.tab)}</button>`).join("");
  const p = P[prof];
  $("#profPanel").innerHTML = `<div><h3>${esc(p.title)}</h3><p class="chip-label">${esc(t("prof.nets"))}</p><div class="chips">${p.nets.map(n=>`<span class="chip">${esc(n)}</span>`).join("")}</div></div>
  <div><p class="chip-label" style="margin:0 0 14px">${esc(t("prof.focus"))}</p><ul>${p.pts.map(x=>`<li>${ICON.check}<span>${esc(x)}</span></li>`).join("")}</ul></div>`;
  $("#profTabs").querySelectorAll("button").forEach(b=>b.onclick=()=>{prof=+b.dataset.i;renderProfiles()});
}

function renderServices(){
  $("#svcList").innerHTML = t("services").map((s,i)=>`
  <div class="svc" data-open="${i===openSvc}">
    <button class="svc-head" type="button" aria-expanded="${i===openSvc}" aria-controls="svcb${i}" data-i="${i}">
      <span class="svc-icon" style="background:${SVC_BG[i]}">${ICON[SVC_IC[i]]}</span>
      <span><h3>${esc(s.n)}</h3><p>${esc(s.s)}</p></span>
      <span class="svc-toggle" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
    </button>
    <div class="svc-body" id="svcb${i}" ${i===openSvc?"":"hidden"}>
      <div><h4>${esc(t("svc.inc"))}</h4><ul>${s.inc.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h4>${esc(t("svc.get"))}</h4><ul>${s.get.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h4>${esc(t("svc.ideal"))}</h4><p>${esc(s.ideal)}</p></div>
    </div>
  </div>`).join("");
  $("#svcList").querySelectorAll(".svc-head").forEach(b=>b.onclick=()=>{const i=+b.dataset.i;openSvc = openSvc===i?-1:i;renderServices()});
}

function arcPath(cx,cy,r,a0,a1){
  const p=(a)=>[cx+r*Math.cos(a),cy+r*Math.sin(a)];
  const [x0,y0]=p(a0),[x1,y1]=p(a1);
  return `M${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}
function renderMethod(){
  const S = t("steps"), cols=["var(--c1)","var(--c2)","var(--c3)","var(--c4)"], tcol=["var(--t1)","var(--t2)","var(--t3)","var(--t4)"];
  let segs="", labels="";
  S.forEach((s,i)=>{
    const a0 = -Math.PI/2 + i*Math.PI/2 + 0.07, a1 = a0 + Math.PI/2 - 0.14;
    const mid = (a0+a1)/2;
    segs += `<path class="seg" data-i="${i}" d="${arcPath(200,200,150,a0,a1)}" stroke="${cols[i]}" stroke-width="${i===step?58:44}" fill="none" stroke-linecap="round" opacity="${i===step?1:.55}"/>`;
    labels += `<text x="${200+150*Math.cos(mid)}" y="${200+150*Math.sin(mid)+11}" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="800" font-size="32" fill="${tcol[i]}" pointer-events="none">${s.k}</text>`;
  });
  $("#cycle").innerHTML = `<svg viewBox="0 0 400 400" role="img" aria-label="${esc(t("m.title"))}">
   ${segs}${labels}
   <defs><marker id="ah" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink-2)"/></marker></defs>
   <path d="${arcPath(200,200,92,-Math.PI/2+0.3,Math.PI*1.5-0.3)}" stroke="var(--ink-2)" stroke-width="2" fill="none" stroke-dasharray="4 6" marker-end="url(#ah)"/>
   <text x="200" y="190" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="800" font-size="40" fill="var(--ink)">${esc(S[step].n)}</text>
   <text x="200" y="222" text-anchor="middle" font-family="Poppins, sans-serif" font-size="15" fill="var(--ink-2)">${step+1} / 4</text>
  </svg>`;
  $("#cycle").querySelectorAll(".seg").forEach(p=>p.onclick=()=>{step=+p.dataset.i;renderMethod()});
  $("#stepBtns").innerHTML = S.map((s,i)=>`<button type="button" aria-pressed="${i===step}" data-i="${i}"><b>${s.k}</b>${esc(s.n)}</button>`).join("");
  $("#stepBtns").querySelectorAll("button").forEach(b=>b.onclick=()=>{step=+b.dataset.i;renderMethod()});
  const s=S[step];
  $("#stepDetail").innerHTML = `<h3>${esc(s.n)}</h3><p>${esc(s.d)}</p><ul>${s.o.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
}

function renderMix(){
  const M = t("mix"), keys = Object.keys(M);
  if(mixI>=keys.length) mixI=0;
  $("#mixTabs").innerHTML = keys.map((k,i)=>`<button type="button" aria-pressed="${i===mixI}" data-i="${i}">${esc(k)}</button>`).join("");
  $("#mixTabs").querySelectorAll("button").forEach(b=>b.onclick=()=>{mixI=+b.dataset.i;renderMix()});
  const data = M[keys[mixI]], C = 2*Math.PI*70;
  let off=0, arcs="";
  data.forEach(([n,v],i)=>{const len=C*v/100;arcs+=`<circle cx="100" cy="100" r="70" fill="none" stroke="${MIXC[i]}" stroke-width="34" stroke-dasharray="${len-3} ${C-len+3}" stroke-dashoffset="${-off}" transform="rotate(-90 100 100)"/>`;off+=len;});
  $("#donut").innerHTML = `<svg viewBox="0 0 200 200" role="img" aria-label="${esc(keys[mixI])}">${arcs}<text x="100" y="108" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="800" font-size="22" fill="var(--ink)">100%</text></svg>`;
  $("#legend").innerHTML = data.map(([n,v],i)=>`<li><i style="background:${MIXC[i]}"></i><span>${esc(n)}</span><b>${v}%</b></li>`).join("");
}

function renderFunnel(){
  const F=t("funnel"), w=[100,84,68,52], c=["var(--c1)","var(--c2)","var(--c3)","var(--c4)"], tc=["var(--t1)","var(--t2)","var(--t3)","var(--t4)"];
  $("#funnel").innerHTML = F.map(([n,d],i)=>`<div class="funnel-row"><div class="funnel-bar" style="width:${w[i]}%;background:${c[i]};color:${tc[i]}">${esc(n)}</div><p>${esc(d)}</p></div>`).join("");
}

function renderGantt(){
  const G=t("gantt"), wk=t("m.week");
  let h=`<div class="gantt-row head"><span></span>${Array.from({length:12},(_,i)=>`<span>${wk} ${i+1}</span>`).join("")}</div>`;
  let lastLabel="";
  G.forEach(([n,a,b,c])=>{
    if(n===""){ // milestone appended to previous row
      h = h.replace(/<\/div>$/, `<span class="gbar" style="grid-row:1;grid-column:${a+1}/${b+2};background:${COLORS[c]};margin:0 3px"></span></div>`);
      return;
    }
    h+=`<div class="gantt-row"><span style="grid-row:1;grid-column:1;padding-right:10px">${esc(n)}</span><span class="gbar" style="grid-row:1;grid-column:${a+1}/${b+2};background:${COLORS[c]};margin:0 3px"></span></div>`;
  });
  $("#gantt").innerHTML = h;
}

function renderKpis(){
  $("#kpis").innerHTML = t("kpis").map(([ic,n,d])=>`<div class="kpi">${ICON[ic]}<div><b>${esc(n)}</b><span>${esc(d)}</span></div></div>`).join("");
}
function renderWork(){
  const L=t("work");
  $("#work").innerHTML = WORK.map(([n,src],i)=>`<figure class="work"><img src="${src}" alt="${esc(n)}: ${esc(L[i])}" width="330" height="440"><figcaption><b>${esc(n)}</b><span>${esc(L[i])}</span></figcaption></figure>`).join("");
}
function renderCases(){
  $("#cases").innerHTML = t("cases").map(([n,d])=>`<article class="case"><div class="num">${esc(n)}</div><p>${esc(d)}</p></article>`).join("");
  $("#brands").innerHTML = BRANDS.map(b=>`<span class="brand">${esc(b)}</span>`).join("");
}
function renderFaq(){
  $("#faqList").innerHTML = t("faq.items").map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
  if($("#why")) $("#why").innerHTML = t("why").map(x=>`<div>${ICON.check}<span>${esc(x)}</span></div>`).join("");
}

/* ---------- Quote wizard ---------- */
const Q = {type:null,size:null,model:null,sit:null,goal:null,svc:[],nets:[],name:"",brand:"",ig:"",country:"",sector:"",msg:""};
let qi = 0;
function stepsList(){ return Q.type===1 ? [0,1,2,3,4] : [0,2,3,4]; }

function radioGroup(key,label,multi){
  const opts=t("o."+key);
  const isOn = i => multi ? Q[key].includes(i) : Q[key]===i;
  return `<fieldset><legend>${esc(t("f."+key))}</legend><div class="opts">${opts.map((o,i)=>`<div class="opt"><input type="${multi?"checkbox":"radio"}" name="${key}" id="${key}${i}" value="${i}" ${isOn(i)?"checked":""}><label for="${key}${i}">${esc(o)}</label></div>`).join("")}</div></fieldset>`;
}
function field(key,type,ph){
  const tag = type==="textarea" ? `<textarea id="q_${key}" name="${key}" ${ph?`placeholder="${esc(ph)}"`:""}>${esc(Q[key])}</textarea>` : `<input id="q_${key}" name="${key}" type="${type}" value="${esc(Q[key])}" ${ph?`placeholder="${esc(ph)}"`:""} autocomplete="${key==="name"?"name":key==="country"?"country-name":"off"}">`;
  return `<div class="field"><label for="q_${key}">${esc(t("f."+key))}</label>${tag}</div>`;
}
function scopeLevel(){
  let s=0;
  if(Q.type===1) s+=1; if(Q.size!==null) s+=Q.size*0.8; if(Q.model===2) s+=.6; if(Q.model===1) s+=.3;
  if(Q.sit===0) s+=.6; if(Q.sit===3) s+=.8;
  const svc = Q.svc.filter(x=>x!==4).length; s += svc*0.7; if(Q.svc.includes(4)) s+=1;
  s += Math.max(0,Q.nets.length-1)*0.5;
  return s<2.5?0:s<4.8?1:2;
}
function summaryRows(){
  const R=[];
  const add=(k,v)=>{if(v!==null&&v!==""&&!(Array.isArray(v)&&!v.length))R.push([t("f."+k),v])};
  add("type", Q.type!==null?t("o.type")[Q.type]:null);
  if(Q.type===1){add("size",Q.size!==null?t("o.size")[Q.size]:null);add("model",Q.model!==null?t("o.model")[Q.model]:null);}
  add("sector",Q.sector);
  add("sit",Q.sit!==null?t("o.sit")[Q.sit]:null);
  add("goal",Q.goal!==null?t("o.goal")[Q.goal]:null);
  add("svc",Q.svc.map(i=>t("o.svc")[i]).join(", "));
  add("nets",Q.nets.map(i=>t("o.nets")[i]).join(", "));
  add("name",Q.name);add("brand",Q.brand);add("ig",Q.ig);add("country",Q.country);add("msg",Q.msg);
  return R;
}
function renderQuote(){
  const list = stepsList(), total = list.length + 1;
  const bars = $("#progress"); bars.innerHTML = Array.from({length:total},(_,i)=>`<i class="${i<=qi?"on":""}"></i>`).join("");
  $("#qerr").textContent="";
  const back=$("#qback"), next=$("#qnext");
  back.textContent=t("q.back"); back.style.visibility = qi===0?"hidden":"visible";
  let html="";
  if(qi < list.length){
    const s = list[qi], meta=t("qs")[s];
    html = `<p class="qstep-title">${esc(meta.t)}</p><p class="qstep-hint">${esc(meta.h)}</p>`;
    if(s===0) html += radioGroup("type") + field("sector","text",t("ph.sector"));
    if(s===1) html += radioGroup("size") + radioGroup("model");
    if(s===2) html += radioGroup("sit") + radioGroup("goal");
    if(s===3) html += radioGroup("svc","",true) + radioGroup("nets","",true);
    if(s===4) html += `<div class="two">${field("name","text")}${field("brand","text")}</div><div class="two">${field("ig","text",t("ph.ig"))}${field("country","text")}</div>${field("msg","textarea")}`;
    next.textContent = t("q.next"); next.className="btn btn-primary";
  } else {
    const lvl = scopeLevel(), sc=t("scopes")[lvl];
    html = `<p class="qstep-title">${esc(t("s.title"))}</p><dl class="summary">${summaryRows().map(([k,v])=>`<div><dt>${esc(k)}</dt><dd style="margin:0">${esc(v)}</dd></div>`).join("")}</dl>
    <div class="scope"><small>${esc(t("s.scope"))}</small><b>${esc(sc[0])}</b><p>${esc(sc[1])}</p><div class="scope-meter">${[0,1,2].map(i=>`<i class="${i<=lvl?"on":""}"></i>`).join("")}</div></div>
    <p class="note">${esc(t("s.note"))}</p>`;
    next.textContent = t("q.send"); next.className="btn btn-wa";
    back.textContent = t("q.back");
  }
  $("#qbody").innerHTML = html;
  $("#qbody").querySelectorAll("input,textarea").forEach(inp=>{
    inp.addEventListener("change",()=>readInput(inp));
    inp.addEventListener("input",()=>readInput(inp));
  });
}
function readInput(inp){
  const k=inp.name;
  if(inp.type==="radio"){Q[k]=+inp.value; if(k==="type"&&Q.type!==1){Q.size=null;Q.model=null}}
  else if(inp.type==="checkbox"){const v=+inp.value; Q[k]=inp.checked?[...new Set([...Q[k],v])]:Q[k].filter(x=>x!==v)}
  else Q[k]=inp.value.trim();
  $("#qerr").textContent="";
}
function validate(){
  const list=stepsList(); if(qi>=list.length) return true;
  const s=list[qi];
  if(s===0 && Q.type===null) return t("q.errPick");
  if(s===1 && (Q.size===null||Q.model===null)) return t("q.errPick");
  if(s===2 && (Q.sit===null||Q.goal===null)) return t("q.errPick");
  if(s===3 && !Q.svc.length) return t("q.errSvc");
  if(s===4 && !Q.name) return t("q.errName");
  return true;
}
function sendWA(){
  const lvl=scopeLevel();
  const lines=[t("wa.hello"),""];
  summaryRows().forEach(([k,v])=>lines.push("• "+k+": "+v));
  lines.push("", "• "+t("wa.scope")+": "+t("scopes")[lvl][0], "", t("wa.end"));
  window.open(waLink(lines.join("\n")),"_blank","noopener");
}
if($("#qnext"))$("#qnext").onclick=()=>{
  const v=validate(); if(v!==true){$("#qerr").textContent=v;return}
  if(qi>=stepsList().length){sendWA();return}
  qi++; renderQuote(); $("#qform").scrollIntoView({block:"start"});
};
if($("#qback"))$("#qback").onclick=()=>{if(qi>0){qi--;renderQuote()}};

/* ---------- theme ---------- */
function currentDark(){const a=document.documentElement.getAttribute("data-theme"); if(a) return a==="dark"; return matchMedia("(prefers-color-scheme: dark)").matches;}
function updateThemeBtn(){ $("#themeBtn").textContent = currentDark()? t("theme.light") : t("theme.dark"); }
$("#themeBtn").onclick=()=>{const d=!currentDark(); document.documentElement.setAttribute("data-theme",d?"dark":"light"); store.set("eira-theme",d?"dark":"light"); updateThemeBtn(); if($("#cycle")){renderMethod(); renderFunnel();}};

/* ---------- menu ---------- */
const mb=$(".menu-btn"), nav=$("#nav");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");mb.setAttribute("aria-expanded",false)}));

/* ---------- language ---------- */
function setLang(l){lang=l; store.set("eira-lang",l); renderAll();}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
function renderAll(){
  applyStatic();
  const parts=[["#tiles",renderTiles],["#profTabs",renderProfiles],["#svcList",renderServices],["#cycle",renderMethod],["#mixTabs",renderMix],["#funnel",renderFunnel],["#gantt",renderGantt],["#kpis",renderKpis],["#work",renderWork],["#cases",renderCases],["#faqList",renderFaq],["#qbody",renderQuote]];
  parts.forEach(([sel,fn])=>{ if(document.querySelector(sel)) fn(); });
}

(function init(){
  const th=store.get("eira-theme"); if(th) document.documentElement.setAttribute("data-theme",th);
  const h=(location.hash||"").replace("#","");
  const saved=store.get("eira-lang");
  const nav=(navigator.language||"es").slice(0,2);
  lang = ["es","en","pt"].includes(h) ? h : (saved && T[saved]) ? saved : (["en","pt"].includes(nav)?nav:"es");
  renderAll();
})();
