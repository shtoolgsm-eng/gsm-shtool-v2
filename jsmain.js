function submitOrder(){
    const imei = document.getElementById('imei').value;
    const device = document.getElementById('device').value;
    const service = document.getElementById('service').value;
    const currency = document.getElementById('currency').value;
    sendOrder(imei, device, service, currency);
    alert("Order submitted successfully!");
}

// Admin / Dashboard functions
function login(){ alert("Login placeholder"); }
function register(){ alert("Register placeholder"); }
function logout(){ alert("Logout placeholder"); }
function newOrder(){ alert("New Order placeholder"); }
function viewOrders(){ alert("View Orders placeholder"); }
function manageUsers(){ alert("Manage Users placeholder"); }
function addService(){ alert("Add Service placeholder"); }
