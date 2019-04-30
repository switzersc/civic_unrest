---
layout: post
title:  "(Anti-)Trust is Digital Public Infrastructure"
date:   2019-04-30 11:00:00 -0500
tags:
- civic tech
- criticism
- gov tech
- amazon
- power
- google
- cloud
- infrastructure
- private sector
- public sector
- procurement
image:
  feature: "datacenter.jpg"
---

“What does digital infrastructure mean to you?” someone asked me last week on a late night walk through DC. 

We’d just left federal government grounds, where a cross-organizational, tech-in-gov family games night was hosted in the ceremonial Secretary of War suite. I was buzzing from pizza and non-stop conversation about improving government for the American public.

“APIs,” I said – which, you might already know, is my default answer to any tech question. API stands for Application Programming Interface, and it’s how you exchange data between software systems or servers. 

“I’m thinking at a lower level,” he responded. “To me, it’s NPM (a tool for managing JavaScript libraries), or other libraries we use to build software.”

In other words, he meant code, open source or otherwise.

## Hardware and the cloud as digital infrastructure

Code is digital infrastructure, and I’ve already written on why I think [public infrastructure code should be open source](/2019/02/07/public-vs-community-ownership-open-source-civic-tech){:target="_blank"}. But there are other layers of digital infrastructure as well: the lowest level of all, technologically speaking, is hardware. APIs help you get data and value out of a system: they enable new workflows and products and unlock value for other parties. But to have APIs, you have to have software and data that can be exposed and used by others. That software lives as code, and that code has to live somewhere.

Traditionally, in government and enterprise industries – from finance to healthcare – that “somewhere” was and often still is a locked-down warehouse, basement, or closet, housing one or many servers that can be accessed through secure networks on-site (e.g. an “intranet”) or, when allowed, by external users via the internet. 

Compare that to the “cloud”: The cloud is a bunch of servers that run somewhere else, in a dedicated server farm or data center, and if you want to host your code and data somewhere, you can purchase space in that data center. You no longer have to worry about the physical safety of your servers, like protecting them from natural disasters or making sure they don’t overheat. You also don’t have to worry about scaling: if you need the servers to do more or hold more data, or you need more users to be able to make requests to your servers, you don’t have to buy the new hardware (or physical space) and provision it yourself. You can simply click a button, pay a little more, and voila! You’ve got more server space and capability almost instantly.

The question of whether governments should self-host software that is public infrastructure or host it in the cloud, is complex. I see two main reasons why: 

1. Self-hosting is extraordinarily expensive, especially with the existing procurement process and government vendor landscape.

2. The existential threat to democracy that monopolistic private hosting companies pose, especially the elephants in every room: Amazon and Google.

Governments very often still “self-host,” but what this usually means is pissing away money to an endless number of contractors (including multiple layers of companies who simply re-sell the software or services of other companies) who manage and maybe sometimes own the data centers. It’s an expensive and inefficient byproduct of the bloated, spaghetti-like procurement process. I’m generally trying to be less uncouth (more couth?) but honestly this makes me so angry and the phrase “pissing away” feels right in my soul. 

Governments can save millions or billions of dollars by moving their code to be hosted in the cloud. This would also give better service to the People through more reliable, faster, and sometimes more secure websites that provide public services. 

**But, and this is a big but: if hardware is a necessary component of digital public infrastructure, should that hardware be publicly (i.e. government) owned?**

I think the answer is maybe, but it has to be done differently than it is now. Procurement is part of digital infrastructure too, and the existing processes need to be improved if not overhauled completely. 

**And if that hardware is not publicly owned, is it okay for government software to be hosted on just one, maybe two, cloud hosting providers?**

The answer to this question is emphatically **no**.

This is a critical question to ask in this moment, because one cloud hosting provider is currently beating out all the others and is frequently cited as the best-in-class, de facto hosting platform: Amazon.<a href="#footnote1-20190430" class="body-footnote-link" name="footnote1anc-20190430"><sup>1</sup></a> Amazon Web Services (AWS) has over a 35% market share of the cloud,<a href="#footnote2-20190430" class="body-footnote-link" name="footnote2anc-20190430"><sup>2</sup></a> and there are only two significant competitors: Microsoft Azure and Google Cloud. An argument could even be made that the bigger a cloud provider is, the cheaper and more efficient its services are, which, some might argue, is better for everyone. Why have more than one big cloud, let alone three big clouds?

Right now I’m generally for government services to be moved to the cloud, but it cannot be to a single cloud. If all government services were hosted on AWS, this would pose an incredible risk to the People: If Amazon failed, then government might fail.<a href="#footnote3-20190430" class="body-footnote-link" name="footnote3anc-20190430"><sup>3</sup></a> And even scarier, if Amazon could influence or turn off government by increasing costs or shutting down services, they could hold government, and therefore the People, hostage.<a href="#footnote4-20190430" class="body-footnote-link" name="footnote4anc-20190430"><sup>4</sup></a>

Government cannot rely on a single cloud that it does not own. We need clear guidelines and policy for diversifying the clouds that make up the hardware layer of digital public infrastructure. 

**But it’s not just within the public realm that we have to be wary of clouds that are too big to fail or so big and closed that they can exert undue control without oversight.** Our economy and society are increasingly run in digital or online spaces, and those spaces, while not physical, are public spaces. The digital infrastructure underlying them needs thoughtful oversight, regulation, and maintenance just as we would expect for roads, parks, and brick-and-mortar businesses. We need a plethora of digital options for hosting our businesses, accessing services, communicating with our social networks, and sharing photos from last week’s Corgi meetup in Central Park, and we need to be able to leave a platform if we don’t like what they’re doing with our data or the rules they impose on the types of software we can host.

*We need policy and anti-trust regulation to protect the People (read: the consumers, the citizens, the residents, the people who just want to get on with their day) from privately held, monopolistic cloud infrastructure.*

On a more technical note, this is why I’m also a proponent of Docker, containerization, and serverless technologies, which make it possible and, ideally, easy to move from one cloud provider to another. That way, even if you end up on AWS or Google Cloud, you can re-deploy your code to a different provider, or your own servers, in days or even hours if you need to. If these words don’t mean anything to you, just remember that portability of code and data is critical if we’re going to use cloud providers. 

I’m also super excited about distributed and decentralized technologies to help solve this problem, which I’ll write about later.

## Trust is digital infrastructure

So far I’ve talked about how hardware, the cloud, procurement, and anti-trust regulation are key components of digital (public) infrastructure. **But underlying all public infrastructure, digital or otherwise, is trust.**

We trust that restaurants are being reviewed by the Department of Health to make sure they’re sanitary and safe, and we trust that, barring some cases of discrimination and minor corruption, these reviews are honest and in the best interest of the public. We trust that the bridge we drive over to get to work is being maintained and audited for safety on a regular basis by dependable civil servants (or contractors being managed by civil servants), so that it won’t collapse while we’re on it. We trust -- maybe -- that when we enter our social security number into a government website, that that number and accompanying sensitive information about us is safe from hackers. 

It’s worrying to me that I have to insert the “maybe.” Government technology is so far behind private sector technology, from user, product, and tech perspectives, that it makes sense why people trust private companies more when it comes to technological sophistication and security. Tech companies got into people's hands and onto people's screens first. It makes sense to be a little cautious, or skeptical, but we should also have that skepticism when we interact with private companies’ tech too. 

The key difference between private companies and government that somehow seems to be forgotten is that, in a democracy or republic at least, the People own the government and can influence and change how it’s run. When we don’t think gov tech is up to the task, we can vote for politicians and legislation to change that and we can meet with or become civil servants who tackle those problems. When we lose faith in Facebook or Google, we are powerless to change those companies, especially if/when there are no other options for us to turn to to conduct business or online social activity.

It’s therefore also worrying to me when governments choose to trust private companies rather than build trust directly with citizens; for example, when a government website asks you to sign in using your Facebook login. While whoever made the decision to have that authentication feature probably had good intentions (such as attract a younger demographic or make it easier for users by not adding to account credentials they have to remember), **this is a failure of gov tech because the government is abdicating the privilege and responsibility of trust.** It outsources identify management, which is surely a key function of government, an indicator of authority, and a requirement for trust in any transaction, to a private company. Not only a private company, but Facebook, the company that is already creepy AF and doing unethical and certainly untrustworthy things with your data.

*When we build civic or gov tech, we cannot give up trust. We cannot build tools or companies that ask the People to trust those tools and companies over or instead of the government. As democratic institutions, we have to actively build trust, ask for it, and earn it. It’s the most critical piece of infrastructure, and we cannot lose it to private companies instead.*


<div class="footnote-block">
	<div id="footnote1-20190430" class="footnote-item">
	<a href="#footnote1anc-20190430" name="footnote1sym-20190430">1</a> 
	For some examples of Amazon's cloud reach even four years ago, see <a href="https://www.theatlantic.com/technology/archive/2015/04/the-unbelievable-power-of-amazon-web-services/391281/" target="_blank">this Atlantic article</a> 
	</div>

	<div id="footnote2-20190430" class="footnote-item">
	<a href="#footnote2anc-20190430" name="footnote2sym-20190430">2</a> 
	You can read more <a href="https://techcrunch.com/2017/10/30/aws-continues-to-rule-the-cloud-infrastructure-market/" target="_blank">here</a> about the research behind that number. 
	</div>

	<div id="footnote3-20190430" class="footnote-item">
	<a href="#footnote3anc-20190430" name="footnote3sym-20190430">3</a> 
	And we’ve already seen the pain caused by political goverment shutdowns.
	</div>

	<div id="footnote4-20190430" class="footnote-item">
	<a href="#footnote4anc-20190430" name="footnote4sym-20190430">4</a> 
	One could argue that vendors currently hold the government hostage through the procurement system, but I’m not going to dive into that right now.
	</div>
	
	<p style="font-size: 0.9rem;font-style: italic;">Post header image <a href="https://www.flickr.com/photos/60723528@N00/38298422">"DC2"</a><span>by <a href="https://www.flickr.com/photos/60723528@N00">Tim Dorr</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-SA 2.0</a><a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img style="height: inherit;margin-right: 3px;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a></p>
</div>