"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }){

    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(params.id){
            fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then(data => {
            setTitle(data.title)
            setDescription(data.description)
        })
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(title != "" && description != ""){
            if(params.id) {
                fetch(`/api/tasks/${params.id}`, {
                    method: "PUT",
                    body: JSON.stringify({title, description}),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }) 
            }
            else{
                const res = await fetch("/api/tasks", {
                    method: "POST",
                    body: JSON.stringify({title, description}),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                
                const data = await res.json()
            }

            router.refresh()
            router.push("/")
        }
    };

    return(
        <div className="h-screen flex justify-center items-center">
            <form className="bg-slate-800 p-10"
                onSubmit={handleSubmit}
            >

                <label htmlFor="title" className="font-bold text-sm text-white">Titulo de la tarea</label>
                <input type="text" id="title"
                className="border border-gray-400 p-2 mb-4 w-full text-black"
                placeholder="Titulo"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />

                <label htmlFor="description" className="font-bold text-sm text-white">Descripcion de la tarea</label>
                <textarea rows="5" id="description"
                className="border border-gray-400 p-2 mb-4 w-full text-black"
                placeholder="Descripcion de la tarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                ></textarea>

                <div className="flex justify-between">
                    <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >{params.id? "Actualizar": "Crear"}</button>

                    {
                        params.id? 
                            <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={async () => {
                                await fetch(`/api/tasks/${params.id}`, {
                                    method: "DELETE"
                                })
                                router.refresh()
                                router.push("/")
                            }}
                            >Eliminar</button>
                        : null
                    }
                </div>
            </form>

        </div>
    )
}

export default NewPage;