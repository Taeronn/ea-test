import React from 'react';
import ArrowRight from "./svg/ArrowRight.jsx";



const Footer = ({setActive}) => {
    $(document).ready(function() {
        $('#subscribe').on('submit', function(event) {
            event.preventDefault();
            setActive(true)
            $('#email').val('')

            $.ajax({
                url: 'post.php',
                method: 'POST',
                data: $(this).serialize(),
                success: function(response) {
                    console.log(response); //github pages работает только со статическими сайтами ;(
                },
                error: function(xhr, status, error) {
                    console.error(error);
                }
            });
        });
    });

    return (
        <div className="footer">
            <form id="subscribe">
                <input type="email" name="email" id="email" placeholder="Enter your Email and get notified" size="33" required/>
                <button type="submit" id="subscribe-submit">
                    <ArrowRight/>
                </button>
            </form>
        </div>
    );
};

export default Footer;