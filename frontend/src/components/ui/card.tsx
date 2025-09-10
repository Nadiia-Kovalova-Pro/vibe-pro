import * as React from "react"

import { cn } from "@/lib/utils"

// Generic component factory to reduce repetition
function createCardComponent<T extends HTMLElement = HTMLDivElement>(
  componentName: string,
  defaultClassName: string,
  elementType: keyof JSX.IntrinsicElements = "div"
) {
  const Component = React.forwardRef<
    T,
    React.HTMLAttributes<T>
  >(({ className, ...props }, ref) => {
    const Element = elementType as any
    return (
      <Element
        ref={ref}
        className={cn(defaultClassName, className)}
        {...props}
      />
    )
  })
  Component.displayName = componentName
  return Component
}

// Main Card component
const Card = createCardComponent("Card", "rounded-xl border bg-card text-card-foreground shadow")

// Card sub-components with semantic elements where appropriate
const CardHeader = createCardComponent("CardHeader", "flex flex-col space-y-1.5 p-6")

const CardTitle = createCardComponent<HTMLHeadingElement>(
  "CardTitle",
  "font-semibold leading-none tracking-tight",
  "h2"
)

const CardDescription = createCardComponent("CardDescription", "text-sm text-muted-foreground")

const CardContent = createCardComponent("CardContent", "p-6 pt-0")

const CardFooter = createCardComponent("CardFooter", "flex items-center p-6 pt-0")

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
