<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cálculo de magnitudes eléctricas 

    p.mt-5(data-aos="fade-up") Una magnitud eléctrica se refiere a aquellos procesos físicos asociados al movimiento de electrones y que pueden ser medidos. Dentro de ellas se encuentra la diferencia de potencial, la intensidad de corriente, la resistencia, la capacitancia, la inductancia y la frecuencia eléctrica.
    p.mt-5(data-aos="fade-up") La siguiente figura muestra cada una de ellas, así como las unidades empleadas para medirlas y los instrumentos más comunes.  
    
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1 
        span #[em  Magnitudes eléctricas]
    br    
    .row   
      .col-sm-12.col-lg-12
        figure
          img(src='@/assets/curso/temas/Tema1/1.png', alt='')    
    
    p.mt-5(data-aos="fade-up") El cálculo de estas magnitudes normalmente requiere de la aplicación de principios, leyes y teoremas.
    p.mt-5(data-aos="fade-up") En algunos casos deben estar involucradas más de una vez para poder medirlas y calcularlas; este es el caso de la intensidad de corriente eléctrica, que para poder obtener un valor medido debe estar conectada una diferencia de potencial a una resistencia eléctrica. Lo mismo pasa con la frecuencia eléctrica, que es el cambio en el tiempo del valor de una tensión o corriente eléctrica.

    my-3
    .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/Tema1/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es importante tener en cuenta los instrumentos de medición utilizados en cada caso, algunos instrumentos pueden sufrir averías si no se utilizan de forma adecuada, por ejemplo, si se tiene un multímetro, seleccionado como ohmímetro y por accidente medimos tensión, es probable que el instrumento sufra algún daño, esa es una desventaja de incluir múltiples instrumentos (multímetro) en un solo equipo.
        
    p.mt-5(data-aos="fade-up") Ahora bien, para proceder al cálculo de magnitudes eléctricas es importante contar con bases matemáticas. Se necesitan conocimientos relacionados con el despeje de variables, operaciones matemáticas con fracciones, factorización, ecuaciones de hasta tres incógnitas y números complejos. Aunque en esta parte solo se aplican estos procedimientos matemáticos para obtener unos resultados, lo más importante es saber interpretarlos. Existen aplicaciones o sitios web que se pueden usar para realizar estos cálculos de forma inmediata.
    p.mt-5(data-aos="fade-up") En este punto y antes de continuar, se debe reflexionar sobre estos procesos, ver figura.
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 2 
        span #[em  Reflexión sobre la medición]
    br    
    .row   
      .col-sm-12.col-lg-12
        figure
          img(src='@/assets/curso/temas/Tema1/3.svg', alt='')
    br
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
            .col-sm-12.col-lg-2
              figure
                img(src="@/assets/curso/temas/Tema1/4.svg", alt="alt").img250
        
            .col-sm-12.col-lg-10
              p.px-3.pt-1.pb-3(data-aos="fade-up") La respuesta a estos interrogantes puede ser simple. Depende de las condiciones y de lo que se esté buscando, algunas veces será necesario aplicar las dos (medir y calcular), pero lo que sí se debe tener en cuenta, es que el proceso de medición es muy importante y se debe tener claridad sobre él. Se puede efectuar un cálculo y saber lo que se espera al medir; al hacerlo se está corroborando el procedimiento matemático asociado al fenómeno físico.
              p.px-3.pt-1.pb-3(data-aos="fade-up") También, se puede medir sin efectuar el cálculo y obtendremos un valor directo del fenómeno físico, pero esto podría generar una incertidumbre al no tener certeza de esos resultados obtenidos.
    
    p.mt-5(data-aos="fade-up") De acuerdo con la explicación anterior, se presenta el siguiente ejemplo de cálculo para la Ley de Ohm, ver figura.           
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 3 
        span #[em  Planteamiento físico para la Ley de Ohm]
    br
    .row 
      .col-xl-4
        figure
          img(src='@/assets/curso/temas/Tema1/5.svg', alt='alt')
      .col-xl-8 
        p Se tiene un resistor de 1000 Ohmios, una fuente de poder de 9 Voltios, el interés se centra en  saber que valor de corriente se obtiene si se realiza la conexión de este circuito, el siguiente diagrama esquemático muestra este planteamiento:
          figure
            img(src='@/assets/curso/temas/Tema1/6.svg', alt='alt')
        .row
          .col-xl-7
            p La incógnita aquí sería calcular “I” que corresponde a la intensidad de corriente eléctrica. Georg Simon Ohm estableció en 1827 el modelo matemático que daba respuesta a este planteamiento, es así que se puede escribir de esta manera: 
          .col-xl-5
            figure
              img(src='@/assets/curso/temas/Tema1/7.svg', alt='alt').img
              p Esto es lo mismo que decir 9 miliAmperios.
          .row
          .col-xl-12
            .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
              p De ahí que cuando se  efectua la medición en el circuito, este debe debe arrojar un valor cercano. De esta misma manera, si solo se tienen dos valores, cualesquiera que sean, se puede obtener el tercero, solo haciendo un despeje matemático.




    separador 
    #t_1_1.titulo-segundo.mt-2.color-acento-contenido
      h2 1.1 Métodos de medición
    
    p.mt-5(data-aos="fade-up") Existen dos métodos de medición definidos: directa e indirecto; en el siguiente video se presenta un ejemplo explicativo de cada uno de ellos. 
    br
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yEs4o8Gr0Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    br
    p.mt-5(data-aos="fade-up") Nótese que en los dos métodos definidos hay algo en común, “comparar”, precisamente porque eso es lo que se hace cuando se mide, se compara. Entonces, lo que hace un ente internacional es establecer una unidad y definir un patrón que sirve de guía para compararlos con él. 
    p.mt-5(data-aos="fade-up") Estos patrones se definen utilizando la mayor tecnología posible y los valores se obtienen de procesos donde no dependen de la intervención humana, lo que minimiza el error. 

    my-3
    .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/Tema1/10.svg')})`}")
        .bloque-texto-g__texto.p-4
          p.mb-0 Por ejemplo, el primer patrón para la masa, cuya unidad en el sistema internacional es el gramo, fue el agua destilada a una temperatura de 4° centígrados, medido al nivel del mar. Este patrón no es preciso porque se necesita determinar la temperatura del agua y ahí hay una intervención humana. Por ello, este patrón ha sufrido varias modificaciones.
    p.mt-5(data-aos="fade-up") Afortunadamente para las magnitudes eléctricas, todas las unidades están bien definidas y también los instrumentos de medición, por lo que todas las mediciones efectuadas son de manera directa, aquí solo se deben calcular e interpretar.
    
    separador 
    #t_1_2.titulo-segundo.mt-2.color-acento-contenido
      h2 1.2 Simulación de medidas
    p.mt-5(data-aos="fade-up") La simulación ayuda mucho en el proceso de cálculo de magnitudes eléctricas, de ahí su gran uso y existencia de aplicaciones de computador creadas para este fin. La simulación de medidas es un tipo de medición indirecta porque no involucra el fenómeno físico de manera real.
    
    my-3
    .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/Tema1/11.svg')})`}")
        .bloque-texto-g__texto.p-4
          p.mb-0 Tinkercad es un software en línea, desarrollado por AutoCAD, de uso libre, que sirve para simular las principales magnitudes eléctricas. También existen aplicaciones pagadas que proporcionan datos muy cercanos a la realidad. 
    p.mt-5(data-aos="fade-up") Estos softwares permiten tener una aproximación muy buena de lo que será el comportamiento de las variables involucradas una vez se haga el montaje real. Haciendo la simulación de la Ley de Ohm, quedaría el siguiente montaje, ver figura.
    br
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 4 
        span #[em  Simulando Ley de Ohm]
    .row   
      .col-sm-12.col-lg-12
        figure
          img(src='@/assets/curso/temas/Tema1/12.svg', alt='')
    br
    p.mt-5(data-aos="fade-up") Si se analiza, el cálculo arrojó un valor de 9 mA y el valor medido en la simulación es de 8.99 mA, muy cercano al valor calculado, al hacer la medición real también debe dar un valor aproximado, esto ayuda mucho a la hora de hacer cálculos de estas magnitudes.
    p.mt-5(data-aos="fade-up") La simulación permite algo que muchas veces es difícil en la realidad y es el uso de varios instrumentos de medición al mismo tiempo, casi siempre se cuenta con uno o dos multímetros. En la simulación este número es elevado.
    p.mt-5(data-aos="fade-up") Por ejemplo, si se requiere hacer al análisis para un circuito con varias fuentes de poder y varias resistencias en un montaje real, tocaría medir cada elemento por separado, en una simulación se podría utilizar un instrumento para cada elemento y ver todos los valores al mismo tiempo.
    p.mt-5(data-aos="fade-up") Analizando el circuito que aparece en la siguiente figura:
    br
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 5 
        span #[em  Simulando Ley de Ohm]
    br
    .row   
      .col-sm-12.col-lg-12
        figure
          img(src='@/assets/curso/temas/Tema1/13.svg', alt='')

    p.mt-5(data-aos="fade-up") Aquí la Ley de Ohm por sí sola no sería suficiente; basado en esta Gustav Robert Kirchhoff (1846) estableció unas leyes que permiten el análisis de estos circuitos más complejos, la Ley de los nodos.
    br
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
              p.px-3.pt-1.pb-3(data-aos="fade-up") Ley de los nodos: “en cualquier nodo, la suma de las corrientes que entran en ese nodo es igual a la suma de las corrientes que salen. De forma equivalente, la suma algebraica de todas las corrientes que pasan por el nodo es igual a cero” (Fluitronic, s.f.).
    p.mt-5(data-aos="fade-up") A continuación, se aprecia lo expuesto.
    br
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 6 
        span #[em  Corrientes en un mismo nodo]
    .row   
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/14.svg', alt='')

    p.mt-5(data-aos="fade-up") Ahora bien, si se aplica lo que Kirchhoff establece, quiere decir que:
    .row   
      .col-sm-12.col-lg-4.offset-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/15.svg', alt='')

    p.mt-5(data-aos="fade-up") Las corrientes que entran al nodo se deben escribir con signo positivo y las que salen con número negativo, es decir, que las tres primeras son positivas y las dos últimas son negativas.
    p.mt-5(data-aos="fade-up") Entonces, se debe escribir la ecuación de la siguiente manera:
    .row   
      .col-sm-12.col-lg-4.offset-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/16.svg', alt='')

    p.mt-5(data-aos="fade-up") Si se aplica esta ley al nodo N1 de la imagen 4 se obtiene una ecuación que permite realizar estos cálculos, se aprecia que I_1e I_3 entran, mientras que I_2 sale. Mediante un análisis matemático se obtiene lo siguiente:
    .row   
      .col-sm-12.col-lg-4.offset-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/17.svg', alt='')

    p.mt-5(data-aos="fade-up") Por Ley de Ohm la corriente #[em I_1] está dada por:
    .row   
      .col-sm-12.col-lg-2.offset-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/18.svg', alt='')

    p.mt-5(data-aos="fade-up") De la misma manera para #[em I_2]
    .row   
      .col-sm-12.col-lg-2.offset-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/19.svg', alt='')

    p.mt-5(data-aos="fade-up") Y también para #[em I_3]
    .row   
      .col-sm-12.col-lg-2.offset-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/20.svg', alt='')

    p.mt-5(data-aos="fade-up") Al realizar la suma de todas estas corrientes quedará el siguiente planteamiento:
    .row   
      .col-sm-12.col-lg-4.offset-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/21.svg', alt='')

    p.mt-5(data-aos="fade-up") Aplicando un despeje matemático para v se obtiene:
    .row   
      .col-sm-12.col-lg-2.offset-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/22.svg', alt='')

    p.mt-5(data-aos="fade-up") Entonces, si se realiza la simulación para el ejercicio anterior quedaría así:
    br
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 7 
        span #[em  Simulación para la Ley de nodos]
    br
    .row   
      .col-sm-12.col-lg-8.offset-lg-2.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/23.svg', alt='')

    p.mt-5(data-aos="fade-up") También es posible verificar los valores de las corrientes, marcados por las fuentes de poder de la simulación utilizando la Ley de Nodos. Para ello, se reemplaza el valor V obtenido en cada ecuación correspondiente a cada nodo, por ejemplo, para:
    br
    .row   
      .col-sm-12.col-lg-6.offset-lg-3.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/24.svg', alt='')
    br
    .row   
      .col-sm-12.col-lg-6.offset-lg-3.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/25.svg', alt='')

    p.mt-5(data-aos="fade-up") El signo negativo indica que la corriente circula al contrario del sentido planteado.
    br
    .row
      .col-sm-12.titulo-sexto.color-acento-contenido.mb-3
        h5 #[strong Las Leyes de Kirchhoff] 
    p.mt-5(data-aos="fade-up") El siguiente video ofrece mayor claridad sobre estos procesos.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yEs4o8Gr0Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mt-5(data-aos="fade-up") La #[strong Ley de mallas], por su parte, establece lo siguiente:
    .row
      .col-sm-12.col-lg-5.offset-lg-3.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
              p.px-3.pt-1.pb-3(data-aos="fade-up") “En una malla la suma de todas las tensiones, cada una con su signo correspondiente, es igual a 0” (Inet, s.f.) 
    p.mt-5(data-aos="fade-up") Esto es así porque la suma de todas las subidas de tensión debe ser igual a la suma de todas las caídas de tensión, ley de conservación de la energía. Se presenta a continuación la figura con su diagrama.
    br
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 8 
        span #[em  Diagrama esquemático para la Ley de mallas]
    br
    .row   
      .col-sm-12.col-lg-8.offset-lg-2.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/26.svg', alt='')
    
    p.mt-5(data-aos="fade-up") Las fuentes aportan tensión, es decir, son subidas de tensión, por lo tanto, se escriben con signo positivo. Los resistores, por otro lado, son caídas de tensión, es decir, bajadas, por lo que se escriben con signo negativo. La suma algebraica queda así:
    .row   
      .col-sm-12.col-lg-4.offset-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/27.svg', alt='')
    p.mt-5(data-aos="fade-up") Al reemplazar los valores queda así:
    .row   
      .col-sm-12.col-lg-4.offset-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/28.svg', alt='')
    p.mt-5(data-aos="fade-up") Una simulación en Tinkercad permite comprobar esta ley, ver figura.
    br
    .row
      .col-sm-12.offset-lg-2.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 9 
        span #[em  Simulación de la Ley de mallas]
    .row   
      .col-sm-12.col-lg-8.offset-lg-2.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/29.svg', alt='')
    
    p.mt-5(data-aos="fade-up") Si se hace este planteamiento al ejercicio analizado por nodos en la figura 7 se debe llegar a los mismos resultados, para este caso se tienen dos mallas, por lo que resulta un sistema de dos ecuaciones con dos incógnitas, lo que hace el análisis un poco más complejo, en algunos casos puede resultar al contrario y se debe elegir la técnica que demande menos esfuerzo.
    p.mt-5(data-aos="fade-up") La primera malla tiene una subida de tensión y dos bajadas, la segunda igual, pero con el sentido contrario, en términos de voltaje las caídas de tensión en la malla 1 se escriben de la siguiente manera:
    p.mt-5(data-aos="fade-up") En la resistencia de 1500𝛀 la caída de tensión está dada por:
    .row   
      .col-sm-12.col-lg-2.offset-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/30.svg', alt='')
          
    p.mt-5(data-aos="fade-up") En la resistencia de 220𝛀 la caída de tensión está dada por:
    .row   
      .col-sm-12.col-lg-2.offset-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/31.svg', alt='')
    p.mt-5(data-aos="fade-up") En la resistencia de 1000𝛀 la caída de tensión está dada por:
    .row   
      .col-sm-12.col-lg-2.offset-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/32.svg', alt='')
    p.mt-5(data-aos="fade-up") En la malla 1 está la subida de tensión aportada por la fuente de 5V y las dos caídas de tensión de los resistores de 1500𝛀 y 220𝛀, la ecuación quedaría de la siguiente manera:
    .row   
      .col-sm-12.col-lg-4.offset-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/33.svg', alt='')
    p.mt-5(data-aos="fade-up") y la malla 2 tendría el siguiente planteamiento:
    .row   
      .col-sm-12.col-lg-4.offset-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/34.svg', alt='')
    p.mt-5(data-aos="fade-up") Se tiene un sistema de 2x2, al realizar los despejes se obtienen los siguientes valores, que son los mismos valores obtenidos con el procedimiento anterior.
    .row   
      .col-sm-12.col-lg-2.offset-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/35.svg', alt='')
    br
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
              p.px-3.pt-1.pb-3(data-aos="fade-up") Es su elección el método a utilizar, algunos circuitos ofrecen mayor facilidad con un método determinado, eso hace parte del análisis. 
    .row
      .col-sm-12.titulo-sexto.color-acento-contenido.mb-3
        h5 #[strong Ley de mallas] 
    
    p.mt-5(data-aos="fade-up") El siguiente video ofrece una explicación de mayor claridad sobre esta ley.
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/yEs4o8Gr0Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador 
    #t_1_3.titulo-segundo.mt-2.color-acento-contenido
      h2 1.3 Interpretar mediciones de magnitudes eléctricas
    p.mt-3(data-aos="fade-up") Como se ha afirmado, no es suficiente con medir, esto solo hace parte del proceso. Es posible que una persona aprenda a medir muy bien, es decir, sabe hacer buen uso del instrumento, aplicando las normas y procedimientos técnicos, pero es posible que no sepa analizar esos datos. 
    p.mt-3(data-aos="fade-up") Un ejemplo típico de esto queda mejor documentado con el siguiente caso.
    
    .cajon.color-primario
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
            .col-md-6(style="padding-left:70px")
              p.pb-3(data-aos="fade-up") Un computador no quiere encender. El usuario dice que prenden todos los bombillos y se escucha el sonido del ventilador, pero no aparece nada en la pantalla.
                              
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/Tema1/36.svg', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-6(style="padding-left:70px")
            p.pb-3(data-aos="fade-up") Cuando el ingeniero viene a revisar el caso le pide a su técnico auxiliar que verifique las tensiones en las tomas. El técnico usa su voltímetro y mide la tensión en los puntos de conexión y le informa al ingeniero que todo está bien, que se debe buscar el problema por otro lado.
                            
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/Tema1/37.svg', alt='')  
              
        .row.justify-content-center.align-items-center
          .col-md-6(style="padding-left:70px")
            p.pb-3(data-aos="fade-up") Sin embargo, el ingeniero quiere indagar más y no queda muy conforme con la respuesta. Le pide que mida de nuevo, pero esta vez él lo supervisa y le solicita el dato medido. Efectivamente, el técnico estaba usando bien el instrumento. Le entrega el valor medido de la tensión, la cual era de 70 voltios. Con este dato el ingeniero supo cuál era el problema y lo solucionó de inmediato.
                            
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/Tema1/38.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-md-12(style="padding-left:70px")
            p.pb-3(data-aos="fade-up") #[strong ¿Qué pasó aquí?]
            p.pb-3(data-aos="fade-up") Evidentemente hubo un problema de interpretación de datos, para el técnico medir era solo lo que sabía hacer y al hacerlo encontraba un valor y para él era suficiente. 
            p.pb-3(data-aos="fade-up") Sin embargo, este dato, a pesar de que no era errado, no correspondía a lo que se debería medir, ya que se denotaba que algo estaba mal, pues ese no era el valor correcto.
            p.pb-3(data-aos="fade-up") Para que los equipos funcionen bien deberían haber aproximadamente 120 voltios, al medir solo 70, indicaba que había una baja de tensión, por algún problema en la subestación y esto impedía que el equipo encendiera.                            
            
    p.mt-5(data-aos="fade-up") Estos casos son muy comunes, en muchos de ellos, los datos medidos no reciben la suficiente atención y llevan a cometer errores. Es aquí donde se hace imprescindible el procedimiento de calcular. 
    br
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row
              p.px-3.pt-1.pb-3(data-aos="fade-up") Los datos obtenidos en estos cálculos dan una idea de lo que se pretende medir y solo es cuestión de hacer ajustes hasta obtener el valor calculado, también puede suceder que el cálculo esté mal elaborado, es la práctica y la constancia la que lleva al buen desempeño en estos análisis.
                       
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
