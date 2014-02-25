Responsive Web Design 2.0 Demo
==========

[http://jsallthethings.com/dev/rwd20-demo/](http://jsallthethings.com/dev/rwd20-demo/) 

Demo showing off the concept of [RWD20](https://github.com/mordendk/rwd20). Scale the window from phone over tablet to desktop size and see elements created and resources loaded dynamically.


Key point for this demo
-----------------------
 Is showing off the responsive-breakpoint directive in combination with others to create self contained components attached to breakpoints - ie.:

```html
<section class="related-column" responsive-breakpoint="'large'" model="/json/news.json" ng-include="'/partials/news.html'">
	<!-- Element only initialized when 960 < window.innerWidth <= 1600 -->
</section>
```


What do we want to achieve?
------------------------------
We want to be able to build truly responsive user interfaces, without letting content and functionality targeting a specific screen size, affect the performance of another - no matter how rich it is.



What do we need to do?
----------------------
We need to lay down the basis for creating intelligent self-contained components. They will be aware of all their own prerequisites, which most likeliy will be any mix of styling, templating, data and behaviour - ie. CSS, HTML, JSON and JS. 

In addition of doing traditional RWD of scaling and moving these components, they can be bound to specific [breakpoints](http://alistapart.com/article/designing-for-breakpoints), defining on which screen sizes they are needed and which ones they're not. This is the key part in RWD2.0 as they will not linger and affect performance unless specifically a part of that user interface.



**Client side logic**

The client side logic is pretty straight forward, and is in the direction of proper [Web Components](http://css-tricks.com/modular-future-web-components/), but without the need of encapsulation and cross domain sharing.

Basically for each component we need to define:

- A JSON source (data)
- Client side template and styling (HTML & CSS)
- Functionality layer if needed (JS)
- Configurable breakpoints (To match other RWD concepts in place)


AngularJS will give us almost all we need to contain these on a per element basis in a structured way.
