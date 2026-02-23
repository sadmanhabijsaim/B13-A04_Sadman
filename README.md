                                                # Job Application Tracker


## 💡 Answers to the Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
* **getElementById:** I use this when I need to grab a specific element by its unique ID. It’s super fast and direct.
* **getElementsByClassName:** This is for selecting all elements with a specific class. It returns an HTMLCollection (a list of elements).
* **querySelector:** This is my go-to. It lets me use CSS selectors (like `.class` or `#id`) to find the first match.
* **querySelectorAll:** It's like querySelector, but it finds every element that matches and gives them back in a NodeList.

### 2. How do you create and insert a new element into the DOM?
First, I create the element using `document.createElement('tag')`. Then, I add text or content to it using `.innerText`. Finally, I pick a parent element from my HTML and use `.appendChild()` to place the new element inside it.

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is like a signal moving up. When I click a button, that event doesn't just stay there. It "bubbles up" to its parent `div`, then the `section`, and eventually all the way to the top of the page. This lets parent elements know what’s happening with their children.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Instead of adding an event listener to every single button, I put one listener on their parent. Because of bubbling, the parent catches the click. It’s great because it saves memory and still works if I add new buttons to the page later.

### 5. What is the difference between preventDefault() and stopPropagation()?
* **preventDefault():** It tells the browser "Don't do the default thing." For example, it stops a link from opening a URL or a form from refreshing the page.
* **stopPropagation():** It tells the event "Stop right here!" It prevents the click from bubbling up to the parent elements.