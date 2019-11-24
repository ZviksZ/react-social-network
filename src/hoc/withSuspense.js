import React, {Suspense} from "react";
import Preloader         from "../components/common/Preloader/Preloader.jsx";


export const withSuspense = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={ <Preloader/> }>
                <Component {...props}/>
            </Suspense>
        )
    }
    
}