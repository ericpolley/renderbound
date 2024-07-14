import React from 'react';

export default function Blog003() {
  return (
    <section>
    <article>
      <h2>17. 09-23-2022</h2>
      <h3>Snake Game and a Resume</h3>
      <p>
        I have been working with Bootstrap, while learning React. <br />  <br /> 
        <strong>React JS</strong>
        <br /> <br /> 
         I have reached a basic understanding of the layout, 
        and how to import Javascript from a JS file to the App.js. As well as implementation of CSS files and cosmetic manipulation. 
        I feel that I have only scratched the surface, but I think scratching the surface is worth mentioning. 
        I created a snake game and a resume, as you may have guessed from the title of this blog. 
        I will talk a bit about them both here below. 
        <br /><br />
        <strong>Snake</strong>
        <br /><br />
        I created a Snake Game following a freecodecamp.org tutorial. The end. 
        <br />
        Okay, but seriously. I followed a tutorial to create a snake game using a grid system of div's. 
        The Apple generates a random location on Start and when colliding with the snake. 
        The tutorial explained how to add key inputs to call functions. I added on screen buttons, as well as 
        some css for a clean look. Now the game works on touch devices. I learned a lot, and would like to go over 
        what I have learned and use similar syntax in my own project.
        

        <br /><br />
        <strong>Resume</strong>
        <br /><br />
        My original plan: Create resume using a free resume builder from a website I would rather not name.
         I completed the resume and it looked pretty good. When I decided to export the file, I found out it was 
         locked behind a paywall. I was honestly only using the site builder because it was free. The template format 
         looked good, but not enough to pay for it. <br />
         This lead me to my next decision. I created my own resume format with bootstrap. I am going to upload 
         the resume to my website. I am also going to use a separate file for export pdf resume files. This will 
         make it easy to edit in the future.
        <br /><br />
        I don't want to write too much, as I am really trying to get the most out of my time. So I will simply end here. Until next time!
        <br /><br />
        -Eric Polley
      </p>
    </article>

    <h4>Links</h4>
    <br />
    <ul>
      <li>
        <a
          href="http://snake.ericpolley.com"
          title="Snake Game"
          target="_blank"
          rel="noopener noreferrer"  
        >
          <strong><p>Snake (Download and play free!)</p></strong></a
        >
      </li>
   
      <li>
        <a
          href="http://ericpolley.com"
          target="_blank"
          title="My website"
          rel="noopener noreferrer"  
        >
          <strong><p>Check out my website</p></strong></a
        >
      </li>

    </ul>
  </section>
  )
}
