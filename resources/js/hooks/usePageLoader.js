import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function usePageLoader(delay = 6000) {
    const [loading, setLoading] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [pathname]);

    return loading;
}
