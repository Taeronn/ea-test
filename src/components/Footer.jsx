import React from 'react';
import ArrowRight from "./svg/ArrowRight.jsx";

$(document).ready(function() {
    $('#subscribe').on('submit', function(event) {
        event.preventDefault();

        $.ajax({
            url: 'post.php',
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert(response);
            }
        });
    });
});

const Footer = () => {
    return (
        <div className="footer">
            <form id="subscribe">
                <input type="email" name="email" id="email" placeholder="Enter your Email and get notified"/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Footer;