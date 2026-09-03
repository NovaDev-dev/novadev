// Type
import { ServiceProps } from "@/types";

export default function Service ({ title, desc, index }: ServiceProps & { index: number }) {

    return(
        <article
            className="
                group
                snap-start
                min-w-48 md:min-w-72 lg:min-w-96
                flex flex-col
                p-6 lg:p-8
                bg-light text-tertiary
                border-4 border-tertiary
                shadow-[6px_6px_0_0_var(--color-strong)]
                transition-all duration-200 ease-out
                hover:-translate-y-1
                hover:bg-strong hover:text-light
                hover:shadow-[10px_10px_0_0_var(--color-light)]
            "
            >
            <span className="font-display font-bold text-4xl lg:text-5xl text-strong transition-colors duration-200 group-hover:text-light">
                {String(index + 1).padStart(2, "0")}
            </span>

            <span className="mt-4 block h-1 w-12 bg-strong transition-colors duration-200 group-hover:bg-light" />

            <h3 className="mt-5 text-xl lg:text-2xl font-display font-bold">
                {title}
            </h3>

            <p className="mt-3 text-sm lg:text-base leading-snug text-tertiary/80 transition-colors duration-200 group-hover:text-light/90">
                {desc}
            </p>
        </article>
    );
}
