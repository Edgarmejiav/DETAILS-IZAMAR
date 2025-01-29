import {ScrollArea} from "@/components/ui/scroll-area"
import {Button} from "@/components/ui/button"
import Image from "next/image";
import {CartItem} from "@/app/page";
import {useState} from "react";

interface CartProps {
    cart: CartItem[]
    addToCart: (flower: CartItem) => void
    removeFromCart: (flowerId: number) => void
}

export default function Cart({cart, addToCart, removeFromCart}: CartProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="w-full mb-4">
            <h2 className="  flex justify-between text-xl font-bold text-purple-700 mb-2">Carrito de Compras
                {!expanded ? <svg onClick={() => setExpanded(!expanded)} xmlns="http://www.w3.org/2000/svg" fill="none"
                                  viewBox="0 0 24 24" stroke-width="1.5"
                                  stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"/>
                </svg> : <svg onClick={() => setExpanded(!expanded)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"/>
                </svg>}


            </h2>
            {
                cart.length === 0 ? (
                    <p className="text-gray-600 h-14 ">Tu carrito está vacío</p>
                ) : (
                    <ScrollArea className={`${expanded ? "md:h-1/3 h-1/2 " : "h-14"} w-full rounded-md border p-2`}>
                    <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="mb-2 last:mb-0 gap-3 flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative w-16 h-16">
                                            <Image
                                                src={`/imgs/${item.name}.jpeg`}
                                                alt={item.name}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="top"
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="font-semibold text-purple-600">{item.name}</div>
                                        <div className="text-sm text-gray-600">
                                            {item.quantity !== 1 &&  <p> S/ {item.price.toFixed(2)} x <strong> {item.quantity} </strong>   = </p>}
                                           S/ {(item.price * item.quantity).toFixed(2)}
                                        </div>


                                    </div>

                                    <div className="flex items-center">
                                        <Button
                                            onClick={() => removeFromCart(item.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition-colors duration-300 text-xs "
                                        >
                                            -
                                        </Button>
                                        {/*<span className="text-sm font-bold mr-2">{item.quantity}</span>*/}
                                        <Button
                                            onClick={() => addToCart(item)}
                                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded transition-colors duration-300 text-xs"
                                        >
                                            +
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                )}
        </div>
    )
}

