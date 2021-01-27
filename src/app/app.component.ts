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
      "link": "https://www.linkedin.com/in/mohammad-farman-abbasi-9a0237142",
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
      "name": "focusnews",
      "desc": "News Application with language selection and search feature for any desired topic.",
      "url": "https://focusnews.netlify.app"
    },
    {
      "name": "interflix",
      "desc": "One stop movies watch, with popular, trending, netflix-trend, movie-news etc. features.",
      "url": "https://interflixv3.netlify.app"
    },
    {
      "name": "tek-one",
      "desc": "Tekathon 2020, full application built within 1hr with deployment.",
      "url": "https://tek-one.netlify.app"
    },
    {
      "name": "tvd",
      "desc": "The Vampire Diaries all season download and stream online",
      "url": "https://tvd.netlify.app"
    },
    {
      "name": "interflixreviews",
      "desc": "Watch movies on Interflix and then review for other users.",
      "url": "https://interflixreviews.netlify.app"
    },
    {
      "name": "rsidebar",
      "desc": "Learning React with sidebar app.",
      "url": "https://rsidebar.netlify.app"
    },
    {
      "name": "rnavbar",
      "desc": "Learning React navbar app.",
      "url": "https://rnavbar.netlify.app"
    },
    {
      "name": "getgitprofile",
      "desc": "Search any Github profile and then see the code from selfcode3.",
      "url": "https://getgitprofile.netlify.app"
    },
    {
      "name": "getgitprofile2",
      "desc": "Search any Github profile and browse github.",
      "url": "https://getgitprofile2.netlify.app"
    },
    {
      "name": "selfcode3",
      "desc": "Get any public user and see repos also run Python and Java files one the spot and review what has already been pushed.",
      "url": "https://.netlify.app"
    },
    {
      "name": "cpl2020",
      "desc": "Get Topics against IPL teams to code and learn during IPL 2020.",
      "url": "https://cpl2020.netlify.app"
    }

  ]
  
  ngOnInit() {
    this.allProjects.sort(this.sortByProperty("name"))
    //console.log(this.allProjects)
    this.time =  moment().format('mm');
    
    if(this.time %3==0){
      console.log("playing the flash")
   this.mp3Path= "../assets/theflash.mp3"
    }
    else if(this.time%3==1){
      console.log("playing avengers")
      this.mp3Path= "../assets/avengers.mp3"
    }
    else{
      console.log("playing pubg")
      this.mp3Path="../assets/pubg.mp3"
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