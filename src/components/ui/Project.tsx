// Local UI Components
import DeviceFrame from "../common/Frame"
// Types
import { ProjectProps } from "@/types"

export default function Project (props: ProjectProps) {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <DeviceFrame
                className={`${props.reverse ? "lg:order-last" : ""}`}
                image={`/showcase/${props.image}.png`}
                alt={`${props.image} UI`}
            />
    
            <div>
                <div className="flex items-center gap-4">
                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                        <img
                        src={`/showcase/${props.logo}.png`}
                        alt={`${props.logo} Logo`}
                        className="w-12 h-12 object-contain"
                        />
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-display font-bold">
                        {props.title}
                    </h3>
                </div>
                
                <p className="mt-4 lg:text-xl max-w-xl">{props.desc}</p>

                <ul className="mt-6 text-sm lg:text-lg font-light space-y-1">
                    {props.details.map((text, i) => (
                        <li key={i}>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
    
                <button className="mt-6 text-sm lg:text-lg text-primary font-semibold">
                  View case study →
                </button>
            </div>
        </div>
    )
}

// export function ProjectWidget () {

//     if (hidden) return null

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
//             <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
//                 <button
//                 onClick={onClose}
//                 className="absolute right-4 top-4 text-gray-500 hover:text-black"
//                 >
//                  ✕
//                 </button>
//             </div>
//         </div>
//     )
// }