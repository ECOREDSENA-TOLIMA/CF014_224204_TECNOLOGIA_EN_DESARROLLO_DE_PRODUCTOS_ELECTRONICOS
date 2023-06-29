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
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_14_224204.pdf',
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
      link: 'https://www.youtube.com/embed/Vpgug3QBitk',
    },
    {
      tema: 'Simulación de circuitos',
      referencia: 'Autodesk, INC. (2021). Tinkercad, Diseño 3D.',
      tipo: 'Página web',
      link: 'https://www.tinkercad.com/',
    },
    {
      tema: 'Hojas de datos técnicos',
      referencia:
        'Alldatasheet. (2021). Electronic components datasheet search.',
      tipo: 'Página web de consulta',
      link: 'https://alldatasheet.com',
    },
  ],
  glosario: [
    {
      termino: 'Chips',
      significado:
        'Pequeña pieza de material semiconductor que contiene múltiples circuitos integrados con los que se realizan numerosas funciones en computadoras y dispositivos electrónicos (Real Academia Española, 2021).',
    },
    {
      termino: 'Conductividad',
      significado:
        'Propiedad que tienen los cuerpos de transmitir el calor o la electricidad (Real Academia Española, 2021).',
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
        'https://tienda.icontec.org/gp-sistema-de-gestion-de-la-medicion-requisitos-para-los-procesos-de-medicion-y-los-equipos-de-medicion-ntc-iso10012-2003.html',
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
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gewin Alfonso Fernández Cáceres',
          cargo: 'Experto Temático',
          centro: '"Regional Atlántico Centro Nacional Colombo Alemán."',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro: 'Regional Distrito Capital Centro de Gestión Industrial.',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Regional Distrito Capital Centro de Diseño y Metrología',
        },
        {
          nombre: 'Viviana Esperanza Herrera Qiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital Centro de Diseño y Metrología.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
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
