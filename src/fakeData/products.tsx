import type { Product } from "../components/ProductsToggle";

import proImg from '../assets/images/icon-pro.svg'
import arcadeImg from "../assets/images/icon-arcade.svg"
import advancedImg from "../assets/images/icon-advanced.svg"

export const products: Product[] = [
    {
        id: "1",
        description: "Arcade",
        monthlyAmount: 9,
        anualAmount: 90,
        icon: arcadeImg,
    },
    {
        id: "2",
        description: "Advanced",
        monthlyAmount: 12,
        anualAmount: 120,
        icon: advancedImg,
    },
    {
        id: "3",
        description: "Pro",
        monthlyAmount: 15,
        anualAmount: 150,
        icon: proImg,
    }
]