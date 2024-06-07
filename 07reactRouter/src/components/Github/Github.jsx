import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData(); // dramatically simplifies loading data into your route components
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Mudasar2016')
    //         .then(res => res.json())
    //         .then(data => setData(data));
    // }, [data])

    return (
        <div class="w-[300px] rounded-md border mt-4 justify-center ">
            <img
                src={data.avatar_url}
                alt="Laptop"
                class="rounded-full object-cover"
            />
            <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                    {data.name} &nbsp;
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                
                <button
                    type="button"
                    class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Github followers : {data.followers}
                </button>
            </div>
        </div>



    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/Mudasar2016");
    return response.json();
}