document.addEventListener('DOMContentLoaded', function() {

    const calendarEl = document.getElementById('calendar');

    if (!calendarEl) return;

    window.calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        events: [
            { title: 'Unavailable', start: '2025-11-25', display: 'background', classNames: ['unavailable'] },
            { title: 'Fully Booked', start: '2025-11-26', display: 'background', classNames: ['booked'] }
        ],
        dateClick: function(info) {
            // Prevent selecting unavailable days
            if (info.dayEl.classList.contains('unavailable') ||
                info.dayEl.classList.contains('booked')) {

                alert("This date is fully booked.");
                return;
            }

            alert("You selected: " + info.dateStr);
        }
    });

    calendar.render();
});
