Esta api maneja todo lo relativo a la pagina de inicio donde se mostraran promociones de la empresa. 


**iniciar la api: npm start


**Rutas :


GET: http://localhost:4000/inicio 


POST: http://localhost:4000/inicio 


        body: {  
          "id": 4,
          "Hotel": "Canchita",
          "ubicHotel": "Av. independencia 34, Tandil",          
          "fotosHotel": "url",
          "videoHotel": "url",
        }


GET by id: http://localhost:4001/viaje/id


PUT http://localhost:4001/viaje/id


    body: { //info a modificar ej:
        "ultimaUbic": "aca van las coordenadas"
    }

    
DELETE http://localhost:4001/viaje/id


Variable de entorno para el archivo .env


PORT='4001'
DB_USER ='postgres'
DB_NAME = 'postgres'
DB_PORT = '5433'
HOST = 'localhost'
DB_PASSWORD="xxxxx"
DB_HOST = 'localhost'
