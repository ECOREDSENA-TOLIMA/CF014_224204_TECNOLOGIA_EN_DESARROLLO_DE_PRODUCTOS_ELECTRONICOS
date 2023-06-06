export default {
  global: {
    componenteFormativo:
      'Cálculo y métodos de medición de magnitudes eléctricas y su aplicación',
    descripcionCurso:
      'En este componente formativo se tratan conceptos relacionados con la generación de prototipos, parámetros de fabricación, clasificación de materiales y los procesos asociados a la fabricación mecánica y las técnicas de prototipado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cálculo de magnitudes eléctricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Métodos de medición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Simulación de medidas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Interpretar mediciones de magnitudes eléctricas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Especificaciones técnicas de productos electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Requerimientos de calidad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tolerancias del producto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Verificación de atributos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normas técnicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normas de calidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normativa aplicable al producto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Normativa aplicable al proceso',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mejora continuas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Metodología',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Manejo de indicadores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Acciones de mejora',
            hash: 't_4_3',
          },
        ],
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
      tema: 'RETIEQ Reglamento Técnico de Etiquetado',
      referencia:
        'Ministerio de Energía. (2015). Reglamento técnico de etiquetado.',
      tipo: 'Texto, norma',
      link:
        'https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-etiquetado-retiq/',
    },
    {
      tema: 'Leyes de Kirchhoff',
      referencia:
        'Sígueme la corriente. (2020). Las leyes de Kirchhoff explicadas.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/embed/Vpgug3QBitk',
    },
    {
      tema: 'Simulación de circuitos',
      referencia: 'Autodesk, INC. (2021). Tinkercad, Diseño 3D.',
      tipo: 'Página web',
      descarga: 'https://www.tinkercad.com/',
    },
    {
      tema: 'Hojas de datos técnicos',
      referencia:
        'Alldatasheet. (2021). Electronic components datasheet search.',
      tipo: 'Página web de consulta',
      descarga: 'https://alldatasheet.com',
    },
  ],
  glosario: [
    {
      termino: 'Axioma',
      significado:
        'Proposición tan clara y evidente que se admite sin demostración (Real Academia Española, 2021).',
    },
    {
      termino: 'Chips',
      significado:
        'Pequeña pieza de material semiconductor que contiene múltiples circuitos integrados con los que se realizan numerosas funciones en computadoras y dispositivos electrónicos (Real Academia Española, 2021).',
    },
    {
      termino: 'Conductividad',
      significado:
        'Propiedad que tienen los cuerpos de transmitir el calor o la electricidad (Real Academia Española, 2021)-',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Capacidad de disponer de alguien o de algo para conseguir un efecto determinado (Real Academia Española, 2021). ',
    },
    {
      termino: 'Incertidumbre',
      significado: 'Falta de certidumbre (Real academia Española, 2021).',
    },
    {
      termino: 'Nodo',
      significado:
        'En un esquema o representación gráfica en forma de árbol, es cada uno de los puntos de origen de las distintas ramificaciones (Real Academia Española, 2021).',
    },
    {
      termino: 'Teorema',
      significado:
        'Proposición demostrable lógicamente partiendo de axiomas, postulados o de otras proposiciones ya demostradas (Real Academia Española, 2021).',
    },
  ],
  referencias: [
    {
      referencia: 'Fliutronic. (s.f.). Leyes de Kirchhoff',
      link:
        'https://www.fluitronic.es/descargas/tablas-formulas/leyes-kirchhoff#:~:text=La%20ley%20de%20corrientes%20de,de%20la%20corriente%20que%20sale.&text=La%20ley%20se%20basa%20en,y%20el%20tiempo%20en%20segundos',
    },
    {
      referencia:
        'ICONTEC. (2003). NTC-ISO 10012. Sistemas de gestión de la medición. ICONTEC.',
      link:
        'https://idrd.gov.co/sitio/idrd/sites/default/files/imagenes/ntc-iso10012%20medicion%20y%20equipos0.pdf',
    },
    {
      referencia:
        'INET. (s.f.). Guía de estudio 7: mallas y nodos. Ministerio de Educación Argentina.',
      link:
        'http://www.inet.edu.ar/wp-content/uploads/2020/07/ELECTRONICA_Gu--a07-Mallas-y-Nodos.pdf',
    },
    {
      referencia: 'IPC. (2018). IPC Standards tree. [gráfico].',
      link: 'https://blog.matric.com/ipc-standards-chart',
    },
    {
      referencia:
        'ISO. (s.f.). International Organization for Standardization.',
      link: 'http://www.iso.org/',
    },
    {
      referencia:
        'Ministerio de Energía. (2015). Reglamento técnico de etiquetado.',
      link:
        'https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-etiquetado-retiq/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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