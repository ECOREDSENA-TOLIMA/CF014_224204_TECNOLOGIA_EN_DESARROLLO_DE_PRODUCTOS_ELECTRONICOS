<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo  cálculo y métodos de medición de magnitudes eléctricas y su aplicación, por medio del cálculo y la medición de magnitudes eléctricas, las cuales son fundamentales en la producción y el uso de productos electrónicos. Podemos encontrar cuatro temas principales relacionados con estos conceptos: cálculo de magnitudes eléctricas, especificaciones técnicas de productos electrónicos, normas técnicas y mejora continua. Dentro del tema de cálculo de magnitudes eléctricas se discuten los métodos de medición, simulación de medidas e interpretación de mediciones de magnitudes eléctricas. En el tema de especificaciones técnicas se habla de requerimientos de calidad, tolerancias del producto y verificación de atributos. En el tema de normas técnicas se consideran las normas de calidad, la normativa aplicable al producto y al proceso. Finalmente, en el tema de mejora continua se discute la metodología, el manejo de indicadores y las acciones de mejora. La comprensión de estos conceptos clave puede ayudar a garantizar la calidad y eficiencia en la producción y uso de productos electrónicos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
