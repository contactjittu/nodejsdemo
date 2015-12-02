var blog = require('../models/entity').blog;
module.exports = {
	getEntity: function(req, res) {
		blog.find({},function(err,blogCallback){
            if(!err){
            	return res.status(200).send({status:0, message: 'Getting all details', data:blogCallback }); 
            }
            else{
                return res.status(200).send({status:1, message: 'Invalid', err:err }); 
            }        
        });
    },
    saveEntity: function(req, res) {
		var blogField = new blog();
		blogField.author = req.body.author;
		blogField.desc = req.body.desc;
		blogField.bookName = req.body.bookName;
		blogField.save(function(err,blogCallback) 
		{
			if(!err)
			{
				return res.status(200).send({status:0 , message:'Data Saved',data:blogCallback._id});	
			}

			else
			{	
				return res.status(200).send({status:1 , message:'Error while saving data', err:err});
			}
		});
    },
    updateEntity: function(req, res){
    	blog.findOne({_id:req.query._id},function(err,updateCallback){
    		if(!err)
    		{
    			updateCallback.bookName = req.body.bookName;
    			updateCallback.author = req.body.author;
    			updateCallback.desc = req.body.desc;
    			updateCallback.save(function(err,updatedata){
    				return res.status(200).send({status:0, message: 'Successfully Updated'});
    			})
    		}
    		else
    		{
    			return res.status(200).send({status:1, message: 'Error While updating', err:err });
    		}
    	})
    },
    removeEntity: function(req, res){
    	blog.findOne({_id:req.query._id},function(err,removeCallback){
    		if(!err)
    		{
    			removeCallback.remove();
    			return res.status(200).send({status:0, message: 'Removed'});
    		}
    		else
    		{
    			return res.status(200).send({status:1, message: 'error while deleting data', err:err});
    		}
    	})
    }
};