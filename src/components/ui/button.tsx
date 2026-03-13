import * as React from "react";
import { cn } from "@/lib/utils";

function Button({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button"
      className={cn(
        "btn-primary w-full cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

export { Button };
