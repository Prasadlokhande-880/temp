import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    const [isDark, setIsDark] = useState(false); // Assuming isDark is managed by a state

    // Your useEffect and other code here

    return (
        <div className={`relative flex min-h-screen items-center justify-center overflow-hidden ${isDark ? 'dark' : ''}`}>
            <div className={`px-6 py-16 text-center font-semibold ${isDark ? 'text-white' : ''} before:container before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0)_50.73%)] before:aspect-square before:opacity-10 md:py-20`}>
                <div className="relative">
                    <img
                        src={isDark ? '/assets/images/error/404-dark.svg' : '/assets/images/error/404-light.svg'}
                        alt="404"
                        className="mx-auto -mt-10 w-full max-w-xs object-cover md:-mt-14 md:max-w-xl"
                    />
                    <p className={`mt-5 text-base ${isDark ? 'text-white' : ''}`}>The page you requested was not found!</p>
                    <Link to="/" className={`btn btn-gradient mx-auto !mt-7 w-max border-0 uppercase shadow-none ${isDark ? 'text-white' : ''}`}>
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;
