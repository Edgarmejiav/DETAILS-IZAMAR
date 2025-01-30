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
                                <li key={item.id} className=" w-full mb-2 last:mb-0 gap-3 flex justify-between items-center">

                                    <div className="  flex items-center space-x-4">
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
                                        <div>
                                        <div className="  font-semibold text-xs sm:text-sm text-purple-600 ">{item.name}</div>
                                        <div className=" flex text-xs sm:text-sm text-gray-600">
                                            {item.quantity !== 1 &&  <p> S/ {item.price.toFixed(2)} x <strong> {item.quantity} </strong>   = </p>}
                                           S/ {(item.price * item.quantity).toFixed(2)}
                                        </div>
                                        </div>

                                    </div>

                                    <div className="flex gap-1 items-center">
                                        <Button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-white font-bold  rounded transition-colors duration-300 text-xs "
                                        >

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="size-5">
                                                <path fill-rule="evenodd"
                                                      d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </Button>
                                        {/*<span className="text-sm font-bold mr-2">{item.quantity}</span>*/}
                                        <Button
                                            onClick={() => addToCart(item)}
                                            className="  text-white font-bold  rounded transition-colors duration-300 text-xs"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="size-5">
                                                <path fill-rule="evenodd"
                                                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                                      clip-rule="evenodd"/>
                                            </svg>

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

