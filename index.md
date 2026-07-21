---
layout: page
title: General Meeting
---

General meetings are held on the second Tuesday of each month, starting at 6:30PM.
We meet in-person at the [North Bellevue Community Center](https://parks.bellevuewa.gov/community-centers/north-bellevue-community-center) in room D and [online](https://meet.korte.co/BELUG)

### Next Meeting:

<ul>
  <li><span id="next-meeting-date">calculating&hellip;</span> in person and <a href="https://meet.korte.co/BELUG">online</a></li>
</ul>

<script src="{{ '/js/next-meeting.js' | relative_url }}"></script>
<script type="text/javascript">
    renderNextMeeting("next-meeting-date");
</script>

### Past Meeting Notes

Subscribe to the [General Meetings RSS feed]({{ '/feed-general.xml' | relative_url }}).

<ul>
  {%- for post in site.categories["general"] -%}
  <li><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>
  {%- endfor -%}
</ul>
