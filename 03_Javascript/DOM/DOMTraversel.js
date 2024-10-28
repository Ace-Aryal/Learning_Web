/*JavaScript DOM Traversal Documentation

1. getElementById()

Syntax: document.getElementById(id)

Description: Selects an element by its id attribute. Since ids should be unique in a document, it always returns a single element.

Return Value: A DOM element or null if no element is found.

Notes:

Directly usable without conversion.

Commonly used for elements that have unique behaviors or styles, like forms or buttons.



Example:

let element = document.getElementById('myId');


---

2. getElementsByClassName()

Syntax: document.getElementsByClassName(className)

Description: Returns all elements that have the specified class name.

Return Value: An HTMLCollection, which is a live collection (auto-updated if the DOM changes).

Notes:

To treat it like an array, convert it using Array.from() or spread syntax (...).

Can also be called on a specific element to find children with the class name.



Example:

let elements = document.getElementsByClassName('myClass');
let arrayOfElements = Array.from(elements);  // Convert to array if needed


---

3. querySelector()

Syntax: document.querySelector(selector)

Description: Returns the first element that matches a specified CSS selector.

Return Value: A DOM element or null if no match is found.

Notes:

Accepts any valid CSS selector (e.g., .class, #id, tag, attr=value).

Only returns the first matching element.



Example:

let element = document.querySelector('.myClass');


---

4. querySelectorAll()

Syntax: document.querySelectorAll(selector)

Description: Returns all elements matching the given CSS selector.

Return Value: A NodeList (static collection).

Notes:

Does not automatically update if the DOM changes (unlike HTMLCollection).

A NodeList can be looped through using forEach(), but it can also be converted to an array using Array.from() for other array methods.



Example:

let elements = document.querySelectorAll('.myClass');
elements.forEach(el => console.log(el));  // Can use forEach() directly


---

5. .children

Description: Returns all child elements of a given element.

Return Value: An HTMLCollection (live collection).

Notes:

It only selects element nodes, ignoring text nodes, comments, etc.

Convert to an array if you want to perform array operations.



Example:

let parent = document.getElementById('parentId');
let childElements = parent.children;
let arrayOfChildren = Array.from(childElements);


---

6. Using querySelector() on Elements, Not Just the Document

Description: While document.querySelector() searches the entire DOM, you can use querySelector() on a specific element to narrow down the scope.

Return Value: A DOM element.


Example:

let parent = document.getElementById('parentId');
let child = parent.querySelector('.childClass');  // Only searches within `parent`


---

7. .parentElement

Description: Returns the parent of a given element.

Return Value: A DOM element or null if the element has no parent.

Notes:

parentElement is similar to parentNode, but it only returns element nodes, not any type of node.



Example:

let child = document.getElementById('childId');
let parent = child.parentElement;


---

8. .closest()

Syntax: element.closest(selector)

Description: Finds the nearest ancestor (or itself) that matches the provided CSS selector.

Return Value: A DOM element or null if no match is found.

Notes:

Searches up the DOM tree, checking itself and then its ancestors.



Example:

let element = document.querySelector('.myClass');
let closestDiv = element.closest('div');


---

9. .previousSibling and .nextSibling

Description: These properties return the previous or next sibling of the current node, including text and comment nodes.

Return Value: A node, which could be an element, text, or comment.

Notes:

Use .previousElementSibling and .nextElementSibling if you only want to target element nodes.



Example:

let element = document.getElementById('myId');
let previous = element.previousSibling;  // May return a text node
let next = element.nextElementSibling;   // Returns only an element node


---

General Facts:

HTMLCollection:

Live collection, meaning it updates automatically if the DOM changes.

Not directly iterable (you need to convert it using Array.from() if you want to use array methods like map() or filter()).


NodeList:

Static collection, meaning it does not auto-update if the DOM changes.

Directly iterable using forEach(), but also needs Array.from() for array methods.


Element:

Represents a single DOM element node. Directly usable without conversion.



By understanding the differences between these methods and their return types (HTMLCollection, NodeList, Element), you can effectively navigate and manipulate the DOM in your JavaScript applications.

*/