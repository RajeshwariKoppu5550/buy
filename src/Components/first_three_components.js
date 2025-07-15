import React from 'react';
import ProductCard from './ProductCard';

function FirstThreeComponents({ addToCart }) {
    const products = [
        { id: 1, image: '/pizza_1.png', title: 'Espresso Elegante', price: 10 },
        { id: 2, image: 'https://readymadeui.com/images/coffee8.webp', title: 'Mocha Madness', price: 12 },
        { id: 3, image: 'https://readymadeui.com/images/coffee3.webp', title: 'Caramel Cream Delight', price: 14 },
    ];

    return (
        <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Pizza Store</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}

export default FirstThreeComponents;
