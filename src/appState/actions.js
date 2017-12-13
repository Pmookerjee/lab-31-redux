import uuid from 'uuid/v2';

export const createCategory = (category) => {

  category.id = uuid();
  category.createDate = new Date();

  return {
    type:"CATEGORY_ADD",
    payload: category
  };

};

export const updateCategory = (category) => {
  return {
    type: "CATEGORY_UPDATE",
    payload: category
  }
}

export const deleteCategory = (categoryId) => {
  return {
    type: "CATEGORY_DELETE",
    payload: categoryId
  }
}