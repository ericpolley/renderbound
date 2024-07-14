import React from "react"

export default function Blog020() {
  return (
    <section>
    <article>
    <h2>20. 10-14-2022</h2>
          <h3>Deploy with React</h3>
          <p>
          <strong>Hello!</strong>
          <br />
          I have spent some time with React, and have used React to deploy a website. 
          This website. I have converted my blog into a React App and control it with GIT. 
          I am deploying the final product with Netlify. A handy third party tool used to host 
          projects exactly like this one. The free package includes the deploy of static assets and 
          dynamic serverless functions. <br />
          I am able to host projects from Github using Netlify with a custom domain. The DNS setup 
          is familiar at this point, and I had no problem setting up the domain. <br /><br />
          One snag I did have, was an unexpected conversion issue. 
          <br />
          I deployed the react app to a domain. The test text was working, so I continued to transfer 
          the blog information to the react file.
          <br />
          After I finished converting the blog posts into js files, I added the files to the git project, 
          I created a commit, and pushed for a file deploy. I refreshed the screen for about 5 minutes, and realized something 
          must be wrong. I checked the github repository status and found the update was completed successfully. 
          I checked the Netlify Deploy section, and found it has returned an error. This lead me back to VSCODE for some 
          investigation. I opened the file with npm start, and checked the console. Sure enough, there was a 
          JSX error, pointing out some html it could not understand. 
          <br /> This is a new problem. I can see my page when I test it on a local server, but the hosted website 
          is returning an error. 
          <br /> <br /> After some experiments, I have found the solution.
          I found out that HTML5 will close 
          html tags that are left open, such as &lt;br&gt;. This is something React JSX does not do. 
          <br /> 
          This means all the improper uses of my html needed to be properly converted before the website 
          was deployed properly. 
          <br /> I used Ctrl F, the find tool, to find and replace all improper html usage at the same time. 
          <br /> SO in conclusion, finding the problem was the hard part, implementation of the solution was 
          the fun and easy part. <br /> <br />
          As you can see now, on this page, I have everything up and running smooth the way I would like. 
          <br />
          With that, please check out some of the new tutorials I have recorded linked on my website! I have a few 
          new ones on the way as well, so make sure to keep an eye out for that. 
          <br />
          <br />
          Thank you for reading. <br />
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
