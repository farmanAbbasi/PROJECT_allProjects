import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'all-Projects';
  mp3Path=""
  time:any;
  
  
  linksArray = [
  
    {
      "name": "website",
      "link": "https://farmanabbasi.netlify.app",
      "icon":"fa fa-globe"
    },
    {
      "name": "github",
      "link": "https://github.com/farmanAbbasi",
      "icon":"fa fa-github"
    },
    {
      "name": "linkedin",
      "link": "https://www.linkedin.com/in/mohammad-farman-abbasi",
      "icon":"fa fa-linkedin"
    },
    {
      "name": "youtube",
      "link": "https://www.youtube.com/channel/UCmBdjux34PcC2rSV-z0nTBg",
      "icon":"fa fa-youtube"
    },
    {
      "name": "medium",
      "link": "https://farmanabbasi.medium.com/",
      "icon":"fa fa-medium"
    }

  ]

  allProjects = [
    {
      "name": "Bharatpe clone",
      "desc": "Its a bharatpe clone ui.",
      "url": "https://bharatpe-clone.netlify.app"
    },
 {
      "name": "interflixgame",
      "desc": "Play a game and have fun. Created using js,html and css",
      "url": "https://interflixgame.netlify.app"
    },
    {
      "name": "focusnews",
      "desc": "News Application with language selection and search feature for any desired topic.Created using REST API, node.js and Angular.",
      "url": "https://focusnews.netlify.app"
    },
     {
       "name": "interflix",
       "desc": "One stop movies watch, with popular, trending, netflix-trend, movie-news etc. features. Created using REST API, node.js, Angular, TMDB for movies, Python, Webscraping and others.",
       "url": "https://interflixv3.netlify.app"
     },
    {
      "name": "tek-one",
      "desc": "Tekathon 2020, full application built within 1hr with deployment.",
      "url": "https://tek-one.netlify.app"
    },
    {
      "name": "tvd",
      "desc": "The Vampire Diaries all season download and stream online. Created using Webscraping, node.js and Angular.",
      "url": "https://tvd.netlify.app"
    },
    {
      "name": "interflixreviews",
      "desc": "Watch movies on Interflix and then review for other users. Created using React.js, mongoDB and compass.",
      "url": "https://interflixreviews.netlify.app"
    },
    {
      "name": "rsidebar",
      "desc": "Learning React with sidebar app. Created using React.js.",
      "url": "https://rsidebar.netlify.app"
    },
    {
      "name": "rnavbar",
      "desc": "Learning React navbar app.  Created using React.js.",
      "url": "https://rnavbar.netlify.app"
    },
    {
      "name": "getgitprofile",
      "desc": "Search any Github profile and then see the code from selfcode3. Created using Angular, Github API, python.",
      "url": "https://getgitprofile.netlify.app"
    },
    {
      "name": "getgitprofile2",
      "desc": "Search any Github profile and browse github. Created using Angular, Github API, python.",
      "url": "https://getgitprofile2.netlify.app"
    },
    {
      "name": "selfcode2",
      "desc": "Get any public user and see repos also run Python and Java files on the spot and review what has already been pushed. Created using Angular, Github API, python, runtime for Python and Java to run code.",
      "url": "https://selfcode2.netlify.app"
    },
    {
      "name": "cpl2020",
      "desc": "Get Topics against IPL teams to code and learn during IPL 2020. Created on Angular.",
      "url": "https://cpl2020.netlify.app"
    },
    {
      "name": "meditor",
      "desc": "Upload status which can be seen by everyone using the app for the 24hrs.",
      "url": "https://me-editor.netlify.app"
    }

  ]
  
  ngOnInit() {
    this.allProjects.sort(this.sortByProperty("name"))
    // console.log(this.allProjects)
    this.time =  moment().format('mm');
    
    if(this.time %3==0){
      console.log("playing the flash")
   this.mp3Path= "theflash.mp3"
    }
    else if(this.time%3==1){
      console.log("playing avengers")
      this.mp3Path= "avengers.mp3"
    }
    else{
      console.log("playing pubg")
      this.mp3Path="pubg.mp3"
    }

   
  }

  sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property])
        return 1;
      else if (a[property] < b[property])
        return -1;

      return 0;
    }
  }



}
