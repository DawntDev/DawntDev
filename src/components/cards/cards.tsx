import React from "react";
import "./cards.css";

export function LedCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="led">
            <div className="panel">
                {children}
            </div>
        </div>
    );
};