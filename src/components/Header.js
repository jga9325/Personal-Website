import React from 'react';

const Header = () => {
    return (
            <div className="main-info">
                <img
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                    alt="avatar"
                    className="avatar-image"
                />
                <div className="banner">
                    <h1 className="my-name">Jacob Auger</h1>
                    <h1 className="major">Software Engineering Student</h1>
                    <hr/>
                    <p>
                        Welcome to my personal website! Feel free to browse the site to learn more about my background, projects, and skills. If you have any questions, don't hesitate to contact me.
                    </p>
                    <button type="button" class="btn btn-danger">Contact Me</button>
                </div>
            </div>
    )
}

export default Header;