const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 2,
    name: "Mati",
    species: "Human",
    gender: "Male",
    status: "Alive",
    origin: {
        name: "Earth (C-137)"
    },
    image: "image.jpg",
 }

describe("test de Rutas", () => {
    describe("GET /rickandmorty/character/:id", () => {
       it("Responde con status: 200", async () => {
        // forma 1 de testear
        // await request.get("/rickandmorty/character/1").expect(200)
        //forma 2
        const response = await request.get("/rickandmorty/character/1");
        expect(response.statusCode).toBe(200);
       })

       it("Responde un objeto con las propiedades:  'id','name', 'species','gender','status','origin' e 'image' ",
       async () => {
         const response = await request.get("/rickandmorty/character/1");
        
         for (const prop in character){
            expect(response.body).toHaveProperty(prop)
         }
        })
        it("si hay un error responde con status: 500", async () => {
            const response = await request.get("/rickandmorty/character/99999999");
            expect(response.statusCode).toBe(500)
        })
    })

    describe("GET /rickandmorty/login", () => {
        const access = {access: true}

        it("Responde con un objeto con la propiedada access en true si la informacion del usuario es valdia", async () => {
            const response = await request.get("/rickandmorty/login?email:Matiastari@outlook.com&&password:Password123");
            expect(response.body).toEqual(access)
        })
        it("Responde con un objeto con la propiedada access en false si la informacion del usuario no es valida", async () => {
            const response = await request.get("/rickandmorty/login?email:Matiastari@outlook.com&&password:Password123");
            access.access = false;
            expect(response.body).toEqual(access)
        })
    })

    describe("POST /rickandmorty/fav" , () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post("/riackadnmorty/fav").
            send(character);
            expect(response.body).toContainEqual(character)
        })
        it("Debe agregar personajes a favoritos sin eliminar los anteriores", async () => {
            character.id = 999;
            character.name = "Mati2";
            const response = await request.post("/riackadnmorty/fav").
            send(character);
            expect(response.body.length).toBe(2)
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el id enviado no existe, deberia retornar un arreglo con todos los personajes favoritos", async () => {
            const response = await request.delete("/riackadnmorty/fav/3");
            expect(response.body.length).toBe(2)
        })
    })
})