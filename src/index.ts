import app from './app'

app.listen(process.env.PORT || 6500, ()=>{
  console.log('>>>Servidor escuchando en puerto: ', process.env.PORT)
})