import Product from "../models/productModel.js";
const productController = {}


productController.list = async (req,res) => {
    try{
        const products = await Product.find();
        return res.json(products);
       }catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

productController.show = async (req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({ message: "Product not found" });
        }else{
            return res.json(product);
        }
    }catch(error){
        return res.status(500).json({ error: error.message });
    }
}

export default productController