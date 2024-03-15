const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
//flojos secundarios creditos
const flowSecundarioActividades = addKeyword(['actividades'])
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')
    .addAnswer([
        "¡Hola! Recuerda mantenerte al día con las actividades optativas que ofrece la facultad. Puedes seguir la página de Facebook para más detalles. Además, para información sobre actividades optativas MOOC y CUAL, visita directamente el sitio web del CIAD. Para requisitos de ayudantías, puedes acceder al enlace o consultar con tu tutor o coordinador de carrera.",
        "Optativas: https://fca.tij.uabc.mx/optativas",
        "MOOC: https://ciad.mxl.uabc.mx/oferta-mooc-2024-1/",
        "CUAL: https://ciad.mxl.uabc.mx/cual/",
        "Facebook: https://www.facebook.com/fcatijuana/",        
    ]);

    const flowSecundarioMaterias = addKeyword(['materias'])
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')
    .addAnswer([
        "¡Hola! Si estás buscando información sobre optativas, tu tutor te guiará en la elección más adecuada para tu grupo. Una vez seleccionada, será inscrita en el sistema de subastas durante el periodo de reinscripción, y la forma de tomarla será similar a la de otras materias obligatorias.",
        "Para aquellos interesados en los créditos optativos ofrecidos por el programa CUAL (https://ciad.mxl.uabc.mx/cual/), aquí tienes algunos puntos importantes a tener en cuenta:",
        "Solo se puede tomar una materia por semestre.",
        "El procedimiento se realiza durante las mismas fechas de la subasta de reinscripción o en periodos intersemestrales. Para estos últimos, la universidad emite un comunicado con las fechas de pago.",
        "Para más información:",
        "Reinscripciones: https://fca.tij.uabc.mx/reinscripciones?fbclid=IwAR3LF60w5pnkirBRvoh2CoM8Jyu7nIjNOkeWr7ejYaxyZGGxS-NZ3Tdkttg",
        "Intersemestrales: https://fca.tij.uabc.mx/intersemestrales",       
    ]);

    const flowSecundario8 = addKeyword(['8'])
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')
    .addAnswer([
        "Necesitas 8 actividades de formación integral validadas para solicitar un crédito optativo que será registrado en tu Kardex.",
        "Para más información:",      
        "Cultura y Deporte: https://sifpvu.uabc.mx/",
        "UABC 8 = 1: http://proyectosfcqi.tij.uabc.mx/eventos/login2.php",       
    ]);

    const flowSecundarioCuantos = addKeyword(['cuantos'])
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')
    .addAnswer([
        "Los créditos optativos varían según la carrera:",
        "Inteligencia de negocios: 52 créditos optativos.",
        "Informática: 67 créditos optativos.",
        "Contaduría: 70 créditos optativos.",
        "Administración de empresas: 79 créditos optativos.",
        "Negocios Internacionales: 62 créditos optativos.",
        "Para más detalles sobre la oferta educativa y la carta descriptiva de cada carrera,",
        "visita la página web de FCA Campus Tijuana: https://fca.tij.uabc.mx/licenciatura",        
    ]);

    const flowSecundarioManeras = addKeyword(['maneras'])
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')
    .addAnswer([
        "Existen multiples manera de obtener Materias optativas.",

        "Acreditación de inglés (Inglés conversacional e inglés técnico para negocios).",
        "Cursos MOOC.",
        "Actividades 8 = 1.",
        "Catálogo de Unidades de Aprendizaje en Línea (CUAL).",
        "Ayudantías.",
        "Evento académico en otro idioma.",
        "Actividad deportiva.",
        "Actividad cultural.",
        "Actividades complementarias de formación integral.",
        "Puedes obtener más información sobre las ofertas de MOOC y CUAL visitando las páginas de CIAD UABC. También puedes consultar la página de Facebook de la facultad para ver anuncios sobre actividades 8 = 1, o acceder a la página de UABC 8 = 1 para leer información completa sobre las actividades.",
        
        "Para más detalles:",
        
        "Optativas: https://fca.tij.uabc.mx/optativas",
        "MOOC: https://ciad.mxl.uabc.mx/oferta-mooc-2024-1/",
        "CUAL: https://ciad.mxl.uabc.mx/cual/",
        "Facebook: https://www.facebook.com/fcatijuana/",
        "Ayudantías: https://sifpvu.uabc.mx",
        "Cultura y Deporte: https://sifpvu.uabc.mx/security/logout",
        "UABC 8 = 1: http://proyectosfcqi.tij.uabc.mx/eventos/login2.php",        
    ]);


    

// Flujos específicos sin 'flowVolver' directo, pero con instrucciones para volver
const flowCreditosOptativos = addKeyword(['creditos'])
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')
    .addAnswer(
        [
            '👉 *actividades* ¿Dónde puedo ver las actividades que puedo hacer para conseguir créditos optativos?',
            '👉 *materias* ¿Cómo pueden darse de alta materias optativas?',
            '👉 *8* ¿Como funcionan? 8 = 1',
            '👉 *cuantos* ¿Cuantos creditos optativos ocupamos y si ya los tenemos, que pasa?',
            '👉 *maneras* ¿Que maneras hay de liberar creditos optativos?',
        ]
    )

const flowServicioSocialProfesional = addKeyword(['profesional'])
    .addAnswer('Información sobre Servicio Social Profesional aquí.')
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')

const flowServicioProfesional = addKeyword(['servicio'])
    .addAnswer('Información sobre Servicio Profesional aquí.')
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')

const flowPracticasProfesionales = addKeyword(['practicas'])
    .addAnswer('Información sobre Prácticas Profesionales aquí.')
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')

const flowTitulacionYSeguimiento = addKeyword(['titulacion'])
    .addAnswer('Información sobre Titulación y Seguimiento aquí.')
    .addAnswer('Para volver al menú principal, escribe *hola* o *inicio*.')

// flowPrincipal integrando todos los flujos específicos con instrucciones para volver
const flowPrincipal = addKeyword(['hola', 'inicio'])
    .addAnswer('🙌 Hola, bienvenido. Elige una opción:')
    .addAnswer(
        [
            '👉 *creditos* para información sobre Créditos Optativos',
            '👉 *profesional* para información sobre Servicio Social Profesional',
            '👉 *servicio* para información sobre Servicio Profesional',
            '👉 *practicas* para información sobre Prácticas Profesionales',
            '👉 *titulacion* para información sobre Titulación y Seguimiento',
        ]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowCreditosOptativos, flowServicioSocialProfesional, flowServicioProfesional, flowPracticasProfesionales, flowTitulacionYSeguimiento, flowSecundarioActividades, flowSecundarioMaterias, flowSecundario8,flowSecundarioCuantos,flowSecundarioManeras])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
