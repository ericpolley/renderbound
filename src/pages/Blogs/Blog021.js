import React from "react"

export default function Blog021() {
  return (
    <section>
    <article>
    <h2>21. 10-20-2022</h2>
          <h3>New Website</h3>
          <p>
          <strong>Welcome!</strong>
          <br />
          This is an exciting step for me. I have a few things to mention, all based around one announcement.
         <br />
         I have developed and deployed my official website using React with Netlify. <br />
         To do this I directed all of my domain host DNS server names to Netlify. 
         This game Netlify access and control of the DNS record. This also un-routed any existing domain using 
         the originally configured DNS. This was a fun unforeseen challenge. I felt the clock ticking as I 
         pulled the broken domain links in Github, and hosting them through Netlify. 
         <br />
         <br />
         Let's talk a bit about the building process of this website. 
         <br />
         I started with a hand drawn concept, labeled with div's, classes, and Id's. 
         <br />
         I opened VS code and imported ReactJS with npx create-react-app ./ 
         <br />
         I make a JS file for the full screen view. Inside of that I added a div with column flexbox and dimension properties
          for the game pad. Inside of the game pad 2 flexbox div's, one for Tv, the other stacked on top of a div for the buttons. 
          Each button inside the button div has an onClick function inside of there own js file. The Tv will display 
          the information called upon by the button function. 
          <br /><br />
          I got stuck on this for a moment. Everything felt familiar until I tried to add an event listener 
          to a element. The only way I was able to get it to work was roughly 20 lines of code, which just felt wrong. 
          I found after some research calling an addEventListener() is a bit redundant with React, and it is 
          much more efficient to use the onClick={} to call upon a function directly. 
          <br /><br />
          With all the buttons separated into there own JS file, isolating and making changes is quick.
          I would like to create more React projects and really bring out the efficiency. 
          <br />
          I like using JSX, it feels like home. MY favorite part of React is being able to use vanilla CSS. 
          After playing with a few CSS libraries, I have really been perfecting my CSS code. 
          <br /><br />
          Now that my new website is hosted and ready to share, I am going to continue my path of vigorous 
          learning. Thanks for reading and I will check with you soon.


         <br />
          ~ Eric Polley
          </p>
          </article>

        <h4>Links</h4>
        <br />
        <ul>
          <li>
            <a
              href="http://ericpolley.com"
              title="Check out my Portfolio!"
              target="_blank"
              rel="noopener noreferrer" 
            >
              <strong><p>Eric Polley's Website</p></strong></a
            >
          </li>
        </ul>
        </ section >
  )
}
