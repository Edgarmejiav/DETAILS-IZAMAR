import {Button} from "@/components/ui/button"
import Image from "next/image"
import {CartItem, Flower} from "@/app/page";

interface ProductListProps {
    flowers: Flower[]
    addToCart: (flower: Flower) => void
    removeFromCart?: (flowerId: number) => void
    cart?: CartItem[]
}

export default function ProductList({flowers, addToCart}: ProductListProps) {
    // const getItemQuantity = (flowerId: number) => {
    //     const item = cart.find((item) => item.id === flowerId)
    //     return item ? item.quantity : 0
    // }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {flowers.map((flower) => (
                <div
                    key={flower.id}
                    className="border-2 border-pink-300 p-4 rounded-lg shadow-lg bg-gradient-to-br from-pink-100 to-purple-100
                  transition-all duration-300"
                >
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md">
                        <Image
                            src={`/imgs/${flower.name}.jpeg`}
                            alt={flower.name}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-md transform transition-transform duration-300 hover:scale-125"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-2">{flower.name}</h2>

                    <div className="flex justify-center items-center flex-row gap-3">
                        <p className="text font-bold text-gray-400 mb-4 line-through">
                            S/ {(flower.price + 5).toFixed(2)}
                        </p>
                        <p className="text-2xl font-bold text-[#E10714] mb-4">
                            S/ {flower.price.toFixed(2)}
                        </p>
                    </div>
                    <Button
                        onClick={() => addToCart(flower)}
                        className="w-full bg-gradient-to-r from-green-400 to-blue-500
             hover:from-green-500 hover:to-blue-600
             text-white font-bold py-2 px-4 rounded-full text-sm sm:text-base
             transition-all duration-300 flex items-center justify-center
            gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h2.736a.75.75 0 0 1 .705.497L6.75 6.75m0 0h13.085a.75.75 0 0 1 .726.913l-1.436 6.445a.75.75 0 0 1-.726.587H8.25m-1.5-8.25 1.5 8.25m-1.5-8.25H4.125m4.125 12a.75.75 0 1 1-1.5 0m10.5 0a.75.75 0 1 1-1.5 0"
                            />
                        </svg>
                        Agregar al Carrito
                    </Button>

                </div>
            ))}
        </div>

    )
}

