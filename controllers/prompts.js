// importing Model 

const promptsModel = require('../models/prompts')

async function handleCreatePrompts(req,res){
    const {description, statement, date} = req.body
    try{
     const data = await promptsModel.create({
        description, 
        statement, 
        date
     })
     res.status(201).json({message:"data created successfully",data})
    }catch(error){
        console.log(`An error occured : ${error}`)
        res.status(500).json(`An error occured : ${error}`)
    }
}



async function handleGetAllPrompts(req,res){
    try{
     const data = await promptsModel.findAll()
     res.status(200).json(data)
    }catch(error){
        console.log(`An error occured : ${error}`)
        res.status(500).json(`An error occured : ${error}`)
    }
}

async function handleUpdatePrompts(req,res){
    const userId = req.params.id;
    const {description, statement, date} = req.body
    try{
        const user = await promptsModel.findByPk(userId)

        if(!user){
            res.status(404).json({error:"user not found"})
        }

       user.description = description;
       user.statement = statement;
       user.date = date

       await user.save()
       res.status(201).json({message:"data updated successfully",user})

    }catch(error){
        console.log(`An error occured : ${error}`)
        res.status(500).json(`An error occured : ${error}`)
    }
}



async function handlPromptsDelete(req,res){
    const Id = req.params.id
    try{
        const record = await promptsModel.findByPk(Id);

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



async function handlePromptsOne(req,res){
    const ID = req.params.id
    try{
        const data = await promptsModel.findByPk(ID)
        res.status(200).json(data)
    }catch(error){
        console.log(`Error in fetching data: ${error}`)
    }
}

module.exports={
    handleCreatePrompts,
    handleGetAllPrompts,
    handleUpdatePrompts,
    handlPromptsDelete,
    handlePromptsOne
}