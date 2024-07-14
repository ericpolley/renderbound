import React from 'react';

export default function Blog012() {
  return (
    <section>
    <article>
      <h2>12. 08-26-2022</h2>
      <h3>My Friendly Computer</h3>
      <p>
        <br />
        <strong>Hardware failure Detour.</strong>
        <br /><br />
        Before I starting writing about technical learning progress, I need to take a  moment to talk about my computer hardware failure.
        I have mentioned in a previous blog that I have just moved computers around my house to the proper locations. The primary PC I have 
        been using in the 2nd office had a major hardware failure. This is a nice little reminder that it's a good idea to back up your work daily.<br />
        I decided to extract the hard drive and graphics card, and install/replace the HD and GPU in the compact Thinkcentre. Only one 
        hard drive will fit with this PC, so the linux OS hard drive will sit on the side line for now. With the win10 hard drive installed 
        I could extract the files and continue progress as it were.<br /> With a decent GPU installed;
        the Thinkcentre will be my back-up PC.
        <br /><br />
        The second office is much cooler in the summer. 
        I brought the Win11 computer down from the main office upstairs and set it up in the second office. This computer is considerably 
        better in every way, 40GB ram, RTX2060.  I  set up OBS Studio, calibrated 
        the microphone, and transferred the files I extracted earlier. Now with everything back up and running, we can talk about some code!
        <br /> <br />
        <br />  
        <strong>My Friendly Computer</strong>
        <br /><br />
        I have started working on a game. The game is currently called 'My Friendly Computer'. I am recording the coding process, check out the 
        videos in the links below. <br />
        The html and css are done, very simple design. The display on load or refresh is a blank game, a format that resembles an old hand-held game system.
        The one and only button is 'Start'. When you click the start button, the Javascript addEventListener is called according to the ID the button 
        holds. This will call a function startGame(). Inside of this function is a list of classList.add, classList.remove, innerText = '', etc. <br />
        I add a class to hide the start button, and remove that class from the next buttons to use. I also assign these buttons with addEventListener 
        in case the game has restarted and one of those buttons has been reassigned in a later portion of the game. This will ensure the button always 
        does as it was intended to do. That is something I learned while creating the prototype of this game in an earlier blog. <br />
        When the new buttons appear, so does a blocky computer face on the screen and green text in the text box below it.
        When you click next, The computer asks if you would like to play a game. I use the same function pattern as the startGame(),
        removing addeventlistener, and adding addeventlistener to set the action to the proper button. From here I removed the hide class, classList.remove('hide')
        This pattern continues for the remaining questions. I have written out the decision tree in a notebook and 
        I will be referring to this to keep track of what question happens and when. 
        <br /><br />
        I created the face animated gifs in Animated CC. The face is a few green rectangles. I made a happy, sad, and neutral face. 
        Oh, and one red face. The animation is the same for each, blinking eyes at 4fps. Just enough to add a feeling of life to the 
        computer, yet also something that can loop indefinitely. 
        <br /><br /><br />
        <strong>Vlogs and Videos</strong><br />
        I do plan on recording some videos soon, and continuing my progress on the above mentioned game. I may need a day or two to bounce back from 
        this computer failure. I may take a bit of time coding on WarriorJS, codeWars, reading, or watching tutorials. <br />
        I am happy I was able to recover the files, I will continue forward on this game. 

        </p>

        
        

      
    </article>
 
    <h4>Links</h4>
    <br />
    <ul>

      <li>
        <a
          href="https://www.youtube.com/watch?v=Q79gK2rXrAg&list=PLce5_YZyrUw6SkhF6zD5QLQ86BgAZ6NGy"
          title="Coding 'My Friendly computer'"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <strong><p>Coding 'My Friendly computer'</p></strong></a
        >
      </li>
      
      <li>
        <a
          href="http://www.ericpolley.com"
          title="Check out my website"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <strong><p>Check out my website</p></strong></a
        >
      </li>
    </ul>
  </section>
  )
}
