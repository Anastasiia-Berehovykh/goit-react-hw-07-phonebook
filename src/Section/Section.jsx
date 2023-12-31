import s from './Section.module.css';


export default function Section({ title, children }) {
    return (
    <section className={s.container}>
        <h2 className={s.title}>{title}</h2>
        {children}
    </section>
);
} 

