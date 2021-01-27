import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'all-Projects';
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
    }

  ]

  allProjects = [

    {
      "name": "focusnews",
      "desc": "News App",
      "url": "focusnews.netlify.app"
    },
    {
      "name": "interflix",
      "desc": "Movies App",
      "url": "interflixv3.netlify.app"
    },
    {
      "name": "tek-one",
      "desc": "Tekathon 2020",
      "url": "tek-one.netlify.app"
    },
    {
      "name": "tvd",
      "desc": "The Vampire Diaries",
      "url": ".netlify.app"
    },
    {
      "name": "interflixreviews",
      "desc": "Review movies",
      "url": "interflixreviews.netlify.app"
    },
    {
      "name": "rsidebar",
      "desc": "React sidebar app",
      "url": "rsidebar.netlify.app"
    },
    {
      "name": "rnavbar",
      "desc": "React navbar app",
      "url": "rnavbar.netlify.app"
    },
    {
      "name": "getgitprofile",
      "desc": "Github profiles linked to selfcode3",
      "url": "getgitprofile.netlify.app"
    },
    {
      "name": "getgitprofile2",
      "desc": "Github profiles to github",
      "url": "getgitprofile2.netlify.app"
    },
    {
      "name": "selfcode3",
      "desc": "Code the github commits version 3",
      "url": ".netlify.app"
    },
    {
      "name": "cpl2020",
      "desc": "Code on IPL 2020 days",
      "url": "cpl2020.netlify.app"
    }

  ]
  ngOnInit() {
    this.allProjects.sort(this.sortByProperty("name"))
    console.log(this.allProjects)
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