// 1. Mostrar todos los documentos en la colección Restaurants.


db.restaurants.find({}, { _id: 0 });


// 2. Mostrar el restaurant_id y name para todos los documentos en la colección Restaurants.


db.restaurants.find({}, { restaurant_id: 1, name: 1, _id: 0 });


// 3. Mostrar el restaurant_id, name, borough y cuisine.


db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });


// 4. Mostrar restaurant_id, name, borough y zip code.


db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 });


// 5. Mostrar todos los restaurants que están en el Bronx.


db.restaurants.find({ borough: "Bronx" }, { _id: 0 });


// 6. Mostrar los primeros 5 restaurants que están en el Bronx.


db.restaurants.find({ borough: "Bronx" }, { _id: 0 }).limit(5);


// 7. Mostrar los próximos 5 restaurants después de saltar los primeros 5 del Bronx.


db.restaurants.find({ borough: "Bronx" }, { _id: 0 }).skip(5).limit(5);


// 8. Encontrar los restaurants con un score de más de 90.


db.restaurants.find({ "grades.score": { $gt: 90 } }, { _id: 0 });


// 9. Encontrar los restaurants con un score de más de 80 pero menos de 100.


db.restaurants.find({ grades: { $elemMatch: { score: { $gt: 80, $lt: 100 } } } }, { _id: 0 });


// 10. Encontrar los restaurants con longitud menor que -95.754168.


db.restaurants.find({ "location.coordinates.0": { $lt: -95.754168 } }, { _id: 0 })


// 11. Encontrar restaurants que no preparan 'American', con calificación > 70 y longitud < -65.754168.


db.restaurants.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "location.coordinates.0": { $lt: -65.754168 } }, { _id: 0 });


// 12. Lo mismo que el anterior pero sin usar el operador $and.


db.restaurants.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "location.coordinates.0": { $lt: -65.754168 } }, { _id: 0 });


// 13. Encontrar restaurants que no son 'American', grado 'A', y no son de Brooklyn. Ordenados por cuisine descendente.


db.restaurants.find({ cuisine: { $ne: "American" }, borough: { $ne: "Brooklyn" }, "grades.grade": "A" }, { _id: 0 }).sort({ cuisine: -1 });


// 14. Encontrar restaurant_id, name, borough y cuisine donde el nombre comienza con 'Wil'.


db.restaurants.find({ name: { $regex: "^Wil" } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });


// 15. Encontrar restaurant_id, name, borough y cuisine donde el nombre termina en 'ces'.


db.restaurants.find({ name: { $regex: "ces$" } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });


// 16. Encontrar restaurant_id, name, borough y cuisine donde el nombre contiene 'Reg'.


db.restaurants.find({ name: { $regex: "Reg" } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });


// 17. Encontrar restaurants del Bronx que preparan cocina americana o china.


db.restaurants.find({ borough: "Bronx", cuisine: { $in: ["American", "Chinese"] } }, { _id: 0 });


// 18. Encontrar restaurant_id, name, borough y cuisine para Staten Island, Queens, Bronx o Brooklyn.


db.restaurants.find({ borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });

