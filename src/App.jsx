import { useState } from 'react';
import './App.css';

// Glossary data as an array of objects
const glossaryItems = [
  {
    term: "Breakpoint",
    description: "The screen size at which a particular media query becomes active in a responsive design."
  },
  {
    term: "Git",
    description: "A popular version control protocol. Allows users to keep track of changes made to code and to return to previous versions if necessary."
  },
  {
    term: "Github",
    description: "A popular website that offers hosting and management of git repositories."
  },
  {
    term: "Responsive Design",
    description: "Web pages that change their layout or other styles based on the media (screen size, orientation, device type) on which it is displayed. Makes use of media queries in CSS to define how and in what context specific CSS should be used."
  },
  {
    term: "Semantic Code",
    description: "Refers to HTML code which properly utilizes elements according to their meaning. It is code that describes the content rather than using elements simply based on their appearance."
  },
  {
    term: "Syntax",
    description: "The parts of a code language and their proper order to make a valid statement. Just as in English statements are made of words and symbols which must come in a certain order to convey a particular meaning, so too must statements in code languages be properly constructed to achieve a desired effect."
  },
    {
    term: "Attribute",
    description: "Additional information that can be added to some HTML elements to provide additional configuration or behavior in the browser. Attributes are written inside the brackets of an element's tag (or opening tag) and consist of either the attribute name paired with a value or just the attribute name for binary attributes. E.g. <img src=file.jpg>, where src is the name of the attribute and file.jpg is it's value."
  },
    {
    term: "Element",
    description: "A discrete piece of code in HTML that defines specific content, such as text, media, etcetera. An element typically includes an opening tag, and may include attributes, and a closing tag (if it is not a self-closing element)."
  },
    {
    term: "Tag",
    description: "The written code associated with an element. Usually consists of the name of the element (or sometime an abbreviation) placed between arrow brackets, e.g. <section>"
  },
    {
    term: "Declaration / Rule",
    description: "A property / value pair that defines the style for one aspect of the selected element. E.g. padding: 2rem, where padding is the property and 2rem is the value."
  },
    {
    term: "Declaration Block",
    description: "A chunk of CSS that includes one or more selectors associated with one or more rules (property / value pairs)."
  },
    {
    term: "Property",
    description: "Identifies which feature a CSS declaration will affect. A property is paired with a valid value to declare that a specific style should be used. Together, the property / value pair are called a rule or declaration. Examples of properties might include colour, font-size, or margin."
  },
    {
    term: "Selector",
    description: "Indicates the particular HTML content to be styled by a given CSS declaration block. Can a be a type of element, a class or ID, or various other more complex methods of identifying particular HTML."
  },
    {
    term: "Stylesheet",
    description: "Another word for the CSS file associated with a web page."
  },
    {
    term: "Value",
    description: "The specified setting for a given CSS property in a declaration. Each property has its own set of associated valid values. Depending on the property, a value might be numeric (400), a measurement (5px), a color (#efefef), a keyword (italic), etcetera."
  },
    {
    term: "Indentation",
    description: "The (starting?) position of a line of code. This determines the functionality of the code."
  },
    {
    term: "Variables",
    description: "A variable is a named storage location that can hold a value. It can be used to store data that can be referenced and manipulated later in the code."
  },
    {
    term: "Function",
    description: "A function is a block of code designed to perform a particular task. It can take inputs, perform operations, and return an output."
  },
    {
    term: "Parameters",
    description: "Creating the function"
  },
    {
    term: "Arguments",
    description: "Calling the function"
  },
    {
    term: "Event Listeners",
    description: "Adding event listeners to elements to handle various events like keydown, click, and transitionend."
  },
      {
    term: "Query Selectors",
    description: "Using document.querySelector and document.querySelectorAll to select elements based on attributes and classes."
  },
      {
    term: "Class Manipulation",
    description: "Adding and removing classes to elements to trigger CSS transitions/animations."
  },
      {
    term: "Audio Control",
    description: "Controlling audio playback using currentTime and play."
  },
      {
    term: ".toString()",
    description: "a built-in method provided by JavaScript to convert various types of values to their string representation. For example, 123..toString() converts the number 123 to the string 123 "
  },
   {
    term: "Map()",
    description: "allows you to do anything with each element in an array per turn."
  },
  // {
  //   term: ,
  //   description: 
  // },
];

function GlossaryItem({ term, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="glossary-item">
      <h3 
        className="glossary-term" 
        onClick={toggleDescription} 
        style={{ cursor: 'pointer' }}
      >
        {term}
      </h3>
      {isOpen && <p className="glossary-description">{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>B's Glossary</h1>
      <p>A list of definitions and explanations to help both myself and anyone who finds this gain a better understanding on </p>
      <div className="glossary-list">
        {glossaryItems.map((item, index) => (
          <GlossaryItem 
            key={index} 
            term={item.term} 
            description={item.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
