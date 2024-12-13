const name = {
    fname:'Ameen',
    sname:'Dv',
   
}

let printName = function(place, again){
    console.log(this.fname+" "+this.sname+"is from"+place+" "+again)
}

const name1 = {
    fname:'Rashid',
    sname: 'soopi'
}

// name.printName()
// printName.apply(name1, ['calicut', 'nallalam'] )

const bindTest = printName.bind(name1, ['calicut'])

console.log(bindTest)




const getMainCategoriesWithSubcategories = async () => {
  const categories = await Category.aggregate([
    {
      $match: {
        parentId: null, // Filter only main categories
      },
    },
    {
      $lookup: {
        from: 'categories', // Same collection
        localField: '_id', // Match main category _id
        foreignField: 'parentId', // Match with subcategories' parentId
        as: 'subcategories', // Alias for matched subcategories
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        subcategories: {
          _id: 1,
          name: 1,
        }, // Only include _id and name of subcategories
      },
    },
  ]);

  return categories;
};
