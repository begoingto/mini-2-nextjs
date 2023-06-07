'use client'
import React from 'react';
import {moneyFormat} from '@/base/siteConfig';
import {useDispatch, useSelector} from 'react-redux';
import { decreaseQuantity, increaseQuantity} from '@/redux/features/cart/cartSlice';

function ItemCart({product}) {
    const dispatch = useDispatch();
    const onIncrementQty = (product) => {
        console.log("onIncrementQty")
        dispatch(increaseQuantity(product));
    }
    const onDecrementQty = (product) => {
        console.log("onDecrementQty")
        dispatch(decreaseQuantity(product));
    }

    return (
        <tr>
            <td className="hidden pb-4 md:table-cell">
                <a href="#">
                    <img src={product.image}
                        className="w-20 rounded" alt="Thumbnail"/>
                </a>
            </td>
            <td>
                <a href="#">
                    <p className="mb-2 md:ml-4">{product.name}</p>
                </a>
            </td>
            <td className="justify-center md:justify-end md:flex mt-6">
                <div className="flex border border-gray-300 dark:border-gray-800 rounded-lg">
                    <button
                        onClick={() => onDecrementQty(product)}
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        type="button">
                        <i className="bi bi-dash-lg"></i>
                    </button>
                    <div className="px-3 flex items-center">
                        {product.quantity}
                    </div>
                    <button
                        onClick={() => onIncrementQty(product)}
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 dark:text-white rounded-r-lg hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        type="button"><i className="bi bi-plus-lg"></i></button>
                </div>
            </td>
            <td className="hidden text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium">
                   {moneyFormat.format(product.price)}
                </span>
            </td>
            <td className="text-right">
              <span className="text-sm lg:text-base font-medium">
                 {moneyFormat.format(product.price*product.quantity)}
              </span>
            </td>
        </tr>
    );
}

export default ItemCart;