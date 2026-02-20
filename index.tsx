import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('/api/*', cors())

app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  return c.json({ success: true, message: 'Mensaje recibido', data: body })
})

app.get('/', (c) => {
  return c.html(buildPage())
})

export default app

// ===== IMAGE PATH HELPER =====
const I = (name: string) => `/static/img/${name}.jpg`

// ===== FOOTER TEMPLATE =====
function sectionFooter(): string {
  return `
  <div class="section-footer">
    <div class="sf-nav">
      <a onclick="navigateTo('home')" class="sf-link"><i class="fas fa-home"></i> Inicio</a>
      <a onclick="navigateTo('sobre-mi')" class="sf-link"><i class="fas fa-user-md"></i> Sobre M\u00ed</a>
      <a onclick="navigateTo('tecnologia')" class="sf-link"><i class="fas fa-microchip"></i> Tecnolog\u00eda</a>
      <a onclick="navigateTo('productos')" class="sf-link"><i class="fas fa-box-open"></i> Productos</a>
      <a onclick="navigateTo('servicios')" class="sf-link"><i class="fas fa-hand-holding-medical"></i> Servicios</a>
      <a onclick="navigateTo('experiencia')" class="sf-link"><i class="fas fa-trophy"></i> Experiencia</a>
      <a onclick="navigateTo('ubicacion')" class="sf-link"><i class="fas fa-map-marker-alt"></i> Ubicaci\u00f3n</a>
      <a onclick="navigateTo('contacto')" class="sf-link"><i class="fas fa-envelope"></i> Contacto</a>
    </div>
    <div class="sf-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168!2d-58.3816!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCl%C3%ADnica+NALA!5e0!3m2!1ses!2sar!4v1" width="100%" height="180" style="border:0;border-radius:8px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="sf-info">
      <div class="sf-brand"><span class="sf-logo">NALA</span><span class="sf-sub">Beauty Clinic</span></div>
      <div class="sf-contact-row">
        <a href="https://www.instagram.com/nala_beautyclinic" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://wa.me/5491100000000" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a href="mailto:info@nalaclinic.com"><i class="fas fa-envelope"></i></a>
      </div>
      <p class="sf-copy">&copy; 2026 Dra. Estefan\u00eda Balboa &mdash; Cl\u00ednica NALA. Todos los derechos reservados.</p>
    </div>
  </div>`
}

function buildPage(): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Dra. Estefan\u00eda Balboa | Dermat\u00f3loga - Cl\u00ednica NALA</title>
<meta name="description" content="Dra. Estefan\u00eda Mar\u00eda Bel\u00e9n Balboa - Dermat\u00f3loga y Master Injector. Medicina est\u00e9tica de \u00e9lite en Cl\u00ednica NALA. Donde la ciencia, la est\u00e9tica y la longevidad se encuentran.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
<link href="/static/styles.css" rel="stylesheet">
</head>
<body>

<!-- PRELOADER -->
<div id="preloader">
  <div class="preloader-inner">
    <div class="preloader-line"></div>
    <span class="preloader-text">NALA</span>
    <span class="preloader-tagline">Beauty Clinic</span>
  </div>
</div>

<!-- NAVIGATION -->
<nav id="main-nav">
  <div class="nav-inner">
    <div class="nav-logo" onclick="navigateTo('home')">
      <span class="logo-text">NALA</span>
      <span class="logo-sub">Beauty Clinic</span>
    </div>
    <button class="nav-toggle" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
    <div class="nav-links">
      <a onclick="navigateTo('home')" class="nav-link active" data-section="home">Inicio</a>
      <a onclick="navigateTo('sobre-mi')" class="nav-link" data-section="sobre-mi">Sobre M\u00ed</a>
      <a onclick="navigateTo('tecnologia')" class="nav-link" data-section="tecnologia">Tecnolog\u00eda</a>
      <a onclick="navigateTo('productos')" class="nav-link" data-section="productos">Productos</a>
      <a onclick="navigateTo('servicios')" class="nav-link" data-section="servicios">Servicios</a>
      <a onclick="navigateTo('experiencia')" class="nav-link" data-section="experiencia">Experiencia</a>
      <a onclick="navigateTo('ubicacion')" class="nav-link" data-section="ubicacion">Ubicaci\u00f3n</a>
      <a onclick="navigateTo('contacto')" class="nav-link" data-section="contacto">Contacto</a>
    </div>
  </div>
</nav>

<!-- MOBILE MENU -->
<div id="mobile-menu">
  <div class="mobile-menu-inner">
    <a onclick="navigateTo('home');toggleMenu()" class="mobile-link">Inicio</a>
    <a onclick="navigateTo('sobre-mi');toggleMenu()" class="mobile-link">Sobre M\u00ed</a>
    <a onclick="navigateTo('tecnologia');toggleMenu()" class="mobile-link">Tecnolog\u00eda</a>
    <a onclick="navigateTo('productos');toggleMenu()" class="mobile-link">Productos</a>
    <a onclick="navigateTo('servicios');toggleMenu()" class="mobile-link">Servicios</a>
    <a onclick="navigateTo('experiencia');toggleMenu()" class="mobile-link">Experiencia</a>
    <a onclick="navigateTo('ubicacion');toggleMenu()" class="mobile-link">Ubicaci\u00f3n</a>
    <a onclick="navigateTo('contacto');toggleMenu()" class="mobile-link">Contacto</a>
    <div class="mobile-social">
      <a href="https://www.instagram.com/nala_beautyclinic" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://wa.me/5491100000000" target="_blank"><i class="fab fa-whatsapp"></i></a>
    </div>
  </div>
</div>

<main id="app-container">

<!-- ====================== HOME ====================== -->
<section id="section-home" class="section active">

  <!-- HERO -->
  <div class="hero" id="hero">
    <div class="hero-bg" id="hero-bg">
      <img src="${I('draSign')}" alt="Dra. Balboa" class="hero-img hero-img-1" loading="eager">
      <img src="${I('clinic1')}" alt="Cl\u00ednica NALA" class="hero-img hero-img-2" loading="eager">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge"><i class="fas fa-award"></i> AMWC Award Winner</div>
      <p class="hero-pre">Dra. Estefan\u00eda Mar\u00eda Bel\u00e9n Balboa</p>
      <h1 class="hero-title" id="hero-typed"></h1>
      <p class="hero-sub">Dermat\u00f3loga &bull; Master Injector &bull; Cl\u00ednica NALA</p>
      <div class="hero-btns">
        <button class="hero-cta" onclick="navigateTo('sobre-mi')">Conoc\u00e9 Mi Historia <i class="fas fa-arrow-right"></i></button>
        <button class="hero-cta hero-cta-outline" onclick="navigateTo('contacto')">Agendar Consulta <i class="fas fa-calendar"></i></button>
      </div>
    </div>
    <div class="hero-scroll" onclick="navigateTo('sobre-mi')"><span>Descubrir</span><i class="fas fa-chevron-down"></i></div>
  </div>

  <!-- HOME SECTION BLOCKS -->
  <div class="home-blocks">

    <div class="home-block fade-up">
      <div class="home-block-img"><img src="${I('draSign')}" alt="Sobre M\u00ed" loading="lazy"></div>
      <div class="home-block-content">
        <span class="home-block-label">01 &mdash; Sobre M\u00ed</span>
        <h2>La Doctora Detr\u00e1s del Arte</h2>
        <p>Dra. Estefan\u00eda Mar\u00eda Bel\u00e9n Balboa. Dermat\u00f3loga & Master Injector. Ganadora del prestigioso AMWC Aesthetic Medicine Award en M\u00f3naco. Una pasi\u00f3n incansable por la ciencia y la belleza natural que se refleja en cada tratamiento.</p>
        <p class="home-block-highlight">"Cada rostro cuenta una historia. Mi trabajo es realzar la tuya."</p>
        <button class="btn-premium" onclick="navigateTo('sobre-mi')">Conocer Mi Historia <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>

    <div class="home-block reverse fade-up">
      <div class="home-block-img"><img src="${I('techAll')}" alt="Tecnolog\u00eda" loading="lazy"></div>
      <div class="home-block-content">
        <span class="home-block-label">02 &mdash; Tecnolog\u00eda</span>
        <h2>Arsenal Tecnol\u00f3gico de Vanguardia</h2>
        <p>Morpheus8, Lutronic Spectra XT, Harmony XL PRO, Scizer, Nordlys y m\u00e1s. Un ecosistema completo de la tecnolog\u00eda m\u00e1s avanzada del mundo al servicio de tu piel y bienestar.</p>
        <div class="home-block-tags">
          <span class="tag">Morpheus8</span><span class="tag">Spectra XT</span><span class="tag">Harmony XL PRO</span><span class="tag">Scizer</span><span class="tag">Nordlys</span>
        </div>
        <button class="btn-premium" onclick="navigateTo('tecnologia')">Explorar Tecnolog\u00eda <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>

    <div class="home-block fade-up">
      <div class="home-block-img"><img src="${I('profhiloBox')}" alt="Productos" loading="lazy"></div>
      <div class="home-block-content">
        <span class="home-block-label">03 &mdash; Productos</span>
        <h2>Productos de Excelencia Internacional</h2>
        <p>Profhilo, Morpheus8 Resurfacing, Radiesse, Scizer, Nordlys by Candela. Solo los productos m\u00e1s prestigiosos y avalados cient\u00edficamente del mercado mundial de medicina est\u00e9tica.</p>
        <button class="btn-premium" onclick="navigateTo('productos')">Ver Productos <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>

    <div class="home-block reverse fade-up">
      <div class="home-block-img"><img src="${I('consult')}" alt="Servicios" loading="lazy"></div>
      <div class="home-block-content">
        <span class="home-block-label">04 &mdash; Servicios</span>
        <h2>Tratamientos Que Transforman</h2>
        <p>Desde tratamientos l\u00e1ser de \u00faltima generaci\u00f3n hasta procedimientos inyectables de precisi\u00f3n milim\u00e9trica. Cada tratamiento es una obra de arte m\u00e9dica dise\u00f1ada exclusivamente para vos.</p>
        <div class="home-stats">
          <div class="stat"><span class="stat-num">+2000</span><span class="stat-label">Pacientes felices</span></div>
          <div class="stat"><span class="stat-num">+15</span><span class="stat-label">A\u00f1os de experiencia</span></div>
          <div class="stat"><span class="stat-num">9</span><span class="stat-label">Equipos premium</span></div>
        </div>
        <button class="btn-premium" onclick="navigateTo('servicios')">Descubrir Servicios <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>

    <div class="home-block fade-up">
      <div class="home-block-img"><img src="${I('amwcAward')}" alt="Experiencia" loading="lazy"></div>
      <div class="home-block-content">
        <span class="home-block-label">05 &mdash; Experiencia</span>
        <h2>Reconocimiento Internacional</h2>
        <p>Ganadora del AMWC Aesthetic Medicine Award. Presencia activa en M\u00f3naco, R\u00edo de Janeiro y los congresos m\u00e1s prestigiosos del mundo. Formaci\u00f3n continua con los l\u00edderes globales de la industria.</p>
        <button class="btn-premium" onclick="navigateTo('experiencia')">Ver Experiencia <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>

    <div class="home-block reverse fade-up">
      <div class="home-block-img"><img src="${I('interior1')}" alt="Ubicaci\u00f3n" loading="lazy"></div>
      <div class="home-block-content">
        <span class="home-block-label">06 &mdash; Ubicaci\u00f3n</span>
        <h2>Un Espacio Dise\u00f1ado Para Vos</h2>
        <p>Arquitectura contempor\u00e1nea, ambiente premium y una atm\u00f3sfera de lujo pensada para tu bienestar integral. Cada r\u00edncón de Cl\u00ednica NALA fue dise\u00f1ado para que tu experiencia sea \u00fanica.</p>
        <button class="btn-premium" onclick="navigateTo('ubicacion')">Visitar Cl\u00ednica <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>

    <div class="home-block fade-up">
      <div class="home-block-img"><img src="${I('interview')}" alt="Contacto" loading="lazy"></div>
      <div class="home-block-content">
        <span class="home-block-label">07 &mdash; Contacto</span>
        <h2>Comenz\u00e1 Tu Transformaci\u00f3n Hoy</h2>
        <p>Tu primer paso hacia la mejor versi\u00f3n de vos misma. Agend\u00e1 una consulta personalizada y descubr\u00ed lo que la medicina est\u00e9tica de \u00e9lite puede hacer por vos.</p>
        <button class="btn-premium btn-gold" onclick="navigateTo('contacto')">Agendar Consulta <i class="fas fa-calendar-check"></i></button>
      </div>
    </div>

  </div>
  ${sectionFooter()}
</section>

<!-- ====================== SOBRE MI ====================== -->
<section id="section-sobre-mi" class="section">
  <div class="section-inner">
    ${sectionHeader('Conoc\u00e9 a la Doctora', 'Sobre M\u00ed')}
    
    <p class="section-intro">M\u00e1s que una dermat\u00f3loga, una artista de la medicina est\u00e9tica. Con formaci\u00f3n internacional de excelencia y una pasi\u00f3n profunda por la ciencia y la belleza natural.</p>

    <!-- PORTRAIT CAROUSEL -->
    <div class="carousel-container" data-carousel="sobre-mi">
      <div class="carousel-track">
        ${portraitCard('draSign', 'En la cl\u00ednica')}
        ${portraitCard('clinic1', 'Consultorio')}
        ${portraitCard('podcast', 'Podcast')}
        ${portraitCard('amwcMic', 'AMWC M\u00f3naco')}
        ${portraitCard('podcastSet', 'Entrevista')}
        ${portraitCard('selfie', 'Estefan\u00eda')}
      </div>
    </div>

    <!-- BIO CONTENT -->
    <div class="about-content">
      <div class="about-text">
        <h3>Dra. Estefan\u00eda Mar\u00eda Bel\u00e9n Balboa</h3>
        <p class="about-subtitle">Dermat\u00f3loga &bull; Master Injector &bull; Especialista en Longevidad</p>
        
        <p>Con m\u00e1s de 15 a\u00f1os de experiencia en dermatolog\u00eda y medicina est\u00e9tica, la Dra. Balboa ha dedicado su carrera a la b\u00fasqueda constante de la perfecci\u00f3n t\u00e9cnica y la innovaci\u00f3n. Su filosof\u00eda combina la precisi\u00f3n cient\u00edfica con la sensibilidad art\u00edstica, logrando resultados naturales que realzan la belleza \u00fanica de cada paciente.</p>
        
        <p>Formada en las mejores instituciones internacionales y ganadora del prestigioso <strong>AMWC Aesthetic Medicine Award</strong> en M\u00f3naco \u2014 uno de los reconocimientos m\u00e1s importantes de la medicina est\u00e9tica mundial \u2014 la Dra. Balboa es referente indiscutida en su campo.</p>
        
        <p>Su participaci\u00f3n activa en congresos como el <strong>AMWC de M\u00f3naco</strong>, <strong>Evidence Experience en R\u00edo de Janeiro</strong> y los principales eventos de medicina est\u00e9tica la mantienen siempre a la vanguardia de las \u00faltimas t\u00e9cnicas y tecnolog\u00edas.</p>

        <blockquote class="about-quote">
          <i class="fas fa-quote-left"></i>
          "Mi compromiso es brindar resultados excepcionales con la m\u00e1xima seguridad. Cada paciente merece lo mejor de la ciencia y el arte m\u00e9dico."
          <cite>&mdash; Dra. Estefan\u00eda Balboa</cite>
        </blockquote>

        <div class="about-credentials">
          <div class="credential"><i class="fas fa-award"></i><div><strong>AMWC Award Winner</strong><span>M\u00f3naco, Grimaldi Forum</span></div></div>
          <div class="credential"><i class="fas fa-globe"></i><div><strong>Formaci\u00f3n Internacional</strong><span>Europa, Am\u00e9rica Latina</span></div></div>
          <div class="credential"><i class="fas fa-certificate"></i><div><strong>Evidence Certified</strong><span>R\u00edo de Janeiro, Brasil</span></div></div>
          <div class="credential"><i class="fas fa-syringe"></i><div><strong>Master Injector</strong><span>Certificaci\u00f3n avanzada</span></div></div>
          <div class="credential"><i class="fas fa-microscope"></i><div><strong>Investigaci\u00f3n Cl\u00ednica</strong><span>Publicaciones cient\u00edficas</span></div></div>
          <div class="credential"><i class="fas fa-user-graduate"></i><div><strong>Formadora</strong><span>Capacitadora de colegas</span></div></div>
        </div>
      </div>
    </div>

    <!-- INSTAGRAM REELS -->
    <div class="instagram-section">
      <h3 class="instagram-title"><i class="fab fa-instagram"></i> S\u00edguenos en Instagram</h3>
      <p class="instagram-sub">@nala_beautyclinic &mdash; Contenido exclusivo, tratamientos en vivo y tips de belleza</p>
      <div class="reels-grid">
        <a href="https://www.instagram.com/reel/CyBdGFyLFVZ/" target="_blank" class="reel-item">
          <img src="${I('treat1')}" alt="Reel 1" class="reel-thumb">
          <div class="reel-overlay"><i class="fas fa-play"></i></div>
        </a>
        <a href="https://www.instagram.com/reel/CxdAZu-rDzt/" target="_blank" class="reel-item">
          <img src="${I('laser1')}" alt="Reel 2" class="reel-thumb">
          <div class="reel-overlay"><i class="fas fa-play"></i></div>
        </a>
        <a href="https://www.instagram.com/reel/Cxxr4aBLJN2/" target="_blank" class="reel-item">
          <img src="${I('consult')}" alt="Reel 3" class="reel-thumb">
          <div class="reel-overlay"><i class="fas fa-play"></i></div>
        </a>
        <a href="https://www.instagram.com/reel/DT80mMhESq/" target="_blank" class="reel-item">
          <img src="${I('techTreat')}" alt="Reel 4" class="reel-thumb">
          <div class="reel-overlay"><i class="fas fa-play"></i></div>
        </a>
      </div>
    </div>
  </div>
  ${sectionFooter()}
</section>

<!-- ====================== TECNOLOGIA ====================== -->
<section id="section-tecnologia" class="section">
  <div class="section-inner">
    ${sectionHeader('Innovaci\u00f3n de Vanguardia', 'Tecnolog\u00eda')}
    
    <p class="section-intro">Cada equipo fue seleccionado meticulosamente por la Dra. Balboa para ofrecer los tratamientos m\u00e1s avanzados del mundo. Tecnolog\u00eda de clase mundial, ahora en tu cl\u00ednica.</p>

    <div class="carousel-container" data-carousel="tech">
      <div class="carousel-track">
        ${techCard('morphCase', 'Morpheus8', 'Microagujas fraccionadas combinadas con radiofrecuencia bipolar para remodelaci\u00f3n profunda de piel, estimulaci\u00f3n de col\u00e1geno y tensi\u00f3n tisular. El est\u00e1ndar de oro en rejuvenecimiento.', 'Rejuvenecimiento profundo')}
        ${techCard('spectra', 'Lutronic Spectra XT', 'L\u00e1ser Nd:YAG de \u00faltima generaci\u00f3n para rejuvenecimiento, eliminaci\u00f3n de manchas, tratamiento de tatuajes y toning facial. Precisi\u00f3n milim\u00e9trica.', 'L\u00e1ser avanzado')}
        ${techCard('scizer', 'Scizer', 'Ultrasonido focalizado de alta intensidad (HIFU) para contorno corporal no invasivo. Elimina grasa localizada de forma permanente. Sin dolor, sin cicatrices, sin recuperaci\u00f3n.', 'Contorno corporal')}
        ${techCard('techAll', 'Arsenal Completo', 'Morpheus PRO, Lutronic, Alma, DEKA y m\u00e1s. Todo el ecosistema de tecnolog\u00eda est\u00e9tica reunido en un solo lugar para tratamientos integrales.', 'Ecosistema completo')}
        ${techCard('harmonyXL', 'Harmony XL PRO', 'Plataforma multitecnol\u00f3gica de Alma Lasers. Combina radiofrecuencia, ultrasonido y l\u00e1ser para tratamientos faciales y corporales de m\u00e1xima eficacia.', 'Multi-plataforma')}
        ${techCard('harmonyYellow', 'Harmony - Modo Avanzado', 'Configuraciones especializadas del Harmony XL PRO para tratamientos de alta complejidad. Tecnolog\u00eda adaptativa que se ajusta a cada tipo de piel.', 'Alta complejidad')}
        ${techCard('diagAI', 'Diagn\u00f3stico con IA', 'An\u00e1lisis facial avanzado con inteligencia artificial. Mapeo completo de la piel para diagn\u00f3sticos ultra-precisos y planes de tratamiento personalizados.', 'Inteligencia artificial')}
        ${techCard('skinAnalysis', 'An\u00e1lisis de Piel', 'Esc\u00e1ner facial de alta resoluci\u00f3n que eval\u00faa hidrataci\u00f3n, poros, arrugas, manchas y elasticidad. La base para todo tratamiento exitoso.', 'Diagn\u00f3stico preciso')}
        ${techCard('equipRoom', 'Suite de Tratamiento', 'Sala equipada con la tecnolog\u00eda m\u00e1s avanzada del mercado. Cada espacio dise\u00f1ado para la m\u00e1xima comodidad y los mejores resultados.', 'Espacio premium')}
        ${techCard('equipSetup', 'Estaci\u00f3n de Trabajo', 'Cada estaci\u00f3n optimizada con tecnolog\u00eda de punta y protocolos de esterilizaci\u00f3n de m\u00e1xima seguridad. Tu bienestar es nuestra prioridad.', 'Seguridad total')}
      </div>
    </div>

    <!-- TECH HIGHLIGHTS -->
    <div class="tech-highlights">
      <div class="tech-highlight fade-up">
        <i class="fas fa-shield-alt"></i>
        <h4>Seguridad Certificada</h4>
        <p>Todos nuestros equipos cuentan con certificaci\u00f3n FDA, ANVISA y marcado CE. Protocolos de seguridad internacionales.</p>
      </div>
      <div class="tech-highlight fade-up">
        <i class="fas fa-sync-alt"></i>
        <h4>Actualizaci\u00f3n Constante</h4>
        <p>Renovamos nuestro parque tecnol\u00f3gico continuamente para ofrecerte siempre lo \u00faltimo en innovaci\u00f3n est\u00e9tica.</p>
      </div>
      <div class="tech-highlight fade-up">
        <i class="fas fa-user-cog"></i>
        <h4>Protocolos Personalizados</h4>
        <p>La tecnolog\u00eda se adapta a vos. Cada par\u00e1metro se calibra seg\u00fan tu tipo de piel y objetivos espec\u00edficos.</p>
      </div>
    </div>
  </div>
  ${sectionFooter()}
</section>

<!-- ====================== PRODUCTOS ====================== -->
<section id="section-productos" class="section">
  <div class="section-inner">
    ${sectionHeader('Excelencia en Cada Detalle', 'Productos')}
    
    <p class="section-intro">Solo utilizamos productos de las marcas l\u00edderes mundiales en medicina est\u00e9tica, avalados por a\u00f1os de investigaci\u00f3n cient\u00edfica y resultados comprobados en miles de pacientes.</p>

    <div class="carousel-container" data-carousel="products">
      <div class="carousel-track">
        ${techCard('morph8', 'Morpheus8 Resurfacing', 'Discover Medical Innovations. Sistema de resurfacing fraccional que combina microagujas con radiofrecuencia para una renovaci\u00f3n cut\u00e1nea sin precedentes. Resultados visibles desde la primera sesi\u00f3n.', 'InMode')}
        ${techCard('profhiloBox', 'Profhilo', 'Complejos cooperativos h\u00edbridos de \u00e1cido hialur\u00f3nico desarrollados por IBSA. Bio-remodelaci\u00f3n que hidrata, reafirma y rejuvenece desde el interior. El secreto mejor guardado de la dermatolog\u00eda.', 'IBSA')}
        ${techCard('scizerBroch', 'Scizer Body', 'Elimina la adiposidad localizada de forma permanente y no invasiva. Tecnolog\u00eda HIFU que destruye c\u00e9lulas grasas sin da\u00f1ar tejidos circundantes. Viv\u00ed las curvas del bienestar.', 'HIFU')}
        ${techCard('nordlys', 'Nordlys by Candela', 'Sistema l\u00e1ser multiaplicaci\u00f3n para tratamientos vasculares, pigmentarios y de rejuvenecimiento. Versatilidad y precisi\u00f3n en un solo equipo de clase mundial.', 'Candela')}
        ${techCard('radiesse', 'Radiesse', 'Bioestimulador regenerativo de hidroxilapatita de calcio. Induce la producci\u00f3n natural de col\u00e1geno para una rejuvenecimiento progresivo y duradero. Ciencia que transforma.', 'Merz')}
        ${techCard('tetraPro', 'TETRA PRO by DEKA', 'La \u00faltima revoluci\u00f3n en tecnolog\u00eda l\u00e1ser de DEKA. Precisi\u00f3n milim\u00e9trica en rejuvenecimiento cut\u00e1neo con m\u00ednimo tiempo de recuperaci\u00f3n. El futuro ya est\u00e1 aqu\u00ed.', 'DEKA')}
      </div>
    </div>

    <!-- PRODUCT TRUST -->
    <div class="product-trust">
      <h3 class="trust-title">Marcas que Conf\u00edan en Nosotros</h3>
      <div class="trust-logos">
        <span class="trust-brand">InMode</span>
        <span class="trust-brand">IBSA</span>
        <span class="trust-brand">Candela</span>
        <span class="trust-brand">Merz Aesthetics</span>
        <span class="trust-brand">DEKA</span>
        <span class="trust-brand">Alma Lasers</span>
        <span class="trust-brand">Lutronic</span>
        <span class="trust-brand">Allergan</span>
      </div>
    </div>
  </div>
  ${sectionFooter()}
</section>

<!-- ====================== SERVICIOS ====================== -->
<section id="section-servicios" class="section">
  <div class="section-inner">
    ${sectionHeader('Arte M\u00e9dica Personalizada', 'Servicios')}
    
    <p class="section-intro">Cada tratamiento combina ciencia, t\u00e9cnica y sensibilidad est\u00e9tica. Un diagn\u00f3stico personalizado con inteligencia artificial es el punto de partida para tu transformaci\u00f3n.</p>

    <div class="carousel-container" data-carousel="services">
      <div class="carousel-track">
        ${techCard('laser1', 'Tratamientos L\u00e1ser', 'Procedimientos con l\u00e1ser Lutronic Spectra XT para rejuvenecimiento integral, eliminaci\u00f3n de manchas, cierre de poros y remodelaci\u00f3n cut\u00e1nea. Tecnolog\u00eda de precisi\u00f3n para resultados extraordinarios.', 'L\u00e1ser Nd:YAG')}
        ${techCard('laser2', 'Procedimientos Corporales', 'Contorno corporal con tecnolog\u00eda l\u00e1ser avanzada y ultrasonido focalizado. Reducci\u00f3n de grasa localizada, tensi\u00f3n cut\u00e1nea y remodelaci\u00f3n corporal no invasiva.', 'Body Contouring')}
        ${techCard('treat1', 'Tratamiento Facial Integral', 'Protocolos completos de rejuvenecimiento facial que combinan m\u00faltiples tecnolog\u00edas: l\u00e1ser, radiofrecuencia, microagujas y bioestimuladores para resultados sin\u00e9rgicos.', 'Rejuvenecimiento 360\u00b0')}
        ${techCard('consult', 'Consulta Personalizada', 'Diagn\u00f3stico facial avanzado asistido por inteligencia artificial. An\u00e1lisis completo de piel, plan de tratamiento individualizado y seguimiento continuo de resultados.', 'Diagn\u00f3stico IA')}
        ${techCard('profhiloTalk', 'Bioestimulaci\u00f3n con Profhilo', '\u00c1cido hialur\u00f3nico h\u00edbrido para hidrataci\u00f3n profunda, mejora de la elasticidad y estimulaci\u00f3n natural de col\u00e1geno y elastina. La piel se transforma desde adentro.', 'Bio-remodeling')}
        ${techCard('scizerTalk', 'Contorno Corporal Scizer', 'Ultrasonido focalizado HIFU para eliminaci\u00f3n definitiva de grasa localizada. Una sola sesi\u00f3n, resultados permanentes. Sin cirug\u00eda, sin anestesia, sin recuperaci\u00f3n.', 'HIFU Body')}
        ${techCard('techTreat', 'Radiofrecuencia Avanzada', 'Tratamientos con radiofrecuencia bipolar y multipolar para tensi\u00f3n cut\u00e1nea, reducci\u00f3n de arrugas y estimulaci\u00f3n profunda de col\u00e1geno nuevo.', 'RF Treatment')}
      </div>
    </div>

    <!-- SERVICES PROCESS -->
    <div class="services-process">
      <h3 class="process-title">Tu Experiencia en NALA</h3>
      <div class="process-steps">
        <div class="process-step fade-up">
          <div class="step-num">01</div>
          <h4>Consulta Inicial</h4>
          <p>Diagn\u00f3stico completo con IA. Evaluaci\u00f3n personalizada de tu piel y objetivos est\u00e9ticos.</p>
        </div>
        <div class="process-step fade-up">
          <div class="step-num">02</div>
          <h4>Plan Personalizado</h4>
          <p>Dise\u00f1amos un protocolo a medida combinando las tecnolog\u00edas ideales para vos.</p>
        </div>
        <div class="process-step fade-up">
          <div class="step-num">03</div>
          <h4>Tratamiento Premium</h4>
          <p>Procedimiento realizado por la Dra. Balboa con tecnolog\u00eda de vanguardia.</p>
        </div>
        <div class="process-step fade-up">
          <div class="step-num">04</div>
          <h4>Seguimiento Continuo</h4>
          <p>Acompa\u00f1amiento post-tratamiento y ajustes para garantizar resultados \u00f3ptimos.</p>
        </div>
      </div>
    </div>
  </div>
  ${sectionFooter()}
</section>

<!-- ====================== EXPERIENCIA ====================== -->
<section id="section-experiencia" class="section">
  <div class="section-inner">
    ${sectionHeader('Trayectoria de Excelencia', 'Experiencia')}
    
    <p class="section-intro">Una carrera marcada por el reconocimiento internacional, la innovaci\u00f3n constante y la pasi\u00f3n por elevar los est\u00e1ndares de la medicina est\u00e9tica en Latinoam\u00e9rica y el mundo.</p>

    <div class="carousel-container" data-carousel="experience">
      <div class="carousel-track">
        ${techCard('amwcAward', 'AMWC Aesthetic Medicine Award', 'Reconocimiento en el Congreso Mundial de Medicina Est\u00e9tica de M\u00f3naco, el evento m\u00e1s prestigioso del sector a nivel global. Un hito en la carrera de la Dra. Balboa.', '2023 - M\u00f3naco')}
        ${techCard('amwc26', 'AMWC 2026 - M\u00f3naco', '24\u00b0 Congreso Cient\u00edfico de Medicina Est\u00e9tica en el Grimaldi Forum de Monte-Carlo. Participaci\u00f3n activa en las \u00faltimas innovaciones del sector.', '2026 - Monte-Carlo')}
        ${techCard('cert1', 'Evidence Experience', 'Certificaci\u00f3n de excelencia en R\u00edo de Janeiro. Formaci\u00f3n avanzada con los referentes m\u00e1s importantes de Am\u00e9rica Latina en medicina est\u00e9tica.', 'R\u00edo de Janeiro')}
        ${techCard('cert2', 'Certificaci\u00f3n Internacional', 'Reconocimiento a la excelencia acad\u00e9mica y cl\u00ednica. Formaci\u00f3n continua en las principales instituciones del mundo.', 'Formaci\u00f3n continua')}
        ${techCard('monaco25', 'M\u00f3naco 2025', 'Presencia en el epicentro mundial de la medicina est\u00e9tica. Networking con l\u00edderes globales e intercambio de las \u00faltimas t\u00e9cnicas y tecnolog\u00edas.', 'Grimaldi Forum')}
        ${techCard('amwc23backdrop', 'AMWC Awards 2023', 'Ceremonia de premios en el Auditorio Camille Blanc. Un momento que marca un antes y un despu\u00e9s en la carrera profesional.', 'Ceremonia')}
        ${techCard('amwc23b', 'AMWC Conference', 'Participaci\u00f3n en sesiones cient\u00edficas del congreso mundial con los m\u00e1ximos exponentes de la industria est\u00e9tica.', 'Sesiones cient\u00edficas')}
        ${techCard('radiesseExp', 'Radiesse Experience', 'Experiencia inmersiva con l\u00edderes en bioestimulaci\u00f3n y regeneraci\u00f3n cut\u00e1nea. Formaci\u00f3n hands-on con expertos internacionales.', 'Training avanzado')}
        ${techCard('monacoCoast', 'M\u00f3naco - Exhibitor', 'Participaci\u00f3n como exhibidora y ponente en el Grimaldi Forum. Compartiendo conocimiento con colegas de todo el mundo.', 'Speaker internacional')}
        ${techCard('filorga', 'Laboratoires Filorga', 'Formaci\u00f3n exclusiva con una de las marcas m\u00e1s prestigiosas de la industria est\u00e9tica francesa. Innovaci\u00f3n al servicio de la belleza.', 'Par\u00eds, Francia')}
        ${techCard('interview', 'Cobertura Medi\u00e1tica', 'Presencia regular en medios especializados. Entrevistas, columnas de opini\u00f3n y participaci\u00f3n en paneles sobre innovaci\u00f3n en est\u00e9tica.', 'Medios & Prensa')}
      </div>
    </div>

    <!-- TIMELINE -->
    <div class="exp-timeline">
      <h3 class="timeline-title">Hitos Profesionales</h3>
      <div class="timeline">
        <div class="timeline-item fade-up"><div class="tl-year">2026</div><div class="tl-content"><h4>AMWC M\u00f3naco</h4><p>24\u00b0 Congreso - Grimaldi Forum. Ponente y exhibidora.</p></div></div>
        <div class="timeline-item fade-up"><div class="tl-year">2025</div><div class="tl-content"><h4>Expansi\u00f3n NALA</h4><p>Incorporaci\u00f3n de Nordlys, TETRA PRO y nuevas tecnolog\u00edas.</p></div></div>
        <div class="timeline-item fade-up"><div class="tl-year">2023</div><div class="tl-content"><h4>AMWC Award Winner</h4><p>Ganadora del Aesthetic Medicine Award en M\u00f3naco.</p></div></div>
        <div class="timeline-item fade-up"><div class="tl-year">2022</div><div class="tl-content"><h4>Evidence Experience</h4><p>Certificaci\u00f3n en R\u00edo de Janeiro, Brasil.</p></div></div>
        <div class="timeline-item fade-up"><div class="tl-year">2020</div><div class="tl-content"><h4>Cl\u00ednica NALA</h4><p>Inauguraci\u00f3n del centro est\u00e9tico premium.</p></div></div>
      </div>
    </div>
  </div>
  ${sectionFooter()}
</section>

<!-- ====================== UBICACION ====================== -->
<section id="section-ubicacion" class="section">
  <div class="section-inner">
    ${sectionHeader('Tu Espacio de Bienestar', 'Ubicaci\u00f3n')}
    
    <p class="section-intro">Cada detalle de Cl\u00ednica NALA fue pensado para crear una experiencia sensorial \u00fanica. Arquitectura contempor\u00e1nea, iluminaci\u00f3n envolvente y un ambiente premium que te invita a relajarte.</p>

    <div class="carousel-container" data-carousel="location">
      <div class="carousel-track">
        ${techCard('interior1', 'Recepci\u00f3n Principal', 'Arcos arquitect\u00f3nicos, iluminaci\u00f3n envolvente y un dise\u00f1o contempor\u00e1neo que te recibe con calidez y elegancia desde el primer momento.', 'Bienvenida')}
        ${techCard('corridor', 'Espacios de Transici\u00f3n', 'Paredes texturizadas, iluminaci\u00f3n LED perimetral y mobiliario exclusivo. Cada pasillo es una experiencia est\u00e9tica en s\u00ed misma.', 'Dise\u00f1o interior')}
        ${techCard('lamps', 'Detalles de Dise\u00f1o', 'L\u00e1mparas colgantes esculturales que crean juegos de luces y sombras. Una experiencia sensorial que comienza antes del tratamiento.', 'Iluminaci\u00f3n')}
        ${techCard('treatRoom', 'Sala de Procedimientos', 'Equipada con la tecnolog\u00eda m\u00e1s avanzada del mercado en un ambiente dise\u00f1ado para tu comodidad y tranquilidad absoluta.', 'Tratamiento')}
        ${techCard('clinic1', 'Consultorio Principal', 'El espacio donde comienza tu transformaci\u00f3n. Consultas personalizadas con la Dra. Balboa en un ambiente de confianza y profesionalismo.', 'Consulta')}
      </div>
    </div>

    <!-- MAP -->
    <div class="location-map">
      <h3 class="map-title"><i class="fas fa-map-marker-alt"></i> Encontranos</h3>
      <p class="map-address">Cl\u00ednica NALA &mdash; Buenos Aires, Argentina</p>
      <div class="map-embed">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168!2d-58.3816!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCl%C3%ADnica+NALA!5e0!3m2!1ses!2sar!4v1" width="100%" height="350" style="border:0;border-radius:12px" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="location-info-grid">
        <div class="loc-info-item"><i class="fas fa-clock"></i><div><strong>Horarios</strong><p>Lunes a Viernes: 9:00 - 19:00</p><p>S\u00e1bados: 9:00 - 14:00</p></div></div>
        <div class="loc-info-item"><i class="fas fa-car"></i><div><strong>Estacionamiento</strong><p>Estacionamiento privado disponible para pacientes</p></div></div>
        <div class="loc-info-item"><i class="fas fa-wheelchair"></i><div><strong>Accesibilidad</strong><p>Instalaciones 100% accesibles</p></div></div>
      </div>
    </div>
  </div>
  ${sectionFooter()}
</section>

<!-- ====================== CONTACTO ====================== -->
<section id="section-contacto" class="section">
  <div class="section-inner">
    ${sectionHeader('Comenz\u00e1 Tu Transformaci\u00f3n', 'Contacto')}
    
    <p class="section-intro">Tu primer paso hacia la mejor versi\u00f3n de vos misma. Escribinos o agend\u00e1 tu consulta personalizada con la Dra. Balboa.</p>

    <div class="contact-grid">
      <div class="contact-info-panel">
        <h3>Cl\u00ednica NALA</h3>
        <p class="contact-tagline">Donde la ciencia, la est\u00e9tica y la longevidad se encuentran.</p>
        
        <div class="contact-items">
          <div class="contact-item">
            <i class="fab fa-instagram"></i>
            <div><strong>Instagram</strong><a href="https://www.instagram.com/nala_beautyclinic" target="_blank">@nala_beautyclinic</a></div>
          </div>
          <div class="contact-item">
            <i class="fab fa-whatsapp"></i>
            <div><strong>WhatsApp</strong><a href="https://wa.me/5491100000000" target="_blank">Consultar disponibilidad</a></div>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div><strong>Email</strong><a href="mailto:info@nalaclinic.com">info@nalaclinic.com</a></div>
          </div>
          <div class="contact-item">
            <i class="fas fa-clock"></i>
            <div><strong>Horarios</strong><span>Lun - Vie: 9:00 - 19:00<br>S\u00e1b: 9:00 - 14:00</span></div>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div><strong>Ubicaci\u00f3n</strong><span>Buenos Aires, Argentina</span></div>
          </div>
        </div>

        <div class="contact-cta-box">
          <p><i class="fas fa-star"></i> Primera consulta de evaluaci\u00f3n incluye diagn\u00f3stico facial con IA</p>
        </div>
      </div>

      <div class="contact-form-panel">
        <h3 class="form-title">Agend\u00e1 Tu Consulta</h3>
        <form id="contact-form" onsubmit="handleContactSubmit(event)">
          <div class="form-row">
            <div class="form-group"><label>Nombre completo</label><input type="text" name="name" placeholder="Tu nombre" required></div>
            <div class="form-group"><label>Email</label><input type="email" name="email" placeholder="tu@email.com" required></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Tel\u00e9fono</label><input type="tel" name="phone" placeholder="+54 11 0000-0000"></div>
            <div class="form-group"><label>Servicio de inter\u00e9s</label>
              <select name="service">
                <option value="">Seleccion\u00e1 un servicio</option>
                <option>Consulta General</option>
                <option>Tratamiento L\u00e1ser</option>
                <option>Morpheus8</option>
                <option>Profhilo</option>
                <option>Contorno Corporal - Scizer</option>
                <option>Diagn\u00f3stico Facial con IA</option>
                <option>Bioestimulaci\u00f3n - Radiesse</option>
                <option>Nordlys</option>
                <option>Harmony XL PRO</option>
                <option>Otro</option>
              </select>
            </div>
          </div>
          <div class="form-group"><label>Tu mensaje</label><textarea name="message" placeholder="Cont\u00e1nos en qu\u00e9 podemos ayudarte..." rows="4"></textarea></div>
          <button type="submit" class="btn-premium btn-gold btn-full">Enviar Consulta <i class="fas fa-paper-plane"></i></button>
        </form>
        <p class="form-note"><i class="fas fa-lock"></i> Tu informaci\u00f3n es confidencial y segura.</p>
      </div>
    </div>
  </div>
  ${sectionFooter()}
</section>

</main>

<!-- MODAL -->
<div id="detail-modal" class="modal" onclick="closeModal(event)">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModalForce()"><i class="fas fa-times"></i></button>
    <div class="modal-img"></div>
    <div class="modal-info"><h3></h3><p></p><span class="modal-tag"></span></div>
  </div>
</div>

<!-- SUCCESS TOAST -->
<div id="toast" class="toast"><i class="fas fa-check-circle"></i><span></span></div>

<script src="/static/app.js"></script>
</body>
</html>`
}

function sectionHeader(label: string, title: string): string {
  return `<div class="section-header"><span class="section-label">${label}</span><h2 class="section-title">${title}</h2><div class="section-line"></div></div>`
}

function portraitCard(img: string, caption: string): string {
  return `<div class="carousel-card portrait"><img src="${I(img)}" alt="${caption}" loading="lazy"><div class="portrait-caption">${caption}</div></div>`
}

function techCard(img: string, title: string, desc: string, tag: string): string {
  return `<div class="carousel-card tech-card" onclick="showDetail(this)">
    <div class="card-img-wrap"><img src="${I(img)}" alt="${title}" loading="lazy"><div class="card-tag">${tag}</div></div>
    <div class="card-info"><h4>${title}</h4><p>${desc}</p></div></div>`
}
