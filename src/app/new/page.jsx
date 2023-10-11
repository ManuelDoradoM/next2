"use client"

import { useRouter } from "next/navigation"

function NewPage(){

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const title = e.target.title.value
        const description = e.target.description.value

        if(title != "" && description != ""){
            const res = await fetch("/api/tasks", {
                method: "POST",
                body: JSON.stringify({title, description}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            
            const data = await res.json()

            console.log(data)

            router.push("/")
        }
    }

    return(
        <div className="h-screen flex justify-center items-center">
            <form className="bg-slate-800 p-10"
                onSubmit={handleSubmit}
            >

                <label htmlFor="title" className="font-bold text-sm text-white">Titulo de la tarea</label>
                <input type="text" id="title"
                className="border border-gray-400 p-2 mb-4 w-full text-black"
                placeholder="Titulo"
                />

                <label htmlFor="description" className="font-bold text-sm text-white">Descripcion de la tarea</label>
                <textarea rows="5" id="description"
                className="border border-gray-400 p-2 mb-4 w-full text-black"
                placeholder="Descripcion de la tarea"
                ></textarea>

                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Crear</button>
            </form>

        </div>
    )
}

export default NewPage;