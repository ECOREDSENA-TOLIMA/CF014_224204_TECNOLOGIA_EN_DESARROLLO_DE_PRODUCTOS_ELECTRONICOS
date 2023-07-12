<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mt-3.mb-3(data-aos="fade-left") Preparar métodos de medición de acuerdo con requerimientos técnicos es uno de los procesos fundamentales para controlar la calidad en cada una de las fases y así, obtener al final del día productos de óptimo funcionamiento que cubran necesidades específicas. En el siguiente video se exponen los aspectos que se deben tener en cuenta en el proceso de medición.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JXjrz_1kDZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0.mt-5
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
            p.px-3.pt-1.pb-3 El control de calidad es un paso importante para la obtención de un producto final que cumpla con lo requerido de acuerdo con la función para la que fue creado. El proceso de medición e interpretación de la medida, entonces, es un paso fundamental para que esta verificación sea exitosa.

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
