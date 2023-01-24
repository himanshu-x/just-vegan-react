import { useEffect } from "react";
import { useState, useRef } from "react"
export default function HorizontalMenu({ children }) {
    const [xPosition, setXPosition] = useState(0);
    const [shouldLeftArrowShow, setShouldLeftArrowShow] = useState(false);
    const [shouldRightArrowShow, setShouldRightArrowShow] = useState(false);

    const menuContainerRef = useRef(null);
    const scrollableRef = useRef(null);

    useEffect(() => {
        const { clientWidth: menuWidth, scrollWidth: menuScrollWidth } = menuContainerRef.current
        setShouldLeftArrowShow(xPosition > 0)
        setShouldRightArrowShow(menuWidth + xPosition < menuScrollWidth)
    }, [xPosition])

    const translateX = (direction) => {
        console.log(`translateXc aleld`);
        const { clientWidth: menuWidth, scrollWidth: menuScrollWidth } = menuContainerRef.current
        if (direction === 'right') {
            const scrollableDiff = menuScrollWidth - (xPosition + menuWidth);
            const xAdd = xPosition + (scrollableDiff > menuWidth ? menuWidth : scrollableDiff);
            setXPosition(xAdd);
        } else {
            // const xAdd = (menuScrollWidth - (xPosition + menuWidth)) > menuWidth ? xPosition - menuWidth : 0
            const xAdd = (xPosition - menuWidth) > 0 ? (xPosition - menuWidth) : 0;
            setXPosition(xAdd);
        }
        console.log(xPosition)
    }

    const styles = {
        transform: `translate(-${xPosition}px)`,
        'transitionDuration': '0.15s',
        'transitionTimingFunction': 'cubic-bezier(0.05,0,0,1)'
    };

    return (
        <div ref={menuContainerRef} className="menu-container flex flex-nowrap bg-gray-100 border m-2 p-2 rounded-md overflow-x-auto relative">
            {
                shouldLeftArrowShow &&
                <button className="p-2 bg-gray-300 mr-2 rounded-md drop-shadow-md absolute left-0 z-10" onClick={() => { translateX('left') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>
            }
            <div ref={scrollableRef} className="scrollable flex flex-nowrap" style={styles}>
                {children}
            </div>

            {

                shouldRightArrowShow &&
                <button className="p-2 bg-gray-300 ml-2 rounded-md absolute right-0 drop-shadow-md z-10" onClick={() => { translateX('right') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            }
        </div >
    )
}