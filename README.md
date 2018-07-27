# PaintPaint

## Deployar la aplicación

Antes de nada hacer `npm i` para instalar todas las dependecías.

Correr `npm start`. Navegar a `http://localhost:4200/`.

## Correr test unitarios

Corre `ng test` para ejecutar test unitarios vía [Karma](https://karma-runner.github.io).

## Correr Code Coverage

Ejecuta el siguiente comando: ng test --code-coverage=true, los resultados estarán en la siguiente ruta:

coverage/src/index.html

## Comentarios adicionales

### Person Model
Creé un modelo de datos del tipo persona en : 

src/app/models/person.model.ts

Para definir el tipo de objeto que se tiene que utilizar en las peticiones.

### Pipe Filter Person

Esta pipe tan solo filtra los elementos que se le envie mediante los cambios asignados, en este caso están todos los campos asignados tal y como se solicita en la prueba.

### Header

Este componente está creado en la ruta shared en el caso de que quiera ser utilizado en más partes de la app.

### Search

Este componente está creado en la ruta shared en el caso de que quiera ser utilizado en más partes de la app.
Se encarga de gestionar la busqueda tanto por input como tan solo clickando en search sin ningún valor en el input.
Creí que la mejor forma de afrontar este reto era, cargando todos los datos (que són pocos) nada más iniciar la carga de la landing page y una vez ahí realizar los filtros con la pipe, añadir el contenido al child del search que es una tabla responsive, etc.

### Staff Table

Este componente se encarga de mostrar todos los datos por pantalla al usuario, en el cual desde el padre se le inyectan tres campos
@Input() totalResults: Person;
@Input() queryFilter: string;
@Input() searched: string;

totalResults = almacena los resultados
queryFiler = es el valor del input
search = es un boolean para ocultar el contenido por primera vez

Tambíen en este componente se utiliza la pipe filter que se encarga de hacer el filtrado mediante el campo obtenido anteriormente "queryFilter"

### Footer

Tan solo un footer con el nombre de la empresa.
