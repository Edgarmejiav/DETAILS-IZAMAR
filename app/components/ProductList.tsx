import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CartItem, Flower } from "@/app/page";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ProductListProps {
    flowers: Flower[];
    addToCart: (flower: Flower) => void;
    removeFromCart?: (flowerId: number) => void;
    cart?: CartItem[];
}

export default function ProductList({ flowers, addToCart }: ProductListProps) {
    const [openImage, setOpenImage] = useState<number | null>(null);

    return (
        <div className="lg:mx-52 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {flowers.map((flower) => (
                <div
                    key={flower.id}
                    className="p-2 rounded-lg shadow-lg transition-all duration-300"
                >
                    <div className="relative h-36 sm:h-64 mb-1 overflow-hidden rounded-md">
                        <Image
                            onClick={() => setOpenImage(flower.id)}
                            src={`/imgs/${flower.name}.jpeg`}
                            alt={flower.name}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-md transform transition-transform duration-300 hover:scale-125"
                        />
                    </div>
                    <h2 className="text-sm sm:text-xl font-bold text-black truncate">
                        {flower.name}
                    </h2>
                    <div className="mb-1 flex justify-center items-center gap-3 flex-row">
                        <div className="text-xs sm:text-xl font-bold text-gray-500 line-through">
                            S/ {(flower.price + 5).toFixed(2)}
                        </div>
                        <div className="text-sm sm:text-xl font-bold text-[#E10714]">
                            S/ {flower.price.toFixed(2)}
                        </div>
                    </div>
                    <Button
                        onClick={() => addToCart(flower)}
                        className="w-full bg-purple-900 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-md text-xs sm:text-base transition-all duration-300 flex items-center justify-center gap-2"
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
                        Agregar
                    </Button>

                    {/* Modal de imagen */}
                    <AnimatePresence>
                        {openImage === flower.id && (
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setOpenImage(null)}
                            >
                                <motion.img
                                    src={`/imgs/${flower.name}.jpeg`}
                                    alt={flower.name}
                                    className="max-w-full max-h-full object-contain"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.8 }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
