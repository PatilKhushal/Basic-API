const userModel = require('../models/userModel');

async function getAllUsers(request, response)
{
    return response.status(200).json(await userModel.find());
}

async function getUserById(request, response)
{
    try
    {
        let id = request.params.id;
        let res = await userModel.findById(id);
        if(res)
            return response.status(200).json(res);
        
        return response.status(200).json({"message" : "No user with such ID"});        
    }
    catch(err)
    {
        return response.status(404).json({"error" : "Invalid ID"});
    }
}

async function postUser(request, response)
{
    let res = await userModel.findOne({email : request.body.email});
    if(res)
        return response.status(409).json({"error" : "Duplicate Entry", "message" : "User with this email is already present"});
    
    response.status(201).json(await userModel.create(request.body));
}

async function patchUserByID(request, response)
{
    try
    {
        let id = request.params.id;
        let res = await userModel.findOneAndUpdate({_id : id}, request.body);
        if(res)
            return response.status(200).json(res);
        
        return response.status(200).json({"message" : "No Such ID Found"});
    }
    catch(err)
    {
        return response.status(400).json({"error" : err});
    }
}

async function deleteUserByID(request, response)
{
    try
    {
        let id = request.params.id;
        let res = await userModel.findOneAndDelete({_id : id});
        if(res)
            return response.status(200).json(res);
        
        return response.status(200).json({"message" : "No Such ID Found"});
    }
    catch(err)
    {
        return response.status(400).json({"error" : "InvalidID"});
    }
}
module.exports = {getAllUsers, getUserById, postUser, patchUserByID, deleteUserByID}