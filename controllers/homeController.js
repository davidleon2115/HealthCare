exports.mostrarMedicamentos = (req, res)=>{
    res.render('home',{
        nombrePagina: 'Inicio',
        img:true,
        imagen:'/public/Imagenes/noxpirin.jpg'
    })
}