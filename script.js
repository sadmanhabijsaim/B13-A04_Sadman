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

function deleteCard(jobId) {
    const card = document.getElementById(jobId);
    if (card) {
        card.remove();
        refreshUI();
    }
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

function refreshUI() {
    const cards = document.querySelectorAll('.job-card');
    const noJobsDiv = document.getElementById('no-jobs');
    
    let interviewCount = 0;
    let rejectedCount = 0;
    let visibleCount = 0;

    cards.forEach(card => {
        const status = card.getAttribute('data-status');
        if (status === 'interview') interviewCount++;
        if (status === 'rejected') rejectedCount++;

        if (currentTab === 'all' || status === currentTab) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }

        const badge = card.querySelector('span.uppercase');
        if (badge) {
            if (status === 'interview') {
                badge.innerText = 'Interviewing';
                badge.className = "inline-block bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-4 py-3 rounded mb-4 uppercase cursor-pointer";
            } else if (status === 'rejected') {
                badge.innerText = 'Rejected';
                badge.className = "inline-block bg-[#FEE2E2] text-[#991B1B] text-[10px] font-bold px-4 py-3 rounded mb-4 uppercase cursor-pointer";
            } else {
                badge.innerText = 'Not Applied';
                badge.className = "inline-block bg-[#EEF4FF] text-[#002C5C] text-[10px] font-bold px-4 py-3 rounded mb-4 uppercase cursor-pointer";
            }
        }

        const intBtn = card.querySelector('.int-btn');
        const rejBtn = card.querySelector('.rej-btn');
        if (status === 'interview') intBtn.classList.add('bg-[#00C07F]', 'text-white');
        else intBtn.classList.remove('bg-[#00C07F]', 'text-white');

        if (status === 'rejected') rejBtn.classList.add('bg-[#FF4D4D]', 'text-white');
        else rejBtn.classList.remove('bg-[#FF4D4D]', 'text-white');
    });

    document.getElementById('total-count').innerText = cards.length;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;
    document.getElementById('section-count').innerText = visibleCount;

    if (visibleCount === 0) {
        noJobsDiv.classList.remove('hidden');
        noJobsDiv.classList.add('flex');
    } else {
        noJobsDiv.classList.add('hidden');
        noJobsDiv.classList.remove('flex');
    }
}

window.onload = function() {
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        changeTab('all', firstTab);
    }
};