<?php
header('Content-Type: application/json');
$imei = $_GET['imei'];
$device = $_GET['device'];
$service = $_GET['service'];
$currency = $_GET['currency'];

// كود تنفيذ الطلبات وربطها بالقاعدة
echo json_encode([
    "status"=>"success",
    "order_id"=>rand(1000,9999),
    "imei"=>$imei,
    "device"=>$device,
    "service"=>$service,
    "currency"=>$currency
]);
?>
