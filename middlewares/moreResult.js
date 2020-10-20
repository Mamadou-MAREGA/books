const moreResults = (modelName, ...populateFields) => async (req, res, next) =>{
let currentQuery;


//Copy the req.query
    const reqQuery = {...req.query};

    console.log('more results hit');

    res.moreResults = {
        success: true,
        message: 'Working'
    }



};




module.exports = moreResults;
