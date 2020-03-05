---
layout: post
title:  "Scary Words I Hear in GovTech: Maintenance"
date:   2020-03-04 22:29:00 -0500
tags:
- civic tech
- gov tech
- modernization
- maintenance
image:
  feature: "expect-delays-road.jpg"
---

I hear people in government talk about software maintenance a lot. What they usually mean<a href="#footnote1-20200304" class="body-footnote-link" name="footnote1anc-20200304"><sup>1</sup></a> is they have paid for a software application to be built by a contractor and now they want to put it on a shelf and pay someone (possibly a different contractor) to dust it off every now and then. Maybe they'll even pay someone (very possibly yet another contractor) to be on hand should that application fall off the shelf and break -- but only if this happens during business hours (9-12pm and 2-5 ET, Mon-Fri).

Now, if you’re in the private tech sector, you’re probably confused. That doesn’t sound like product development, you might be thinking, and you’d be right. This isn’t product development, and unfortunately, it's often not even what you might consider product support.

**When companies in the private sector treat their products like this -- as something to be built once and then "maintained" -- these products eventually lose all their users.** Sometimes companies put legacy products on life support because they intend to deprecate the product and ask their users to move on by a specific sunset date. For the rest of them, however, they lose users because their users find a better alternative that meets their evolving needs. 

The government rarely sunsets products or processes. Let’s be real: we’re talking about an organization that still requires employees to fax HR paperwork.<a href="#footnote2-20200304" class="body-footnote-link" name="footnote2anc-20200304"><sup>2</sup></a> Users also rarely have alternatives, except for when private industry comes along and convinces them that they should pay for basic services (e.g. filing taxes) or when nonprofits emerge to help with basic social needs (e.g. protecting against housing discrimination). 

**But just because users can't really leave doesn't mean they don't matter.** With government products, the users are the public, are the customers, are the tax payers. Government loses money and trust when it doesn't solve real problems, respond to user needs, and demonstrate value. And spending a lot on software that sits around gathering dust and losing users or causing more frustrated users is rather expensive and doesn't serve the public. 

So, rather than think of software as something static to be maintained, let’s think of software as a product -- in govtech, usually a product whose users are either the public or government users facilitating service delivery. The key product idea to keep in mind is that **the technology isn’t the end goal: solving a problem is the end goal.**<a href="#footnote3-20200304" class="body-footnote-link" name="footnote3anc-20200304"><sup>3</sup></a>

When you’ve built a software application, you don’t measure its success by how often it doesn’t fall over -- a.k.a. how well it is “maintained” -- but by how well it solves the problem you built it to solve.<a href="#footnote4-20200304" class="body-footnote-link" name="footnote4anc-20200304"><sup>4</sup></a> This involves understanding users and their problems, setting goals, and building towards those goals. It involves constantly monitoring and assessing the product and its performance towards those user-centric goals. That involves continuing to stay in touch with and understanding users. 

### Example: Applying for a driver's license

The problems related to this process vary from state to state, and I'm not going to pretend to be an expert. But I have been in many a DMV (Dept. of Motor Vehicles) and applied for a driver's license in 3 states, so, as a user myself, I can make a somewhat educated guess about some of the problems related to this process. 

If you were the product manager for the DMV,<a href="#footnote5-20200304" class="body-footnote-link" name="footnote5anc-20200304"><sup>5</sup></a> two problems you might want to solve are 1) it takes quite a long time to apply for and receive a new drivers license and 2) DMV employees spend too much time dealing with customers who haven't filled out the necessary paperwork for a new license, which isn't a very valuable or fulfilling use of their time. 

You've got two groups of users here: the applicants (members of the public) and the government employees delivering services. You've also got two key metrics you can track and set objectives for: the time it takes an applicant to get a drivers license (which you want to decrase) and the number of incomplete applications staff have to deal with in person (which you also want to decrease).
 
You've identified the users, problems, and measurable objectives, so now you follow [human-centered design](https://www.designkit.org/human-centered-design){:target="_blank"} principles and build an online application product and, lo, after user testing and deploying the product, you find that you hit your objectives. You conclude that your product successfully addresses the problems for applicants and DMV employees alike. 

But you can’t stop there. And you can't just think of future work on this product as maintenance in the form of bug fixes, security, and system uptime. 

**Users change.** They change in demographic makeup and how they use technology. Half of users may use this product on mobile today but next year? Maybe that's up to 75%. In this case, hell, with the promise of autonomous cars, users are probably going to change how they use cars in the not too distant future -- and what will that mean for driver's license applications and this product you've built?

**Technology changes.** What worked on Internet Explorer 6 may not work on the latest version of Firefox. What worked on desktop may not work on mobile. What is the most efficient and secure programming language or framework today won't be in 2-5 years, much less 10 or 20 years from now.

**Policy changes.** Requirements might be added or removed from the application process. Policy might even come down that mandates how quickly the DMV must process applications, which might affect how you think of product success.  

*Maintaining software isn’t good enough.* From the time of design, development, and launch, the software you've built is a living part of how you deliver services, and should be constantly evaluated and evolved alongside the evaluation and evolution of your agency’s service delivery as a whole -- which should include assessing customer satisfaction, impact, efficiency, and other metrics and goals. 

You might even find that your technology solution no longer helps your agency's overall goals or solves your customers' problems -- in which case, don't be afraid to sunset the product, document your learnings, and iterate on a new solution.<a href="#footnote6-20200304" class="body-footnote-link" name="footnote6anc-20200304"><sup>6</sup></a>


<div class="footnote-block">

	<div id="footnote1-20200304" class="footnote-item">
	<a href="#footnote1anc-20200304" name="footnote1sym-20200304">1</a> 
      Usually, but not always! There are amazing people in govtech implementing more effective product development approaches. #NotAllGovTechies
	</div>

	<div id="footnote2-20200304" class="footnote-item">
	<a href="#footnote2anc-20200127" name="footnote2sym-20200304">2</a> 
	  True story: I sent my first ever fax last month.
	</div>

	<div id="footnote3-20200304" class="footnote-item">
	<a href="#footnote3anc-20200304" name="footnote3sym-20200304">3</a> 
	This is usually true in the private sector too, except in cases like the <a href="https://www.businessinsider.com/whats-happened-to-7-million-app-yo-now-that-the-hype-has-died-2014-9?op=1" target="_blank">Yo app</a>.
	</div>

	<div id="footnote4-20200304" class="footnote-item">
	<a href="#footnote4anc-20200304" name="footnote4sym-20200304">4</a> 
	  Although, yes, system performance and hitting metrics defined in service-level agreements (SLAs) are both important.
	</div>

	<div id="footnote5-20200304" class="footnote-item">
	<a href="#footnote5anc-20200304" name="footnote5sym-20200304">5</a> 
	  Wouldn't it be cool if DMVs had product managers?
	</div>
	
	<div id="footnote6-20200304" class="footnote-item">
	<a href="#footnote6anc-20200304" name="footnote6sym-20200304">6</a> 
	  In government and looking for something to sunset? I vote starting with the fax. And sending user passwords by physical mail. And websites that only work in Internet Explorer. See, there are so many things ripe for deprecation!
	</div>
	
	<p style="font-size: 0.9rem;font-style: italic;"><a href="https://flic.kr/p/a4DB5k">"Expect delays"</a><span> by <a href="https://flic.kr/p/a4DB5k">Tom Woodward</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-sa/2.0/" style="margin-right: 5px;">CC BY-SA 2.0</a></p>
</div>