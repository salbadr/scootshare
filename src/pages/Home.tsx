import { PiLightning } from "react-icons/pi";

import type { IconType } from "react-icons";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";


type CardsType = {
    icon: IconType,
    heading: string,
    description: string
}

export default function Home() {


    const cards: CardsType[] = [
        {
            icon: PiLightning,
            heading: 'Quick & Easy',
            description: 'Unlock and rid in seconds with our mobile app'
        },
        {
            icon: FaMapMarkerAlt,
            heading: 'Anywhere You Go',
            description: 'Find scooters near you in all major city areas'
        },
        {
            icon: IoShieldOutline,
            heading: 'Safe & Reliable',
            description: 'Regular maintenance and safety checks on all scooters'
        },
        {
            icon: FaRegClock,
            heading: '24/7 Available',
            description: 'Ride whenever you need, day or night'
        }
    ]

    return (
        <section className="w-full h-full">
            {
                //Main Welcome Section 
            }
            <div >
                <div className="text-center">
                    <h2 className="text-4xl mb-3 font-bold">Why Choose ScootShare?</h2>
                    <p className="text-stone-500">Experience the easiest and most sustainable way to get around the city</p>
                </div>
                <div className="flex justify-evenly gap-10 flex-wrap items-center mt-20">

                    {cards.map(card => (
                        <div className="card border 
                        border-solid rounded-xl border-zinc-200
                        flex justify-evenly items-center 
                        flex-col hover:shadow-lg p-6 gap-6">
                            {<card.icon className="text-2xl text-amber-600" />}
                            <h3 className="text-2xl font-semibold">{card.heading}</h3>
                            <p className="text-center w-3xs">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}