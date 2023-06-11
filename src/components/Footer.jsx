import React from 'react';
import ArrowRight from "./svg/ArrowRight.jsx";

$(document).ready(function() {
    $('#subscribe').submit(function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение формы

        var formData = $(this).serialize(); // получаем данные формы для передачи через AJAX

        $.ajax({
            type: 'POST',
            url: 'post.php',
            data: formData,
            success: function(response) {
                alert('Вы подписались на обновления по электронной почте: ' + response); // выводим значение почты в alert
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});

const Footer = () => {
    return (
        <div className="footer">
            <form id="subscribe">
                <input type="email" placeholder="Enter your Email and get notified"/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Footer;