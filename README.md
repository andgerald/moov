# Moov: Turismo y accesibilidad

Más de mil millones de personas viven en todo el mundo con algúna forma de movilidad reducida.  
Problema: Invisibilidad en Chile respecto a las necesidades recreativas y de turismo , para las personas con movilidad reducida, especialmente personas en silla de ruedas.

## Definición del producto

Moov es una aplicación que facilita a las personas con movilidad reducida encontrar puntos de interes turisticos y lugares de
entretención inclusivos.

Moov es una aplicación web desarrollada con React, tecnologia creada por Facebook, que tiene como ventaja la
velocidad de navegación. El enfoque principal de Moov es la mapa proporcionada por Here Technologies que muestra con
marcadores los puntos de interes.

## Definición UX

Durante la investigación encontramos que los principales necesidades de los usuraios son:

- una app que sea rápida y facil de consultar
- información sobre lugares de interés, que cumplan con los estándares de calidad en accesibilidad para sillas de ruedas.
- que muestre en tiempo real la ubicación y los puntos de interés
- que entregue información detallada sobre el lugar y las condiciones de accesibilidad.

### Definición del usuario

Moov se dedica al usuario con movilidad reducida que desea visitar puntos de interes turistico, lugares de entretención y que necesita información de accesibilidad sobre cada punto. Por ejemplo si existe rampa de acceso, entrada bastantemente ancha para la silla de ruedas, servicios de higiene adecuados, ascensores, etc.

#### Historias de usuario

1. El usuario ingresa en la app y puede ver el mapa.
2. El usuario puede ver su ubicación y puntos de interes en la mapa
3. El usuario puede encontrar lugares por categoría y ver la información de accesibilidad de cada uno

#### Definición de hecho

Al ingresar, el usuario apreta el boton Entrar y se muestra la página principal donde puede elegir si ver el mapa, ver los puntos de interes por categoría, ver la sección de favoritos o la página de contacto Moov.

Al apretar Mapa, se muestra el mapa desde la ubicación del usuario. Al hacer zoom out se pueden ver los puntos de interes de la ciudad y del país.

#### Prototipo de alta fidelidad

Se realizó el prototipo de alta fidelidad usando Figma.
![Figma](/src/assets/img/prototipo.jpg)

#### Mockup

![Mockup Moov](/src/assets/img/mockup.jpg)

### Interfaz de usuario UI

### Decisiones de diseño

Para el diseño de la plataforma se elegieron colores contrastantes como celeste para el menu y para los puntos de interes verde, morado, fucsia y naranjo. El background blanco resalta los elementos graficos para dar legibilidad y facilidad en encontrarlos.

![Colores](/src/assets/img/colores.jpg)

#### Tipografía

Roboto - es una familia tipográfica sans-serif neo-grotesca desarrollada por Google.

#### La interfaz permite:

- facil ingreso con un solo click
- accesar el mapa y ver la propia ubicación
- navegar en el mapa y encontrar puntos de interes marcados con iconos ilustrativos, distintos para cada categoría de lugar de interes
- accesar el listado de puntos de interes por categoría
- accesar la información detallada sobre la accesibilidad de los puntos de interes

### Desarrollo

- La app está desarrollada con React versión 16.5.0
- Para mostrar el mapa se usó la API proporcionada por Here Technologies
- La interfaz está diseñada para correr en dispositivos de distintos tamaños.

### Planificación

Para planificar el flujo de trabajo se usó [Trello](https://trello.com/b/7x0wrI4U/proyect-here)

### Autores

Moov estuvo desarrollado por:

- [Andrea Vasquez](https://github.com/AndreaVasquezHerrera)
- [Corina Varas](https://github.com/CorinaVaras)
- [Geraldine Becerra](https://github.com/andgerald)
- [Monica Bartha](https://github.com/MonicaBartha)
