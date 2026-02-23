                                             Job Application Tracker.

Answers to the Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: It is used to select a single element using its unique ID. It’s the fastest way to find an element.

getElementsByClassName: It selects all elements that have a specific class name and returns them as a collection (like a list).

querySelector: It is very flexible. It finds the first element that matches a CSS selector (like .my-class or #my-id).

querySelectorAll: Similar to querySelector, but it finds all matching elements and returns them in a list called a NodeList.

2. How do you create and insert a new element into the DOM?
To add a new element, I first create it using document.createElement('tagName'). Then, I can add text to it using .innerText. Finally, I use .appendChild() to put it inside a parent element in the HTML.

3. What is Event Bubbling? And how does it work?
Event Bubbling means when you click on an element (like a button), the click "bubbles up" to its parents. So, if the button is inside a div, the click event first happens on the button, then the div also feels the click, then the body, and so on.

4. What is Event Delegation in JavaScript? Why is it useful?
Instead of adding an event listener to many child elements, we add just one listener to their parent. This is called Event Delegation. It is useful because it saves memory and it works even for new children that are added to the parent later.

5. What is the difference between preventDefault() and stopPropagation()?

preventDefault(): It stops the "default action" of an element. For example, it stops a link from opening a URL or a form from refreshing the page.

stopPropagation(): It stops the event from "bubbling up." It prevents the parents from knowing that an event happened on the child.