<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/introduccion.png', alt="")
      .col-md-7
        p Apreciado aprendiz, bienvenido a este componente formativo donde, a través de conceptos, se explorarán datos e información, técnicas de recolección de información, ciclos de vida de un #[i software], herramientas de modelados, entre otros, y donde se aprenderá cómo validar un problema a través de encuestas, procesamientos de datos, tipos de modelados, etc.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/mnAitHdcpd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        
        
    
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
