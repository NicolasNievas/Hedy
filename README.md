## ⬇️ Instalacion de dependencias

Para instalar las dependencias necesarias debe ejecutar el comando: 
```
  npm install
```


‎ 
## 🌐 Aplicacion

Para correr la aplicacion debe ejecutar el comando:
```
  npm run start
```
Esta corre en el puerto `3000`.
Abre [http://localhost:3000](http://localhost:3000) para verlo en su navegador.


‎ 
## 💾 API Server (JSON Server)

Para correr la API debe ejecutar el comando: 
```
  npm run json-server
```
Este corre en el puerto `3001`.
Abre [http://localhost:3001/remeras](http://localhost:3001/remeras) para verlo en su navegador. 

```
  json-server --watch data/db.json --port 3001
```
Utilizar este comando en caso de que no inicie la API

## 📄 Documentación API
### JSON:

```javascript
{
  "remeras": [
    {
      "name": "Essential Oversize T-shirt",
      "imageUrl": "https://d22fxaf9t8d39k.cloudfront.net/e7cf823544fa4734131f6fa37b9c19c7eb99a22aeca524ce5f49e5d6698338e67239.jpeg",
      "descripcion": "Beige t-shirt with bold black text and an intriguing phrase. Stylish and comfortable for everyday wear.",
      "id": "1"
    },
    {
      "name": "Overze Moon T-shirt",
      "imageUrl": "https://d22fxaf9t8d39k.cloudfront.net/e16839631a905a327103c7e6f353a281b27910353c07f533651a553c4018230d7239.jpg",
      "descripcion": "White t-shirt with graphic design of the moon and related text. Ideal for lovers of space and celestial bodies.",
      "id": "2"
    },
    {
      "name": "Essential Oversize T-shirt",
      "imageUrl": "https://d22fxaf9t8d39k.cloudfront.net/dc2710c762623b9fa12436931522b21590cfb0e4ac0a17f2b569c1cce7cba24e7239.jpg",
      "descripcion": "Black t-shirt with bold and artistic graphic design. Combines a classic grayscale figure with graffiti elements in red and white. ",
      "id": "3"
    }
  ]
}
```

## 🎨 Otras bibliotecas

En este proyecto, se utilizan algunas otras bibliotecas además de las dependencias principales.

 - [Bootstrap](https://getbootstrap.com/) - Proporciona una amplia gama de estilos predefinidos para crear interfaces de usuario receptivas y atractivas.

 - [SweetAlert2](https://sweetalert2.github.io/) - Facilita la creación de modales y alertas personalizadas, mejorando la experiencia del usuario al presentar mensajes y solicitudes de manera más atractiva.
