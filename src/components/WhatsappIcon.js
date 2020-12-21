import React from "react";

export const WhatsappIcon = ( { phoneNumber } ) => {
    return (
        <div className="float-whatsapp">
            <a href={`https://wa.me/52${phoneNumber}`} target="_blank">
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
}

export default WhatsappIcon;