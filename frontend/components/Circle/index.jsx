"use client"
import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.css";

export default function Circle() {
    const circleRef = useRef();

    useEffect(() => {
        const moveCircle = (e) => {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;
        
            circleRef.current.style.left = x + "px";
            circleRef.current.style.top = y + "px";
        };

        document.addEventListener("mousemove", moveCircle);

        return () => {
            document.removeEventListener("mousemove", moveCircle);
        };
    }, []);

    return (
        <div className={styles.circle} ref={circleRef}></div>
    );
}