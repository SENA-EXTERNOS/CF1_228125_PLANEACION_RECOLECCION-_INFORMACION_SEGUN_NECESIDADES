<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Datos, información y sistemas de información 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/inicio1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el proceso de desarrollo de software los datos se crean, recogen y utilizan en cada paso, pero se puede definir como cualquier cosa susceptible de medirse, registrarse u observarse. Es cualquier pieza de información que puede cuantificarse y ponerse de forma que un ordenador pueda entender. Los datos son:
          br
          br
          | ●	Hechos y cifras que se registran para su posterior revisión o análisis.
          br
          br
          | ●	Información que ha sido organizada y presentada para su consumo por un ordenador. 
          br
          br
          | ●	Hechos, cifras o cualquier información que se cuantifique y se ponga de tal forma que un ordenador pueda entender.    
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
    .titulo-segundo.color-primario
      h2 Procesamiento de datos
    .row
      .col-md-7
        p Es un término amplio que se refiere a la transformación de datos de una forma a otra.                             Es un componente clave de casi todos los proyectos de desarrollo de software. 
        p Los datos pueden transformarse de muchas maneras, por ejemplo:
        .col-sm.mb-5.mb-sm-0
           ul.lista-ul
            li 
            i.lista-ul__vineta
            | Limpiándolos de imprecisiones.
            li 
            i.lista-ul__vineta
            | Normalizándolos en un formato común. 
            li 
            i.lista-ul__vineta
            | Agregándoles desde diferentes fuentes, o modelándolos para adaptarlos a una necesidad concreta.               
        p El procesamiento de datos es una parte esencial de cualquier proyecto de desarrollo de software y cuenta con ciertas actividades que lo normalizan.
        br
        br
        br
        .col-lg-8
        .cajon.color-acento-contenido.p-4
          p Estas actividades permiten culminar su proceso de forma satisfactoria. 
          p A continuación se presentan cada una de ellas.
      .col-md-5
        figure
          img(src='@/assets/curso/temas/pestaña1.png', alt="")  
        br
        br
        br 
    .container.tarjeta.tarjeta--azul.p-4.p-md-5
      
      LineaTiempoD.color-primario
        .row(numero="1" titulo="Recopilación de datos")
          .col-md-6.mb-4.mb-md-0
            p.text-small Es el primer paso en el procesamiento de datos, los cuales se obtienen de las fuentes disponibles incluidos los archivos de texto y los almacenes de datos. Es importante que las fuentes disponibles sean fiables y estén bien construidas para que los datos recopilados sean de la mejor calidad posible.
        .row(numero="2" titulo="Preparación de datos")
          .col-md-6.mb-4.mb-md-0
            p.text-small Es la etapa en la que los datos sin procesar se limpian, se organizan para la siguiente etapa y se verifican para detectar cualquier error. El propósito de este paso es eliminar los datos incorrectos (datos redundantes, incompletos o incorrectos) y empezar a crear datos de alta calidad.  

        .row(numero="3" titulo="Entrada de datos")
          .col-md-6.mb-4.mb-md-0
            p.text-small Los datos limpios se ingresan en su destino y se convierten a un idioma que se pueda comprender. Esta es la primera etapa en la que los datos sin procesar comienzan a tomar la forma de información utilizable.
        .row(numero="4" titulo="Procesamiento")
          .col-md-6.mb-4.mb-md-0
            p.text-small En esta etapa, los datos ingresados en la computadora durante la etapa anterior se procesan para su interpretación. El procesamiento se puede realizar mediante técnicas de filtrado, visualización y análisis de datos.
        .row(numero="5" titulo="Interpretación de los datos")
          .col-md-6.mb-4.mb-md-0
            p.text-small Es la etapa de salida, donde los datos son finalmente utilizables para los usuarios. Aquí se traducen los datos, se pueden leer, sea en forma de gráficos, videos, texto sin formato, imágenes, etc. En este paso los miembros de la empresa o institución pueden comenzar a administrarlos para sus propios proyectos de análisis de datos.
        .row(numero="6" titulo="Almacenamiento de datos")
          .col-md-6.mb-4.mb-md-0
            p.text-small En esta etapa final, una vez que se procesan, todos los datos se almacenan para su uso futuro. Si bien es posible que alguna información se use de inmediato, una parte de ella tendrá un propósito más adelante.
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5  
      .titulo-principal.color-acento-botones
      .titulo-segundo.color-primario
        h2 Procesamiento de datos
      .row
        .col-md-7
          .col-lg-11
            .cajon.color-acento-contenido.p-4
              p  Se refiere a un conjunto ordenado de mecanismos que poseen el propósito fundamental de coordinar los datos y la información que se tiene, de forma que estos puedan utilizarse, enviarse y procesarse eficazmente, de manera fácil.
              p Por supuesto, como son sistemas de información, también se refieren a un conjunto de recursos de importancia que se conectan entre sí para poder obtener la interacción que se requiere entre estos.
          br
          br
          br
          .col-auto
              a.anexo.mb-4(:href="obtenerLink('/downloads/Recursos, tipos y elementos de un sistema de información.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Recursos, tipos y elementos de un sistema de información
        .col-md-5
          figure
            img(src='@/assets/curso/temas/pestaña3.png', alt="") 
        
      
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

<style lang="sass"></style>
