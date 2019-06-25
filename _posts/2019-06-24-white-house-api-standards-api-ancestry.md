---
layout: post-no-feature
title:  "The White House API Standards and the Ancestry of Government API Guidelines"
date:   2019-06-25 03:20:00 -0500
tags:
- gov tech
- APIs
- white house
- standards
---

**Note: This is somewhat technical and focused on APIs, but may also be of interest to anyone who cares about how conventions and trends for digital government spread.**

I’m in the middle of a research project on government APIs, and as I’ve read more and more examples of API guidelines from governments across the world, it’s struck me how so many of them can trace their roots back to the [White House API Standards](https://github.com/WhiteHouse/api-standards){:target="_blank"}. Even if I haven’t found evidence of direct lineage from the White House standards to a given API playbook, that playbook usually at least cites the White House repo as a resource or example for further reading. 

## Origins of the White House API Standards
In 2011, President Obama issued an [executive order](https://www.govinfo.gov/content/pkg/FR-2011-05-02/pdf/2011-10732.pdf){:target="_blank"} mandating that US federal agencies had to make web APIs. I can imagine that things got chaotic pretty quickly, with competing conventions struggling for dominance like tortoises crawling on top each other for the sunniest spot on the rock, because the following year someone had the good idea of creating a document of API standards for at least the White House APIs to adhere to. 

The White House API Standards repository on GitHub was created on Dec 19, 2012, with a [first commit](https://github.com/WhiteHouse/api-standards/commit/493637c457bf8ac3439feff6d4a391f4f6a9a9dd){:target="_blank"} whose message and content was some pretty impressive ASCII art:

![White House ASCII Art]({{ site.url }}/images/wh-ascii-art.png)

The committer is [Bryan Hirsch](https://github.com/bryanhirsch){:target="_blank"}, tech lead at New Media Technologies at the White House at the time. I found this [sweet slide deck](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/01/api-standards-white-house.pdf){:target="_blank"} that he and Leigh Heyman, Director of New Media Technologies at the White House, used to explain the thinking behind their new standards, plus an article about and [video](https://www.youtube.com/watch?v=-bJo6zii7lw&w=600){:target="_blank"} of the talk. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/-bJo6zii7lw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The tl;dr is that they created the API standards after working on the "We the People” petition website and related API, in order to make the underlying data concepts easier for non-developers to understand as well as maintain and encourage API best practices over time at the White House and maybe beyond. That beyond definitely happened. 

Before I get into that, I think it’s worth documenting here the influences on the White House API Standards:

* [Designing HTTP Interfaces and RESTful Web Services](https://www.youtube.com/watch?v=zEyg0TnieLg){:target="_blank"}
* [API Facade Pattern](http://apigee.com/about/resources/ebooks/api-fa%C3%A7ade-pattern){:target="_blank"}, by Brian Mulloy, Apigee
* [Web API Design](http://pages.apigee.com/web-api-design-ebook.html){:target="_blank"}, by Brian Mulloy, Apigee
* [Fielding's Dissertation on REST](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm){:target="_blank"}

It’s also worth noting that the White House petition project was built in Drupal, and these standards include Drupal-specific resources and one of the main influences is a talk from a Drupal conference. The standards also still include JSONP examples, although that technology is outdated, insecure, and not generally recommended anymore.

## The offspring and third cousins twice removed of the White House API Standards

![White House API Standards GitHub Repo]({{ site.url }}/images/wh-api-standards-github-repo.png)

To trace the family tree that sprung from the White House API guidelines, I started with the GitHub repository’s forks. There are 654 forks, which means that the repo has been copied and potentially extended or used as a base for other projects 654 times. It has 2,621 stars, meaning that many unique users on Github wanted to register their interest in the project. 215 users are watching it, even though the last activity was 4 years ago.

The following governments have made direct forks of the repo:
* [City of Philadelphia](https://github.com/CityOfPhiladelphia/api-standards){:target="_blank"}
* [State of Massachussetts](https://github.com/massdotgov/api-standards){:target="_blank"}
* [US Dept of Labor](https://github.com/USDepartmentofLabor/api-standards){:target="_blank"}
* [UK Gov Digital Service](https://github.com/alphagov/api-standards){:target="_blank"}

Admittedly, a fork doesn't automatically mean use, but in some of these cases the forking organization has clearly used and updated the standards.

Other government agencies cite these guidelines as their origin, although I can’t find a direct GitHub fork or commit trail:

* 18F: [Source](https://github.com/GSA/digitalgov.gov/blob/5362d3e7cdcd5781995faef634ad4ca84c1d1920/content/posts/2014/07/2014-07-16-hot-off-the-press-18fs-api-standards.md){:target="_blank"} by forking the White House's repo.
* Australian Digital Transformation Office: [Source](https://github.com/AusDTO/apiguide/blob/e75f82e81565203aa20773347e2d479499dbef9d/build_and_publish/index.rst){:target="_blank"}
* Finland: [Source](https://github.com/6aika/development_guide/blob/b099cf86e509c4ffeab6eaacbb765702763f15ad/README.md){:target="_blank"}
* El salvador: [Source](https://github.com/egobsv/EstandaresInteroperabilidad/blob/097b378c43fd2858590c9b33878e6cf35fe49388/Desarrollo.md){:target="_blank"}

The fact that 18F (and subsequently the General Services Administration), the Australian Digital Transformation Office, and the UK Government Digital Service all have API guidelines that either directly originate from the WH standards or were influenced by them is pretty significant, because all three of these organizations have been hugely influential in digital government and government API strategy and implementation. 

And the influence of this repo don’t stop with the public sector. Plenty of private sector and nonprofit organizations such as Code for America brigades have forked the repo or cited it as an example or influence, including [Microsoft](https://github.com/microsoft/api-guidelines/blob/21106db06fefc734b5827008bada6b4ff6aa6bb8/CONTRIBUTING.md){:target="_blank"} and [IBM Watson](https://github.com/watson-developer-cloud/api-guidelines/blob/f25639b1063803d5b1fc3a74a4d94b905cc73301/README.md){:target="_blank"}

Most of this was uncovered through browsing and text searching on Github as well as on DuckDuckGo. You could explore this more rigorously with some comparative textual analysis of government API guidelines out there that may not reference the White House repo, but I’m not sure if it’s worth going that far. APIs have gotten more ubiquitous and as more and more governments (and companies) have started implementing API programs, their API conventions have matured and evolved past the White House API standards to include things like design thinking for API product strategy and more detailed recommendations on other aspects of API lifecycle such as security and discovery.

 Despite that, it’s interesting to see how much impact these standards have had. As I continue with my research, I'll probably be able to further trace lines back to 18F, UK Government Digital Service, and Australia, showing the impact that any single organization can have on this tightknit landscape. 