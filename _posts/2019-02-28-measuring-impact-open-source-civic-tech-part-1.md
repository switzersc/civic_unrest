---
layout: post
title:  "Measuring the Impact of Open Source Civic Tech, Part 1: The Hypothesis"
date:   2019-02-28 16:00:00 -0500
tags:
- civic tech
- open data
- impact
- open source
- CHAOSS
- code for america
---

Since my [last post]((/2019/02/07/public-vs-community-ownership-open-source-civic-tech)){:target="_blank"}, I've been obsessed with the idea of measuring impact. How do we know that doing any of this helps, and how do we make it more valuable? This topic has more facets than my neighborhood has feral cats, even if we're scoping this to just civic tech. Given that open source software (OSS) is – and should be – such a major part of civic tech, I want to start there. How can we measure the health of the OSS component of civic tech projects and can that tell us anything of value about the impact of a given civic tech project or the overall movement?

In this post, I'll cover how people are currently thinking about civic tech impact, how other people are currently measuring OSS health and impact metrics, and how we might be able to approach looking at the intersection of those two things in the context of open source civic tech. This is just the first post of a series in which I do boatloads of research, data collection, probably some coding, and ultimately analysis on this intersection.

My hypothesis driving this research: by applying OSS health metrics to civic tech projects published as OSS online, we will see that the most healthy and longest living projects are reusable infrastructure tools or components rather than community-specific projects, and that community-specific OSS projects have healthy metrics only when they've been adopted by a government or nonprofit entity.

## Measuring Civic Tech Impact
There’s been lots of conversation over the past year about the success of the open data and civic tech movements – and lack thereof. The word “success” suggests that there were goals from the beginning that the movements are measured against, but I’m not entirely sure that’s true. There was vision, undoubtedly, but I haven't found evidence yet that anyone set forth quantifiable measures of success 10 years ago that could be tracked through today.

Therefore, let’s talk about “impact” instead of “success.” Impact can be had even when success is undefined. Even then, impact is hard to measure. David Eaves at the Harvard Kennedy School [recently wrote](https://apolitical.co/solution_article/the-first-decade-of-open-data-has-been-a-win-but-not-for-the-reasons-you-think/){:target="_blank"} some of his observations on often unrecognized wins of the open data movement, but still notes the difficulty in truly understanding all the impacts:
 
> Identifying and collecting [aggregate impacts] into something that is coherent and recognisable as public value is frustratingly difficult. Open data advocates are left with the Sisyphean task of chronicling disparate successes.<a href="#footnote1-20190228" class="body-footnote-link" name="footnote1anc-20190228"><sup>1</sup></a>

In civic tech as well, the conversation around impact tends to focus on stories and individual projects. To some extent this makes sense: the communities trying to use open data and civic tech are all different with diverse needs, and impact in one community may look different than in another. Before we can identify how to apply impact measurement methodology across all projects, we should first figure out how to quantifiably measure the impact of individual projects themselves.

This is where it gets messy. Community groups and even larger, formal nonprofits in this space haven’t quite figured out how to measure outcomes. Grace O’Hara at Code for Australia [recently wrote](https://apolitical.co/solution_article/civic-tech-movement-teenage-years/){:target="_blank"} about the lack of and need for long-term impact research, and the importance of capturing measures like sustainability and inclusion in addition to “traditional measures of technological success: user numbers, reach, impressions and spread.” Likewise, Matt Stempeck has bemoaned [10 problems with impact measurement](https://civichall.org/civicist/10-problems-with-impact-measurement-in-civic-tech/){:target="_blank"}, including “We’re all using different metrics,”  “Sharing is irregular,” “Most projects don’t reach most people”, and “We don’t evaluate relative to the macro environment.”<a href="#footnote2-20190228" class="body-footnote-link" name="footnote2anc-20190228"><sup>2</sup></a>

Take the the annual [Code for America Impact Report](https://www.codeforamerica.org/impact/2018){:target="_blank"} as an example. This report highlights the work of distinct projects and partnerships and uses metrics specific to those examples to show impact. Another example is this [research article](https://techfails.transparencee.org/){:target="_blank"} published by TransparenCEE, an organization that works towards government transparency and accountability using tech in Central and Eastern Europe: it too showcases specific examples, which the authors gathered from interviews with six civic tech organizations.

These reports show the importance of measuring impact within a given problem space and community, and they also show that success is often measured in terms of the civic problem the project is trying to solve. 

What isn't measured? Desipite TransparenCEE's finding that sustainability is an ongoing issue with civic tech success, I don't see that being consistently measured or reported on. I also haven't found measurement of of the success or impact of the technology component of a given project, or the project's impact on other communities. 

In a [separate article](https://peoplebeforetech.transparencee.org/){:target="_blank"}, TranspranCEE proposes that we look at impact not just within the community the project was built for, but also it's outward effect: "The main question we should all ask ourselves is how many communities did we manage to inspire to take action based on our project?"

*We should ask not only how many communities did we inspire, but also how many communities did we empower to take action based on our project?* 

This to me is the real opportunity for the tech aspect of civic tech, and the reason we should look at the impact and health of the tech used in civic tech projects. Tech projects that provide infrastructure or tools that can be applied to other projects are incredibly important to civic tech, and their existence as open source software is necessary to their reusability and thus their impact.

## Measuring Open Source Software Health (and Impact)
If civic tech is a [tween](https://medium.com/@cydharrell/civic-tech-as-a-tween-4cd780b971bb){:target="_blank"} (or an unruly teenager, as O’Hara posited), then open source is its 20-something older sibling who experimented a ton in college, graduated, and now, after a couple of fun start-up jobs, is looking to find the meaning of life – and stability.  It suddenly cares about its health, wears a FitBit, even goes to the doctor once a year, and wants to become a lasting part of the world.

In this analogy, the FitBit is the [Community Health Analytics Open Source Software](https://chaoss.community/about/){:target="_blank"}, known as CHAOSS. There are other tools and metrics, such as Netflix’s [OSSTracker](https://github.com/Netflix/osstracker){:target="_blank"} or PayPal’s [Gander](https://github.com/paypal/gander){:target="_blank"}, but CHAOSS is the big one run by the Linux Foundation and includes both methodology and tooling. It also has working groups, pleasant diagrams, and, naturally, open source projects to help you run your own analysis and make sense of the findings. 

Big companies use and build OSS as major parts of their business, and they care about measuring the impact of this work. Facebook publishes a yearly [open source report](https://code.fb.com/open-source/open-source-2018/){:target="_blank"}, and Google intermittently [publishes one](https://opensource.googleblog.com/2016/10/google-open-source-report-card.html){:target="_blank"} as well. Companies and non-profits alike are interested in understanding the impact that OSS has on their business (like efficiency, scalability, and bottom line, but also things like recruitment and marketing) as well as on the larger ecosystem. Check out the Linux Foundation's [detailed guide](https://www.linuxfoundation.org/resources/open-source-guides/measuring-your-open-source-program-success/){:target="_blank"} on approaches to measuring open source program success.

Some of the metrics people collect are qualitative or from surveys, but many are from the OSS projects themselves as they exist on code hosting platforms like Github or Gitlab. A full list of such metrics that CHAOSS has identified lives [here](https://github.com/chaoss/metrics#full-list-of-activity-metrics){:target="_blank"}, but I've pulled out some of the ones I suspect will be interesting to observe while studying civic tech OSS:
* **Age of Community:** Time since repository/organization was registered; or time since first release
* **All Licenses:** List of licenses
* **Average Issue Resolution Time:** The average amount of time it takes for issues to be closed.
* **Blogposts:** Number of blogposts that mention the project.
* **Bus Factor:** The number of developers/organizations it would need to lose to destroy its progress.
* **Community Activity:** Contribution Frequency. Contribution = commit, issue, comment, etc).
* **Contributor Demographics:** Gender, age, location, education, and skills.
* **Decision Distribution:** Central vs. distributed decision making. Governance model, scalability of community.
* **Followers:** Number of followers.
* **Forks:** Number of forks.
* **Installs:** Number of software installations of the project.
* **Open Issues New Contributors:** What is the number of persons opening an issue for the first time?


## On with the Research
Can these OSS health metrics be indicators of the impact of the tech part of civic tech? Can these indicators help us build more impactful, reusable, and scalable open source software? What governance or funding scenarios lead to "healthier" open source tech? Can "healthier" open source tech have positive impact on the outcomes of individual civic tech projects? Which metrics, if any, should we focus our efforts on to make sure our civic tech projects have impact in our communities and beyond? 

These are the questions I want to explore with my research. I'll be using [GrimoireLab](https://chaoss.github.io/grimoirelab/){:target="_blank"} to collect the data, and I'll post the data in an accessible way when I have it. Please reach out if you have any data or feedback to share!


<div class="footnote-block">

	<div id="footnote1-20190228" class="footnote-item">
	<a href="#footnote1anc-20190228" name="footnote1sym-20190228">1</a> 
	  Eaves, David, https://apolitical.co/solution_article/the-first-decade-of-open-data-has-been-a-win-but-not-for-the-reasons-you-think/ 
	</div>

	<div id="footnote2-20190228" class="footnote-item">
	<a href="#footnote2anc-20190228" name="footnote2sym-20190228">2</a> 
	  You can find a rebuttal of his article here: https://civichall.org/civicist/10opportunities-for-impact-measurement-in-civic-tech/ 
	</div>
	
</div>