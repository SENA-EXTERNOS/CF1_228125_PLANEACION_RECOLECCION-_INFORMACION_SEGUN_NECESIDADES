<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de recolección de información y software 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/inicio2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todo investigador debe considerar que la selección y elaboración de técnicas e instrumentos es esencial en la fase de recolección de información del proceso de investigación, porque es la forma de encontrar la información necesaria para dar respuesta al problema planteado.
    br
    br
    br
    .row
      .col-md-7
        p Se puede decir que las técnicas de recolección de información se categorizan en:
</template>

<script>
export default {
  name: 'Tema2',
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
