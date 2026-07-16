# Basic idea
Layout consists of three columns (full screen, no margin), separated by a hairline border.
The columns scroll vertically (independently). Try snapping when scrolling. In mobile, it works in reverse (rows which scroll horizontally).
Overall, keep it minimalistic, black and white and shades of gray. Almost like a stylish art portfolio. Let's use https://fonts.google.com/specimen/DM+Sans?preview.script=Latn (100 thin + italics and semibold 600).

# Column contents 
First column, just my name, perhaps my picture.
Second: word "cloud" with just different things I have done, more abstract. Sharing economy, technology, software, platform business, start-ups, etc. All in one huge mess, so it looks more like a texture. Line changes, yes, but perhaps no spaces unless included within the "concept"/term itself. Play with regular font, bold, italics.
Third: listing of different works and links. Very minimalistic. Mostly links. If a picture, on hover the picture is visible -> click, open new tab.

# Content mechanisms
Let's use the same entries.tsx and adjust accordingly.
Instead of x/y, we can just group them by the column. Order is meaningful.