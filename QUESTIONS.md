# Questions/Comments

## Consistancy between pages:
I noticed that several of the elements, like the buttons in the body of the main page, like "FIND OUT MORE", are not heirarchal elements. This makes it harder to verify the details of them. Ther is a `<div class="shape">` and a `<div class="text">` that is a sibling.

## Extra testing:

If I had spent a bit more time on it, there is a few things I would have tested out:

- Adjustments to the displayed items, based on screen size 
- Better finding of video elements
- Page URLs upon opening.
- More text that exists in the different pages.
- Page details from the navigation
- more helper functions or plugins for finding elements by their Ids.
- While testing I had experienced some slowdowns due to internet issues. Adding in waits around API calls would help to take care of that flucuation and verify that calls are happening without an issue. This is one of the strengths of Cypress.