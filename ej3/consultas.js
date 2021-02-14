db.ej4.aggregate(
    
        {
            $lookup: {
                from: "grupos",
                localField: "idg",
                foreignField: "_id",
                as: "grupos"
            }
        },
        {$match:{sexo:"m"}}
    
).pretty()

db.ej4.aggregate(
    
    {
            $lookup: {
                from: "grupos",
                localField: "idg",
                foreignField: "nombreg",
                as: "grupos"
            }
        },
).pretty()