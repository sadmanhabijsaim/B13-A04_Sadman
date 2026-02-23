let currentTab = 'all';

function changeTab(tabName, buttonElement) {
    currentTab = tabName;
    
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(btn => {
        btn.classList.remove('bg-[#4285F4]', 'text-white', 'border-[#4285F4]');
        btn.classList.add('bg-white', 'text-gray-500', 'border-gray-200');
    });
    
    buttonElement.classList.add('bg-[#4285F4]', 'text-white', 'border-[#4285F4]');
    buttonElement.classList.remove('bg-white', 'text-gray-500', 'border-gray-200');
    
    refreshUI();
}

function updateStatus(jobId, newStatus) {
    const card = document.getElementById(jobId);
    const currentStatus = card.getAttribute('data-status');
    
    if (currentStatus === newStatus) {
        card.setAttribute('data-status', 'all');
    } else {
        card.setAttribute('data-status', newStatus);
    }
    
    refreshUI();
}