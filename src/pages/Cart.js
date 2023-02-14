import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
    const {
        state: { cart, loading, error },
    } = useProducts();

    const fromCart = true;

    let content;

    if (loading) {
        content = <p className="text-center">Loading</p>;
    }

    if (error) {
        content = <p>Something went wrong</p>;
    }

    if (!loading && !error && cart?.length === 0) {
        content = <p>Nothing to show, Product list is empty.</p>;
    }

    if (!loading && !error && cart?.length) {
        content = cart?.map((product, index) => (
            <ProductCard fromCart={fromCart} key={index} product={product} />
        ));
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
            {content}
        </div>
    );
};

export default Cart;
