// importing model 

const CategoriesModel  = require('../models/categories')

async function handlePostCategories(req,res){
    const {name, entries, description} = req.body
    try{
    const data = await CategoriesModel.create({
        name, 
        entries, 
        description
    })
    res.status(200).json({message: "data created successfully",data})
    }catch(error){
     console.log(`An error occured : ${error}`)
     res.status(500).json(`An error occured : ${error}`)
    }
}

async function handleGetCategories(req,res){
    try{
    const data = await CategoriesModel.findAll()
    res.status(200).json(data)
    }catch(error){
        console.log(`An error occured : ${error}`)
        res.status(500).json(`An error occured : ${error}`)
    }
}



async function handleUpdateCategories(req,res){
    const userId = req.params.id;
    const {name, entries, description} = req.body
    try{
        const user = await CategoriesModel.findByPk(userId)

        if(!user){
            res.status(404).json({error:"user not found"})
        }

       user.name = name;
       user.entries = entries;
       user.description = description

       await user.save()
       res.status(200).json({message:"data updated successfully",user})

    }catch(error){
        console.log(`An error occured : ${error}`)
        res.status(500).json(`An error occured : ${error}`)
    }
}


async function handleCategoryDelete(req,res){
    const Id = req.params.id
    try{
        const record = await CategoriesModel.findByPk(Id);

        if (!record) {
          return res.status(404).json({ error: 'Record not found' });
        }
    
        await record.destroy();
        return res.json({ message: 'Record deleted successfully' });
    }catch(error){
        console.log(`An error occured: ${error}`)
        res.status(500).json(`An error occured: ${error}`)
    }
}



async function handleCategoryOne(req,res){
    const ID = req.params.id
    try{
        const data = await CategoriesModel.findByPk(ID)
        res.status(200).json(data)
    }catch(error){
        console.log(`Error in fetching data: ${error}`)
    }
}


module.exports = {
    handlePostCategories,
    handleGetCategories,
    handleUpdateCategories,
    handleCategoryDelete,
    handleCategoryOne
}