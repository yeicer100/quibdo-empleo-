const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/documentacion', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Documentación de la API - Gravity Falls</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; margin: 0; padding: 20px; }
            .container { max-width: 800px; margin: auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px; }
            .endpoint { background: #e8f4fd; border-left: 5px solid #3498db; padding: 15px; margin: 20px 0; border-radius: 4px; }
            code { background: #2d3748; color: #63b3ed; padding: 2px 6px; border-radius: 4px; }
            pre { background: #2d3748; color: #fff; padding: 15px; border-radius: 5px; overflow-x: auto; }
            a { color: #3498db; text-decoration: none; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Documentación de la API de Gravity Falls</h1>
            <p>Bienvenido a la documentación oficial de la API.</p>
            
            <div class="endpoint">
                <h3>GET /api/characters</h3>
                <p><strong>Descripción:</strong> Retorna la lista completa de todos los personajes de Gravity Falls con sus detalles.</p>
                <p><strong>URL de prueba:</strong> <a href="http://localhost:3000/api/characters" target="_blank">http://localhost:3000/api/characters</a></p>
                <p><strong>Ejemplo de respuesta (JSON):</strong></p>
                <pre>
[
  {
    "id": 1,
    "name": "Dipper Pines",
    "status": "Vivo",
    "species": "Humano",
    "location": "Gravity Falls, Oregon"
  }
]
                </pre>
            </div>
        </div>
    </body>
    </html>
  `);
});

const characters = [
  {
    id: 1,
    name: "Dipper Pines",
    status: "Vivo",
    species: "Humano",
    location: "Gravity Falls, Oregon",
    firstSeen: "Trampa para turistas",
    image: "https://i.pinimg.com/originals/ff/75/c9/ff75c9ac518023d92052831e2e5c65e7.jpg"
  },
  {
    id: 2,
    name: "Mabel Pines",
    status: "Vivo",
    species: "Humano",
    location: "Cabaña del Misterio",
    firstSeen: "Trampa para turistas",
    image: "https://774neet.com/wp-content/uploads/2021/03/nWcoomxevlXrxTCDAI.jpg"
  },
  {
    id: 3,
    name: "Stanley Pines",
    status: "Vivo",
    species: "Humano",
    location: "Cabaña del Misterio",
    firstSeen: "Trampa para turistas",
    image: "https://vignette.wikia.nocookie.net/gravityfalls/images/f/fd/Stan_imagen_articulo.png/revision/latest?cb=20180328165817&path-prefix=es"
  },
  {
    id: 4,
    name: "Soos Ramirez",
    status: "Vivo",
    species: "Humano / Mantenimiento",
    location: "Cabaña del Misterio",
    firstSeen: "Trampa para turistas",
    image: "https://cdn-ak.f.st-hatena.com/images/fotolife/p/peggy_tayama/20200810/20200810220718.png"
  },
  {
    id: 5,
    name: "Wendy Corduroy",
    status: "Vivo",
    species: "Humano",
    location: "Bosque de Gravity Falls",
    firstSeen: "Trampa para turistas",
    image: "https://static.wikia.nocookie.net/gravityfalls/images/c/cc/Wendy.jpg/revision/latest?cb=20160227185105&path-prefix=fr"
  },
  {
    id: 6,
    name: "Bill Cipher",
    status: "Desconocido",
    species: "Demonio del sueño",
    location: "El Paisaje Mental",
    firstSeen: "Gideon ataca",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Gravity-Falls-bill-Cipher.jpg"
  },
  {
    id: 7,
    name: "Gideon Gleeful",
    status: "Vivo",
    species: "Humano",
    location: "Carpa de la Telepatia",
    firstSeen: "La mano que mece la maldad",
    image: "https://facts.net/wp-content/uploads/2023/09/10-facts-about-gideon-gleeful-gravity-falls-1693825499.jpg"
  },
  {
    id: 8,
    name: "Fiddleford McGucket",
    status: "Vivo",
    species: "Humano / Inventor",
    location: "Basurero municipal",
    firstSeen: "Caza-cabezas",
    image: "https://i.pinimg.com/originals/67/10/13/6710131cd426d4f450422b7383e1aa95.png"
  },
  {
  id:9,
  name: "Candy Chiu",
  status:"Vivo",
  species:"Humana",
  location:"Gravity Falls, Oregón",
  firstSeen:"Leyendas del estanque",
  image:"https://static.wikia.nocookie.net/gravityfalls/images/6/66/S1e7_candy_chiu.png/revision/latest?cb=20151116021228"
  },
  {
  id:10,
  name: "Grenda Grend soruml",
  status:"Vivo",
  species:"Humana",
  location:"Gravity Falls, Oregon",
  firstSeen:"Leyendas del estanque",
  image:"https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/02/grenda-gravity-falls.jpg"
  },
  {
  id:11,
  name: "Pato",
  status:"Vivo",
  species:"Cerdo/Animal",
  location:"Cabaña del Misterio",
  firstSeen:"El cerdito del viajero del tiempo",
  image:"https://wallpapercave.com/wp/wp8158973.png"
  },
  {
  id:12,
  name: "Robbie Valentino",
  status:"Vivo",
  species:"Humano",
  location:"Gravity Falls, Oregón",
  firstSeen:"La cita de Mabel",
  image:"https://th.bing.com/th/id/R.574c42dbe609f45bcf1cd729430781ff?rik=hK1yZfv1EsVLwQ&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20121204203625%2fgravityfalls%2fimages%2fc%2fc8%2fS1e5_robbie_with_guitar.png&ehk=AjyQYGQB7tXvwzOxKS3H6X2eBIxeA%2bjsWVW8VffYIQI%3d&risl=&pid=ImgRaw&r=0"
  },
  {
  id:13,
  name: "Standford Pines",
  status:"Vivo",
  species:"Humano/Científico",
  location:"Portal Subterráneo",
  firstSeen:"No es lo que es",
  image:"https://static.wikia.nocookie.net/gravity-falls-oc/images/e/ec/FordPines.webp/revision/latest?cb=20241108172416"
  },
  {
  id:14,
  name: "Sheriff Blubs",
  status:"Vivo",
  species:"Humano/Policía",
  location:"Estación de Policía de Gravity Falls",
  firstSeen:"Trampa para turistas",
  image:"https://static.wikia.nocookie.net/gravityfalls/images/3/37/S1e3_Sheriff_Blubs_First_Appearance.png/revision/latest/scale-to-width-down/1200?cb=20160204034446"
  },
  {
  id:15,
  name: "Agente Durland",
  status:"Vivo",
  species:"Humano/Policía",
  location:"Estación de Policía de Gravity Falls",
  firstSeen:"Trampa para turistas",
  image:"https://static.wikia.nocookie.net/cartoons/images/0/0a/GF_Deputy_Durland.png/revision/latest/scale-to-width-down/250?cb=20210507104121"
  },
  {
  id:16,
  name: "Pacifica Northwest",
  status:"Vivo",
  species:"Humana",
  location:"Mansión Northwest",
  firstSeen:"La leyenda del mostruo del golf",
  image:"https://vignette.wikia.nocookie.net/gravityfalls/images/7/7c/Pacifica.png/revision/latest?cb=20151121163832&path-prefix=de"
  },
];

app.get('/api/characters', (req, res) => {
  res.json(characters);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación en http://localhost:${PORT}/api-docs`);
});
