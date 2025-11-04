export const SectionAbout = () => {
    return (
        <section className="grid grid-cols-2 justify-center items-end p-3 h-full">
            <div>
                <img src="/assets/minhafoto.png" alt="" className="h-full" />
            </div>
            <p className="text-4xl/10 p-4 bg-green-800 rounded-md">
                "Meu nome é Wanderson Duarte, e depois de anos trabalhando com engenharia
                civil, descobri na programação uma nova forma de construir — agora,
                ideias e experiências digitais. Sou organizado, comprometido e
                apaixonado por resolver problemas. Atualmente foco meus estudos em
                React, Tailwind, Git e GitHub, TypeScript, HTML, CSS e JavaScript, buscando me tornar um
                desenvolvedor front-end cada vez mais completo."
            </p>
        </section>
    )
}