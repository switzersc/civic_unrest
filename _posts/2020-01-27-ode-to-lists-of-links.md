---
layout: post
title:  "Where are the Government API Directories?"
date:   2020-01-27 00:10:00 -0500
tags:
- APIs
- government
- standards
- human-centered design
image: 
  feature: "table_of_contents_manuscript.jpg"
---

I’ve been working on organizing some departmental knowledge at CMS, and our [human-centered design](https://www.designkit.org/human-centered-design){:target="_blank"} team -- the crew that promotes design thinking and helps other teams build better, more user-focused products and processes<a href="#footnote1-20200127" class="body-footnote-link" name="footnote1anc-20200127"><sup>1</sup></a> -- recommended that my first step be to get teams to make directories. It's a huge task to get everyone to use [Confluence](https://www.atlassian.com/software/confluence){:target="_blank"} or to use it consistently. Instead, make sure each team has one Confluence page that links out to everything someone might need, and keep a central directory linking out to those team's directory pages. 

Directories aren’t just useful to collect resources in a collaborative team setting. Google found success in being the biggest, baddest directory<a href="#footnote2-20200127" class="body-footnote-link" name="footnote2anc-20200127"><sup>2</sup></a> of the World Wide Web in the whole wide world. Its premier product is essentially a list of links to other pages on the internet. The web wouldn’t be what it is today without lists of links, and without people or programs making lists of links.<a href="#footnote3-20200127" class="body-footnote-link" name="footnote3anc-20200127"><sup>3</sup></a> 

This isn’t a new concept: tables of contents and indices in the backs of books have been providing lists of links for millennia.<a href="#footnote4-20200127" class="body-footnote-link" name="footnote4anc-20200127"><sup>4</sup></a> Tables of contents, indices, directories, catalogues, registries, etc -- these are all about empowering the user. Do you think you know what people are looking for? You don’t. That’s why you have to empower people to find it themselves and access what they find. In other words: You need to give them a list of links -- and maybe a decent search function.<a href="#footnote5-20200127" class="body-footnote-link" name="footnote5anc-20200127"><sup>5</sup></a> 

In the context of government, it may seem like a no-brainer that a government website should have directories: a directory of all the services offered by that agency, or a directory (a.k.a. sitemap) of all the pages you can find on that website. Indeed, most government websites have these things. In fact, this may seem so obvious you're probably wondering why I'm writing about it.

*The thing is, when it comes to APIs and specifically government APIs, we don't see a lot of directories.* 

Right now there is no complete (or even partially complete) authoritative list of US federal APIs. Here's what does exist (that I could find this weekend):

* [18F](https://18f.gsa.gov/){:target="_blank"} used to maintain a [list of federal developer hubs](http://18f.github.io/API-All-the-X/pages/developer_hubs/){:target="_blank"}, which is a pretty decent substitute for a list of federal APIs. An organization's developer hub would typically list all of that organization's APIs; however, this isn't always the case. Furthermore, the Github repository for the website's code has been archived, and the [last update](https://github.com/18F/API-All-the-X/blob/master/_data/developer_hubs.yml){:target="_blank"} was made in September, 2018.<a href="#footnote6-20200127" class="body-footnote-link" name="footnote6anc-20200127"><sup>6</sup></a>

* Programmable Web's [Government category](https://www.programmableweb.com/category/government/api){:target="_blank"} in their API directory currently contains 772 APIs. However, these include APIs from governments across the world (e.g. Singapore and New Zealand) as far as I can tell, there's no way to filter these by country. Furthermore, some of these APIs are not published by governments but by private companies or other organizations. 

* The next closest thing I could find is [data.gov](https://data.gov){:target="_blank"}. Notably, data.gov is the US federal directory for open datasets, and datasets are not the same thing as APIs. APIs are complete software products: they have a full lifecycle from strategy and design, to testing and deployment, to marketing and change management. Plus, they can be transactional, allow you to send data back (a.k.a. "write" APIs), or provide services (e.g. enabling you to [submit a FOIA request via API](https://www.foia.gov/developer/)). Some of the datasets linked to from data.gov are available via APIs, in addition to being available as flat file downloads. You can [specify “API”](https://catalog.data.gov/dataset?q=-aapi+api+OR++res_format%3Aapi#topic=developers_navigation){:target="_blank"} in the data directory to find these.<a href="#footnote7-20200127" class="body-footnote-link" name="footnote7anc-20200127"><sup>7</sup></a>

I've done some research into other government API directories as well, and haven't come up with a whole lot. Here are a couple:

* New Zealand has an [API catalogue](https://api.business.govt.nz/api/explore-apis/by-category?tag=Companies-group&){:target="_blank"} that you can search, and when you select any API, you are directed to a page with both documentation and an API console rendered from the API’s OpenAPI definition. 

* The UK Government Digital Service (GDS) [recently started](https://www.ukauthority.com/articles/gds-launches-government-api-catalogue/){:target="_blank"} an [API catalogue initiative](https://alphagov.github.io/api-catalogue/#uk-government-apis){:target="_blank"}.

## Why bother with government API directories?
API directories are important because APIs are products. An API directory is a product directory: you can think of it as both an inventory for the business owner and a catalogue of available products for the customer. Governments should have directories of their API products so that they themselves know what they have across different silos (a.k.a. agencies and departments) and can begin to collaborate and share knowledge (and eventually infrastructure), and so that the public can discover and use services and products offered as APIs. 

You know that feeling when you go to an ice cream shop and want mint chocolate chip but it's not on the menu, so you settle for chocolate chip cookie dough, only to find out after you're halfway through that the shop had mint chocolate ship all along? Or you find out the shop had extra rich, dairy-free dark chocolate sorbet, which you'd never heard of before but definitely would've ordered if you'd seen it on the menu? Yeah, you feel a bit cheated, but in a way where no one wins. 

That's how I felt when I discovered the [NPPES API](https://npiregistry.cms.hhs.gov/registry/help-api), CMS's provider lookup API: I had already seen [CMS's developer portal](https://developer.cms.gov/) and thought I knew what was on CMS's menu, only to discover this other API weeks later in a meeting. Needless to say, the dev portal does not list the NPPES API.<a href="#footnote8-20200127" class="body-footnote-link" name="footnote8anc-20200127"><sup>8</sup></a>

## Why are API directories so hard?
People have been trying to build API directories for years. [Programmable Web](https://www.programmableweb.com/category/all/apis){:target="_blank"}, [RapidAPI](https://rapidapi.com/){:target="_blank"}, and others have API directories of varying levels of freshness and accuracy. It’s hard -- especially when you’re relying on humans to create and maintain these directories. There are so many APIs, and they change: they get new versions, or they get deprecated, or their documentation moves to a different URL. It's a lot to keep track of.

Wouldn't it be great if we could automate creating and maintaining API directories somehow? 

Luckily, people have been working on ways to do just that!

* [APIs.json](http://apisjson.org/){:target="_blank"}: This project, started by the [API Evangelist](http://apievangelist.com/){:target="_blank"} and [3scale](https://www.3scale.net/){:target="_blank"}, aims to create a standard, machine-readable way for API providers to describe and share their API operations, similar to how web sites are described using sitemap.xml (which is a pretty standard part of websites now). You can search APIs that are described by apis.json files at the related search engine project: [apis.io](https://apis.io/){:target="_blank"}.

* [JSON Home](https://tools.ietf.org/html/draft-nottingham-json-home-06){:target="_blank"}: Similar to the above, this project aims to provide a standard for machine-readable "homepages" for JSON APIs. 

The goal with both of these standards is that you can figure out what APIs are offered by a given company or organization simply going to the API homepage. That homepage is essentially a directory of the APIs available with links to the documentation of each API. 

## How can we get to maintainable, sustainable government API directories?
Many governments already have API standards and guidelines that they publish and -- hopefully -- adhere to. I would like to see each of these documents include a requirement that agencies keep an up-to-date machine-readable directory of their API offerings that link to the OpenAPI (or other standardized) definition for each API. One way they could do this is having an APIs.json file life at agency.gov/apis.json -- or, they could use JSON Home or other emerging standards for machine-readable API directories. 

The idea is, if you are a central government and you have some agencies publishing APIs, they could list their APIs as data in a machine-readable format on a URL that they've given you that doesn't change, and then you can have a website that grabs that data from those URLs in real-time. Then, you can display the data however you like -- maybe you jam all these lists into one list and display the list with pretty styling and let users search by keyword or filter by agency. Then, BAM, you have a centralized API directory that gives a coherent and accurate picture of all the APIs provided across your agencies, and all you had to do was add the agencies' directory URLs to your website's list of URLs to get data from. 

Some governments and agencies already require API providers to register their APIs, though this isn't currently requird to be in machine-readable formats:

* [Government of Australia](https://apiguide.readthedocs.io/en/latest/build_and_publish/advertise.html){:target="_blank"}
* [General Services Administration (GSA), USA](https://github.com/GSA/api-standards#1-add-your-api-to-the-gsa-api-directory){:target="_blank"}

I was excited to read that data.gov is already pushing a [similar initiative](https://project-open-data.cio.gov/v1.1/schema/){:target="_blank"} for open datasets: All agencies [by the end of 2020](https://strategy.data.gov/action-plan/#action-3-assess-data-and-related-infrastructure-maturity){:target="_blank"} have to publish catalogues of their datasets at agency.gov/data and each dataset or data API offered by an agency must be described by a standardized data.json file that contains metadata. This makes automated discoverability and maintenance of the federal data directory not only possible, but easy. Let's work towards making this same principle a reality for government APIs as well.
    
<div class="footnote-block">

	<div id="footnote1-20200127" class="footnote-item">
	<a href="#footnote1anc-20200127" name="footnote1sym-20200127">1</a> 
      Interested in how we use human centered design at CMS? Read about it on the <a href="https://medium.com/@USDigitalService/injecting-human-centered-design-into-government-policymaking-848d092fc568" target="_blank">USDS blog</a>.
	</div>

	<div id="footnote2-20200127" class="footnote-item">
	<a href="#footnote2anc-20200127" name="footnote1sym-20200127">2</a> 
	  Other superlatives we could add: Creepiest, greediest, megalomaniacalest, etc.
	</div>

	<div id="footnote3-20200127" class="footnote-item">
	<a href="#footnote3anc-20200127" name="footnote3sym-20200127">3</a> 
	Unfortunately, Google's dominance as The Directory of the Internet is often a big deterrent from people making their own.
	</div>

	<div id="footnote4-20200127" class="footnote-item">
	<a href="#footnote4anc-20200127" name="footnote4sym-20200127">4</a> 
	According to <a href="https://en.wikipedia.org/wiki/Table_of_contents" target="_blank">Wikipedia</a>. Wikipedia is another great example of a product using links to help people find what they’re looking for -- and things they weren't. Alas, the many hours lost to Wikipedia rabbit holes. 
	</div>

	<div id="footnote5-20200127" class="footnote-item">
	<a href="#footnote5anc-20200127" name="footnote5sym-20200127">5</a> 
	  Wondering what to get me for my birthday? That’s right - give me a list of links, maybe one with links to cool things to do in DC, because damn is it hard to find non-museum or non-institution events in this city.
	</div>

	<div id="footnote6-20200127" class="footnote-item">
	<a href="#footnote6anc-20200127" name="footnote6sym-20200127">6</a> 
	 Interestingly, it looks like they'd had other ideas for creating a canonical list before, based on this <a href="https://github.com/18F/federal-apis" target="_blank">old, never completed Github repo</a>. 
	</div>

	<div id="footnote7-20200127" class="footnote-item">
	<a href="#footnote7anc-20200127" name="footnote7sym-20200127">7</a> 
	But this isn’t really a directory of the sort I’m looking for, and it appears only two departments publish APIs to this catalogue. These APIs are open data APIs and some of these APIs use HTML as a content type, so can these even be called APIs?
	</div>
	

	<div id="footnote8-20200127" class="footnote-item">
	<a href="#footnote8anc-20200127" name="footnote8sym-20200127">8</a> 
	  To be fair, the NPPES API replaces a data download, so the providers may be thinking of it more as an open data offering than an API product, but still -- this is an API I'd like to use in a real-time manner, and if I hadn't been in the room to hear someone mention it, I would not even have known about it. 
	</div>
	
	<p style="font-size: 0.9rem;font-style: italic;"><a href="https://www.flickr.com/photos/35401416@N08/6829856365">"Table of contents in Benedictus de Nursia: De conservatione sanitatis"</a><span> by <a href="https://www.flickr.com/photos/35401416@N08">University of Glasgow Library</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC-SA 2.0</a></p>
</div>