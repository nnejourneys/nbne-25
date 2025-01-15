import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const headingVariants = cva("text-3xl font-bold mb-14", {
  variants: {
    variant: {
      default: "text-foreground text-xl font-semibold mb-3",
      sectiontitle:
        "text-center mb-14 relative before:absolute before:content-[''] before:h-0.5 before:w-32 before:-bottom-2.5 before:left-1/2 before:-translate-x-1/2 before:bg-primary after:absolute after:content-[''] after:h-2.5 after:w-2.5 after:rounded-full after:bg-background after:border-2 after:border-primary after:shadow-[0_0_0_5px_rgba(0,0,0)] after:shadow-background after:-bottom-3.5 after:left-1/2 after:-translate-x-1/2",
      sectiontitlehalf:
        "mb-14 relative before:absolute before:content-[''] before:h-0.5 before:w-16 before:-bottom-2.5 before:left-6 before:bg-primary after:absolute after:content-[''] after:h-2.5 after:w-2.5 after:rounded-full after:bg-transparent after:border-2 after:border-primary after:shadow-[0_0_0_5px_rgba(0,0,0)] after:shadow-transparent after:-bottom-3.5 after:left-2",
      sectiontitlesm: "bg-primary/20 text-foreground shadow",
    },
    size: {
      default: "text-md md:text-lg lg:text-xl",
      xxl: "text-5xl md:text-7xl lg:text-8xl",
      xl: "text-4xl md:text-6xl lg:text-7xl",
      lg: "text-3xl md:text-4xl lg:text-5xl",
      md: "text-2xl md:text-3xl lg:text-4xl",
      sm: "text-xl md:text-2xl lg:text-3xl",
      xs: "text-xs md:text-sm lg:text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  ({ children, className, variant, size, asChild = false, ...props }) => {
    const Comp = asChild ? Slot : "h2";
    return (
      <Comp
        className={cn(headingVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
