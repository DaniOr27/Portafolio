/**
 * @copyright 2024 DaniOr
 * @license Apache-2.0
 */

const aboutItems = [
    {
    label: 'Proyectos realizados',
    number: 5
    },
    {
    label: 'Años de experiencia',
    number: 2
    }
];

const About = () => {
    return (
        <section
        id="about"
        className="section"
        >
            <div className="container">
                
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    ¡Bienvenidos! Soy Ramiro Daniel Ortiz, pero mis amigos me llaman Dani. Me especializo en Desarrollo Web, Diseño 3D y Análisis de Sistemas con pasión por crear soluciones digitales innovadoras. Combinando creatividad, tecnología y análisis, transformo tu visión en una experiencia digital eficiente y atractiva.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label} </p>
                                </div>
                            ))
                        }

                        <img 
                            src="https://raw.githubusercontent.com/DaniOr27/Portafolio/c219260f00ac2149601fe6d3df624dd2fc75516b/public/images/favicon.svg" 
                            alt="Logo" 
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
