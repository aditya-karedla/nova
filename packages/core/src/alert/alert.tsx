import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 border-gray-200 dark:border-gray-700",
        info: "bg-info-50 dark:bg-info-950 text-info-900 dark:text-info-100 border-info-200 dark:border-info-800 [&>svg]:text-info-600",
        success: "bg-success-50 dark:bg-success-950 text-success-900 dark:text-success-100 border-success-200 dark:border-success-800 [&>svg]:text-success-600",
        warning: "bg-warning-50 dark:bg-warning-950 text-warning-900 dark:text-warning-100 border-warning-200 dark:border-warning-800 [&>svg]:text-warning-600",
        destructive: "bg-danger-50 dark:bg-danger-950 text-danger-900 dark:text-danger-100 border-danger-200 dark:border-danger-800 [&>svg]:text-danger-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
