import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Neon cyberpunk variants
        neon: "bg-gradient-primary text-background font-semibold border border-neon-blue/30 hover:border-neon-blue hover:glow-blue hover:scale-105 transition-all duration-300",
        "neon-outline": "border-2 border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue hover:text-background hover:glow-blue transition-all duration-300",
        "neon-purple": "bg-gradient-accent text-background font-semibold border border-neon-purple/30 hover:border-neon-purple hover:glow-purple hover:scale-105 transition-all duration-300",
        "neon-cyan": "bg-neon-cyan text-background font-semibold hover:glow-cyan hover:scale-105 transition-all duration-300",
        "glass": "bg-card/10 backdrop-blur-md border border-neon-blue/20 text-foreground hover:bg-card/20 hover:border-neon-blue/40 transition-all duration-300",
        "hero": "bg-gradient-primary text-background font-bold text-lg px-8 py-4 rounded-lg border border-neon-blue/30 hover:border-neon-blue hover:glow-blue hover:scale-105 animate-glow-pulse transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };