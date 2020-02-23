import React, { useEffect } from 'react';
import FlappyBird from './game';

export default function Main() {
    useEffect(() => {
        const canvas = document.getElementById('bird-game');
        new FlappyBird(canvas);
    }, [])
    return <React.Fragment/>
}