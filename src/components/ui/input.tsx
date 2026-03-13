import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-lg border border-stone/30 bg-cream px-4 py-3.5 font-sans text-base text-foreground placeholder:text-stone transition-colors focus:border-dark-azure focus:outline-none focus:ring-1 focus:ring-dark-azure",
        className
      )}
      {...props}
    />
  );
}

export { Input };
