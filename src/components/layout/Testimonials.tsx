// Local Components
import Testimonial from "../ui/Testimonial";
// Data
import {testimonials} from "@/data/testimonials"

export default function Testimonials () {

    return (
        <section id="testimonials" className="py-32 px-6 md:px-24 xl:px-64 text-tertiary">
            <div className="">
                <h2 className="text-4xl lg:text-6xl font-display font-bold">
                    What It’s Like to Work With Us                
                </h2>
                <p className="mt-4 lg:text-xl">
                    Designed with intention. Built to scale.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
                {testimonials.map((testimonial, index) =>
                    <Testimonial
                        key={index}
                        {...testimonial}
                    />
                )}
            </div>
        </section>
    );
}