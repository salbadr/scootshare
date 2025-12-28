import { PiLightning } from "react-icons/pi";

export default function Home() {
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
                    <div className="card border-1 border-solid rounded flex justify-evenly items-center flex-col w-xs h-40">
                        <PiLightning className="text-2xl text-amber-600" />
                        <h3 className="text-2xl font-semibold">Quick & Easy</h3>
                        <p className="text-center">Unlock and rid in seconds with our mobile app</p>
                    </div>
                    <div className="card border-1 border-solid rounded flex justify-evenly items-center flex-col w-xs h-40">
                        <PiLightning className="text-2xl text-amber-600" />
                        <h3 className="text-2xl font-semibold">Quick & Easy</h3>
                        <p className="text-center">Unlock and rid in seconds with our mobile app</p>
                    </div>
                    <div className="card border-1 border-solid rounded flex justify-evenly items-center flex-col w-xs h-40">
                        <PiLightning className="text-2xl text-amber-600" />
                        <h3 className="text-2xl font-semibold">Quick & Easy</h3>
                        <p className="text-center">Unlock and rid in seconds with our mobile app</p>
                    </div>
                    <div className="card border-1 border-solid rounded flex justify-evenly items-center flex-col w-xs h-40">
                        <PiLightning className="text-2xl text-amber-600" />
                        <h3 className="text-2xl font-semibold">Quick & Easy</h3>
                        <p className="text-center">Unlock and rid in seconds with our mobile app</p>
                    </div>

                </div>
            </div>

        </section>
    )
}