

### Worker

- GET api/worker/
    -Devuelve todos los operarios
- GET api/worker/:workerId
    -Devuelve un operario por Id
- POST api/worker/new
    -Crea un nuevo Operario
- PUT api/worker/:workerId
    -Actualiza un nuevo operario
- DELETE api/worker/:workerId
    -Borra un operario por Id


### Admin


- GET api/admin/:adminId
- PUT api/admin/:adminId
- POST api/admin/new
- DELETE api/admin/:adminId


### Constructions

- GET api/construction/
    - Devuelve todas las obras
- GET api/construction/:constructionId
    - Devuelve la construccion por Id
<!-- - GET api/construction/reports/:reportId
    - Devuelve la construccion cons sus reportes -->
- POST api/construction/new
    -Crea una nueva obra
- PUT api/construction/:constructionId
    -Actualiza una obra por id
- DELETE api/construction/:constructionId
    -Borra una obra por su id

### Reports

- GET api/reports/
    -Devuelve todos los reportes
- GET api/reports/:reportId
    -Devuelve el reporte por Id
- GET api/reports/workers/:workerId
    -Devuelve el reporte por Id del operario
- POST api/reports/new
    -Crea un reporte
- PUT api/reports/:reportId
    -Actualiza un reporte por Id
- DELETE api/reports/:reportId
    -Borra un reporte por Id
### Users

- POST api/users/login
    - Devuelve el Token: {
        user_id: user.id,
        user_role: user.role,
    }