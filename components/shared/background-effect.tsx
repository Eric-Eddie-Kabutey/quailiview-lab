import { cn } from "@/lib/utils";

interface BackgroundEffectProp {
    lineColor: string; // optional shape for line color
}

export default function BackgroundEffect({ lineColor}: BackgroundEffectProp) {
    return (
       <div className="absolute z-0 inset-0 flex justify-around opacity-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={cn("w-px border-r border-dashed ", lineColor.length > 1 ? `border-${lineColor}` : 'border-gray-500')} />
        ))}
      </div>
    )
}