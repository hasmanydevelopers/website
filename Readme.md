Welcome to HMD Website!

Thank you guys for all the support in this almost 2 years doing magick in web developer, it's been great to
know each of you and working together as a TEAM.

Thanks!

Felix Montes!

## Create a new Portfolio

rake new_portfolio TITLE=portfolio_name

This create a new file *content/portfolio/portfolio_name.html*. Take this next example and edit it with new content.

===
title: "portfolio_name"
kind: article
portfolio: true
url: http://portfolio_website_url.blah
===
<div class="col-lg-4 col-md-4 col-sm-4">
  <h2>Cherno Alpha</h2>
  <ul>
    <li>Sahre some technologies used on this website</li>
    ...
    ...
    <li> ... </li>
  </ul>
</div>                
<div class="col-lg-4 col-md-4 col-sm-4">
  <h3>Project Description</h3>
  <p>Share some description you guys used on this website...</p>
</div>

## Create a new Post

rake new_portfolio TITLE=post_name

This create a new file *content/post/post_name/index.html*. Take this next example and edit it with new content.

===
title: "post_name"
kind: article
created_at: Take the timestamps where did you just run the rake task
post: true
author: author_name
link: give the link where did take the post
===

<hr>
<p>Edit with the post title</p>
<a class="btn btn-primary" href="blog-post.html">Read More <i class="icon-angle-right"></i></a>

<hr>