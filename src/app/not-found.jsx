import Link from "next/link";

function NotFound() {
    return(
        <section className="flex h-screen justify-center items-center">
            <div className="">
                <h1 className="text-4xl font-bold">Error 404 Not Found</h1>
                <Link href="/">
                    <p className="text-center font-bold">Volver al inicio</p>
                </Link>
            </div>
        </section>
    )
}

export default NotFound;