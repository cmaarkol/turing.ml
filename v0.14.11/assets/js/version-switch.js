<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="content-language" content="en">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Turing.jl</title>
    <meta name="description" content="$(document).ready(function(){    if (typeof(window.DOC_VERSIONS) == "undefined") {        window.DOC_VERSIONS = ["dev"];    }    var url_parts = /(.*:\/\/[^/...">
    <meta name="author" content="The Turing Team">
    <meta name="theme-color" content="red">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700|Roboto+Mono">
    <style>body,input{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif}code,kbd,pre{font-family:"Roboto Mono","Courier New",Courier,monospace}</style>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="canonical" href="/dev/assets/js/version-switch.js">
    <link rel="alternate" type="application/rss+xml" title="Turing.jl" href="/dev/feed.xml">
    <meta name="lang:clipboard.copy" content="Copy to clipboard">
    <meta name="lang:clipboard.copied" content="Copied to clipboard">
    <meta name="lang:search.language" content="en">
    <meta name="lang:search.pipeline.stopwords" content="True">
    <meta name="lang:search.pipeline.trimmer" content="True">
    <meta name="lang:search.result.none" content="No matching documents">
    <meta name="lang:search.result.one" content="1 matching document">
    <meta name="lang:search.result.other" content="# matching documents">
    <meta name="lang:search.tokenizer" content="[\s\-]+">
    <script src="/versions.js"></script>
    <script src="/dev/assets/js/modernizr.74668098.js"></script>
    <link rel="shortcut icon" href="/dev/assets/img/favicon.ico">
    <link rel="stylesheet" href="/dev/assets/css/main.css">
    <link rel="stylesheet" href="/dev/assets/css/palette.css">
    <link rel="stylesheet" href="/dev/assets/css/header.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    

    

  </head>

  <body dir="ltr" data-md-color-primary="red" data-md-color-accent="red">
    

<svg class="md-svg">
<defs>
  <svg>
  <path d="M160 304q0 10-3.125 20.5t-10.75 19-18.125 8.5-18.125-8.5-10.75-19-3.125-20.5 3.125-20.5 10.75-19 18.125-8.5 18.125 8.5 10.75 19 3.125 20.5zM320 304q0 10-3.125 20.5t-10.75 19-18.125 8.5-18.125-8.5-10.75-19-3.125-20.5 3.125-20.5 10.75-19 18.125-8.5 18.125 8.5 10.75 19 3.125 20.5zM360 304q0-30-17.25-51t-46.75-21q-10.25 0-48.75 5.25-17.75 2.75-39.25 2.75t-39.25-2.75q-38-5.25-48.75-5.25-29.5 0-46.75 21t-17.25 51q0 22 8 38.375t20.25 25.75 30.5 15 35 7.375 37.25 1.75h42q20.5 0 37.25-1.75t35-7.375 30.5-15 20.25-25.75 8-38.375zM416 260q0 51.75-15.25 82.75-9.5 19.25-26.375 33.25t-35.25 21.5-42.5 11.875-42.875 5.5-41.75 1.125q-19.5 0-35.5-0.75t-36.875-3.125-38.125-7.5-34.25-12.875-30.25-20.25-21.5-28.75q-15.5-30.75-15.5-82.75 0-59.25 34-99-6.75-20.5-6.75-42.5 0-29 12.75-54.5 27 0 47.5 9.875t47.25 30.875q36.75-8.75 77.25-8.75 37 0 70 8 26.25-20.5 46.75-30.25t47.25-9.75q12.75 25.5 12.75 54.5 0 21.75-6.75 42 34 40 34 99.5z" fill="currentColor"></path></svg>
</defs></svg>

    <input class=md-toggle data-md-toggle=drawer type=checkbox id=__drawer autocomplete=off>
    <input class=md-toggle data-md-toggle=search type=checkbox id=__search autocomplete=off>
    <label class=md-overlay data-md-component=overlay for=__drawer></label> <a href="#" tabindex=1 class=md-skip> Skip to content </a>
    <header class=md-header data-md-component=header data-md-state=none>
        <nav class="md-header-nav md-grid">
            <div class=md-flex>
                <div class="md-flex__cell md-flex__cell--shrink">
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                    <label class="md-icon md-icon--menu md-header-nav__button" for=__drawer></label>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                    <a class="md-header-nav__button md-logo" href="/dev/" title="Turing.jl">
                    <div class="md-flex__ellipsis md-header-nav__title" data-md-component=title>
                        <span class=md-header-nav__topic>Turing.jl</span>
                    </div>
                    </a>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                  <div class="md-header-nav__source">
                    <div class="dropdown version-switch">
                      <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </a>
                      <div class="dropdown-menu">
                        <!-- a class="dropdown-item" href="#">Stable</a -->
                        <!-- div class="dropdown-divider"></div -->
                      </div>
                    </div>
                  </div>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                  <div class="md-header-nav__source">
                    <a class="md-source" href="/dev/docs/using-turing/get-started" title="Get started">
                      Get Started
                    </a>
                  </div>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                    <div class="md-header-nav__source">
                      <a class="md-source" href="/dev/docs/using-turing/" title="View documentation">
                        Documentation
                      </a>
                    </div>
                  </div>

                  <div class="md-flex__cell md-flex__cell--shrink">
                      <div class="md-header-nav__source">
                        <a class="md-source" href="/dev/tutorials/" title="View tutorials">
                          Tutorials
                        </a>
                      </div>
                    </div>

                    <div class="md-flex__cell md-flex__cell--shrink">
                      <div class="md-header-nav__source">
                        <a class="md-source" href="/dev/news/" title="News">
                          News
                        </a>
                      </div>
                    </div>

                    <div class="md-flex__cell md-flex__cell--shrink">
                      <div class="md-header-nav__source">
                        <a class="md-source" href="/dev/team/" title="Team">
                          Team
                        </a>
                      </div>
                    </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                  <div class="md-header-nav__source">
                    <a class="md-source" data-md-source="github" href="https://github.com/TuringLang/Turing.jl" title="Go to repository">
                    <div class="md-source__icon" style="padding-top:5px">
                      <i class="fa fa-github fa-3x"></i>
                    </div>
                    <div class="md-source__repository">
                      TuringLang/Turing.jl
                    </div></a>
                  </div>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                  <div class="md-header-nav__source">
                    <a href="https://twitter.com/TuringLang?ref_src=twsrc%5Etfw" class="twitter-follow-button"
                       data-size="large" data-show-screen-name="false" data-show-count="false">Follow @TuringLang</a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </div>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                    <label class="md-icon md-icon--search md-header-nav__button" for=__search></label>
                    <div class=md-search data-md-component=search role=dialog>
                        <label class=md-search__overlay for=__search></label>
                        <div class=md-search__inner role=search>
                            <form class=md-search__form name=search>
                                <input type=text class=md-search__input name=query placeholder=Search autocapitalize=off autocorrect=off autocomplete=off spellcheck=false data-md-component=query data-md-state=active>
                                <label class="md-icon md-search__icon" for=__search></label>
                                <button type=reset class="md-icon md-search__icon" data-md-component=reset tabindex=-1> &#xE5CD; </button>
                            </form>
                            <div class=md-search__output>
                                <div class=md-search__scrollwrap data-md-scrollfix>
                                    <div class=md-search-result data-md-component=result>
                                        <div class=md-search-result__meta> Type to start searching </div>
                                        <ol class=md-search-result__list></ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  </nav>
</header>


    <div class="md-container">
        <main class="md-main">
            <div class="md-main__inner md-grid full-width" data-md-component="container">
            
<div class="md-sidebar md-sidebar--primary" data-md-component="navigation">
  <div class="md-sidebar__scrollwrap">
    <div class="md-sidebar__inner">
      <nav class="md-nav md-nav--primary" data-md-level="0">

        <label class="md-nav__title md-nav__title--site">
            <a class="" href="/dev/" title="Turing.jl">
              <span class="md-nav__button md-logo">
                Turing.jl
              </span>
            </a>
        </label>

        <ul class="md-nav__list" data-md-scrollfix="">
          <li class="md-nav__item md-nav__item--active">
            <input class="md-toggle md-nav__toggle" data-md-toggle="toc" id="__toc" type="checkbox" />

            <nav class="md-nav md-nav--secondary">

                <a class="" href="/dev/" title="Turing.jl">
                  <label class="md-nav__title md-nav__title--site">
                    <span class="md-nav__button md-logo">
                      Turing.jl
                    </span>
                  </label>
                </a>

                <div class="md-nav__source">
                    <a class="md-source" data-md-source="github" href="https://github.com/TuringLang/Turing.jl" title="Go to repository">
                    <span class="md-source__icon">
                        <i class="fa fa-github fa-3x"></i>
                    </span>
                    <span class="md-source__repository">
                      TuringLang/Turing.jl
                    </span></a>
                </div>

                <div class="md-nav__dropdown">
                  <select id="version-selector">
                    <!-- option value="#" selected="selected">v 0.5.1</option -->
                  </select>
                </div>

              <label class="md-nav__title" for="__drawer"></label>

              

                <ul class="md-nav__list" data-md-scrollfix="">
                  
                  
                </ul>
            </nav>
          </li>

          <!-- This navigation is completely for mobile -->
          

          <!-- This navigation is completely for non mobile -->
          

         
         

        </ul>
      </nav>
    </div>
  </div>
</div>


<div class="md-sidebar md-sidebar--secondary invisible" data-md-component="toc">
  <div class="md-sidebar__scrollwrap">
    <div class="md-sidebar__inner">
      <nav class="md-nav md-nav--secondary">
        <label class="md-nav__title" for="__toc">Table of contents</label>
        <ul id="nav-toc" class="md-nav__list" data-md-scrollfix="">
        <!-- toc will be appended here!-->
        </ul>
        <a href="https://twitter.com/intent/tweet?original_referer=https://github.com/TuringLang/Turing.jl/edit/master/docs/srcassets/js/version-switch.js" title="Tweet this page" class="social-link"><i class="fa fa-twitter fa-1x"></i>Tweet this page</a>
        <a href="https://discourse.julialang.org/c/domain/probprog" title="Ask questions" class="social-link"><i class="fa fa-stack-overflow fa-1x"></i>Ask questions</a>
        <a href="https://github.com/TuringLang/Turing.jl//issues/new?label=question&title=Question:&body=Question%20on:%20https://github.com/TuringLang/Turing.jl/edit/master/docs/assets/js/version-switch.js" title="Report issues" class="social-link"><i class="fa fa-comments fa-1x"></i>Report issues</a>
        <a href="https://github.com/TuringLang/Turing.jl/edit/master/docs/srcassets/js/version-switch.js" title="Edit this page on github"  class="social-link"><i class="fa fa-github fa-1x"></i> Edit me</a>
      </nav>
    </div>
  </div>
</div>

                <div id="md-container-pancakes">
                <div class="md-content full-width"> 
    <article class="md-content__inner md-typeset  full-width">
    $(document).ready(function(){
    if (typeof(window.DOC_VERSIONS) == "undefined") {
        window.DOC_VERSIONS = ["dev"];
    }
    var url_parts = /(.*:\/\/[^/]+\/)(.+?)(\/.*)/.exec(window.location.href);

    $(".dropdown > a").text(url_parts[2]);
    if(url_parts[3].length > 1 && url_parts[3][1] != "#") {
        $(".dropdown").click(function(evt){
            $(".dropdown > div.dropdown-menu").toggleClass("show");
            return false;
        });

        $('body').click(function(evt){
            if($(evt.target).closest('div.dropdown-menu').length) {
                return true;
            }
            if($(evt.target).closest('div.dropdown').length) {
                return true;
            }
            $(".dropdown > div.dropdown-menu").removeClass("show");
        });
    }

    var current_ver = url_parts[2].replace(/\.0+$/, '');

    $.each(DOC_VERSIONS, function(index, value) {
        if(value == current_ver) {
            // mobile
            $("select#version-selector").append(
                $('<option value="' + value + '" selected="selected">' + value + '</option>'));
            return;
        }
        // desktop
        $(".dropdown > div.dropdown-menu").append(
            $('<a class="dropdown-item" href="#">' + value + '</a>'));
        // mobile
        $("select#version-selector").append(
            $('<option value="' + value + '">' + value + '</option>'));
    });

    $(".dropdown > div.dropdown-menu > a").on("click", function() {
        var target_version = $(this).text().trim();
        if (target_version == url_parts[2]) return;
        window.location.href = url_parts[1] + target_version + url_parts[3];
    });

    $("select#version-selector").change(function() {
        var target_version = $("select#version-selector option:selected").text();
        if (target_version == url_parts[2]) return;
        window.location.href = url_parts[1] + target_version + url_parts[3];
    });
});

    
<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>

<script>
$(document).ready(function() {

    var toc = $('#nav-toc');

    // Select each header
    sections = $('#md-container-pancakes h1');
        $.each(sections, function(idx, v) {
            section = $(v);
            var div_id = $(section).attr('id');
            var div_text = section.text().split('¶')[0];
            var parent = $("#" + div_id)
            var content = '<li id="link_' + div_id + '" class="md-nav__item"><a class="md-nav__link toc-side-bar" href="#' + div_id + '" title="' + div_text +'">' + div_text +'</a></li>';
            $(toc).append(content);

            // Add section code to subnavigation
            var children = $('<nav class="md-nav"><ul class="md-nav__list"></nav></ul>')
            var contenders = $("#" + div_id).nextUntil( "h1" );
            $.each(contenders, function(idx, contender){
            if($(contender).is('h2')) {
                var contender_id = $(contender).attr('id');
                var contender_text = $(contender).text().split('¶')[0];
                var content = '<li class="md-nav__item"><a class="md-nav__link toc-side-bar" href="#' + contender_id + '" title="' + contender_text +'">' + contender_text +'</a></li>';
                children.append(content);
                }
            })
            $("#link_" + div_id).append(children);
        });
    });
</script>
    <!-- this will parse through the header fields and add a button to open
     an issue / ask a question on Github. The editable field should be in
     the post frontend matter, and refer to the label to open the issue for -->

<style>
.more {
    float:right;
    font-size: 1.0rem !important;
}
.more:hover {
    color: cornflowerblue !important;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    font-weight: 200;
    box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.2);
    padding: 0px 10px;
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>


    </article>
</div>      

                </div>
            </div>
        </main>
    </div>

    <footer class="c-footer md-footer-nav">
  <div class="md-footer-copyright__highlight">
    
    Turing is created by <a style="color:inherit; text-decoration: underline;" href="http://mlg.eng.cam.ac.uk/hong/">Hong Ge</a>, 
    and lovingly maintained by the <a style="color:inherit; text-decoration: underline;" href="https://github.com/TuringLang/Turing.jl/graphs/contributors">core team</a> of volunteers.

    <br><br>
    
    The contents of this website are
© 2020 under the terms of the <a style="color:inherit; text-decoration: underline;" href="https://github.com/TuringLang/Turing.jl/blob/master/LICENCE">MIT License</a>.
    
  </div>  
</footer>


    <script src="/dev/assets/js/application.js"></script>
    
    <script>console.log('4')</script>
    <script>app.initialize({version:"0.17.4", url:{base:'/dev'}})</script>

    
    <script src="/dev/assets/js/version-switch.js"></script>

    <script>
var headers = ["h1", "h2", "h3", "h4"]
var colors = ["red", "orange", "green", "blue"]

$.each(headers, function(i, header){
    var color = colors[i];
    $(header).each(function () {
        var href=$(this).attr("id");
        $(this).append('<a class="headerlink" style="color:' + color + '" href="#' + href + '" title="Permanent link">¶</a>')
    });
})

// Ensure that sidebar on left has arrows
$(".pancakes-parent").on('click', function(){
    console.log($(this).next());
    $(this).next().find('.pancakes-child').toggle();
    if ($(this).hasClass('open-parent')){
        $(this).removeClass('open-parent');
    } else {
        $(this).addClass('open-parent');
    }
})

$(".pancakes-parent-mobile").on('click', function(){
    var nav = $(this).next();
     nav.addClass('mobile-sub-navbar-display');
})

$(".mobile-navbar-back").on('click', function(){
    var nav = $(this).parent();
    nav.removeClass('mobile-sub-navbar-display');
})

</script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

    

    <style>
#scrolltop {
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #d2e6f5; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 10px 15px; /* Some padding */
  border-radius: 100px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
  font-weight: 600;
}

#scrolltop:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
</style>
<button onclick="topFunction()" id="scrolltop" title="Go to top">🔝</button>

<script>
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrolltop").style.display = "block";
  } else {
    document.getElementById("scrolltop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>

    


  </body>
</html>
