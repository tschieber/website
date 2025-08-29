'use client'
import { useState } from 'react';
import Link from 'next/link';

function Header() {
    const [isToggleChecked, setIsToggleChecked] = useState(false);

    const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsToggleChecked(event.target.checked);
        // Light theme
        if (event.target.checked) {
            document.body.dataset.theme = 'light';
            document.cookie = 'theme=light; path=/';
        }
        // Dark theme
        else {
            document.body.dataset.theme = 'dark';
            document.cookie = 'theme=dark; path=/';
        }
    };

    return (
        <header className="header">
            <Link
                href="/"
                className="header__logo"
                aria-label="Home">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="header__logo-asset">
                    <path d="M80-680v-80q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v80zm240 560v-80H160q-33 0-56.5-23.5T80-280v-80h80v80h640v-80h80v80q0 33-23.5 56.5T800-200H640v80zM192-520l104-104-56-56L80-520l160 160 56-56zm576 0L664-416l56 56 160-160-160-160-56 56z"/>
                </svg>
                <span className="header__logo-text">Tim Schieber</span>
            </Link>

            <div className="header__controls">
                <p>Color theme:</p>
                <label
                    className="toggle"
                    aria-label="Toggle color theme">
                    <input
                        type="checkbox"
                        name="toggleTheme"
                        checked={isToggleChecked}
                        onChange={handleToggleChange} />
                    <span className="toggle__switch"></span>
                </label>
            </div>
        </header>
    )
}

export default Header;