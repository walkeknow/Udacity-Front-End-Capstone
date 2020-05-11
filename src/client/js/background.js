import datepicker from 'js-datepicker';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

// Using datepicker package to enable cross-browser support
function loadDatePicker() {
    const d = new Date();
    const picker = datepicker('#date', {
        minDate: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
        formatter: (input, date, instance) => {
            const newDate = String(date.getMonth() + 1).padStart(2, '0') + '/' + String(date.getDate()).padStart(2, '0') + '/' + date.getFullYear();
            input.value = newDate
        }
    });
}

export { loadDatePicker }
