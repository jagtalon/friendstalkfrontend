import React from 'react'
import Navigation from "../components/navigation"
import Helmet from 'react-helmet'

import styles from "./index.module.css";

import trailerImage from "../images/trailer.jpg";
import katherineImage from "../images/katherine.jpg";
import rachelnaborsImage from "../images/rachelnabors.jpg";
import csImage from "../images/cs.jpg";
import antoinetteImage from "../images/antoinette.jpg";
import amberImage from "../images/amber.jpg";
import laraImage from "../images/lara.jpg";
import daveImage from "../images/dave.jpg";
import sarahImage from "../images/sarah.jpg";
import saronImage from "../images/saron.jpeg";
import monicaImage from "../images/monica.jpg";
import kimImage from "../images/kim.jpg";
import jessImage from "../images/jess.jpg";
import danImage from "../images/dan.jpg";
import matImage from "../images/mat.jpg";
import nicoleImage from "../images/nicole.jpg";
import timImage from "../images/tim.jpg";
import valImage from "../images/val.jpg";
import stephImage from "../images/steph.jpg";
import shaniseImage from "../images/shanise.jpg";
import gabrielleImage from "../images/gabrielle.jpg";
import unaImage from "../images/una.jpg";
import pamImage from "../images/pam.jpeg";
import rachImage from "../images/rach.jpg";
import alexImage from "../images/alex.jpg";
import joniImage from "../images/joni.jpg";
import helenImage from "../images/helen.jpg";

import playAsset from "../assets/play.svg";

const Player = props =>
  <a href={props.link} title={props.alt}>
    <div className={styles.player} style={{ backgroundImage: `url(${props.image})` }}>
      <img src={playAsset} className={styles.play} />
    </div>
  </a>

const PlayerContainer = props =>
  <div className={styles.container}>
    <Player image={props.image} alt={props.alt} link={props.link} />
    <div className={styles.description}>
      <h2>{props.title}</h2>
      <h3>{props.episode}</h3>
      <p>{props.description}</p>
    </div>
  </div>

export default () => (
  <div>
    <Helmet
      title="Friends Talk Frontend"
    />
    <Navigation />
    <header>
      <h1 className={styles.title}>Friends Talk Frontend</h1>
      
      <div className={styles.mobiletrailer}>
        <p className={styles.subtitle}>It’s a podcast where we talk to <b>amazing people</b> about their habits, how they got to where they are now, and what their day-to-day life is like. We also talk about random shit.</p>
        <Player image={trailerImage} alt="Listen to our trailer" link="https://simplecast.com/s/1444b167"/>
        <p className={styles.trailer}>👋 Listen to our trailer!</p>
        <a className={styles.subscribe} href="https://itunes.apple.com/us/podcast/friends-talk-frontend/id1190447982">Subscribe</a>
      </div>

      <div className={styles.desktoptrailer}>
        <div className={styles.container}>
          <Player image={trailerImage} alt="Listen to our trailer" link="https://simplecast.com/s/1444b167"/>
          <div className={styles.description}>
            <p className={styles.subtitle}>It’s a podcast where we talk to <b>amazing people</b> about their habits, how they got to where they are now, and what their day-to-day life is like. We also talk about random shit.</p>
            <a className={styles.subscribe} href="https://itunes.apple.com/us/podcast/friends-talk-frontend/id1190447982">Subscribe</a>
          </div>
        </div>
      </div>

      <hr />
    </header>

    <section>
      <PlayerContainer title="Minisode: Welcome, Katherine!" image={katherineImage} alt="Listen to our minisode with Katherine" link="https://simplecast.com/s/55b4293a"
        description="I have a co-host now! In this episode, Katherine and I talk about our plans, hopes, and dreams for this podcast." episode="Bonus Episode Season 2"/>

      <PlayerContainer title="Rachel Nabors" image={rachelnaborsImage} alt="Listen to our minisode with Rachel Nabors" link="https://simplecast.com/s/e8012084"
        description="Rachel Nabors is really big in the web animation world. She's written a book called Animation at Work, and she's also published two online courses on her website." episode="Episode 25 Season 1"/>
    
      <PlayerContainer title="Claudina Sarahe" image={csImage} alt="Listen to our minisode with Claudina Sarahe" link="https://simplecast.com/s/3e5c417a"
        episode="Episode 24 Season 1" description="Claudina Sarahe is a creative consultant, speaker, organizer, and teacher. She is currently running Composites Colective as a Chief Experimentation Officer along with Darshana Narayanan."/>

      <PlayerContainer title="Antoinette Janus" image={antoinetteImage} alt="Listen to our minisode with Antoinette Janus" link="https://simplecast.com/s/a247eb01"
        episode="Episode 23 Season 1" description="Antoinette Janus is a web developer and designer at PBS Kids and is also a co-organizer of CodePen DC." />

      <PlayerContainer title="Amber Stickel" image={amberImage} alt="Listen to our minisode with Amber Stickel" link="https://simplecast.com/s/bc6fbda4"
        episode="Episode 22 Season 1" description="Amber is a designer and developer who was actually working for IBM at the time of this recording. Now, she is a design technologist at Indeed; the job search company." />

      <PlayerContainer title="Lara Callender Hogan" image={laraImage} alt="Listen to our minisode with Lara Callender Hogan" link="https://simplecast.com/s/167732e6"
        episode="Episode 21 Season 1" description="Lara Hogan is the VP of engineering at Kickstarter and the author of three books: Designing for Performance, Building a device lab, and Demystifying Public Speaking." />

      <PlayerContainer title="Dave DeSandro" image={daveImage} alt="Listen to our minisode with Dave DeSandro" link="https://simplecast.com/s/42fb84da"
        episode="Episode 20 Season 1" description="Dave DeSandro is a designer and developer running Metafizzy. His code is used everywhere: from Tumblr, to Nasa, to Whole Foods, and to the Tonight Show with Jimmy Fallon." />

      <PlayerContainer title="Sarah Bray" image={sarahImage} alt="Listen to our minisode with Sarah Bray" link="https://simplecast.com/s/13381069"
        episode="Episode 19 Season 1" description="She is on the cover of Offscreen magazine, and spends a lot of time thinking about how our design and marketing choices affect people—including ourselves." />

      <PlayerContainer title="Saron Yitbarek" image={saronImage} alt="Listen to our minisode with Saron Yitbarek" link="https://simplecast.com/s/0181aecd"
        episode="Episode 18 Season 1" description="Saron Yitbarek started the popular Codenewbies podcast. She’s here to talk about how she started the Codenewbies community and the Codeland conference." />

      <PlayerContainer title="Monica Dinculescu" image={monicaImage} alt="Listen to our minisode with Monica Dinculescu" link="https://simplecast.com/s/0181aecd"
        episode="Episode 17 Season 1" description="Monica Dinculescu is an emojineer at the Polymer project at Google and before that she used to work on Google Chrome." />

      <PlayerContainer title="Kim Goulbourne" image={kimImage} alt="Listen to our minisode with Kim Goulbourne" link="https://simplecast.com/s/7a146c6a"
        episode="Episode 16 Season 1" description="Kim Goulbourne is a very productive human being. She has so many cool projects—she is doing all the projects! She is currently working at Thoughtbot doing strategy, design, and development." />

      <PlayerContainer title="Jess Lee" image={jessImage} alt="Listen to our minisode with Jess Lee" link="https://simplecast.com/s/f7a5c72f"
        episode="Episode 15 Season 1" description="Jess Lee talks about her work at Dev.to—it’s a place where programmers share ideas and help each other grow." />

      <PlayerContainer title="Dan Mall" image={danImage} alt="Listen to our minisode with Dan Mall" link="https://simplecast.com/s/7d929415"
        episode="Episode 14 Season 1" description="Dan Mall is a creative director and founder of SuperFriendly, and also the co-founder of a new service called SuperBooked." />

      <PlayerContainer title="Mat Marquis" image={matImage} alt="Listen to our minisode with Mat Marquis" link="https://simplecast.com/s/cdd6227b"
        episode="Episode 13 Season 1" description="Mat Marquis is an author, a boxer, and a pretty good baker. Listen to him as he talks about how he got into tech, and a little bit about his brief stint on TV." />

      <PlayerContainer title="Nicole Dominguez" image={nicoleImage} alt="Listen to our minisode with Nicole Dominguez" link="https://simplecast.com/s/7b8e9469"
        episode="Episode 12 Season 1" description="Nicole Dominguez is a freelance developer, mentor, and digital nomad. We talk about her travels, the conferences that she’s been to, and all her future ambitions." />

      <PlayerContainer title="Tim Holman" image={timImage} alt="Listen to our minisode with Tim Holman" link="https://simplecast.com/s/3ba98d71"
        episode="Episode 11 Season 1" description="Tim Holman is a tinkerer, prankster, and, of course, a developer. If you like weird and zany things, I think you’ll have a lot of fun listening to this episode." />

      <PlayerContainer title="Val Head" image={valImage} alt="Listen to our minisode with Val Head" link="https://simplecast.com/s/70b779d2"
        episode="Episode 10 Season 1" description="Val Head is pretty much all about animations. She’s written a book about animations, she talks about animations in workshops and conferences, and she makes videos about animations." />

      <PlayerContainer title="Stephanie Liu" image={stephImage} alt="Listen to our minisode with Stephanie Liu" link="https://simplecast.com/s/393e0b10"
        episode="Episode 9 Season 1" description="Stephanie Liu and I talk about bubble tea, JavaScript, and CSS. She has a lot to teach about teaching, finishing projects, and motorcycles." />

      <PlayerContainer title="Shanise Barona" image={shaniseImage} alt="Listen to our minisode with Shanise Barona" link="https://simplecast.com/s/af02b200"
        episode="Episode 8 Season 1" description="Shanise Barona is a web developer and we talk about her adventures and struggles on learning different technologies and what it's like being the newest Elaconf Organizer." />

      <PlayerContainer title="Gabrielle Wee" image={gabrielleImage} alt="Listen to our minisode with Gabrielle Wee" link="https://simplecast.com/s/d47b8d1a"
        episode="Episode 7 Season 1" description="Gabrielle Wee talks about user interfaces, her adventures in freelancing, and the joys of Twitter." />

      <PlayerContainer title="Una Kravets" image={unaImage} alt="Listen to our minisode with Una Kravets" link="https://simplecast.com/s/573d84df"
        episode="Episode 6 Season 1" description="Una Kravets an amazing frontend developer, designer, and all around awesome person." />

      <PlayerContainer title="Pam Selle" image={pamImage} alt="Listen to our minisode with Pam Selle" link="https://simplecast.com/s/8470604e"
        episode="Episode 5 Season 1" description="Pam Selle talks about AWS Lambda, her books, and her experience doing Recurse Center." />

      <PlayerContainer title="Rachel Smith" image={rachImage} alt="Listen to our minisode with Rachel Smith" link="https://simplecast.com/s/071e7477"
        episode="Episode 4 Season 1" description="Rachel Smith is a JavaScript and Ruby developer at Codepen. She talks about creepy dudes, learning on the job, and sleeping habits." />

      <PlayerContainer title="Alex Lash" image={alexImage} alt="Listen to our minisode with Alex Lash" link="https://simplecast.com/s/73b735a3"
        episode="Episode 3 Season 1" description="Alex Lash is a designer, frontend developer, and a teacher. She talks about switching between design and frontend work, Girl Develop It, and prototyping your work." />

      <PlayerContainer title="Joni Trythall" image={joniImage} alt="Listen to our minisode with Joni Trythall" link="https://simplecast.com/s/f0bb7bee"
        episode="Episode 2 Season 1" description="Joni Trythall (or Joni Bologna) is a really cool human being who takes ideas from napkin doodles allll the way to implementation. She’s also a kickass teacher." /> 

      <PlayerContainer title="Helen V. Holmes" image={helenImage} alt="Listen to our minisode with Helen V. Holmes" link="https://simplecast.com/s/71dcf40a"
        episode="Episode 1 Season 1" description="Helen V. Holmes talks about working on Fred the Dragon, web typography, and her work on the CSS Grid inspector on Firefox." /> 
    </section>
  </div>
);
