export default {
  global: {
    componenteFormativo:
      'Planeación y recolección de información según necesidades',
    descripcionCurso:
      'La fase planeación y recolección determina las fuentes de donde se va a obtener la información, dónde se localizan esas fuentes; define los medios y procedimientos que se van a usar para obtener los datos y cómo se van acondicionar para que puedan analizarse y respondan a las preguntas de la investigación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Datos, información y sistemas de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de recolección de información y software ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Elicitación de requisitos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas de modelado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Elicitación de requisitos',
      referencia:
        'Fatto Consultoría y Sistemas. (2019). Elicitación de requisitos (video). YouTube. https://www.youtube.com/watch?v=OqcCdcle_Rs',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OqcCdcle_Rs ',
    },
    {
      tema: 'Herramientas de modelado',
      referencia:
        'UCAM Universidad Católica de Murcia. (2013). Ingeniería del Software II - Introducción al modelado del software (video). YouTube. https://www.youtube.com/watch?v=jDaEx7OCztY',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=jDaEx7OCztY',
    },
  ],
  glosario: [
    {
      termino: '<em>Elicitación</em>',
      significado:
        'Término asociado a la psicología que se refiere al traspaso de información de forma fluida de un ser humano a otro por medio del lenguaje.',
    },
    {
      termino: 'Full stack',
      significado:
        'Persona responsable de la creación y el mantenimiento de una aplicación web. Por este motivo, es importante que el Full stack tenga conocimientos de desarrollo Front-End y Back-End.',
    },
    {
      termino: 'Stakeholder',
      significado:
        'Aquellos individuos o grupos que tienen interés e impacto en una organización y en los resultados de sus acciones. Algunos de los ejemplos más comunes de stakeholders son los empleados, los accionistas, los clientes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aigneren, M. (2009). La técnica de recolección de información mediante grupos focales. La Sociología En Sus Escenarios, (6).',
      link: 'https://revistas.udea.edu.co/index.php/ceo/article/view/161 ',
    },
    {
      referencia:
        'López Álvarez, D. M. (2020). Método para el desarrollo de software seguro basado en la ingeniería de software y ciberseguridad. INNOVA Research Journal, 5(3.1), 263-280. ',
      link: 'https://doi.org/10.33890/innova.v5.n3.1.2020.1440 ',
    },
    {
      referencia:
        'R. H. Thayer. (1997). Software Requirements Engineering. Wiley-IEEE Computer Society Press.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
