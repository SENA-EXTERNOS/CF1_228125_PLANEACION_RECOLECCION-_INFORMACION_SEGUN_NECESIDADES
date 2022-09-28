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
          .tarjeta.p-4(titulo="Proyectos para<br>actualizar sistemas<br>existentes")
              h4 Proyectos para actualizar sistemas existentes
              p En este caso los usuarios plantean nuevos requisitos en los<br>proyectos debido a nuevas funciones añadidas, a cambios en la<br>lógica de negocio o a defectos en el sistema antiguo, lo que hace<br>que cada vez sea más difícil colmar las necesidades de las<br>empresas.

          .tarjeta.color-acento-botones.p-4(titulo="Proyectos para<br>iniciar un<br>nuevo sistema")
              h4 Proyectos para iniciar un nuevo sistema
              p Por lo general se utiliza el método de encuesta con el objetivo de<br>lograr una mejor comprensión porque, tanto para los<br>desarrolladores como para el cliente, los requisitos del proyecto<br>son claros y existen pocos problemas o necesidades que<br>necesiten una comunicación más amplia de las partes. 
      .col-lg-4
          figure
            img(src='@/assets/curso/temas/t3/img1.svg', alt="")










    .row.justify-content-center.mb-5  
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.izquierda.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
          <br>
            .tarjeta-slide__img.text-center
              figure(style="margin-top: 50px")
                img(src='@/assets/curso/temas/t3/negocio.svg', alt="")
              h3.text-center Requerimientos de negocio
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Requerimientos de negocio:
              p Comprenden los objetivos, las metas y resultados esperados que especifiquen por qué la iniciativa de cambio (el proyecto) se está desarrollando. Pueden aplicar a toda una empresa. 
      
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.izquierda.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img
              figure(style="margin-top: 50px")
                img(src='@/assets/curso/temas/t3/interesados.svg', alt="")
              h3.text-center Requerimientos de los interesados
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Requerimientos de los interesados: 
              p Son todas las partes que tienen un interés en el proyecto. Pueden estar manifestando las distintas áreas de negocio que utiliza un sistema, otras áreas de negocio de soporte, inclusive, agentes externos como clientes o proveedores. 
      
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.izquierda.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img
              figure(style="margin-top: 50px")
                img(src='@/assets/curso/temas/t3/funcionales.svg', alt="")
              h3.text-center Requerimientos funcionales
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Requerimientos funcionales: 
              p Describen las aptitudes que una solución debe tener. Se expresan en términos de la información que maneja y del comportamiento.
    .row.justify-content-center.mb-5  
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.izquierda.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img
              figure(style="margin-top: 50px")
                img(src='@/assets/curso/temas/t3/nofuncionales.svg', alt="")
              h3.text-center Requerimientos no funcionales
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Requerimientos no funcionales: 
              p Describen las condiciones según las cuales la solución debe trabajar para mantenerse efectiva, así como los requerimientos de calidad que debe cumplir.
     
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.izquierda.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img
              figure(style="margin-top: 50px")
                img(src='@/assets/curso/temas/t3/transicion.svg', alt="")
              h3.text-center Requerimientos de transición
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Requerimientos de transición:
              p Describen las condiciones y capacidades que debe cumplir la solución para facilitar la transformación entre la situación actual y la nueva, pero que ya no serán precisas una vez sea culminado el cambio.
    .row.mb-4
      p Los tipos de participantes o roles en la ingeniería de requisitos suelen ser, principalmente:

    ImagenInfografica.color-primario
        template(v-slot:imagen)
            .row.justify-content-center.align-items-center
              .col-lg-6
                img(src='@/assets/curso/temas/t3/img3.svg')

        .tarjeta.color-acento-contenido.p-3(x="63%" y="7%" numero="1")
          p Es el responsable de la financiación del proyecto y tiene capacidad ejecutiva de tomar decisiones. Normalmente tiene una visión global del modelo de negocio.

        .tarjeta.color-acento-contenido.p-3(x="74%" y="51%" numero="2")
          p Administra el proyecto.

        .tarjeta.color-acento-contenido.p-3(x="62%" y="89%" numero="3")
          p Se le asignan los requerimientos y los desarrolla.

        .tarjeta.color-acento-contenido.p-3(x="35%" y="87%" numero="4")
          p Lidera y coordina la identificación de requisitos y el modelamiento de casos de uso esbozando las funcionalidades y delimitando el sistema.
        
        .tarjeta.color-acento-contenido.p-3(x="26%" y="47%" numero="5 ")
          p Es el usuario potencial del software a desarrollar en el proyecto y tiene una visión detallada, aunque puede que parcial, del modelo de negocio.

        .tarjeta.color-acento-contenido.p-3(x="37%" y="7%" numero="6 ")
          p Cualquier persona que tenga influencia directa o indirecta sobre los requisitos del sistema. Ejemplo: usuarios finales.

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
