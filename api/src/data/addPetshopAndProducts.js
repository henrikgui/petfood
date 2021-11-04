const Petshop = require("../models/petshop.js");
const Product = require("../models/product.js");
const petshops = require("./petfood.json");

require("../database");

const addPetshopAndProducts = async () => {
  try {
    for (let petshop of petshops) {
      const newPetshop = await new Petshop(petshop).save;
      await Product.insertMany(
        petshop.produtos.map((p) => ({ ...p, petshop_id: newPetshop._id }))
      );
    }
    console.log("Final do Script");
  } catch (err) {
    console.log(err.message);
  }
};

addPetshopAndProducts();
