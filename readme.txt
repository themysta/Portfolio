About this site:
This website was created using pure HTML, CSS and Javascript.
I've kept this project relatively simple. Since it's hosted on github pages, it lacks backend data handling.
However, the purpose was to create a clean looking website, not to collect user data or manage a database.
Before using other libraries or services, I decided to try from the ground up without the use of 3rd-party
applications. I feel the best way to learn is by quick prototyping then refining. Although, I look forward to
completing a full fledge website in the future that is capable of scaling into something larger. The full source
code is available at this repository: https://github.com/themysta/Portfolio Enjoy :D



TO DO:
[DONE]  Fix body and background not covering entire page when scrolling, 
        also there is additional margin space on the right side.
[DONE]  Add a 3rd flex box
[DONE]  Fix any heading errors

[FIXED] - changing width on left, right middle from width: 400px -> width 100% fixed mobile
compatibility but broke desktop.
        Note: the solution for this was to explicitly set the width to fit into 3rds 33% and have
        a media query set the max-width to 100% if a "device" is detected. I tried to use Javascript
        to force scaling use an agent, but it seemed messy and inconsistent.

[DONE] Styling for mobile devices

[] Add mobile compatibility for game controls
[] Document problem solving, displaying things like the page being able to resize it's elements
   possibly use a gif?
[] Include link to social, github repo w/logos etc.

IDEAS:
- Ship shoots headers into a transition state, making the website fun and interactable.
add blue border, to match theme