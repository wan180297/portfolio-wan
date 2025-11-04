import { Projects } from "./Projects"

export const Header = () => {
    return(
        <header className="flex justify-between text-4xl p-3">
            <div className="bg-green-800 p-4 rounded-md">WanDuarte</div>
            <div>
                <ul className="flex gap-5">
                    <li className="border-b-5 border-b-green-800"><a href="">Home</a></li>
                    <li className="hover:border-b-5 border-b-green-800"><a href="#projects">Projetos</a></li>
                    <li className="hover:border-b-5 border-b-green-800"><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}