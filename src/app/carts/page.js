'use client'
import React from 'react';
import {useSelector} from 'react-redux';
import {selectCart} from '@/redux/features/cart/cartSlice';
import ItemCart from '@/app/carts/ItemCart';
import {moneyFormat} from '@/base/siteConfig';

function CartPage() {
    const carts = useSelector(selectCart);
    const discount = 15;

    const totalPrice = carts.reduce((total, item) => total + item.price, 0);

    return (
        <>
            <div className="flex justify-center my-6">
                <div
                    className="flex flex-col w-full rounded-lg p-8 text-gray-800 bg-white dark:bg-gray-800 dark:text-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                        <table className="w-full text-sm lg:text-base" cellSpacing="0">
                            <thead>
                            <tr className="h-12 uppercase">
                                <th className="hidden md:table-cell"></th>
                                <th className="text-left">Product</th>
                                <th className="lg:text-right text-left pl-5 lg:pl-0">
                                    <span className="lg:hidden" title="Quantity">Qtd</span>
                                    <span className="hidden lg:inline">Quantity</span>
                                </th>
                                <th className="hidden text-right md:table-cell">Unit price</th>
                                <th className="text-right">Total price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {carts.length > 0 ? carts.map((product,i) => <ItemCart key={i} product={product} />) : (
                                <tr>
                                    <td colSpan={5} className={"text-center text-red-500 py-5"}>
                                        No products in cart yet.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        <hr className="pb-6 mt-6"/>
                        <div className="my-4 mt-6 -mx-2">
                            <div className="lg:px-2">
                                <div className="p-4 bg-gray-900 rounded-full">
                                    <h1 className="ml-2 font-bold uppercase text-white">Order Details</h1>
                                </div>
                                <div className="p-4">
                                    <p className="mb-6 italic">Shipping and additionnal costs are calculated based
                                        on values you have entered</p>
                                    <div className="flex justify-between border-b">
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            Subtotal
                                        </div>
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center">
                                            {moneyFormat.format(totalPrice)}
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div
                                            className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold ">
                                            Discount <span className={"text-green-400 ml-5"}>{discount}%</span>
                                        </div>
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-400">
                                            {moneyFormat.format(totalPrice * discount / 100)}
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center ">
                                            New Subtotal
                                        </div>
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center ">
                                            14,882.75$
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center ">
                                            Tax
                                        </div>
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center ">
                                            2,976.55$
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center ">
                                            Total
                                        </div>
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center ">
                                            17,859.3$
                                        </div>
                                    </div>
                                    <a href="#">
                                        <button
                                            className="flex justify-center w-full px-10 py-3 mt-6 font-medium uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                            <svg aria-hidden="true" data-prefix="far" data-icon="credit-card"
                                                 className="w-8" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 576 512">
                                                <path fill="currentColor"
                                                      d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/>
                                            </svg>
                                            <span className="ml-2 mt-5px">Procceed to checkout</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;