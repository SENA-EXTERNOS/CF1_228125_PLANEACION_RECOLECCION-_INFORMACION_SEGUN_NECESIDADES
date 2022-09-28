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
    .row.py-4.justify-content-between.align-items-start
      .col-lg-8
        p Es la ciencia y la disciplina que se ocupa de disponer y documentar los requisitos del software.
        p.mb-5 A su vez, genera ciertas prácticas que se pueden regularizar en:
        TabsA.color-acento-botones
          .tarjeta.p-4(titulo="Proyectos para actualizar<br>sistemas existentes")
              h4 Proyectos para actualizar sistemas existentes
              p En este caso los usuarios plantean nuevos requisitos en los<br>proyectos debido a nuevas funciones añadidas, a cambios en la<br>lógica de negocio o a defectos en el sistema antiguo, lo que hace<br>que cada vez sea más difícil colmar las necesidades de las<br>empresas.

          .tarjeta.p-4(titulo="Proyectos para iniciar<br>un nuevo sistema")
              h4 Proyectos para iniciar un nuevo sistema
              p Por lo general se utiliza el método de encuesta con el objetivo de<br>lograr una mejor comprensión porque, tanto para los<br>desarrolladores como para el cliente, los requisitos del proyecto<br>son claros y existen pocos problemas o necesidades que<br>necesiten una comunicación más amplia de las partes. 
      .col-lg-4
          figure
            img(src='@/assets/curso/temas/t3/img1.svg', alt="")

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
