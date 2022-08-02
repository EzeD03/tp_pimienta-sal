const products = require("../data/products")

module.exports = {
    detail : (req,res) => {

        let product = products.find(product => product.id === +req.params.id)
        return res.render("detalleMenu",{
            title : "Detalle", product    
        })
    }
}