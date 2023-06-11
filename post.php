<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  if (!empty($email)) {
    echo "Вы успешно подписались, почта: {$email}";
  }
}
?>
