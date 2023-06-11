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
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    });
});

const Footer = () => {
    return (
        <div className="footer">
            <form id="subscribe">
                <input type="email" name="email" id="email" placeholder="Enter your Email and get notified" size="33"/>
                <button type="submit" id="subscribe-submit">
                    <ArrowRight/>
                </button>
            </form>
        </div>
    );
};

export default Footer;