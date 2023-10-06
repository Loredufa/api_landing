Esta api maneja todo lo relativo a la pagina de inicio donde se mostraran promociones de la empresa. 


**iniciar la api: npm start


**Rutas :
**Imagenes**

GET: http://localhost:4000/inicio 


POST: http://localhost:4000/inicio 


        body: {  
          "imagen": "url",
          "folleto": "url",          
          "activo": "true",
        }


GET by id: http://localhost:4000/inicio/id


PUT http://localhost:4000/inicio/id


    body: { //info a modificar ej:
        "textoVideo": "texto"
    }

    
DELETE http://localhost:4000/inicio/id

**Textos**


**Formulario de contacto**


Variable de entorno para el archivo .env


PORT='4000'
DB_USER ='postgres'
DB_NAME = 'postgres'
DB_PORT = '5433'
HOST = 'localhost'
DB_PASSWORD="xxxxx"
DB_HOST = 'localhost'
