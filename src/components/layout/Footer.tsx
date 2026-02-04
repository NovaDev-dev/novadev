// React Icons
import { BsMailbox2Flag, BsTelephoneOutboundFill  } from "react-icons/bs";
// Local Components
import Logo from "../common/Logo";
import { PixelButton } from "../common/Button";

export default function Footer() {
  return (
    <section className="relative w-full h-96 overflow-hidden text-white font-display">
    {/* Background image */}
        <img
            src="/footer.png"
            alt=""
            className="w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/75" />

        {/* Content on top */}
        <div className="absolute inset-0 flex flex-row items-center z-10  px-6 md:px-24 xl:px-64">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">
                            Email
                        </h2>
                        <a
                            href="mailto:juan@novadev.dev"
                            className="flex items-center gap-2 hover:underline underline-offset-4"
                        >   
                            <BsMailbox2Flag/>
                            juan@novadev.dev
                        </a>
                        

                    </div>
                    <a className="ml-auto hidden md:block" href="/contact">
                        <PixelButton className="bg-strong border-tertiary">GET STARTED</PixelButton>                    
                    </a>
                </div>
                <div>
                    <h2 className="text-lg font-bold">
                        Call
                    </h2>
                    <a
                        href="tel:+15877078530"
                        className="flex items-center gap-2 hover:underline underline-offset-4"
                    >
                        <BsTelephoneOutboundFill/>
                        (587)-707-8530
                    </a>
                </div>

                <div className="flex justify-between items-center mt-12 w-full">
                    <Logo className="hidden md:block"/>
                    <p className="text-lg ml-auto">© NovaDev - A Local YYC Software Development Agency</p>
                </div>
            </div>
        </div>
    </section>
  );
}
