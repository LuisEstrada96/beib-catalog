import React from "react";

export const UpToTop = () => {
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className="float-to-top" onClick={ () => handleTop() }>
            <i class="fas fa-chevron-up"></i>
        </div>
    );
}

export default UpToTop;