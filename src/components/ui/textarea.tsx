import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full rounded-lg border border-stone/30 bg-cream px-4 py-3.5 font-sans text-base text-foreground placeholder:text-stone transition-colors focus:border-dark-azure focus:outline-none focus:ring-1 focus:ring-dark-azure resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
