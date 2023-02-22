<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas de modelado

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Tienen como objetivo definir el sistema y capturar la funcionalidad que debe ofrecer desde la perspectiva del usuario. Este modelo puede funcionar como un contrato entre el cliente y el desarrollador y, por lo tanto, proyecta lo que el cliente desea según la percepción del desarrollador. 
    
    .bg_img_01.mb-5
      .row.mb-4
      p El modelo de requisitos y el modelo de casos de uso son la base para los demás modelos. Presentan los siguientes tipos:
      .row.py-5.justify-content-center.align-items-center
        .col-lg-8
          LineaTiempoD.color-acento-contenido
            .row(numero="1" titulo="Requisitos")
              .col.mb-4.mb-md-0
                p El ejemplo de casos de uso, sirve para formular el modelo de requisitos, el cual se desarrolla en conjunto con otros modelos.
            .row(numero="2" titulo="Análisis")
              .col.mb-4.mb-md-0
                p La funcionalidad preparada por el modelo de casos de uso se estructura en el modelo de análisis, que es estable con respecto a cambios, y un modelo lógico y autónomo del ambiente de implementación.
            .row(numero="3" titulo="Diseño")
              .col.mb-4.mb-md-0
                p La funcionalidad de los casos de uso ya estructurada por el análisis es llevada a cabo por el modelo de diseño, así se ajusta al ambiente de implementación real y se refina aún más.
            .row(numero="4" titulo="Implementación")
              .col.mb-4.mb-md-0
                p Los casos de uso son ejecutados mediante el código fuente en el modelo de implementación.
            .row(numero="5" titulo="Pruebas")
              .col.mb-4.mb-md-0
                p Los casos de uso son tratados a través de las pruebas de componentes y pruebas de integración.
            .row(numero="6" titulo="Documentación")
              .col.mb-4.mb-md-0
                p El modelo de casos de uso debe ser documentado a lo largo de las diversas actividades, dando lugar a distintos documentos como los manuales de administración, manuales de usuario, etc.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t4/img2.svg', alt="")
   
   

    h3 Herramientas para captura de requisitos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
            p.mb-0 A medida que pasa el tiempo, se logra comprender que el empleo del #[i software] es una buena opción para agilizar y sistematizar las actividades en el desarrollo de procesos. El desarrollo de #[i software] no es la excepción y, en este caso, dichos componentes se han denominado CASE (#[i Computer Aided Software Engineering] o Ingeniería de #[i Software] Asistida por Computador). Estos incluyen un grupo de programas que facilitan la optimización de un producto y ofrece apoyo permanente a los desarrolladores, ingenieros de #[i software] y analistas. CASE es la aplicación de métodos y técnicas que dan provecho a los programas, por medio de su respectiva documentación y otros procedimientos.



    h3 Historias de usuario
    .bg_img_03.mb-5
      .row.justify-content-center
        .col-xl-5.d-none.d-xl-block
          figure
            img(src='@/assets/curso/temas/t4/personaje.png', alt="")
        .col-xl-7

          .mt-5.pt-5.px-5
            .row
              .col-12.cust
                .crd.crd--blue.mb-4
                  p.mb-0.text-white Una historia de usuario es una definición breve, informal y en lenguaje sencillo de lo que un usuario quiere hacer dentro de un producto de <em class="emphasized">software</em> para conseguir algo que le resulte valioso.<br><br>Las historias de usuario suelen seguir el patrón rol – función - beneficio:
                  br
                  
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-caret-right.color-primario
                      p.mb-0.text-white Cómo (tipo de usuario).

                    li
                      i.fas.fa-caret-right.color-primario
                      p.mb-0.text-white Quiero (una acción).

                    li
                      i.fas.fa-caret-right.color-primario
                      p.mb-0.text-white Para qué (un beneficio / valor).



    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
        

</template>

<script>
export default {
  name: 'Tema4',
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
