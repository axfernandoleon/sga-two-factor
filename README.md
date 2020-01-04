<<<<<<< HEAD
# Ciberseguridad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.
=======
# CIBERSEGURIDAD

# Integrantes:
Alex  León

Fernando León

Patricio Jiménez

José Moreno

# Docente:
Ing Danilo Jaramillo

# APLICATIVO CONTROL DE ACCESO

# Sistema de Gestión Académica

El siguiente proyecto se lo realizara mediante tres etapas esenciales las cuales se detallan a especifican a continuación.

- Primera etapa
# Autorización 
En esta etapa se definirán los roles de autorización que conformarán nuestro sistema

- Segunda etapa
# Autenticación 
Se identificará cual será el método para controlar y restringir los accesos al sistema

- Tercera etapa
# Control de Acceso
Se determinará la manera como un rol en específico tendrá acceso a ciertas actividades dentro del sistema 

Por lo tanto nuestro aplicativo se desarrollara de la siguiente manera teniendo en cuenta cada una de las etapas, determinando los roles y el acceso que tendrá cada uno de ellos.

- En la etapa de autorización tendremos los siguientes roles y sus funciones:
 
# Rol y Función
-  Administrador .  Acceso y control total del sistema, encargado de asignar privilegios mediante la notificacion de un correo.
- Docente Acceso y modificacion en el sistema en concordancia con los permiso otorgados por el administrador 
- Estudiante  Solo puede visualizar el sistema


# Autenticacion  
Se la realizara mediante un usuario y contraseña

- El control de acceso a areas privilegiadas en el sistema se lo realizara mediante :
- Pin de telefono 

# Desarrollo 

Se asignara los roles y sus funciones dentrol del sistema una vez hecho eso se podra ingresar al mismo.

- Con un ususario y contrasena ingresamos al sistema, dependiendo de la funcion del mismo.
- Se verifica en el sistema y segun el rol se podra bien acceder a todo si es el caso del administrador, a ciertas funciones si es el docente y solo visualizacion en caso del estudiante.
- Si cualquier rol quisiera modificar, mover o cambiar se le pedira que ingrese el codigo pin enviado al telefono solo en el caso del docente, si este rol no ha realizado tal ppeticion se denegaria la accion. 
 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.
>>>>>>> 9d4ec4cd4ee10f8fc431dbaaca4abd8602e7b70e

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
