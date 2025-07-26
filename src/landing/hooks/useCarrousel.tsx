import { useState } from "react";

const useCarrousel = ({ items }: { items: unknown[] }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
    };

    const desktopOffset = (1 - activeIndex) * (100 / 3);
    const mobileOffset = -activeIndex * 100;

    return {
        desktopOffset,
        mobileOffset,
        handleNext,
        handlePrev,
    };
};

export default useCarrousel;
