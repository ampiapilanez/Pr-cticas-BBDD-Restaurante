
use('taller-noviembre-2026');

//Mostrar todos los documentos de la colección restaurantes
  //db.restaurante.find()

//Mostrar los campos restaurant_id, nombre, distrito y cocina, pero excluya el campo _id para todos los documentos de la colección restaurantes
  //db.restaurante.find({}, {"restaurant_id":1, "name":1," borough":1, "cuisine":1, "_id":0})


//Mostrar los primeros 5 restaurantes que se encuentran en el distrito Bronx
  //db.clientes.find().limit(5)

//Devolver los restaurantes que se ubican en un valor de latitud inferior a -95.754168
  //db.restaurante.find({"address.coord.0": {$lt:-95.754168}})

//Devolver los restaurantes que no preparan cocina americana y lograron una puntuación superior a 70 y se ubicaron en una longitud inferior a -65.754168. Nota: Realice esta consulta sin usar el operador $and
 // db.restaurante.find({"cuisine": {"$ne": "American"}"grades.score": {"$gt": 70}, "address.coord": {"$lt": -65.754168}}, {})

//Devolver los restaurantes que no preparan cocina americana y lograron un punto de calificación 'A' que no pertenece al distrito de Brooklyn. El documento debe mostrarse según la cocina en orden descendente.
//db.restaurante.find({"cuisine": {"$ne": "American"}, "grades.grade": "A", "borough": {"$ne": "Brooklyn"}}, {}).sort({ "cuisine": -1 })

//Devolver los restaurantes que pertenecen al distrito Bronx y preparan platos americanos o chinos
//db.restaurante.find({"borough": "Bronx", "cuisine": {"$in": ["American", "Chinese"]}})

//Devolver ID del restaurante, nombre, distrito y la cocina para aquellos restaurantes que pertenecen al distrito de Staten Island o Queens o Bronx o Brooklyn
//db.restaurante.find({"borough":{"$in": ["Staten Island", "Queens", "Bronx", "Brooklyn" ]}}, {"restaurant_id":1, "name":1," borough":1, "cuisine":1})

//Devolver ID del restaurante, nombre, distrito y la cocina de aquellos restaurantes que lograron una puntuación que no supere los 10
//db.restaurante.find({"grades.score": {"$ne": 70}}, {"restaurant_id":1, "name":1," borough":1, "cuisine":1})

//Devolver ID del restaurante, el nombre y las calificaciones del restaurante para aquellos restaurantes que obtuvieron una calificación de "A" y obtuvieron un puntaje de 11 en una fecha ISO "2014-08-11T00: 00: 00Z" entre muchas fechas de encuesta

//ESTA SIN TERMINAR!!!!
//db.restaurante.find({"borough":{"$in": ["Staten Island", "Queens", "Bronx", "Brooklyn" ]}, "grades.grade": "A", }, {"restaurant_id":1, "name":1, "grades.grade":1})

//Devolver ID del restaurante, nombre, dirección y ubicación geográfica del restaurante de aquellos donde el segundo elemento de la matriz coord contiene un valor que es más de 42 y hasta 52
//db.restaurante.find({"address.coord.1": { "$gt": 42, "$lte": 52 }}, {"restaurant_id":1, "name":11})

//Actualiza los restaurantes. Cambia el tipo de cocina 'Ice Cream, Gelato, Yogurt, Ices' por 'sweets'
//db.restaurante.updateMany({"cuisine": "Ice Cream, Gelato, Yogurt, Ices"}, { "$set": { "cuisine": "sweets" }})

//Actualiza nombre del restaurante 'Wild Asia' por 'Wild Wild West'
//db.restaurante.updateMany({"name": "Wild Asia"}, { "$set": {"name": "Wild Wild West" }})

//Borra los restaurantes con latitud menor que -95.754168
//db.restaurante.deleteMany({"address.coord.0": {$lt:-95.754168}})

//Borra los restaurantes cuyo nombre empiece por 'C'
//db.restaurante.deleteMany({"name":  /^C/})