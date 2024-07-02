import { useState, useEffect } from 'react';

const CountDownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerId);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Countdown Timer</h2>
            <div className="text-3xl font-mono">
                {formatTime(timeLeft)}
            </div>
        </div>
    );
};

export default CountDownTimer;
