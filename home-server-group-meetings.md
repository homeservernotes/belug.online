---
layout: page
title: Home Server Group Meetings
permalink: /home-server-group-meetings/
---

{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}

Home Server Group meetings are held on [Zoom](https://meet.korte.co/BELUG) on the first and third Thursday of each month, starting at 7:00PM.

### Next Meeting:

<ul>
  <li><span id="next-meeting-date">calculating&hellip;</span> on <a href="https://meet.korte.co/BELUG">Zoom</a></li>
</ul>

<script src="{{ '/js/next-meeting.js' | relative_url }}"></script>
<script type="text/javascript">
    renderNextRecurringMeeting("next-meeting-date", [{ weekday: 4, n: 1 }, { weekday: 4, n: 3 }], "7:00 PM");
</script>

### Past Meeting Notes:

<ul>
  {%- for post in site.categories["home-server"] -%}
  <li><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>
  {%- endfor -%}
</ul>
