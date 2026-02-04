// Type
import { ServiceProps } from "@/types";

export default function Service ({title, image}: ServiceProps) {

    return(
        <article
            className="
                group
                snap-start
                min-w-48 md:min-w-72 lg:min-w-96
                transition-transform duration-150 ease-out
                hover:-translate-y-1
                flex flex-col
                relative
            "
            >
            {/* IMAGE AREA */}
            <div className="w-full overflow-hidden">
                <img
                src={`/service/${image}.png`}
                alt={title}
                className="
                    object-cover
                    h-auto
                    transition-transform duration-300 ease-out
                    group-hover:scale-105
                "
                />
            </div>

            <div className="w-full p-4 pointer-events-none bg-primary flex-1 flex items-center justify-center">
                <h3 className="md:text-xl lg:text-2xl font-display font-bold text-center">
                    {title}
                </h3>
            </div>
        </article>
    );
}