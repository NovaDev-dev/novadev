// React Icons
import { BsMailbox2Flag, BsTelephoneOutboundFill  } from "react-icons/bs";

// Local Components 
import CalCom from "../ui/CalCom";

export default function Contact () {

    return (
        <section className="w-full font-display text-white relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-primary/90" />

            <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-24 py-20">
                {/* Heading */}
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Get in Touch
                </h2>

                {/* Subheading */}
                <p className="mt-4 max-w-xl text-white/90 text-lg">
                Let’s talk about your idea, your business, or your next big move.
                </p>

                {/* Contact info */}
                <div className="flex flex-col md:flex-row gap-6 my-10 text-lg">
                    <a
                        href="mailto:juan@novadev.dev"
                        className="flex items-center gap-2 hover:underline underline-offset-4"
                    >   
                        <BsMailbox2Flag/>
                        juan@novadev.dev
                    </a>

                    <a
                        href="tel:+15877078530"
                        className="flex items-center gap-2 hover:underline underline-offset-4"
                    >
                        <BsTelephoneOutboundFill/>
                        (587)-707-8530
                    </a>
                </div>

                {/* Divider */}
                <div className="w-24 h-1 bg-white/30 rounded-full mb-10" />

                {/* Calendar */}
                <div className="w-full max-w-3xl bg-black/20 rounded-2xl p-6 shadow-lg">
                <CalCom />
                </div>
            </div>
        </section>

    );
}