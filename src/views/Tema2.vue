<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Especificaciones técnicas de productos electrónicos

    p.mt-5(data-aos="fade-up") Los equipos vienen con unas especificaciones técnicas establecidas por el fabricante. Es importante tener en cuenta estos parámetros, debido a que conlleva al buen funcionamiento del equipo, a mantener el consumo energético dentro valores aceptables y también a garantizar la armonía con el medio ambiente.
    p.mt-5(data-aos="fade-up") Muchas de estas especificaciones técnicas están reguladas por normas establecidas en cada país, para el caso de Colombia, el Reglamento Técnico de Etiquetado - RETIQ (Resolución 41012 del 18 de septiembre de 2015 -RETIEQ) establece cómo se debe dar esta información al usuario final. Esta información suministra datos técnicos claves del equipo, tal como se aprecia en la siguiente figura.
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 10 
        span #[em  Información técnica de un refrigerador]
    br
    .row   
      .col-sm-12.col-lg-12
        figure
          img(src='@/assets/curso/temas/Tema2/1.svg', alt='')
    
    p.mt-5(data-aos="fade-up") Otro dato importante referido a las especificaciones técnicas tiene que ver con la tensión de trabajo, muchos acondicionadores de aire y otros equipos de refrigeración vienen etiquetados para su funcionamiento a 220 voltios; sin embargo, la mayoría de las redes eléctricas que llegan a los hogares colombianos funcionan a 110 voltios, lo que hace necesario solicitar a la empresa proveedora de energía un cambio de acometida. La pregunta que surge aquí es: ¿siempre será necesario hacer ese cambio? Naturalmente que sí, ya se compró el equipo, la respuesta va a ser sí. Si aún no posee el equipo, la respuesta es no.
    p.mt-5(data-aos="fade-up") Muchos asesores le hacen ver al cliente que si compran estos productos a 220 voltios el costo de la energía va a ser menor, lo cual no es cierto, las empresas de energía tienen establecido el costo para el vatio/hora y este no cambia porque la persona tenga acometida de 220 voltios o de 110 voltios. Lo que sí es cierto es que los equipos con eficiencia A, en su mayoría, están construidos específicamente para funcionar a 220V.
    
    my-3
    .row 
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .bloque-texto-g.color-primario.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/2.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La incompatibilidad con la acometida eléctrica está más marcada con los equipos de refrigeración, para la mayoría de los equipos electrónicos sus etiquetas dicen que pueden funcionar sin ningún problema desde los 100 voltios hasta los 280 voltios.
      
    p.mt-5(data-aos="fade-up") La característica técnica a tener en cuenta es el consumo de energía; no siempre el consumo marcado en la etiqueta corresponde al real del equipo, muchas veces está referido al máximo, por lo que al hacer un cálculo con estos datos hay que utilizar un promedio. A continuación, se presenta un ejemplo.

    br
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 11 
        span #[em  Ejemplo de consumo de energía]
    br
    .row 
      .col-xl-3
        figure
          img(src='@/assets/curso/temas/Tema2/3.svg', alt='alt')
      .col-xl-9 
        p Un equipo de sonido tiene marcado en su etiqueta que suministra 1.500 vatios de potencia. Sin embargo, esto solo se da en intervalos de segundos y dependiendo del nivel de volumen al que lo tenga el usuario. Si el contenido reproducido en el equipo  tiene mucho contenido de frecuencias bajas, probablemente consuma más energía; es por eso que para hacer cálculos de consumo se utiliza la potencia media consumida.
        .row
          .col-xl-5
            .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
              p La #[strong Potencia PMPO] (Peak Music Power Output) o máximo pico de potencia de salida no es un valor real, son picos instantáneos que se dan en ciertos intervalos de audio.
          .col-xl-7
            .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
              p Por su parte la #[strong Potencia RMS] (Root Main Square / Raíz cuadrada media)  es el  valor eficaz, resulta de sacar un promedio cuadrático de todos los valores picos generados; lo que es diferente de un promedio normal, ya que este posee tantos valores positivos como negativos, dando como resultado un valor de 0, en cambio el cuadrático convierte todos los valores negativos  en positivos.

    
    Separador
    #t_2_1.titulo-segundo.mt-2.color-acento-contenido
      h2 2.1 Requerimientos de calidad

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
            .col-md-5(style="padding-left:70px")
              p.pb-3(data-aos="fade-up") Para un equipo de sonido, por ejemplo, los requerimientos pueden variar, si solo va para un hogar común donde estará encendido al máximo volumen solo por unas horas, dos veces al mes, es probable que los requerimientos sean diferentes a otro, que estará en un establecimiento público, donde estará a pleno volumen durante 6 días a la semana por unas 15 horas. En este caso, la percepción de la durabilidad del equipo para presentar la primera falla es diferente para cada cliente. El dueño del establecimiento puede pensar que no le duró nada, ya que al menos al tercer mes de uso, probablemente ya deba repararlo, mientras que en el hogar pueden pasar hasta dos años para percibir esa misma falla.
                              
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/Tema2/6.svg', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-5(style="padding-left:70px")
            p.pb-3(data-aos="fade-up") Una fórmula infalible para determinar la calidad de un producto es su relación con el costo. Es indudable que la calidad cuesta. Es probable que  una pieza musical en un equipo barato suene con determinada calidad y luego esa misma pieza en un equipo costoso no se note mayor diferencia en el sonido, pero las diferencias comienzan a notarse con el paso del tiempo al tratar de percibir esa misma sensación, es probable que el equipo barato ya presente algún desgaste y solo hasta entonces se pueda percibir alguna diferencia notable en la calidad del sonido.
                            
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/Tema2/7.svg', alt='')  
              
        .row.justify-content-center.align-items-center
          .col-md-5(style="padding-left:70px")
            p.pb-3(data-aos="fade-up") Lo mismo puede pasar con un televisor, ya que es probable que dos equipos con características de fabricación diferentes, uno barato y otro costoso, en un principio no se note mucha diferencia en cuanto a la imagen. Sin embargo, a medida que pasa el tiempo, empiezan a notarse la disparidad.
                            
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/Tema2/8.svg', alt='')
        
    p.mt-5(data-aos="fade-up") Estos requerimientos de calidad se hacen más notorios cuando se refieren a los accesorios, por ejemplo, se daña el cargador de un equipo de computador portátil, lo primero que hace el comprador es buscar lo más barato del mercado, los primeros días el cargador funciona bien, de hecho el usuario no nota ninguna diferencia, pero con el paso de los días comienzan las fallas, solo carga a ratos y en algunos caso resulta hasta un daño adicional del equipo, como lo es el pin de carga quemado por mala calidad de las placas de contacto en el cargador.
    br
    .row
      .col-sm-12.col-lg-4
        p.pb-3(data-aos="fade-up") La mayor diferencia está por dentro, los componentes de calidad son diferenciables a simple vista, los dispositivos originales y más costosos garantizan una mayor eficacia y durabilidad, los genéricos y falsificados solo funcionan bien por algunos días. Externamente los equipos son iguales, la diferencia en la construcción de las placas es bastante notoria, esto sucede para muchos productos electrónicos, equipos funcionales, con características similares, pero con poca vida útil.
      
      .col-sm-12.col-lg-7.offset-1
        figure
          img(src='@/assets/curso/temas/Tema2/9.svg', alt='')
          figcaption Nota. Comparación de dos cargadores de un equipo electrónico. Tomado de CH (2015).

    Separador
    #t_2_2.titulo-segundo.mt-2.color-acento-contenido
      h2 2.2 Tolerancias del producto
    .row 
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .bloque-texto-g.color-primario.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/10.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Cuando se refiere a la tolerancia de un producto electrónico se habla de un rango aceptable, hasta dónde pueden llegar ciertos valores o características, por ejemplo, si se compra un cargador genérico para un computador portátil, cuyo voltaje de salida debe ser 18.5 voltios, pero el fabricante del computador establece que el voltaje de entrada para ese equipo es de 18.5 voltios con una tolerancia de ±2%, es probable que ese cargador genérico suministre un voltaje salido de esos parámetros, como por ejemplo 18.9 voltios, como suele ocurrir, es probable que esto repercuta en un daño posterior al computador portátil.
    br
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
              p.px-3.pt-1.pb-3(data-aos="fade-up") La norma IPC A 610 (2017) Aceptabilidad de ensambles electrónicos es el estándar de calidad de circuitos impresos PCB, más usado por la industria electrónica. En ella se establecen algunos niveles de tolerancia para productos electrónicos.

    p.mt-5(data-aos="fade-up") Los componentes electrónicos también tienen sus niveles de tolerancia y ellos definen la de los equipos. Estos niveles se encuentran detallados en las hojas de datos. Los componentes varían sus parámetros a través del tiempo, los analógicos pueden desviarse de sus valores teóricos, debido a varios factores como la temperatura o la humedad, de manera que los circuitos críticos necesitan ser diseñados con un nivel de tolerancia tal que puedan compensar la desviación de los parámetros en los componentes. A continuación, se presentan algunas causantes de fallas.
    
    br
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 12
        span #[em  Causas de fallas]
    .row.mt-5
      .col-sm-12.col-lg-10.offset-lg-1
        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row
            .col-md-12.mb-4.mb-md-0
              p  Las fatigas o tensiones son una de las causas de fallas en los modernos equipos electrónicos, estos son propensos a dañarse por las altas corrientes debido a su naturaleza delicada y a su poca habilidad para disipar el calor; también están involucradas las descargas electrostáticas (ESD). La soldadura fría es una manifestación de esta fatiga.
          .row
            .col-md-12.mb-4.mb-md-0            
              p(style="text-align: right") También es posible que la Interferencia electromagnética (EMI) afecte los sistemas eléctricos, esta puede ser emitida por el mismo equipo. Es posible que el equipo sea operado en una zona donde exista una EMI no tenida en cuenta en el momento de la fabricación, es decir, salida de parámetros.
          .row
            .col-md-12.mb-4.mb-md-0
              p Finalmente, los defectos mecánicos también pueden ser causa de muchas fallas de los sistemas, por eso deben diseñarse para tener cierta tolerancia a los golpes, vibración, humedad y otras variables de tipo ambiental. 
    Separador
    #t_2_3.titulo-segundo.mt-2.color-acento-contenido
      h2 2.3 Verificación de atributos
    br
    .row
      .col-sm-12.col-lg-5
        
        p.mt-5(data-aos="fade-up") El atributo define al producto electrónico, verificarlo hace posible el rechazo o la aceptación, por ejemplo, en el caso de los cargadores genéricos es posible verificar el acabado de la carcasa, la forma del conector o el estado de los terminales del conector, en muchas ocasiones, la mala presentación de estos por sí solo es causal de rechazo. 
        p.pb-3(data-aos="fade-up") Atributos que permiten identificar un producto falso. El lado derecho representa el componente original y el izquierdo es el falso.

      .col-sm-12.col-lg-6.offset-1
        figure
          img(src='@/assets/curso/temas/Tema2/11.svg', alt='')
          figcaption Nota. Tomado de Murene (s.f.).
    
    p.mt-5(data-aos="fade-up") En los computadores portátiles, teléfonos inteligentes, una inspección a los atributos físicos del equipo es suficiente para determinar su naturaleza. El mayor cuidado se debe tener cuando se está adquiriendo un producto costoso, pues se supone que si es costoso es porque es original y se puede estar siendo víctima de una estafa; algunos proveedores dejan claro que los productos que ofrecen son imitaciones, por lo que es decisión del cliente aceptar o no el producto.
    p.mt-5(data-aos="fade-up") El desarrollo de un producto requiere tener en cuenta los mismos atributos de calidad y tolerancia, sin embargo, para su aplicación en la fabricación en serie, el factor determinante es la inversión. Es importante tener en cuenta que la fabricación de un producto de alta calidad implica un mayor costo, por lo que, al momento de ponerlo en venta, su precio será mayor para poder recuperar la inversión realizada.
    
    br
    .row 
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .bloque-texto-g.color-primario.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/12.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 No hay nada más incómodo para un desarrollador que la devolución por garantía de un producto, además de asumir costos por el envío, se queda con la mala fama de un cliente insatisfecho y eso es muy difícil de medir. De ahí, la importancia de definir bien los atributos de estos productos y tratar de no crear falsas expectativas.


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
