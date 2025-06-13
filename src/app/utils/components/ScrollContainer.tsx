// ScrollContainer.tsx (defined outside component)
import React from 'react';

export const ScrollContainer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ style, ...rest }, ref) => (
    <div
        ref={ref}
        style={{ ...style, overflow: 'auto', height: '100%' }}
        {...rest}
    />
));

ScrollContainer.displayName = 'ScrollContainer';
