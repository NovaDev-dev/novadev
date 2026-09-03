// React Icons
import { BsMailbox2Flag, BsTelephoneOutboundFill } from "react-icons/bs";

// Local Components
import CalCom from "../ui/CalCom";

export default function Contact () {

    return (
        <section id="contact" className="relative w-full scroll-mt-28 overflow-hidden bg-tertiary text-white">
            {/* Soft brand glows */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-strong/20 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:px-12 lg:grid-cols-2 lg:gap-16 lg:py-28">

                {/* Left — copy + direct contact */}
                <div className="flex flex-col">
                    <span className="w-fit border-2 border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-light font-display">
                        Contact
                    </span>

                    <h2 className="mt-5 text-4xl font-bold tracking-tight font-display lg:text-6xl">
                        Let’s build<br />something great.
                    </h2>

                    <p className="mt-5 max-w-md text-lg text-light/80 font-body">
                        Tell us about your idea, your business, or your next big move — book a free 30-minute call, or reach out directly.
                    </p>

                    {/* Direct contact methods */}
                    <div className="mt-10 flex flex-col gap-4">
                        <a
                            href="mailto:juan@novadev.dev"
                            className="group flex items-center gap-4 border-4 border-light/20 bg-white/5 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-white/10"
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-xl text-white transition-colors duration-200 group-hover:bg-strong">
                                <BsMailbox2Flag />
                            </span>
                            <span className="flex flex-col text-left">
                                <span className="text-xs uppercase tracking-widest text-light/60 font-display">Email</span>
                                <span className="text-base font-body">juan@novadev.dev</span>
                            </span>
                        </a>

                        <a
                            href="tel:+15877078530"
                            className="group flex items-center gap-4 border-4 border-light/20 bg-white/5 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-white/10"
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-xl text-white transition-colors duration-200 group-hover:bg-strong">
                                <BsTelephoneOutboundFill />
                            </span>
                            <span className="flex flex-col text-left">
                                <span className="text-xs uppercase tracking-widest text-light/60 font-display">Phone</span>
                                <span className="text-base font-body">(587)-707-8530</span>
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right — booking calendar */}
                <div className="w-full border-4 border-light/30 bg-black/20 p-3 shadow-[8px_8px_0_0_var(--color-primary)] sm:p-5">
                    <CalCom />
                </div>
            </div>
        </section>
    );
}
