// Computes the next "second Tuesday of the month" meeting date.
// The displayed date does not advance to next month until the day
// of the current month's meeting has fully passed.

function secondTuesdayOfMonth(year, month) {
    const firstOfMonth = new Date(year, month, 1);
    const firstTuesday = 1 + ((9 - firstOfMonth.getDay()) % 7);
    return new Date(year, month, firstTuesday + 7);
}

function nextMeetingDate(from) {
    const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    let meeting = secondTuesdayOfMonth(today.getFullYear(), today.getMonth());

    if (today > meeting) {
        const nextMonth = today.getMonth() + 1;
        const nextYear = today.getFullYear() + Math.floor(nextMonth / 12);
        meeting = secondTuesdayOfMonth(nextYear, nextMonth % 12);
    }

    return meeting;
}

function renderNextMeeting(elementId) {
    const meeting = nextMeetingDate(new Date());
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById(elementId).textContent =
        meeting.toLocaleDateString(undefined, options) + " at 6:30 PM";
}
