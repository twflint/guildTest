# Issues seen while testing

## Uncaught TypeError

> Uncaught TypeError: Cannot read properties of undefined (reading 'mobile')
>     at HTMLDocument.<anonymous> (autoptimize_c7cb3ddbb5b0701676795da9b5591747.js:4:80)
>     at e (jquery.min.js:2:30005) 
>     at t (jquery.min.js:2:30307)

This unhandled exception is caught by Cypress and needed to be handled in order to run the tests.

---

## Inconsistant Tagging
When in the Main page, the list items, `<li>` have a unique id. These id values are not present in the blog page, even though the header menu bar is exactly the same. Consistancy makes it easier to test. This is also seen in the login/sign up page, when selecting one or the other.
To handle this, the main page was reloaded.

---

## More unique/testing Ids would help automation
The tabs of the video player for, "What our students have to say" and "What employers have to say" Could use some unique IDs to help differentiate them from each other.
