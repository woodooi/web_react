Лабораторні роботи з дисципліни "Веб-технології та веб-дизайн"
Виконав: Антонюк Павло Дмитрович (Група ІР-23)

###Лабораторна робота №6 React.js: Home page
Description: Start creating your React App with a simple Home page (see 
the link to wireframe above). Your e-commerce app subject is about your 
entities from previous (3-5) works.
Variants -  (products that you are ‘selling’) the same as for previous works.
(see the description to 3rd work)
Requirements: 
● You have to use only React.js library for all of your mark-up. Which 
means - your index.html file shouldn’t be touched.
● Use create-react-app tool for creating base of your project
https://github.com/facebook/create-react-app
● Your Home page should follow the wireframe, i.e all of the elements
( header, navigation, footer etc. ) from wireframes must be presented
on your website.
● Design: You have to use CSS styling or/and component libraries. 
Don't overthink it, use your imagination for UI, BUT the work with 
almost no styling is unacceptable.
● Functionality: For this work nothing but view only part is required. 
Any interaction (links/buttons) is not necessary, but you will have to 
complete them in your next labs.
● Code style: 
○ Project structure: Your UI elements should be logically 
separated into React components (one file for each component)
- at least 5 component files are required. In other words, you 
can’t just put all your JSX into 1-2 files. 
○ Use Functional components instead of Class components
https://uk.reactjs.org/docs/components-and-props.html

###Лабораторна робота №7 7. React.js: Catalog page
Description: Continue work on your React App by adding a page with 
Items list (see the link to wireframe of Catalog page above).
Variants -  (products that you are ‘selling’) the same as for previous works.
(see the description to 3rd work)
Requirements: 
● All of the requirements for previous React.js works should be kept.
● Code style: 
○ Use array.map() method for rendering your items list
○ Routing (switching between pages) should work now. 
Use react-router-dom library: 
https://reactrouter.com/web/guides/quick-start
○ All UI elements (buttons / select) should have corresponding 
React components (PrimaryButton.jsx / Select.jsx  etc.)
● Functionality (filter / search / view more) is still not required (you 
have to complete it on next works)

###Лабораторна робота №8 8. React.js: Item page

Description: Continue work on your React App by adding a page for  your Item (see the link to wireframe of Item page above). Also, now, you have to make all your previous pages (Home & Catalog) more interactive.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements: 
●	All of the requirements for previous React.js works should be kept.
●	Code style: 
○	Your items should be stored inside the state or context (your choice) of your page
https://uk.reactjs.org/docs/hooks-state.html
https://uk.reactjs.org/docs/hooks-reference.html#usecontext
○	For your state management use useState() inside Functional Component  instead of this.state and Class component
○	If you decided to use context, use useContext() hook instead of Context.Consumer
https://www.robinwieruch.de/react-usecontext-hook
●	Functionality (IMPORTANT):
○	Home page: “View more” button should display more elements on the same page Tip: Elements can be just random paragraph & heading, use your imagination 
○	Catalog page: You should be able to filter your items list, by applying different filters by item's properties (i.e size/color/type)
○	Catalog page: Search by any text property option should also work
○	Catalog & Item pages: “View more” action on every item should refer to corresponding Item page, with correct information about item (get the info from your state/context)
