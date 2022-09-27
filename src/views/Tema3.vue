<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Elicitación de requisitos 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/inicio3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 Es la base primordial en el desarrollo de proyectos software y la encargada de proporcionar el impacto más alto en el diseño y en las demás fases del ciclo de vida del producto.Esta metodología se basa en la creación de dos tipo de productos:
        br
        br
        ul.lista-ul
          li
            i.fas.fa-caret-right.color-primario
            | Los productos entregables: son los que se le hacen llegar de manera oficial al cliente luego de que se ha acordado una fecha.
          li
            i.fas.fa-caret-right.color-primario
            | Los productos no entregables: son los que se trabajan dentro del proceso de desarrollo y no se entregan al cliente.
    separador
    .titulo-segundo.color-acento-botones
      h2 Ingeniería de requisitos
    .row.mb-4
      p Es la ciencia y la disciplina que se ocupa de disponer y documentar los requisitos del software.
      p A su vez, genera ciertas prácticas que se pueden regularizar en:
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
