export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await response.json();
    return data;
  } catch (error) { console.error(error); }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) { console.error(error); }
}
