import './Greet.css';
import React, { useEffect, useState } from 'react';

function Greet()
{
const text = "New day, new beginnings, new welcomes.";
const [displayedText, setDisplayedText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);
const typingSpeed = 100; // Speed for typing
const deletingSpeed = 50; // Speed for deleting

useEffect(() => {
    let index = 0;
    let currentText = "";

    const interval = setInterval(() => {
        if (!isDeleting) {
            // Typing forward
            if (index < text.length) {
                currentText += text[index];
                setDisplayedText(currentText);
                index++;
            } else {
                // Start backspacing after reaching the end
                setIsDeleting(true);
            }
        } else {
            // Backspacing
            if (index > 0) {
                index--;
                currentText = text.slice(0, index);
                setDisplayedText(currentText);
            } else {
                // Reset to start typing again
                setIsDeleting(false);
                index = 0;
            }
        }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval); // Cleanup on component unmount
}, [isDeleting]);

    return (
        <div className="content">
        <h1 className="animated-text">{displayedText}</h1>
        </div>
    );
}

export default Greet;


