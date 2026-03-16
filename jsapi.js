function sendOrder(imei, device, service, currency){
    fetch(`api/order.php?imei=${imei}&device=${device}&service=${service}&currency=${currency}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
