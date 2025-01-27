import { Button } from "@/components/ui/button"
import Image from "next/image"
import {CartItem, Flower} from "@/app/page";

interface ProductListProps {
    flowers: Flower[]
    addToCart: (flower: Flower) => void
    removeFromCart: (flowerId: number) => void
    cart: CartItem[]
}

export default function ProductList({ flowers, addToCart, removeFromCart, cart }: ProductListProps) {
  const getItemQuantity = (flowerId:number) => {
    const item = cart.find((item) => item.id === flowerId)
    return item ? item.quantity : 0
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {flowers.map((flower) => (
          <div
              key={flower.id}
              className="border-2 border-pink-300 p-4 rounded-lg shadow-lg bg-gradient-to-br from-pink-100 to-purple-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 mb-4">
              <Image
                  src={`/imgs/${flower.name}.jpeg`}
                  alt={flower.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"top"}
                  className="rounded-md"
              />
            </div>
            <h2 className="text-2xl font-bold text-black mb-2">{flower.name}</h2>
            {/*<p className="text-gray-600 mb-3">{flower.description}</p>*/}
            <div className="flex  justify-center items-center flex-row gap-3">
              <p className="text font-bold text-gray-400 mb-4 line-through ">
                S/ {(flowers[0].price + 5).toFixed(2)}
              </p>
              <p className="text-2xl font-bold text-[#E10714] mb-4">
                S/ {flowers[0].price.toFixed(2)}
              </p>
            </div>


            <div className="flex justify-between items-center">
              <Button
                  onClick={() => removeFromCart(flower.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                  disabled={getItemQuantity(flower.id) === 0}
              >
                -
              </Button>
              <span className="text-lg font-bold">{getItemQuantity(flower.id)}</span>
              <Button
                  onClick={() => addToCart(flower)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
              >
                +
              </Button>
            </div>
          </div>
      ))}
    </div>
  )
}

