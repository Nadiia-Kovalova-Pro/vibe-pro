
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Factory function to create reusable card components with consistent styling and ref support.
 * Reduces repetition and enforces semantic HTML usage for subcomponents.
 *
 * @template T - The HTML element type for the component (defaults to div)
 * @param {string} componentName - Display name for React DevTools
 * @param {string} defaultClassName - Default Tailwind CSS classes for styling
 * @param {keyof JSX.IntrinsicElements} elementType - Semantic HTML element type (defaults to 'div')
 * @returns {React.ForwardRefExoticComponent} - The generated card component
 */
function createCardComponent<T extends HTMLElement = HTMLDivElement>(
  componentName: string,
  defaultClassName: string,
  elementType: keyof JSX.IntrinsicElements = "div"
) {
  // Forward ref to support parent ref usage (e.g., for animations or focus)
  const Component = React.forwardRef<
    T,
    React.HTMLAttributes<T>
  >(({ className, ...props }, ref) => {
    // Use the specified semantic element type
    const Element = elementType as any
    return (
      <Element
        ref={ref}
        // Merge default and custom classes for flexibility
        className={cn(defaultClassName, className)}
        {...props}
      />
    )
  })
  // Set display name for easier debugging in React DevTools
  Component.displayName = componentName
  return Component
}

/**
 * Main Card container component.
 * Provides rounded corners, border, background, and shadow styling.
 */
const Card = createCardComponent(
  "Card",
  "rounded-xl border bg-card text-card-foreground shadow"
)

/**
 * CardHeader: Section for card header content (e.g., title, actions).
 * Uses flex layout and padding for spacing.
 */
const CardHeader = createCardComponent(
  "CardHeader",
  "flex flex-col space-y-1.5 p-6"
)

/**
 * CardTitle: Semantic heading for card title.
 * Uses <h2> for accessibility and SEO.
 */
const CardTitle = createCardComponent<HTMLHeadingElement>(
  "CardTitle",
  "font-semibold leading-none tracking-tight",
  "h2"
)

/**
 * CardDescription: Text for card subtitle or description.
 * Uses muted color and smaller font for secondary info.
 */
const CardDescription = createCardComponent(
  "CardDescription",
  "text-sm text-muted-foreground"
)

/**
 * CardContent: Main content area of the card.
 * Adds padding and removes top padding for header alignment.
 */
const CardContent = createCardComponent(
  "CardContent",
  "p-6 pt-0"
)

/**
 * CardFooter: Section for card actions or summary.
 * Uses flex layout and padding for alignment.
 */
const CardFooter = createCardComponent(
  "CardFooter",
  "flex items-center p-6 pt-0"
)

// Export all card components for use in other parts of the app
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
