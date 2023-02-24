import React, { useState, useEffect } from "react";
import Circle from "../components/loading/Circle";
const ContentLoadding = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === 'complete') {
            setLoading(false);
        } else {
            window.onload = () => setLoading(false)
        }
    }, []);

    return (
        <>
            {loading &&<p>test</p>
            }
                <Circle top="20px"/>
        </>
    );
};

export default ContentLoadding;