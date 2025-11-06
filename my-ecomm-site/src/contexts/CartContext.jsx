import { createContext, useContext, useState, useEffect } from "react";

// create cart context
const CartContext = createContext();

// create hook to consume/use our CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    // Grab cart from local storage if one exists
    useEffect(() => {
        const storedCart = localStorage.getItem('my-cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, [])

    // Store the cart changes to local storage when changes are made
    useEffect(() => {
        localStorage.setItem('my-cart', JSON.stringify(cartItems));

        //Whenever our cart changes we will calculate a new total
        let temp_total = 0;

        cartItems.forEach((item) =>{
            temp_total += item.price * item.quantity
        })

        setTotal(temp_total);
    }, [cartItems])


    const addToCart = (product) => {

        // see if item already exists in the list
        // checks the ids of the items in the cart with the new product trying to be added
        const existingItem = cartItems.find((item) => item.id === product.id);
        setTotal((prevTotal) => prevTotal + product.price);

        if (existingItem) {
            
            const newCart = cartItems.map((item) => 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            )
            setCartItems(newCart);
        } else {
            const newItem = {
                title: product.title,
                id: product.id,
                price: product.price,
                thumbnail: product.thumbnail,
                quantity: 1,
                brand: product.brand
            }
            setCartItems((prevItems) => [...prevItems, newItem]);
        }

    }

    const value = {
        cartItems,
        addToCart, 
        total
    }

    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )

}