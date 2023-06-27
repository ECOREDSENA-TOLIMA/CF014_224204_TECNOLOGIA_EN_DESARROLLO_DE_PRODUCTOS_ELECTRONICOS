<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normas técnicas 

    p.mt-3(data-aos="fade-up") En Colombia, los procesos de medición están regulados por la norma técnica NTC-ISO 10012 del 26 de junio de 2003 Requisitos para los procesos de medición y los equipos de medición, la cual tiene como objetivo gestionar los procesos de medición en las empresas dedicadas a esta labor. Es necesario consultar esta norma para el desarrollo de productos que involucren la medición de magnitudes físicas de aplicación pública, por ejemplo, para medir la potencia consumida en los hogares. En este orden de ideas, si lo que se pretende es desarrollar productos electrónicos que miden el volumen del gas consumido, también será necesario consultar la norma técnica NTC colombiana 2505.
    p.mt-3(data-aos="fade-up") En el ámbito internacional rigen otro tipo de normas que están a cargo de entes específicos para procesos determinados, que hacen que los productos electrónicos sean usados en cualquier parte del mundo manteniendo los estándares de compatibilidad. La siguiente figura expone los entes reguladores.

    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 14
        span #[em  Entes reguladores]

    br
    .row 
      .col-sm-12.col-lg-12
        figure
          img(src="@/assets/curso/temas/Tema3/1.svg", alt="alt").img250
    
    br
    .row
      .col-sm-12.col-lg-12.offset-lg-0.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
            p.mb-0 En electrónica las normas más utilizadas son las #[strong normas IPC]. En ellas están definidos todos los parámetros necesarios para el desarrollo de un producto electrónico de calidad, amigable con el medio ambiente y que cumpla con los estándares internacionales para poder ser usado en cualquier parte sin ningún tipo de modificación.

    
    p.mt-3(data-aos="fade-up") En los productos electrónicos se aplican muchos estándares internacionales, es por ello que pueden ser comercializados en cualquier parte del mundo. La siguiente figura corresponde a un amplificador de audio, el cual puede ser conectado a todo tipo de teléfono móvil o consola, además de que se puede utilizar el bluetooth o el cable; y sin importar cómo se use, de cualquier forma, va a sonar igual y sin ninguna incompatibilidad, puesto que ambos, generador de sonido y amplificador, siguieron las mismas normas en los procesos de fabricación. 
    
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 15
        span #[em  Placa fabricada con todos los estándares]

    .row.justify-content-center.align-items-center  
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/Tema3/2.svg", alt="alt").img250
          figcaption Nota. Tomado de Alicdn.com (s.f.).
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-8.mt-3  
          .tarjeta.bg.color-primario.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-md-1.px-4.mb-3
                //img.px-md-1(src="@/assets/curso/tema2/9.svg")
              .col.ps-md-0
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h2 Árbol de normas IPC
                    p Existen normas para cada paso en el proceso de fabricación, tal como se aprecia en la imagen 
                  .col-3.mb-3.mb-sm-0
                      a.boton.color-acento-botones.lnk(@click="modal1 = true")
                        span imagen
                        i.fas.fa-image
                        .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")                
            .col-lg-12.p-0.m-0
              figure                    
                img.px-md-0(src="@/assets/curso/temas/Tema3/13.svg" alt="alt")
    
    separador
    #t_3_1.titulo-segundo.mt-2.color-acento-contenido
      h2 3.1 Normas de calidad

    p.mt-3(data-aos="fade-up") Este tipo de normas dan las pautas para lograr un producto de calidad. Son aplicadas a los procesos de medición y están referidas a los parámetros válidos para mantener la calidad del producto. Dentro de ellas se encuentran las siguientes.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="IPC 600 – Aceptabilidad de circuitos impresos")
        .col-md-7.mb-4.mb-md-0.offset-lg-1
          p.mt-4(data-aos="fade-up") Esta norma aplica a los  diseñadores, ensambladores, soldadores, cables, reparadores,  la norma establece los criterios de inspección de calidad visual, es la norma más difundida en la industria electrónica mundial, apoya las actividades de diseño, manufactura y mantenimiento en electrónica. Contiene apartados del IPC 600 y el IPC JST 001. La norma más actualizada es la IPC A 610 G (IPC-A-610 en español. La letra «A» es de aceptación de calidad).
        .col-md-4
          figure
            img(src='@/assets/curso/temas/Tema3/4.svg', alt='Texto que describa la imagen')
            
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="IPC 610: Aceptabilidad del ensamble electrónico")
        .col-md-7.mb-4.mb-md-0.offset-lg-1
          p.mt-4(data-aos="fade-up") Es quizás  el estándar de calidad de circuitos impresos PCB más usado por la industria electrónica, en ella se establecen los criterios para aceptar o rechazar los PCB y la soldadura de tarjetas o productos electrónicos, componentes SMD y THT.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/Tema3/5.svg', alt='Texto que describa la imagen')
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="IPC 620: Requisitos y aceptación para cables y conexiones")
        .col-md-7.mb-4.mb-md-0.offset-lg-1
          p.mt-4(data-aos="fade-up") Aplica a quienes trabajan en ensamble de cables y alambres para la fabricación e instalación de cables. Criterios visuales de aceptación.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/Tema3/6.svg', alt='Texto que describa la imagen')

    p.mt-3(data-aos="fade-up") Si se incluyen las telecomunicaciones, también será necesario aplicar las normas de calidad referidas a esta área, estas incluyen la ISO 9001, TL9000 y ESD S20.20. Estas normas ofrecen un sistema de gestión de calidad en electrónica y telecomunicaciones, también identifica requisitos específicos para los proveedores del área. La norma ANSI/ESD S20.20 se centra en los componentes electrónicos utilizados en las telecomunicaciones y establece los controles para proteger a los elementos y dispositivos de las descargas electrostáticas.
    p.mt-3(data-aos="fade-up") Adicionalmente, puede ser necesario consultar otras normas, las cuales se aplican dependiendo de la naturaleza del producto desarrollado.

    Separador 
    #t_3_2.titulo-segundo.mt-2.color-acento-contenido
      h2 3.2 Normativa aplicable al producto 
    
    p.mt-3(data-aos="fade-up") Cuando se desarrolla un producto electrónico es necesario aplicar algunas normas, que al final conllevan a obtener un producto amigable con el medio ambiente, a través también de un consumo energético aceptable. Si se hace referencia a los procesos de medición se encuentran algunos parámetros que se deben cumplir: niveles de tensión, potencia de consumo y emisión electromagnética.   
    p.mt-3(data-aos="fade-up") Cuando se tiene un producto electrónico, desarrollado y en funcionamiento, probablemente sea necesario efectuar algunos cálculos y mediciones o realizar alguna inspección visual y pruebas de funcionamiento para verificar si cumple con los estándares descritos en las siguientes normas:

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.align-items-center(titulo="IPC-7711/21")
          .col-md-7.mb-4.mb-md-0
            p.mt-3(data-aos="fade-up") Este estándar proporciona múltiples técnicas aprobadas por la industria, relacionadas con el proceso de perforado y montaje superficial, así como la preparación de superficies, conductores y laminados. Es probable que deban efectuarse algunas mediciones para determinar el estado de conectividad de algunos componentes, si no existen pistas aisladas, soldadura mal puesta, etc.
            p.mt-3(data-aos="fade-up") Al aplicar un proceso de medición puede resultar en baja conductividad o circuitos completamente aislados.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema3/7.svg', alt='alt')

          
          
        .row.justify-content-center.align-items-center(titulo="IPC 2221")
          .col-md-7.mb-4.mb-md-0
            p.mt-5(data-aos="fade-up") Esta norma define los requerimientos para el diseño de PCB. Está dentro de las normas más  usadas, define los requerimientos para el diseño de PCB, estableciendo unas reglas de diseño y recomendaciones que incluyen el ensamble de los componentes, tipo THT (Through-Hole Technology) huecos pasantes,  SMT (Surface-Mount technology) montaje.
                      
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema3/8.svg', alt='alt')
        .row.justify-content-center.align-items-center(titulo="IPC-T-50M")
          .col-md-7.mb-4.mb-md-0
            p.mt-5(data-aos="fade-up") Términos y definiciones para la interconexión y encapsulados de circuitos electrónicos.
            p.mt-3(data-aos="fade-up") Este tema es importante debido a que necesariamente deben mantenerse los estándares para el montaje de circuitos impresos, las medidas de estos son precisas y milimétricas y, el diseño de la PCB y las pistas de interconexión deben estar sujetas a los parámetros de estos chips. 
            p.mt-3(data-aos="fade-up") Adicional a ello, estas medidas pueden ser verificadas y comprobadas si al imprimir la placa están dentro de los valores de tolerancia.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema3/9.svg', alt='alt')
              
    p.mt-3(data-aos="fade-up") Adicionalmente, será necesario verificar algunos estándares internacionales:

    p.mt-3(data-aos="fade-up") ●	#[strong ISO 14001:] contiene los requisitos necesarios para implantar un Sistema de Gestión Ambiental.
    p.mt-3(data-aos="fade-up") ●	#[strong ISO 5001:] corresponde a un sistema de gestión electrónica muy importante, dado que trata exclusivamente la gestión energética.

    br
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
            p.mb-0 Este tipo de normas están orientadas más que todo a las empresas y le brindan pautas para la gestión, implementación y puesta en marcha de procesos para el desarrollo y la distribución de estos productos. Establecen los estándares de calidad que se deben cumplir a la hora de comercializar los productos.

    Separador 
    #t_3_3.titulo-segundo.mt-2.color-acento-contenido
      h2 3.3 Normativa aplicable al proceso
    
    p.mt-3(data-aos="fade-up") Es quizás en el proceso de fabricación del producto donde se aplican la mayor cantidad de normas y es precisamente donde más cuidado se debe tener, bien sea porque se trate de un proceso desarrollado en serie o por la fabricación de un producto único. En cualquiera de los casos será necesario tener en cuenta la normatividad vigente. 
    p.mt-3(data-aos="fade-up") Ahora bien, si se trata de un proceso de producción en serie, es necesario aplicar la siguiente normatividad:

    TabsA.color-primario
      .tarjeta.color-primario--borde.p-4(titulo="OHSAS 18001 / ISO 45001")
        h4 OHSAS 18001 / ISO 45001
        p Aquí se implementa el sistema de gestión de la seguridad y salud en el trabajo, esta aplicación es necesaria para garantizar la salud de los trabajadores y por consiguiente la mejora de la productividad. 

      .tarjeta.color-primario--borde.p-4(titulo="ISO 27001")
        h4 ISO 27001
        .row
          p Esta norma establece los  sistemas de gestión de la seguridad de la información. Busca en gran medida proteger los derechos de autor.  #[em testing conversions from HTML format to other formats, since some elements can go wrong then].
          p Muchos productos electrónicos son susceptibles de copias indebidas, es decir, que puede tratarse de un invento novedoso y por lo tanto, es necesario aplicar todos los criterios para garantizar los derechos de autoría de su creador. Muchos de los artefactos que se usan diariamente en el hogar poseen derechos de autor y parte del dinero de  la compra será destinado a su creador.

          .col-xl-12.mb-4
            figure
              img(src='@/assets/curso/temas/Tema3/10.svg', alt='alt')

      .tarjeta.color-primario--borde.p-4(titulo="IPC D-325")
        h4 IPC D-325
        p Requisitos para documentar los requerimientos de la PCB, ensamblajes y esquemas electrónicos. Es posible que después de realizar algunas pruebas se deba documentar todo el proceso y entregar los resultados de los cálculos y mediciones. Esta norma establece los procedimientos para documentar estos procesos.
              
      .tarjeta.color-primario--borde.p-4(titulo="IPC-7351B")
        h4 IPC-7351B
        p Requisitos genéricos para el diseño SMD y estándar para el diseño de las pistas de soldadura. Esta norma es muy importante ya que establece las reglas de diseño para los conductores en la placa, además en su versión digital incluye una calculadora que facilita la creación de las pistas, indicando grosor, tamaño y otros parámetros

      .tarjeta.color-primario--borde.p-4(titulo="IPC-2252")
        h4 IPC-2252
        .row
        p Guía para el diseño de PCB  utilizada en radiofrecuencia y microondas. Cuando el equipo electrónico incluye radiofrecuencia es necesario un tratamiento especial. Esta norma establece las reglas para garantizar un funcionamiento confiable en este tipo de dispositivos.
        .row 
          .col-xl-2
            figure
              img(src='@/assets/curso/temas/Tema3/11.svg', alt='alt')
          .col-xl-10 
            p Como se observa en la imagen, este tipo de placas poseen unos acabados especiales, establecidos en esta norma, los cables vienen con un apantallamiento especial y este casi siempre se extiende a los componentes ensamblados en la placa.
        p Placa para uso con radiofrecuencia


      .tarjeta.color-primario--borde.p-4(titulo="IPC-2255")
        h4 IPC-2255
        .row
        p Guía de diseño para el empaquetado de circuitos electrónicos de alta velocidad. Los circuitos de alta velocidad también están relacionados con la frecuencia, pero en este caso está referida al funcionamiento interno de un chip, es así como un procesador o una memoria están dentro de esta categoría, por lo tanto, el empaquetado o carcaza del componente debe cumplir con unos estándares, para evitar la pérdida de datos por mal montaje y por consiguiente, mal funcionamiento del producto donde se utilice.
        .row 
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/Tema3/12.svg', alt='alt')
          .col-xl-9 
            p Esta alta frecuencia también produce calentamiento del componente, por lo que será necesario la implementación de un sistema de refrigeración, el cual no debe interferir en el buen funcionamiento del dispositivo. 
            p Será necesario efectuar algunas mediciones para verificar que los valores están dentro del rango permitido por el fabricante, las cuales incluyen temperatura al componente y su frecuencia de operación. 
        p Componentes con montaje de refrigeración

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
