

### Worker

- GET api/workers/
    -Devuelve todos los operarios con sus Tasks
- GET api/workers/:workerId
    -Devuelve un operario por Id
- POST api/workers/new
    -Crea un nuevo Operario
- PUT api/workers/:workerId
    -Actualiza un nuevo operario
- DELETE api/workers/:workerId
    -Borra un operario por Id


### Admin


- GET api/admins/:adminId
- PUT api/admins/:adminId
- POST api/admins/new
- DELETE api/admins/:adminId


### Constructions

- GET api/constructions/
    - Devuelve todas las obras cons los workers asociados, con los reportes asociados y las imagenes asociadas a los reportes
- GET api/constructions/:constructionId
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
    -Devuelve todos los reportes con sus imagenes asociadas
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

- GET  api/users
    -Devuelve todos los usuarios

### Tasks
Realmente no se si lo vamos a necesitar, ya que cuando hacemos peticion de los trabajadores ya nos devuelven los tasks asociados a ese trabajador

-GET api/tasks
    -Devuelve todos los tasks 

- GET api/tasks/:taskId
    -Devuelve el task por id
- POST api/tasks/new
    -Crea un task
- PUT api/tasks/:taskId
    -Actualiza un task por Id
- DELETE api/tasks/:taskId
    -Borra un task por Id
