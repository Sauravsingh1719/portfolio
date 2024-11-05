import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={`z-50 w-auto rounded-md border bg-neutral-200 p-2 text-white shadow-md outline-none transition-transform duration-200
      data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut 
      data-[side=bottom]:slide-in-from-top data-[side=left]:slide-in-from-right 
      data-[side=right]:slide-in-from-left data-[side=top]:slide-in-from-bottom ${className}`}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
