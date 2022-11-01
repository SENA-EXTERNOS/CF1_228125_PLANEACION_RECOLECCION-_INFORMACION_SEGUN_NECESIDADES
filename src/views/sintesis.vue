<template lang="pug">
.curso-main-container.pb-3

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .rectangulo
      .col-lg-10
        h3 Desarrollo de aplicaciones web Full stack
        p.mb-4 Síntesis: Planeación y recolección de información según necesidades.
        br 
        br
        br
        br

    p.mb-5 A continuación, se presenta de manera gráfica una síntesis sobre las temáticas estudiadas en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
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
