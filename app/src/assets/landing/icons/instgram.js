import React from "react";
const SVG = ({
    style= {},
    fill = "#000",
    width = "100%",
    viewBox = "0 0 26 27"
}) => (
    <svg 
    width={width} 
    style={style} 
    height={width} 
    viewBox={viewBox} 
    xmlns="http://www.w3.org/2000/svg">
<path d="M18.4167 2.25C19.8521 2.25 21.213 2.84063 22.2422 3.90234C23.2713 4.96406 23.8333 6.38438 23.8333 7.875V19.125C23.8333 20.6156 23.2646 22.0289 22.2422 23.0977C21.2198 24.1664 19.8521 24.75 18.4167 24.75H7.58331C6.14788 24.75 4.78697 24.1594 3.75782 23.0977C2.72866 22.036 2.16669 20.6156 2.16669 19.125V7.875C2.16669 6.38438 2.73542 4.9711 3.75782 3.90234C4.78021 2.8336 6.14788 2.25 7.58331 2.25H18.4167ZM18.4167 0H7.58331C3.41254 0 0 3.54375 0 7.875V19.125C0 23.4562 3.41254 27 7.58331 27H18.4167C22.5875 27 26 23.4562 26 19.125V7.875C26 3.54375 22.5875 0 18.4167 0Z" fill="white"/>
<path d="M21.2857 7.64287C20.3357 7.64287 19.5714 6.8308 19.5714 5.82143C19.5714 4.81205 20.3357 4 21.2857 4C22.2286 4 23 4.81205 23 5.82143C23 6.8308 22.2286 7.64287 21.2857 7.64287ZM13.8571 8.85713C16.3786 8.85713 18.4286 11.0353 18.4286 13.7143C18.4286 16.3933 16.3786 18.5714 13.8571 18.5714C11.3357 18.5714 9.28571 16.3933 9.28571 13.7143C9.28571 11.0353 11.3357 8.85713 13.8571 8.85713ZM13.8571 6.42857C10.0714 6.42857 7 9.69199 7 13.7143C7 17.7366 10.0714 21 13.8571 21C17.6429 21 20.7143 17.7366 20.7143 13.7143C20.7143 9.69199 17.6429 6.42857 13.8571 6.42857Z" fill="white"/>
</svg>

);

export default SVG;