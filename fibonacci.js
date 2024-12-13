function fibo(num){

    if(num == 1){
        return num
    }

    return num * fibo(num-1)
}

console.log(fibo(4))

const getAllCategories = async () => {
  const categories = await Category.find({}, { _id: 1, name: 1, parentId: 1 });
  return categories;
};

const buildCategoryHierarchy = (categories, parentId = null) => {
  return categories
    .filter((category) => category.parentId?.toString() === parentId?.toString())
    .map((category) => ({
      _id: category._id,
      name: category.name,
      subcategories: buildCategoryHierarchy(categories, category._id), // Recursively fetch subcategories
    }));
};

const getMainCategoriesWithNestedSubcategories = async () => {
  const categories = await getAllCategories();
  const hierarchy = buildCategoryHierarchy(categories, null); // Start from the main categories (parentId = null)
  return hierarchy;
};
