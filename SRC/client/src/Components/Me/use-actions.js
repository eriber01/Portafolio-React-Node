import { useState, useEffect, useContext } from "react";

import ScrollContext from "../../context/ScrollContext";

export const UseActions = () => {
    const context = useContext(ScrollContext);
    const [ClassState, setClassState] = useState(["me"]);

    const HandleAnimation = (scroll) => {
        if (scroll.ScrollData >= 700) {
            setClassState("move-all");
        }
    };

    useEffect(() => {
        HandleAnimation(context);
    }, [context]);

    return [{ ClassState }];
};
