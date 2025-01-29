"use client"

import {useState, useEffect} from "react"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import WhatsAppButton from "./components/WhatsAppButton"

export interface Flower {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number
}

const flowers: Flower[] = [
    {id: 1, name: "Girasol con 2 rositas", description: "Girasol acompañado de dos rositas", price: 25},
    {id: 2, name: "Mini ramo rojo", description: "Pequeño ramo con rosas rojas", price: 25},
    {id: 3, name: "Flor corazon", description: "Flor en forma de corazón", price: 25},
    {id: 4, name: "Flor individual roja", description: "Flor roja individual", price: 8},
    {id: 5, name: "Flor individual lila", description: "Flor lila individual", price: 8},
    {id: 6, name: "Ramo de 7 rosas amarillas", description: "Ramo con siete rosas amarillas", price: 35},
    {id: 7, name: "Ramo con girasol", description: "Ramo que incluye un girasol", price: 35},
    {id: 8, name: "Girasol individual", description: "Girasol individual", price: 18},
    {id: 9, name: "Flor individual amarilla", description: "Flor amarilla individual", price: 8},
    {id: 10, name: "Adorno para carro", description: "Adorno decorativo para carro", price: 20}
];


export default function Home() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        setTotal(newTotal)
    }, [cart])

    const addToCart = (flower: CartItem | Flower) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === flower.id)
            if (existingItem) {
                return prevCart.map((item) => (item.id === flower.id ? {...item, quantity: item.quantity + 1} : item))
            } else {
                return [...prevCart, {...flower, quantity: 1}]
            }
        })
    }

    const removeFromCart = (flowerId: number) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === flowerId)
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map((item) => (item.id === flowerId ? {...item, quantity: item.quantity - 1} : item))
            } else {
                return prevCart.filter((item) => item.id !== flowerId)
            }
        })
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pb-32">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold mb-12 text-center text-purple-700 animate-pulse">LITTLES DETAILS
                    IZAMAR</h1>
                <ProductList flowers={flowers} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
                <div
                    className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
                    <WhatsAppButton cart={cart} total={total}/>
                </div>
            </div>
        </main>
    )
}

