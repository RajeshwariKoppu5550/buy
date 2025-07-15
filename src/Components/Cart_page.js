import React from 'react';

function CartPage({ cartItems }) {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-lg text-gray-600">Your cart is empty!</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-xl">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                <p className="text-gray-800 font-semibold">${item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}

                    <div className="text-right mt-6">
                        <h3 className="text-2xl font-bold">Total: ${totalPrice}</h3>
                        <button className="mt-4 px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-xl">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
