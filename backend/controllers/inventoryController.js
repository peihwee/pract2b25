module.exports.getAllInventory = function(req, res, next)
{
    res.send("Get All Inventory");
} 

module.exports.getInventoryByID = function(req, res, next)
{
    res.send("getInventoryByID");
} 

module.exports.deleteInventoryByID = function(req, res, next)
{
    res.send("deleteInventoryByID - " + req.params.id);
} 