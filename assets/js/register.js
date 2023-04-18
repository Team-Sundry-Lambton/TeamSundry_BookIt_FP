const clientTab = document.querySelector('.nav-link.active');
const vendorTab = document.querySelector('.nav-link:not(.active)');
const isClientInput = document.getElementById('isClient');

clientTab.addEventListener('click', function() {
    isClientInput.value = 'true';
});

vendorTab.addEventListener('click', function() {
    isClientInput.value = 'false';
});
