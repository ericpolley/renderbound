
import React from 'react';
export default function Blog019() {
  return (
    <section>
    <article>
      <h2>19. 10-10-2022</h2>
      <h3>New Office</h3>
      <p>
        <br />
      <strong>Hello!</strong>
      <br />
      <br />
      I have a few things to mention in this blog post. 
      </p>
      <ul>
        <li>Samson Says</li>
        <li>The 3 month vlog</li>
        <li>Edits to my website</li>
      </ul>
      <p>
      <br /><br />
      <strong>Samson Says</strong><br />
      Samson Says is a game I idea I had in my notebook for a few weeks. I had originally planned 
      to create this app in React, but I decided to use vanilla Javascript. <br />
      I have found a lot of ways to strengthen my Javascript, preventing errors with functions. 
      <br />
      <strong>Example:</strong>
      I created on function called 'hideAll()' that will hide everything that is or would possibly 
      be displayed on screen, including un-assigning event listeners. This means every time I would like to hide content, I am able to hide 
      everything, and place the items on screen as I would like. I have found this method very powerful 
      and efficient. 
      <br /><br />
    
      I am seeing with this project how React would be useful. If functions like the hideAll
       were all distributed as components in a folder library, I could access each item without search 
       scrolling. I also see the readability value, for the same reason. It would be easier for someone to 
       understand what is happening in the app while looking at the react app.js file of stacked imported 
       components. 
      <br /><br />
      <strong>The 3 month Vlog</strong><br />
      I recorded and uploaded my three month vlog a few days ago. In the video I explain a bit about 
      the projects I have created in the recent month. I have linked the vlog on the links at the bottom 
      of this blog post. 
      <br /><br />
      <strong>Edits to my website</strong><br />
      With a new project to add to my portfolio, I decided it would be appropriate to add a bit of flare 
      to the portfolio website. I added a few subtle changes, like using a hand mouse clicker for all links and 
      id event listener functions. Though the Javascript involved is simple, it is definitely a big part 
      of the websites functionality. I added my resume to the navigation bar, and  I changed the Home 
      button to only reload the 'portfolio page', instead of loading the 'welcome button screen' I changed the sizes of 
      the images using a media inquiries to ensure a good looking website on all devices. I changed the background. 
     
      <br /><br /><br />
      I feel good about where I am at, and I am excited to move forward. Thanks for reading!
      <br />
      <br />~ Eric Polley



     
      </p>
    </article>

    <h4>Links</h4>
    <br />
    <ul>

      <li>
        <a
          href="https://www.youtube.com/playlist?list=PLce5_YZyrUw7dNEL7F1T4kxAp0mMuattO"
          target="_blank"
          title="My Vlog"
          rel="noopener noreferrer" 
        >
          <strong><p>Check out the 3 month Vlog</p></strong></a
        >
      </li>
      <li>
        <a
          href="http://samson.ericpolley.com"
          target="_blank"
          title="SAMSON SAYS"
          rel="noopener noreferrer" 
        >
          <strong><p>Play the SAMSON SAYS game!</p></strong></a
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
