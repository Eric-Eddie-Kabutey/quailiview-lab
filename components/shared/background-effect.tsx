import { cn } from "@/lib/utils";

interface BackgroundEffectProp {
    lineColor: string; // optional shape for line color
}

export default function BackgroundEffect({ lineColor}: BackgroundEffectProp) {
    return (
        <div className="absolute inset-0 -z-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={cn("w-3px border-r border-dashed", `border-${lineColor}`)}></div>
        ))}
      </div>
    )
}