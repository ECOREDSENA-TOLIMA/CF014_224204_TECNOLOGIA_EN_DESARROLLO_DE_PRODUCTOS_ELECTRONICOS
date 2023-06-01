<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    p.mt-5(data-aos="fade-up") Preparar métodos de medición de acuerdo con requerimientos técnicos es uno de los procesos fundamentales para controlar la calidad en cada una de las fases y así, obtener al final del día productos de óptimo funcionamiento que cubran necesidades específicas. En el siguiente video se exponen los aspectos que se deben tener en cuenta en el proceso de medición.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yEs4o8Gr0Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    br
    br
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
              p.px-3.pt-1.pb-3(data-aos="fade-up") Un alto índice de sospecha por parte del médico y su equipo es fundamental para hacer un diagnóstico tentativo de dengue. Hay exámenes como la prueba ELISA que determinan la probabilidad de la enfermedad o la confirman.    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
