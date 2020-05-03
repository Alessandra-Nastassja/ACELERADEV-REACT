const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

// Dada a entrada de um Array com os ids dos produtos
const getIdsProducts = (ids, productsList) => productsList.filter(product => ids.includes(product.id));

// Os nomes dos produtos e suas respectivas categorias
const getProductsList = (filteredProducts) => {
	const productsList = filteredProducts.map(({ name, category}) => {		
		return { name, category };
	});

	return productsList;
}

// A promoção aplicada para calcular os preços do carrinho
const getCategories = (productsList) => {
	const categories = productsList.map(({ category }) => {
		return category;
	})

	return [...new Set(categories) ];
}

const getPromotion = (categoriesList) => {	
	return categoriesList.length <= 4 ? 
	promotions[categoriesList.length - 1] : promotions[3];
}

// O valor total (já com os descontos aplicados, caso exista).
const getTotalRegularPrices = (filteredProducts) => {
	let totalPrice = 0; 

	filteredProducts.map(({ regularPrice }) => {
		return totalPrice += regularPrice;
	});

	return totalPrice;
}

getTotalPriceWithDiscount = (filteredProducts, promotion) => {
	const totalRegularPrice = getTotalRegularPrices(filteredProducts);	
			
	const totalPrice = filteredProducts.reduce(( total, product ) => {

		product.promotions.forEach((item) => {
			if (item.looks.includes(promotion)) {
				total = (total - (product.regularPrice - item.price))
			}
		});	
		
		return total;

	}, totalRegularPrice).toFixed(2);

	const discountValue = (totalRegularPrice - totalPrice).toFixed(2);

	const discount = `${(100 - (totalPrice * 100 / totalRegularPrice)).toFixed(2)}%`;
	
	return {
		totalPrice,
		discountValue,
		discount
	}
}

function getShoppingCart(ids, productsList) {
	// Pegar os nomes dos produtos e suas categorias
	const filteredProducts = getIdsProducts(ids, productsList);
	const products = getProductsList(filteredProducts);

	// A promoção aplicada para calcular os preços do carrinho
	const promotion = getPromotion(getCategories(products));	
	
	// O valor total (já com os descontos aplicados, caso exista).
	const totalPriceAndDiscount = getTotalPriceWithDiscount(filteredProducts, promotion);	
	
	return {
		products,
		promotion,
		...totalPriceAndDiscount
	};
}

module.exports = { 
	getShoppingCart,	
};
