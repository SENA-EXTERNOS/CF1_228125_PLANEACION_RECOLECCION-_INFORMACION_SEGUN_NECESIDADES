<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Datos, información y sistemas de información


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 En el proceso de desarrollo de software los datos se crean, recogen y utilizan en cada paso, pero se puede definir como cualquier cosa susceptible de medirse, registrarse u observarse. Es cualquier pieza de información que puede cuantificarse y ponerse de forma que un ordenador pueda entender. Los datos son:
        br
        br

        ul.lista-ul
          li
            i.fas.fa-caret-right.color-primario
            | Hechos y cifras que se registran para su posterior revisión o análisis.
          li
            i.fas.fa-caret-right.color-primario
            | Información que ha sido organizada y presentada para su consumo por un ordenador.
          li
            i.fas.fa-caret-right.color-primario
            | Hechos, cifras o cualquier información que se cuantifique y se ponga de tal forma que un ordenador pueda entender.



    .titulo-segundo.color-acento-botones
      h2 Procesamiento de datos

    .row.justify-content-between.align-items-start.mb-5
      .col-lg-6

        p.mb-4 Es un término amplio que se refiere a la transformación de datos de una forma a otra.                             Es un componente clave de casi todos los proyectos de desarrollo de software.

        p.mb-4 Los datos pueden transformarse de muchas maneras, por ejemplo:

        ul.lista-ul.mb-4
          li
            i.fas.fa-caret-right.color-primario
            | Limpiándolos de imprecisiones.

          li
            i.fas.fa-caret-right.color-primario
            | Normalizándolos en un formato común.

          li
            i.fas.fa-caret-right.color-primario
            | Agregándoles desde diferentes fuentes, o modelándolos para adaptarlos a una necesidad concreta.


        p.mb-4 El procesamiento de datos es una parte esencial de cualquier proyecto de desarrollo de software y cuenta con ciertas actividades que lo normalizan.

        .cajon.color-acento-contenido.p-4
          p Estas actividades permiten culminar su proceso de forma satisfactoria.<br> A continuación se presentan cada una de ellas.


      .col-lg-5.d-none.d-lg-block
        figure(style="margin-top:-36px")
          img(src='@/assets/curso/temas/t1/img2.svg', alt="")


    .bg_img_01
      .row.py-5.justify-content-center.align-items-center
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t1/img3.png', alt="")

        .col-lg-8
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Recopilación de datos")
              .col.mb-4.mb-md-0
                p.text-small Es el primer paso en el procesamiento de datos, los cuales se obtienen de las fuentes disponibles incluidos los archivos de texto y los almacenes de datos. Es importante que las fuentes disponibles sean fiables y estén bien construidas para que los datos recopilados sean de la mejor calidad posible.

            .row(numero="2" titulo="Preparación de datos")
              .col.mb-4.mb-md-0
                p.text-small Es la etapa en la que los datos sin procesar se limpian, se organizan para la siguiente etapa y se verifican para detectar cualquier error. El propósito de este paso es eliminar los datos incorrectos (datos redundantes, incompletos o incorrectos) y empezar a crear datos de alta calidad.

            .row(numero="3" titulo="Entrada de datos")
              .col.mb-4.mb-md-0
                p.text-small Los datos limpios se ingresan en su destino y se convierten a un idioma que se pueda comprender. Esta es la primera etapa en la que los datos sin procesar comienzan a tomar la forma de información utilizable.
            .row(numero="4" titulo="Procesamiento")
              .col.mb-4.mb-md-0
                p.text-small En esta etapa, los datos ingresados en la computadora durante la etapa anterior se procesan para su interpretación. El procesamiento se puede realizar mediante técnicas de filtrado, visualización y análisis de datos.
            .row(numero="5" titulo="Interpretación de los datos")
              .col.mb-4.mb-md-0
                p.text-small Es la etapa de salida, donde los datos son finalmente utilizables para los usuarios. Aquí se traducen los datos, se pueden leer, sea en forma de gráficos, videos, texto sin formato, imágenes, etc. En este paso los miembros de la empresa o institución pueden comenzar a administrarlos para sus propios proyectos de análisis de datos.
            .row(numero="6" titulo="Almacenamiento de datos")
              .col.mb-4.mb-md-0
                p.text-small En esta etapa final, una vez que se procesan, todos los datos se almacenan para su uso futuro. Si bien es posible que alguna información se use de inmediato, una parte de ella tendrá un propósito más adelante.


    separador


    .titulo-segundo.color-acento-botones
      h2 Sistemas de información

    .row.justify-content-between.align-items-start.mb-4
      .col-lg-7
        .cajon.color-acento-botones.p-4
          p  Se refiere a un conjunto ordenado de mecanismos que poseen el propósito fundamental de coordinar los datos y la información que se tiene, de forma que estos puedan utilizarse, enviarse y procesarse eficazmente, de manera fácil.
          p Por supuesto, como son sistemas de información, también se refieren a un conjunto de recursos de importancia que se conectan entre sí para poder obtener la interacción que se requiere entre estos.
      .col-lg-4.d-none.d-lg-block
        figure.px-3.mt-n
          img(src='@/assets/curso/temas/t1/img4.svg', alt="")



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">

figure.mt-n
  margin-top: -48px;
</style>
