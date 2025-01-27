import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {CartItem} from "@/app/page";

interface CartProps {
    cart: CartItem[]
    addToCart: (flower:CartItem) => void
    removeFromCart: (flowerId: number) => void
}
export default function Cart({ cart, addToCart, removeFromCart }:CartProps) {
  return (
    <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
      <h2 className="text-xl font-bold text-purple-700 mb-2">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío</p>
      ) : (
        <ScrollArea className="h-24 w-full rounded-md border p-2">
          <ul>
            {cart.map((item) => (
                <li key={item.id} className="mb-2 last:mb-0 gap-3 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="font-semibold text-purple-600">{item.name}</div>
                        <div className="text-sm text-gray-600">
                            S/ {item.price.toFixed(2)} x {item.quantity} = S/ {(item.price * item.quantity).toFixed(2)}
                        </div>
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
                    </div>

                    <div className="flex items-center">
                        <Button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition-colors duration-300 text-xs "
                        >
                            -
                        </Button>
                        <span className="text-sm font-bold mr-2">{item.quantity}</span>
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

