<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de recolección de información y <em class="emphasized">software</em> 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/inicio2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todo investigador debe considerar que la selección y elaboración de técnicas e instrumentos es esencial en la fase de recolección de información del proceso de investigación, porque es la forma de encontrar la información necesaria para dar respuesta al problema planteado.
  
    
    .row.mb-4
      .col-md-7
        p Se puede decir que las técnicas de recolección de información se categorizan en:

    .row.justify-content-center.align-items-start.mb-6
      .col-xl-6.col-md-6.my-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/cuali.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.color-azul Cualitativas
              p.color-azul Constan de un alto grado de comprensión de la información, pero no se pueden generalizar los resultados. Lo  importante es cada respuesta individual y el nivel de profundidad que permiten alcanzar.

      .col-xl-6.col-md-6.my-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/cuanti.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.color-azul Cuantitativas
              p.color-azul Implican el análisis de volúmenes altos de números o cifras recolectadas de muestras representativas, lo cual permite que los resultados sean generalizables.<br><br>
    
    

    h3 Tipos de técnicas de recolección de información

    .row.mb-4
      p La elección de los tipos de técnicas e instrumentos por parte del investigador, dependerá de su finalidad, así como de su disponibilidad, costo, fiabilidad y aplicabilidad. Es importante tener en cuenta, cómo pueden utilizarse cada técnica o cada instrumento, para obtener los resultados más propicios y así responder a los objetivos planteados en la investigación.
      p Conozca cada una de las técnicas de recolección de información:
    
    .bg_img_02.mb-5
      .row.justify-content-center
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/metodo.svg' alt='AvatarTop')
            .tarjeta.color-secundario
              .text-white.p-4.p-xl-5
                h3.text-center Método de observación
                p.text-center Se refiere a registros tomados que no requieren participación. Estos registros se llevan a cabo, mientras los implicados están involucrados en conductas rutinarias; se utilizan como un indicador de lo que los participantes hacen. Un ejemplo sería el de un investigador que observa cómo se comportan los químicos al revolverlos.
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/cuestionario.svg' alt='AvatarTop')
            .tarjeta.color-secundario
              .text-white.p-4.p-xl-5
                h3.text-center Cuestionario o encuesta
                p.text-center Consiste en obtener datos directamente de un grupo de participantes de un estudio, que cumplan con ciertas características, con la finalidad de obtener sus opiniones o sugerencias. Para lograr los resultados deseados, es importante tener claros los objetivos de la investigación.<br><br>
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/grupo.svg' alt='AvatarTop')
            .tarjeta.color-secundario
              .text-white.p-4.p-xl-5
                h3.text-center Grupo focal
                p.text-center Es un método cualitativo consistente en realizar una reunión donde un grupo de participantes de estudio pueda opinar y resolver un tema específico. Es necesario un moderador experto en el tema.<br><br><br><br><br>
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/entrevista.svg' alt='AvatarTop')
            .tarjeta.color-secundario
              .text-white.p-4.p-xl-5
                h3.text-center Entrevista
                p.text-center Consiste en recopilar la información, formulando preguntas sobre un participante. A través de la comunicación interpersonal, el entrevistador obtiene respuestas verbales, del participante, sobre un tema o un problema en específico.<br><br><br><br>

      

    h3 <em class="emphasized">Software</em>
    .row.mb-4
      p Para comprender un poco más sobre el proceso de recolección de información, visto desde el área de desarrollo de <em class="emphasized">software</em>, es necesario entender qué es un <em class="emphasized">software</em> y cuál es su aporte a la tecnología. El  tema se explica en el siguiente video:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/C1aR6uptfLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          

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
