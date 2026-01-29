export default function DeviceFrame({className = "", image, alt,}: { className:any ;image: string; alt: string;}) {
  return (
    <div className={`relative rounded-2xl bg-[#0b0b0b] p-4 shadow-2xl ${className}`}>
      
      {/* Camera */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full" />

      {/* Screen */}
      <div className="rounded-xl overflow-hidden bg-black">
        <img src={image} alt={alt} className="w-full h-auto" />
      </div>

      {/* Base */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-[#1a1a1a] rounded-b-xl" />
    </div>
  );
}
