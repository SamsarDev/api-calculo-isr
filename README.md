# api-calculo-isr

- Project setup
```
npm install
```

- Compiles and hot-reloads for development
```
npm run serve
```

- Compiles and minifies for production
```
npm run build
```

- Server start for production
```
npm run start
```

### Ejemplo: Uso variables de entorno
```js

// .env file

NODE_ENV = "production";
HOST = "127.0.0.1";
PORT = 4380;
DB_NAME = "myAwesomeApp";

```

[Archivo postman](https://github.com/SamsarDev/api-calculo-isr/blob/master/docs/temps.postman_collection.json)

# API
***
### GET: /
##### Response
Información general del servicio

![Petición get](https://github.com/SamsarDev/api-calculo-isr/blob/master/docs/get_01.png)

### POST: /proyeccionisr
ISR calculado sobre el código del colaborador y la fecha de ingreso:
- Si la fecha de ingreso es vacía o menor al año actual se realiza el calculo sobre los 12 meses del año en curso
- Si la fecha de ingreso es inválida o igual al último mes del año en curso retorna "0"

##### Request
![Req post example](https://github.com/SamsarDev/api-calculo-isr/blob/master/docs/post_01.png)

##### Response
![Res post example](https://github.com/SamsarDev/api-calculo-isr/blob/master/docs/post_02.png)

### GET: /defaultemployeers
- La API crea 3 usuarios por defecto al no encontrar información en la colección __empleados__ de la base de datos especificada
- Esta petición devuelve los empleados creados por defecto

```json
[
    {
        "pagos": {
            "sueldo": {
                "ingresos": 3000,
                "descuentos": 136.45
            },
            "aguinaldo": {
                "ingresos": 3000,
                "descuentos": 0
            },
            "salario_14": {
                "ingresos": 3000,
                "descuentos": 0
            },
            "frecuencia": "Mensual",
            "moneda": "Q",
            "bonos": []
        },
        "_id": "6152716d751b04cd0bbfba35",
        "nombre": "Marcella Flores",
        "codigo": "002332",
        "fecha_ingreso": "Sep 10, 2021",
        "createdAt": "2021-09-28T01:35:41.701Z",
        "updatedAt": "2021-09-28T01:35:41.701Z"
    },
    {
        "pagos": {
            "sueldo": {
                "ingresos": 2250,
                "descuentos": 50
            },
            "aguinaldo": {
                "ingresos": 9000,
                "descuentos": 0
            },
            "salario_14": {
                "ingresos": 9000,
                "descuentos": 0
            },
            "frecuencia": "Semanal",
            "moneda": "Q",
            "bonos": []
        },
        "_id": "6152716d751b04cd0bbfba34",
        "nombre": "Lucrecia Arana",
        "codigo": "1881",
        "fecha_ingreso": "Sep 10, 2021",
        "createdAt": "2021-09-28T01:35:41.700Z",
        "updatedAt": "2021-09-28T01:35:41.700Z"
    },
    {
        "pagos": {
            "sueldo": {
                "ingresos": 11500,
                "descuentos": 136.45
            },
            "aguinaldo": {
                "ingresos": 11500,
                "descuentos": 0
            },
            "salario_14": {
                "ingresos": 11500,
                "descuentos": 0
            },
            "frecuencia": "Mensual",
            "moneda": "Q",
            "bonos": [
                {
                    "name": "aniversario",
                    "ingresos": 1000
                }
            ]
        },
        "_id": "6152716d751b04cd0bbfba33",
        "nombre": "Pánfilo Reyes",
        "codigo": "2233",
        "fecha_ingreso": "Sep 10, 2021",
        "createdAt": "2021-09-28T01:35:41.700Z",
        "updatedAt": "2021-09-28T01:35:41.700Z"
    }
]
```

### 'ERROR'
Realizar una petición errónea devolverá un Status Code: 400 y un json con la siguiente estructura:

![Error req example](https://github.com/SamsarDev/api-calculo-isr/blob/master/docs/error_01.png)

