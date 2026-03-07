# Prompts de la Prueba Técnica

Registro de todos los prompts enviados durante el desarrollo de la prueba técnica.

---

## Prompt 1
> Please analyze this codebase and create a CLAUDE.md file, which will be given to future instances of Claude Code to operate in this repository.

## Prompt 2
> enganchame el proyecto con este repo https://github.com/jbrenes95/prueba-2026

## Prompt 3
> Vamos a crear una prueba tecnica para una empres asi que lo primero de todo es vamos a darte contexto, quiero que tus archivos de contexto me los subas al repo, quiero que vayas guardando en un archivo todos los prompts que te vaya pidiendo porque son necesarios para la prueba

## Prompt 4
> Recuerda subir tambien tus archivos de contexto e ir actualizando si se agraga

## Prompt 5
> Ahora te voy dar nuestra manera de trabajar de aqui en adelante, no quiero que me hagas auto commit a las rama, nuestro flujo va a ser yo te voy a lanzar una feature, me lanzas propuestas, yo elijo la que crea mejor. yo elegire si hago commit

## Prompt 6
> Los unicos archivos que si te dejo subir siempre son el claude.md y prompts

## Prompt 7
> Vamos a empezar instalando angualar cli e iniciando un nuevo proyecto de angular en el que vamos a usar rutas

## Prompt 8
> La opcion a

## Prompt 9
> Ahora vamos a instalar dos dependencias. 1. Angular material del que apartir de ahora vamos a usar sacar todos los componentes que necesitemos para la app y 2. boostrap que solo usareamos sus clases para maquetar la app

## Prompt 10
> Usa la a

## Prompt 11
> No preguntes si actualizar el prompts, hazlo siempre

## Prompt 12
> Pues lo primero que vamos a hacer es crear un sistema de carpetas que tiene que alojar una vista que sera para lista de usuarios y otro para ver un usuario en detalle

## Prompt 13
> la opcion a

## Prompt 14
> Pues vamos a hacver que userlist sea nuestra punto de entrada, vamos usar el router, vamos hacer una llamada a esta url:https://80133108-6736-44d8-8add-ee36ffe64a38.mock.pstmn.io/api/v1/users traer los usuarios, guardarlo en un estado, y mostrarlos en la vista usando una tabla de angular material

## Prompt 15
> opcion a

## Prompt 16
> Deprecation [plugin angular-sass]

## Prompt 17
> Siempre que tenngas que inyectar algo usa la inject(), la url la vamos a sacar al archivo de enviroments para separarlo del servicio

## Prompt 18
> En servicio quuiero que mapes los datos cuando entran para separa logica de back y que usamos en el front

## Prompt 19
> La opcion b me gusta mas y quiero que los modelos y los mapper esten separados de los componentes por si se llamaran desde mas modulos en el futuro, tambien tenemos que tener en cuanta que el user details viene con un parametro extra que la contraseña

## Prompt 20
> en la lista de usuario quita el titulo de arriba y pon la cabecera de otro color

## Prompt 21
> Quiero un estilo moderno usando angular material y que sea responsive

## Prompt 22
> La opcion a me gusta mas

## Prompt 23
> quiero que me poengas el input de buscar encima de la tabla y que ocupe el mismo ancho de la tabla
> (corrección) Esta bien pero lo quiero fuera de la card

## Prompt 24
> Ahora quiero que creemos un interceptor para controlar los codigo de error que me manda el back y quiero que cuando venga un error me muestres un toast con un mensaje de error

## Prompt 25
> La b me parece mejor, ten en cuenta que los mensajes tienen que ser entendibles por el usuario comun

## Prompt 26
> Antes de seguir quiero que añadamos al proyecto i18n para que nuestros textos pues aparecer tanto en español como en ingles, ahora hay pocos pero quiero que lo tengas en cuenta cuando añadamos mas porque todos nuestros labels tienes que tener los dos idiomas

## Prompt 27
> La opcion a siempre cogeremos la opcion mas nativa

## Prompt 28
> Vamos a poner un boton toggle de angular material de seleccion unica que tenndra dos opciones español e ingles y en funcion de la que este seleccionada se cargara un idioma o otro

## Prompt 29
> Vamos a usar ngx-translate

## Prompt 30
> Quiero que cuando entres en la aplicacion el idioma por defecto sea en español

## Prompt 31
> Quiero que el button toggle este pegado a la izquierda del contenedor

## Prompt 32
> Eso esta mal, quiero que en el mat-toolbar, quitel el titulo usuarios y que el button toggle este a esa altura pegado a la izquierda

## Prompt 33
> Quiero que el toogle buton este pegado a la derecha

## Prompt 34
> En la tabla de usuarios deberiamos quitar la columna id, ya que un usuario externo no deberia saber las id de usuario

## Prompt 35
> Quiero que en la peticion en la que te traes los users de base de datos primero compruebes si ya los tenemos en la signal asi ahorramos hacer peticiones inecesarias

## Prompt 36
> user-detail no crees que deberia ser una ruta hija de user-list?

## Prompt 37
> Nos quedamos como estamos

## Prompt 38
> Vamos a crear la vista en detalle (el componente ya esta hecho), donde queremos mostrar nombre, apellido, email y contraseña que estara oculta y tendra un icono de un ojo que cuando se pulse se mostrara, tendra dos botones uno para volver y otro que podra Editar tirando de esta url

## Prompt 39
> Cuando la peticion de editar usuarios devuelva un estado correcto queremos que busques la id de ese usuario en nuestro estado y actualices localmente ese usuario para que se vea reflejado en la lista

## Prompt 40
> No quiero que me actualices con el usuario de base de datos quiero que me busques el usuario en la lista y me actualices con los cambios del formulario

## Prompt 41
> Quiero que cuando se navege a un usuario que no existe automaticamente me redirijas a la lista otra vez

## Prompt 42
> La nueva feature va ser primero añadir validaciones para el campo email tanto de forms como una regex basica para comprobar que siempre lleve un @ y un punto minimo y para la contraseña que sea required

## Prompt 43
> vamos a dejar un poco de margen top entre los input de edicion del usuario detalle para que se vean mejor los mensajes de error

## Prompt 44
> Me estas guardando los promts y el contexto como hablamos antes

## Prompt 45
> No crees que seria buena idea que el app-language-toggle al app para no tener que importarlo muchas veces y que no se tenga que renderizar mas veces como lo ves

## Prompt 46
> a

## Prompt 47
> Vamos a implementar un cambio quiero que cuando se edite un usuario se haga la peticion y si la peticion es correcta quiero que actualices el usuario en el listado
