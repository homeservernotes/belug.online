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

// Generic support for meetings that recur on more than one weekday
// occurrence per month (e.g. "first and third Thursday").

function nthWeekdayOfMonth(year, month, weekday, n) {
    const firstOfMonth = new Date(year, month, 1);
    const firstOccurrence = 1 + ((weekday - firstOfMonth.getDay() + 7) % 7);
    return new Date(year, month, firstOccurrence + (n - 1) * 7);
}

// candidates: array of { weekday, n } describing each recurring occurrence
// within a month (weekday: 0=Sun..6=Sat). Does not advance to the next
// occurrence until the day of the current one has fully passed.
function nextRecurringMeetingDate(candidates, from) {
    const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());

    const thisMonthDates = candidates
        .map((c) => nthWeekdayOfMonth(today.getFullYear(), today.getMonth(), c.weekday, c.n))
        .sort((a, b) => a - b);

    for (const d of thisMonthDates) {
        if (d >= today) return d;
    }

    const nextMonth = today.getMonth() + 1;
    const nextYear = today.getFullYear() + Math.floor(nextMonth / 12);
    const nextMonthDates = candidates
        .map((c) => nthWeekdayOfMonth(nextYear, nextMonth % 12, c.weekday, c.n))
        .sort((a, b) => a - b);

    return nextMonthDates[0];
}

function renderNextRecurringMeeting(elementId, candidates, timeText) {
    const meeting = nextRecurringMeetingDate(candidates, new Date());
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById(elementId).textContent =
        meeting.toLocaleDateString(undefined, options) + " at " + timeText;
}
