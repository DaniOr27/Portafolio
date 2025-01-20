/**
 * @copyright 2024 DaniOr
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
        label: 'Inicio',
        href: '#home'
    },
    {
        label: 'Sobre mí',
        href: '#about'
    },
    {
        label: 'Proyectos',
        href: '#work'
    },/* 
    {
        label: 'Reviews',
        href: '#reviews'
    }, */
    {
        label: 'Contáctame',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/danior27'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ramiro-daniel-ortiz/'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/dnior27'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/dnior27/'
    }
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            ¡Trabajemos juntos hoy!
                        </h2>

                        <ButtonPrimary 
                            href="mailto:danielorperfxd@gmail.com"
                            label="Iniciar proyecto"
                            icon="chevron_right"
                            classes="reveal-up"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">

                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href}, key) => (
                                    <li key={key}>
                                        <a 
                                            href={href} 
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>

                            <ul>
                                {socials.map(({ label, href}, key) => (
                                    <li key={key}>
                                        <a 
                                            href={href} 
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a 
                        href="/" 
                        className="logo reveal-up"
                    >
                        <img 
                        src="https://raw.githubusercontent.com/DaniOr27/Portafolio/5fa673d224c933463d56c93b9cbd074e850940c4/public/images/favicon.svg" 
                        width={40}
                        height={40}
                        alt="Logo" 
                        />
                    </a>

                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024 <span 
                        className="text-zinc-200">DaniOr</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
