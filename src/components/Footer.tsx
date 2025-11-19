export const Footer = () => {
    return(
        <footer id="contato">
            <div className="flex justify-center mt-4 mb-4">
                <h1 className="text-lg sm:text-2xl p-3 bg-green-700 rounded-md text-white">Contato</h1>
            </div>
            <div className="flex justify-center gap-10 p-4">
                <a href="https://www.linkedin.com/in/wanderson-duarte-vieira/"><img className="bg-blue-600 w-10 sm:w-20 rounded-full" src="/assets/linkedin.png" alt="" /></a>
                <a href="mailto:wan180297@gmail.com?subject=Contato%20do%20Portfólio&body=Olá%20Wanderson,%20gostaria%20de%20falar%20sobre..."><img className="w-10 sm:w-20 rounded-full" src="/assets/gmail.png" alt="" /></a>
                <a href="https://github.com/wan180297"><img className="bg-white w-10 sm:w-20 border rounded-full" src="/assets/github.png" alt="" /></a>
            </div>
        </footer>
    );
}