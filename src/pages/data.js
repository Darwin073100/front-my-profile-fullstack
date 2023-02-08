const data = {
    "id": 1,
    "name": "Edwin",
    "lastName": "Garcia Quiterio",
    "email": "edwinegq@outlook.com",
    "phone": "+52 741-107-3337",
    "address": "Los Chegües Guerrero México",
    "uriImg": "https://static.platzi.com/media/avatars/avatars/edwinegq_132bbeff-593f-400b-9484-25e6eb0c445d.jpg",
    "description": `Estudiante del Tecnológico Nacional de México en la carrera de Ingeniería en Tecnologías 
    de Información y Comunicaciones, me gusta mucho el desarrollo, para ser más especifico me gusta mucho el 
    desarrollo web. He tomado cursos sobre Backend y a la vez de Frontend, me gusta mucho el lenguaje 
    JavaScript, los Framework express.js y React.js.`,
    "linkedin": "https://www.linkedin.com/in/edwin-garcia-quiterio-ba76b6253/",
    "project": [
        {
            "id": 1,
            "name": "Library University",
            "description": "Este proyecto consiste en la creacion de una Backend donde podremos subir alumnos, libros y a su vez realizar prestamos a esos alumnos registrados, ya que se guardan en una base de datos, postgresql.",
            "uriProject": "https://github.com/Darwin073100/library-university.git",
            "createAt": "2023-02-06T13:55:30.734Z",
            "language": {
              "id": 1,
              "name": "Javascript",
              "version": "Es6",
              "uriImg": "https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
            },
            "framework": {
              "id": 1,
              "languageId": 1,
              "name": "Express.js",
              "version": "",
              "uriImg": `data:image/png;base64,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`,
              "description": "Framework de javascrip para crear ui en la web.",
            }
          },
          {
            "id": 2,
            "name": "Back My Profile Fullstack",
            "description": `Api rest, donde se creó un modelo de negocio para subir un perfil o varios el servidor y a su 
            vez guardar los endpoids en una Base de Datos relacional como PostgreSQL, estos perfiles, subiras proyectos que 
            hayas creado en el lenguage que sea o framework del mismo.`,
            "uriProject": "https://github.com/Darwin073100/back-my-profile-fullstack.git",
            "createAt": "2023-02-06T13:55:30.734Z",
            "language": {
              "id": 1,
              "name": "Javascript",
              "version": "es6",
              "uriImg": "https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
            },
            "framework": {
              "id": 1,
              "languageId": 1,
              "name": "Express.js",
              "version": "",
              "uriImg": "data:image/png;base64,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",
              "description": "Framework de javascrip para crear ui en la web.",
              "createdAt": "2023-02-06T13:51:08.748Z",
              "updatedAt": "2023-02-06T13:51:08.749Z"
            }
          },
          {
            "id": 3,
            "name": "Front My Profile Fullstack",
            "description": `En este proyecto si puedes ver, es la descripción de esta página se construyó el frontend con react.js
            se pretende consumir la api rest que se ha construido y juntos se conformaria un solo proyecto FULLSTACK.`,
            "uriProject": "https://github.com/Darwin073100/front-my-profile-fullstack.git",
            "createAt": "2023-02-06T13:55:30.734Z",
            "language": {
              "id": 1,
              "name": "Javascript",
              "version": "es6",
              "uriImg": "https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
            },
            "framework": {
              "id": 2,
              "languageId": 1,
              "name": "React.js",
              "version": "v18",
              "uriImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XZ8-OTu4_T3Fa2lyfTc99psyJ23m3JtVbA&usqp=CAU",
              "description": "Framework de javascrip para crear ui en la web.",
              "createdAt": "2023-02-06T13:51:08.748Z",
              "updatedAt": "2023-02-06T13:51:08.749Z"
            }
          },
          {
            "id": 4,
            "name": "Crud BackEnd StringBoot",
            "description": `Backend, de un crud basico en este framework muy popular de java, el proyecto se orienta 
            a un control escolar, dar de alta alumnos, carreras e inscribirlos a una de ellas.`,
            "uriProject": "https://github.com/Darwin073100/Crud-BackEnd-StringBoot.git",
            "createAt": "2023-02-06T13:55:30.734Z",
            "language": {
              "id": 1,
              "name": "Java",
              "version": "Jdk 11",
              "uriImg": "https://cdn.icon-icons.com/icons2/195/PNG/96/Java_23404.png"
            },
            "framework": {
              "id": 2,
              "languageId": 1,
              "name": "SpringBoot",
              "version": "",
              "uriImg": "data:image/png;base64,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",
              "description": "Framework de javascrip para crear ui en la web.",
              "createdAt": "2023-02-06T13:51:08.748Z",
              "updatedAt": "2023-02-06T13:51:08.749Z"
            },
          },
          {
            "id": 5,
            "name": "Crud FrontEnd StringBoot",
            "description": `Frontend para consumir la Api rest hecha con spring, se hacen todos los movimientos 
            crud a la api, para los estilos se utilizó bootstrap 5. Este seria otro proyecto Fullstack pero con distintas
            tecnologías.`,
            "uriProject": "https://github.com/Darwin073100/Crud-FrontEnd-StringBoot.git",
            "createAt": "2023-02-06T13:55:30.734Z",
            "language": {
              "id": 1,
              "name": "JavaScript",
              "version": "Es6",
              "uriImg": "https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
            },
            "framework": {
              "id": 2,
              "languageId": 1,
              "name": "Vue.js",
              "version": "v3",
              "uriImg": "https://cdn.icon-icons.com/icons2/2108/PNG/96/vue_icon_130791.png",
              "description": "Framework de javascrip para crear ui en la web.",
              "createdAt": "2023-02-06T13:51:08.748Z",
              "updatedAt": "2023-02-06T13:51:08.749Z"
            },
          }
    ]
};

export { data };