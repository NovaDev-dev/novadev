// Types
import { TestimonialProps } from "@/types";

export default function Testimonial ({ quote, photo, name, role,}: TestimonialProps) {
    return(
        <article className="
            w-full p-4 md:p-8 bg-muted/10 border-4 border-secondary
            shadow-[4px_4px_0_0_var(--color-primary),8px_8px_0_0_rgba(0,0,0,0.25)]
        ">
            <p className="italic md:text-3xl font-light">"{quote}"</p>
            <div className="flex flex-row items-center mt-8">
                <img 
                    src={`/testimonial/${photo}.png`} 
                    alt={`${photo} Picture`} 
                    className="w-16 h-16 rounded-full border border-primary mr-4"/>
                <div>
                    <p className="font-display font-bold  md:text-xl">{name}</p>
                    <p className="text-xs md:text-lg">{role}</p>
                </div>
            </div>
        </article>
    );
}