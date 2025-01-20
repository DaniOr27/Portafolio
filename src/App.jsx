/**
 * @copyright 2024 DaniOr
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import Header from "./components/Header"
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { element } from 'prop-types';
import { ToastContainer } from 'react-toastify';
/* import './toastify.css';  */


const App = () => {

    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');

        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true
                },
                y:0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        })
    });

    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Contact />
            </main>
            <Footer />
            <ToastContainer
                position="top-right"  // Posiciona las notificaciones en la esquina superior derecha
                autoClose={3000}      // Se cierra automáticamente después de 3 segundos
                hideProgressBar={false}  // Muestra la barra de progreso
                closeOnClick
                pauseOnHover
                draggable
                theme="dark"
                progress={undefined}  // Puedes eliminar la barra de progreso si prefieres
            />
        </ReactLenis>
    )

}


export default App;