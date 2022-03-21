import app from "./app.js";

const port = 3010

app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})
