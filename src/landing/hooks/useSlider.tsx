import { useState, useCallback } from "react";

interface Item {
    name: string;
    image: string;
}

interface UseSliderProps {
    items: Item[];
    initialIndex?: number;
}

interface UseSliderReturn {
    currentItem: Item;
    currentIndex: number;
    next: () => void;
    prev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
    items: Item[];
}

const useSlider = ({
    items,
    initialIndex = 0,
}: UseSliderProps): UseSliderReturn => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const next = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    }, [items.length]);

    const prev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    }, [items.length]);

    return {
        currentItem: items[currentIndex],
        currentIndex,
        next,
        prev,
        hasNext: currentIndex < items.length - 1,
        hasPrev: currentIndex > 0,
        items,
    };
};

export default useSlider;
