import Link from "next/link";

function NavBar() {
    return(
        <nav className="bg-slate-900 text-white font-bold">
            <div className="conteiner mx-auto flex justify-between items-center py-3 px-5">
                <Link href={"/"}>
                    <h3 className="text-3xl">TAREAS!</h3>
                </Link>
                <lu className="flex gap-x-2 text-lg">
                    <li className="">
                        <Link href={"/new"}>NEW</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>ABOUT</Link>
                    </li>
                </lu>
            </div>
        </nav>
    )
}

export default NavBar;