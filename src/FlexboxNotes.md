Flexbox involves the Container, and the items inside.

The CSS Flexbox Container Properties

align-content Modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines
align-items Vertically aligns the flex items when the items do not use all available space on the cross-axis
display Specifies the type of box used for an HTML element
flex-direction Specifies the direction of the flexible items inside a flex container
flex-flow A shorthand property for flex-direction and flex-wrap
flex-wrap Specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line
justify-content Horizontally aligns the flex items when the items do not use all available space on the main-axis

Items

align-self Specifies the alignment for a flex item (overrides the flex container's align-items property)
flex A shorthand property for the flex-grow, flex-shrink, and the flex-basis properties
flex-basis Specifies the initial length of a flex item
flex-grow Specifies how much a flex item will grow relative to the rest of the flex items inside the same container
flex-shrink Specifies how much a flex item will shrink relative to the rest of the flex items inside the same container
order Specifies the order of the flex items inside the same container

.container {

display:flex;
display:inline-flex;

/_ flex box container _/
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;

    flex-direction: inherit;
    flex-direction: initial;
    flex-direction: unset;


    flex-wrap: nowrap;
    flex-wrap: wrap;
    flex-wrap: wrap-reverse;

    flex-wrap: inherit;
    flex-wrap: initial;
    flex-wrap: unset;

    /* shorthand defines flex-direction and flex-wrap */
    flex-flow: column wrap;


    flex-direction:column;
    flex-direction:column-reverse;
    flex-direction:row;
    flex-direction:row-reverse;

    flex-direction: inherit;
    flex-direction: initial;
    flex-direction: unset;

    /* Main Align */
    justify-content:flex-start;
    justify-content:flex-end;
    justify-content:center;
    justify-content:space-between;
    justify-content:space-around;
    /* not in flex box */
    justify-content:space-evenly;

    justify-content:inherit;
    justify-content:initial;
    justify-content:unset;

    /* Cross Align */
    align-items:baseline;
    align-items:center;
    align-items:flex-end;
    align-items:flex-start;
    align-items:stretch;

    align-items:inherit;
    align-items:initial;
    align-items:unset;

    /* Multi Align */
    align-content: flex-start;
    align-content: flex-end;
    align-content: center;
    align-content: space-between;
    align-content: space-around;
    align-content: stretch;
    /* not in flex box, flex grid */
    align-content: space-evenly;

    align-content:inherit;
    align-content:initial;
    align-content:unset;

/_ flex item _/

align-self:auto;
align-self:flex-start;
align-self:flex-end;
align-self:center;
align-self:baseline;
align-self:stretch;

/_ Shorthand for flex-grow flex-shrink and flex-basis _/
flex: 1 0 50px;

flex-grow:1;
flex-shrink:1;
flex-basis: 100px;

order: 1;

width: 200px;
height: 200px;
}
