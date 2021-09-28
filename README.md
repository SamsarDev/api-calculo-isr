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

### 'ERROR'
Realizar una petición errónea devolverá un Status Code: 400 y un json con la siguiente estructura:

![Error req example](https://github.com/SamsarDev/api-calculo-isr/blob/master/docs/error_01.png)

