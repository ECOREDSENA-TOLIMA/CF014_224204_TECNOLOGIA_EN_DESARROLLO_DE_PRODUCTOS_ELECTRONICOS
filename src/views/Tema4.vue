<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mejora continua

    .row 
      .col-xl-7
        p.mt-5(data-aos="fade-up") Cuando se habla de mejora continua, se habla de constante cambio. 
        p.mt-4(data-aos="fade-up") Este concepto está inmerso en los procesos de medición, pues cuando este se efectúa aplicando todas las normas e interpretando de manera adecuada los resultados obtenidos, necesariamente se implementa un proceso de mejora continua, ya que se deben hacer ajustes, cambiar parámetros, incluso buscar nuevos componentes si los resultados obtenidos no son satisfactorios. En algunos casos será necesario comenzar de nuevo el desarrollo del producto.
      .col-xl-5
        figure  
          img(src='@/assets/curso/temas/Tema4/1.svg', alt='alt')

    p.mt-3(data-aos="fade-up") Los productos electrónicos están en constante evolución. Día a día se desarrollan nuevas tecnologías, muchas de ellas pueden ser involucradas en productos ya desarrollados, lo que permite mejorarlos, innovarlos o crear uno nuevo con mejores prestaciones. Es probable que al efectuar la medición de la corriente de consumo de un hogar común comiencen a surgir ideas sobre cómo mejorar ese consumo y hacer el producto más eficiente y amigable con el medio ambiente. Esto ha sido así siempre, un ejemplo de ello es la bombilla eléctrica.

    .row
      .col-sm-12.offset-lg-3.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 15
        span #[em  Evolución de la bombilla eléctrica]
      .col-xl-10.offset-lg-1
        figure  
          img(src='@/assets/curso/temas/Tema4/2.svg', alt='alt')

    .row 
      .col-sm-12.col-lg-10.offset-lg-1
        .cajon.color-acento-botones.pt-4.px-4.pb-3.caja_flotante_azul 
          .row 
            .col-sm-12.col-lg-1
              figure  
                img(src='@/assets/curso/temas/Tema4/13.svg', alt='alt')
            .col-sm-12.col-lg-11
              p En mediciones efectuadas a las primeras bombillas incandescente, los resultados arrojaban que para un alto consumo de energía, generaban pocos lumens (Iluminación), y en cambio disipaba grandes cantidades de calor. El 70% de la energía consumida se transformaba en calor, siendo que el sentido de esta era alumbrar y no calentar. Es allí cuando surge la luz fluorescente como una solución, mejoró en gran medida esa eficiencia, pero adicionalmente tenía un problema, necesitaba de mercurio para funcionar, y este es altamente peligroso para la salud, por lo que el siguiente paso fue el bombillo LED, mucho más eficiente y sin componentes dañinos. Este mismo análisis se puede hacer para muchos dispositivos electrónicos, sobre todo los del hogar.

    separador 
    #t_4_1.titulo-segundo.mt-2.color-acento-contenido
      h2 4.1 Metodología
    
    p.mt-3(data-aos="fade-up") La metodología más utilizada para la mejora continua es el método Kaizen, vocablo japonés derivado de dos palabras, «kai», que significa cambio, y «zen», que expresa para algo mejor, lo que quiere decir cambiar para mejorar o mejora continua, que aplica en todos los contextos. En otras palabras, cuando se están efectuando mediciones en un equipo electrónico se puede estar pensando en cómo mejorar esos resultados obtenidos.
    
    .col-sm.mb-5.mb-sm-0
        h4 Las tres herramientas principales del Kaizen son:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.v--green
              span 1
            | Lograr un enfoque de gestión integral de los procesos para mejorar la calidad.
          li 
            .lista-ol--cuadro__vineta.v--green
              span 2
            | Mejorar la productividad con base en la filosofía justo a tiempo.
          li 
            .lista-ol--cuadro__vineta.v--green
              span 2
            | Desplegar la gestión por objetivos para mantenerse enfocado y motivado.

    .col-xl-10.offset-lg-1
      .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
        p En términos generales lo que indica el Kaizen es que si se quiere generar cambios sostenibles en el tiempo se deben lograr cambios radicales en el corto plazo, haciendo mejoras pequeñas en el día a día, lo que finalmente llevará a objetivos grandes.

    p.mt-3(data-aos="fade-up") En la actualidad existe una amplia gama de técnicas para lograr el proceso de mejora continua, por ejemplo:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="El ciclo PDCA")
        .row
          .col-md-4.mb-5.mb-md-0.offset-lg-1
            p #[strong El ciclo PDCA] 
            p #[strong (Planificar, Hacer, Verificar y Actuar)] se refiere a los 4 momentos implementados en un proceso de mejora continua.
              
          .col-md-4.mb-4.mb-md-0.offset-lg-1
            img(src="@/assets/curso/temas/Tema4/3.svg" alt="alt")

      .py-4.py-md-5(titulo="Análisis de valor")
        .row
          .col-md-4.mb-5.mb-md-0.offset-lg-1
              p #[strong Análisis de valor] 
              p Se enfoca en el valor añadido de un producto y en la búsqueda de opciones para la reducción de ese valor. Se trata de  realizar lo mismo a #[strong menor costo.]
                
          .col-md-4.mb-4.mb-md-0.offset-lg-1
              img(src="@/assets/curso/temas/Tema4/4.svg" alt="alt")

      .py-4.py-md-5(titulo="Los 5 porqués:")
        .row
          .col-md-4.mb-5.mb-md-0.offset-lg-1
              p #[strong Los 5 porqués:] 
              p En este método se revisan las causas que llevan a una falla  haciendo una serie de preguntas (no necesariamente cinco), es como aplicar la ingeniería inversa, hasta detectar el #[strong origen del problema], sacar las conclusiones y definir las soluciones.
                
          .col-md-4.mb-4.mb-md-0.offset-lg-1
              img(src="@/assets/curso/temas/Tema4/5.svg" alt="alt")

      .py-4.py-md-5(titulo="Estratificación")
        .row
          .col-md-4.mb-5.mb-md-0.offset-lg-1
              p #[strong Estratificación] 
              p En este método se divide la información en niveles. Los datos de la falla detectada se clasifican teniendo en cuenta criterios como el material, los tipos de defectos, los grupos de trabajo, entre otros. Se trata de #[strong aislar las causas del fallo y mejorar los procesos] asociados, dando prioridad a aquellas áreas del proceso que más lo requieran.
                
          .col-md-4.mb-4.mb-md-0.offset-lg-1
              img(src="@/assets/curso/temas/Tema4/6.svg" alt="alt")

      .py-4.py-md-5(titulo="Lean manufacturing")
        .row
          .col-md-4.mb-5.mb-md-0.offset-lg-1
              p #[strong Lean manufacturing] 
              p Este modelo se enfoca en el consumidor y sus necesidades, destinando recursos que llevan a la reducción de costos.
                
          .col-md-4.mb-4.mb-md-0.offset-lg-1
              img(src="@/assets/curso/temas/Tema4/7.svg" alt="alt")

      .py-4.py-md-5(titulo="DFSS")
        .row
          .col-md-4.mb-5.mb-md-0.offset-lg-1
              p #[strong DFSS] 
              p Este método se especializa en la obtención de nuevos #[strong productos o servicios]. La calidad se logra planteando seis etapas: definición, medición, análisis, optimización y por último, verificación de los resultados.
                
          .col-md-4.mb-4.mb-md-0.offset-lg-1
              img(src="@/assets/curso/temas/Tema4/8.svg" alt="alt")

      .py-4.py-md-5(titulo="Diagrama de afinidad")
        .row
          .col-md-4.mb-5.mb-md-0.offset-lg-1
              p #[strong Diagrama de afinidad] 
              p Da claridad a situaciones de alta complejidad  a través de la agrupación de ideas que guardan relación entre sí. La idea es confirmar datos que en un principio no se habían tenido en cuenta. Es un modelo muy útil para organizaciones grandes.
    
          .col-md-4.mb-4.mb-md-0.offset-lg-1
              img(src="@/assets/curso/temas/Tema4/9.svg" alt="alt")

    separador 
    #t_4_2.titulo-segundo.mt-2.color-acento-contenido
      h2 4.2 Metodología

    p.mt-3(data-aos="fade-up") La implementación de un proceso de mejora continua lleva a obtener mejores resultados tanto en la gestión del producto como en la reducción de los costos, mejora de procesos, gestión de residuos y clientes satisfechos. Para lograr todo esto es necesario analizar y medir la eficiencia y productividad de todos los procesos.
    p.mt-3(data-aos="fade-up") De ahí la necesidad de un sistema de medición que permita gestionar y tener claro dichos resultados para poder actuar. Existen varios indicadores utilizados en las empresas para medir la evolución:

    .row
      .col-xl-12.offset-lg-2
        .col-lg-8.order-2.order-lg-1
          TabsA.color-primario.mb-5
            .tarjeta.clr-paleYellow.p-4(titulo="OEE")
              h4 OEE (Eficiencia Global de los Equipos)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Indica el porcentaje del tiempo de producción planeado y que es productivo.

            .tarjeta.clr-paleYellow.p-4(titulo="TEEP")
              h4 TEEP (Rendimiento Efectivo Total de los Equipos)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Es un indicador de rendimiento que proporciona información sobre capacidad de  operación de los equipos de fabricación.

            .tarjeta.clr-paleYellow.p-4(titulo="FTT")
              h4 FTT (Calidad a la Primera)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Este es un indicador básico de calidad de un proceso, muestra el porcentaje correcto de equipos que se hacen bien en el primer momento, sin necesidad de operaciones adicionales.

            .tarjeta.clr-paleYellow.p-4(titulo="OTD")
              h4 OTD (Entregas a Tiempo)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Porcentaje de entregas formales que se entregan a tiempo.

            .tarjeta.clr-paleYellow.p-4(titulo="BTS")
              h4 BTS (Fabricación Según Programa)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Es un factor de corrección con el que una planta ejecuta la producción planeada para producir los volúmenes correctos de producto, en el día correcto y en la secuencia correcta.

            .tarjeta.clr-paleYellow.p-4(titulo="ITO")
              h4 ITO (Tasa Rotación Inventario)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Sumar el coste de todos los productos vendidos durante un periodo determinado y dividirlos por el promedio que estuvo disponible esa mercancía durante el mismo periodo de tiempo. Está definida por la siguiente fórmula matemática: 
                .col-lg-8.offset-lg-2
                  figure
                    img(src="@/assets/curso/temas/Tema4/10.svg" alt="alt")

            .tarjeta.clr-paleYellow.p-4(titulo="RVA")
              h4 RVA (Ratio Valor Añadido)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Indica  el porcentaje que le aporta valor a un  producto.

            .tarjeta.clr-paleYellow.p-4(titulo="PPMs")
              h4 PPMs (Partes Por Millón de Defectos)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Indica el número de partes no conformes en el proceso, expresado en partes por millón. 

            .tarjeta.clr-paleYellow.p-4(titulo="FR")
              h4 FR (Tasa Cumplimiento Entregas)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Este  indicador mide la cantidad que se entrega a los clientes con respecto a lo solicitado. Está referido a la satisfacción de los pedidos con el inventario.  

            .tarjeta.clr-paleYellow.p-4(titulo="IFA")
              h4 IFA (índice de Frecuencia de Accidentes)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p El índice de frecuencia es un indicador sobre el número de accidentes ocurridos en un periodo de tiempo, en el cual los trabajadores se encontraron expuestos a ese riesgo.

            .tarjeta.clr-paleYellow.p-4(titulo="MTBF - MTTR")
              h4 MTBF – MTTR (Fiabilidad y Mantenibilidad del Equipo)
              .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
                p Este es uno de los principales indicadores de la disponibilidad de un equipo, indica el promedio de tiempo que hay entre dos fallas de un mismo equipo. Un número alto indica un buen funcionamiento del equipo.
    
    separador 
    #t_4_3.titulo-segundo.mt-2.color-acento-contenido
      h2 4.3 Acciones de mejora
    
    p.mt-3(data-aos="fade-up") Si se implementa un proceso de mejora continua, necesariamente hay que aplicar unas acciones que permitan detectar fallas y prevenir futuras. En mediciones de las magnitudes eléctricas, las acciones llevan a ajustar los valores para que estén en sintonía con lo que inicialmente se estableció como objetivo.
    
    .my-5
      .col-sm-12.col-lg-10.offset-lg-1
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema4/11.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Por ejemplo, si planeo que el equipo consumiera 5 vatios de potencia y en las mediciones resultó un valor de 5,5 vatios, se hace necesario implementar un plan de mejora para ajustar esos valores . 
            br
            br
            br
    
    p.mt-3(data-aos="fade-up") A continuación, se presentan algunas acciones genéricas establecidas como acciones de mejora en varios campos.

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Definir los procesos claramente")
        .col-sm-12.col-lg-12
          p El principio de Pareto (Vilfredo Pareto, 1896) establece que la mayoría de las cosas en la vida y los negocios no se distribuyen de manera uniforme, también es conocida como la regla del 80/20. Si se aplica a la propiedad estable que el 20% de los propietarios posee el 80% de las tierras de una región, mientras que el restante 20% de los terrenos pertenece al 80% de la población restante; estos valores no son arbitrarios, es solo una aproximación que sirve como referente. 
          p ¿Cómo se aplica a los productos electrónicos? Cuando uno tiene una cantidad de productos grandes para concentrar los esfuerzos de control en los más significativos se suele utilizar el principio de Pareto. Así, controlando el 20% de los productos existentes puede controlarse aproximadamente el 80% del valor de los artículos del total producido.
      .row(titulo="Inspeccionar productos constantemente")
        .col-sm-12.col-lg-12
          p Se deben realizar pruebas de calidad desde el principio, desde la misma concepción del prototipo hasta la producción en serie. Estas pruebas permiten detectar fallas no tenidas en cuenta, es importante contar con una realimentación de los clientes.
          p Asimismo, permite reducir los costes de producción. A medida que se afinan los procesos se establecen algunas acciones correctivas que ayudan en este aspecto puntual.
        .col.sm-12.col-lg-7
          p La imagen muestra un producto, que por alguna razón, tiene una falla en la línea de montaje de componentes. Este componente se encuentra haciendo contacto físico galvánico con las pistas, por lo que la conductividad no se ve afectada y el producto funcionará bien, una prueba de funcionalidad al equipo dará un resultado positivo, pero en pocos días, ese componente mal fijado se puede soltar y ocasionar una falla general, es por eso que una inspección visual se hace necesaria en esta parte del proceso.
        .col.sm-12.col-lg-5
          figure
            img(src="@/assets/curso/temas/Tema4/12.jpg" alt="alt")
            figcaption Producto defectuoso. Nota: Tomado de Bcnvisión (2021).

    p.mt-3(data-aos="fade-up") Existen muchas acciones por pequeñas que parezcan, que encajan muy bien en los procesos y permiten tener una mejora continua, puede ser el caso de la reducción de los plazos de ejecución de las actividades, incrementar el rendimiento de los equipos de trabajo y/o aumentar la productividad y por ende, la eficacia en los resultados. Es por eso que se le llama mejora continua, el mismo día a día marca las pautas para seguir mejorando, lo importante es establecer esas acciones oportunas que permitan mejorar cada proceso.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
