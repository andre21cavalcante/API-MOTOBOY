const generalMiddleware = (app)=>{
    //middleware só para mostrar o que vem
    // no body e no header 
    app.use((req, res, next)=>{
        const body = req.body
        const headers = req.headers
        
        next()
    })
}

export default generalMiddleware