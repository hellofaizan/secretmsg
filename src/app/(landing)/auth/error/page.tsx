import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
                <Image width={45} height={45} className="mr-2" src={"/assets/logo.png"} alt="logo" />
                Pouzz App
            </a>

            <div className="max-w-md w-full mx-auto rounded-sm md:rounded-lg p-3 md:p-8 shadow-input bg-transparent border">
                <h2 className="font-bold w-full text-5xl md:text-6xl text-neutral-800 text-center">
                    Error 🔐
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-4 text-center">
                    Opps! Something went wrong. Please try again later.
                </p>
            </div>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

