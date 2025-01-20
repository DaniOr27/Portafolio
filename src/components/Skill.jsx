/**
 * @copyright 2024 DaniOr
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/images/illustrator.svg',
        label: 'Illustrator',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/photoshop.svg',
        label: 'Photoshop',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/blender.svg',
        label: 'Blender',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/html5.svg',
        label: 'HTML5',
        desc: 'Language'
    },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/python.svg',
        label: 'Python',
        desc: 'Language'
    },
    {
        imgSrc: '/images/git.svg',
        label: 'Git',
        desc: 'Software'
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Herramientas esenciales que utilizo
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Descubra las potentes herramientas y tecnologías que uso para crear sitios web y diseños excepcionales y de alta calidad.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skill