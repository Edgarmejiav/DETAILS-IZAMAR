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
    category: string;
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;

}

const flowersAll: Flower[] = [
    {
        id: 1,
        name: "Girasol con 2 rositas",
        description: "Girasol acompañado de dos rositas",
        price: 25,
        category: "Ramo"
    },
    {id: 2, name: "Mini ramo rojo", description: "Pequeño ramo con rosas rojas", price: 25, category: "Ramo"},
    {id: 3, name: "Flor corazon", description: "Flor en forma de corazón", price: 25, category: "Flor"},
    {id: 4, name: "Flor individual roja", description: "Flor roja individual", price: 8, category: "Flor"},
    {id: 5, name: "Flor individual lila", description: "Flor lila individual", price: 8, category: "Flor"},
    {
        id: 6,
        name: "Ramo de 7 rosas amarillas",
        description: "Ramo con siete rosas amarillas",
        price: 35,
        category: "Ramo"
    },
    {id: 7, name: "Ramo con girasol", description: "Ramo que incluye un girasol", price: 35, category: "Ramo"},
    {id: 8, name: "Girasol individual", description: "Girasol individual", price: 18, category: "Flor"},
    {id: 9, name: "Flor individual amarilla", description: "Flor amarilla individual", price: 8, category: "Flor"},
    {id: 10, name: "Adorno para carro", description: "Adorno decorativo para carro", price: 20, category: "Adorno"},
    {id: 11, name: "Adorno para carro U", description: "Adorno decorativo para carro", price: 20, category: "Adorno"},
    {id: 12, name: "Adorno para carro AL", description: "Adorno decorativo para carro", price: 20, category: "Adorno"},
    {id: 13, name: "Adorno para carro SC", description: "Adorno decorativo para carro", price: 20, category: "Adorno"},
    {
        id: 14,
        name: "Adorno para carro GIRASOL",
        description: "Adorno decorativo para carro",
        price: 20,
        category: "Adorno"
    }, {
        id: 15,
        name: "Ramo color chicle",
        description: "Ramo color chicle",
        price: 35,
        category: "Ramo"
    },
];


export default function Home() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);
    const [flowers, setFlowers] = useState<Flower[]>(flowersAll);

    const categories = [...new Set(flowersAll.map((flower) => flower.category))];

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

    const filterFlowers = (category: string) => {
        setFlowers(flowersAll.filter((flower) => flower.category === category))
    }
    return (
        <main className="min-h-screen container ">
            <div className=" text-purple-800  mx-auto px-4   ">
                <h2 className="lg:mx-52  mb-3">
                    Catálogo de flores
                </h2>
                <div className="lg:mx-52  flex flex-row gap-2 mb-3 overflow-x-auto">
                    <button
                        onClick={() => setFlowers(flowersAll)}
                        className="bg-purple-950 text-white px-2 py-1 rounded-md hover:bg-purple-700 active:bg-purple-900"
                    >
                        Todos
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => filterFlowers(category)}
                            className="bg-purple-950 text-white px-2 py-1 rounded-md hover:bg-purple-700 active:bg-purple-900"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <ProductList flowers={flowers} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
                <div className="h-52"></div>
            </div>
            <div className=" rounded-md fixed bottom-0 left-0 right-0 bg-white shadow-lg">
                <div
                    className=" md:mx-52  md:gap-10  px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    {cart.length > 0 && <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}
                    <WhatsAppButton cart={cart} total={total}/>
                </div>
            </div>
        </main>
    )
}

