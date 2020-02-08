
<p align="center">
  <a href="https://github.com/CirclepandaLab/pandakit">
    <img src="https://raw.githubusercontent.com/CirclepandaLab/pandakit/master/logo.png" alt="Pandakit logo" width="130" height="130">
  </a>
</p>

<h3 align="center">Pandakit</h3>

<p align="center">
  Pandakit is a framework design for 21st Century web
  <br>
  <a href="#"><strong> -- Learn more -- </strong></a>
  <br>
  <br>
  <a href="mailto:hellopandakit@gmail.com
?subject=Suggest%20feature
&body=Dear%20Pandakit,%0A%0AYour%20message%20here%0A%0ARegards,%0A%0AName:%0AEmail:%0APhone:%0A" 
style="text-align:center;">Suggest features</a>
  ·
  <a href="https://github.com/CirclepandaLab/pandakit/issues/new">Report issue</a>
 </p>


## Table of contents

- [Quick start](#quick-start)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/prezine/pandakit.git`

The [Getting started page](#) on heroku is coming soon for information on the framework contents, templates and examples, and more.

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
pandakit/
└── assets/
    ├── css/
    │   ├── pandakit.button.css
    │   ├── pandakit.color.css
    │   ├── pandakit.layout.css
    │   ├── pandakit.media.css
    │   ├── pandakit.typography.css
    │   ├── pandakit.css
    │   └── pandakit.min.css
    └── js/
        ├── pandakit.js
        └── pandakit.min.js
```

We provide compiled CSS and JS (`pandakit.*`), as well as compiled and minified CSS and JS (`pandakit.min.*`).


## Bugs and feature requests

Have a bug or a feature request? Reach out to us on [hellopandakit@gmail.com](mailto:hellopandakit@gmail.com) leave us a feature suggestion. If you discover a problem that is not addressed yet, [please open a new issue](https://github.com/CirclepandaLab/pandakit/issues/new).


## Documentation

## Introduction

Pandakit is a framework design for 21st Century web.Pandakit can easily be added to your project and provide fast and easiest way to modify your web pages to make them look more alluring and mesmerizing. 


## Adding pandakit to your project.

## CSS
```
<link rel="stylesheet" href="https://github.com/Chaitanyassr/pandakit-1/blob/master/assets/css/pandakit.css">```

or

<link rel="stylesheet" href="https://github.com/Chaitanyassr/pandakit-1/blob/master/assets/css/pandakit.min.css">
```
## JS
```
<script src="https://github.com/Chaitanyassr/pandakit-1/blob/master/assets/js/pandakit.js"></script>```

or

<script src="https://github.com/Chaitanyassr/pandakit-1/blob/master/assets/js/pandakit.min.js"></script>```
```
## getting started

- [Layouts](#layouts)
- [Buttons](#Buttons)
- [Colors](#Colors)
- [Inputs](#Inputs)
- [Loader](#Loader)
- [Media](#Media)
- [Sliders](#Sliders)
- [Typography](#Typography)


## Layouts

In layout we have grids, cards, smooth scroll, split screen, flip cards, hero image and return to the top. In grids we have classes like grid-1, grid-2, grid-3 upto 12.
In cards we have normal card, flip cards and flip cards with super roatation ie 360 degree. it can be implemented by-

cards
```
<div class="card">
  <img src="img.png" alt="" style="">
```

flip card
```
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img.png">
    </div>
    <div class="flip-card-back"> 
```
for 3-d flip card, use flip-card-3d instead of flip-card and for 360 degree roation use flip-card-inner-rotation in place of flip-card-inner.
For back to the top feature, use #return-to-top id.

Smooth scroll can be implemented by using .smooth-scroll class while

For split screens
```
<div class="leftv">
  <div class="centerev">
    <img src="img.png" alt="">
    <p>Some text.</p>
  </div>
</div>

<div class="rightv">
  <div class="centerev">
    <img src="img.png" alt="">
    <p>Some text here too.</p>
  </div>
</div>
```
Hero image

For hero image, class hero-image and hero-text can be used.


## Buttons

In buttons, we have -
```
.btn
.btn-sm
.btn-md
.btn-lg
.btn-round
.btn-square
.btn-outline-primary(hover,active and focus)
.btn-outline-secondary(hover,active and focus)
.btn-outline-success(hover,active and focus)
.btn-outline-warning(hover,active and focus)
.btn-outline-danger(hover,active and focus)
.btn-outline-info(hover,active and focus)
.btn-shadow(with hover)
.btn-disable
```

## Colors

In colors we have -   --blue,--blue-water,--indigo,--red,--yellow,--green,--grassy-green,--tan,--white,--gray-dark,--sand-tan,--sand-tan-shadow,--grey-blue-leaf,--purple,--pink,--coral-pink,--orange,--sleuthe-yellow,--teal,--cyan,--gray,--gray-light,--gray-lighter,--gray-lightest,--black,--primary,--secondary,--success,--info,--warning,--danger,--light,--dark,--primary-muted,--info-muted,--danger-muted.


## Inputs

In Inputs we have progress bars that can be implemented by using below code in html file -
```
  <div id="progressbar">
    <div data-rate="40"></div></div>
```

## Loaders

We currently have six loaders. they can be implemented by writing below code in html - 
```
    <div class="loader-6"></div>
```


## Media

In media we have class grid-sm-1 to 12, grid-sm-pull-1 to 12, grid-sm-offset-1 to 12, grid-md-1 to 12, gird-md-pull-1 to 12, grid-md-offset-1 to 12, grid-lg-1 to 12, grid-lg-pull-1 to 12 and grid-lg-offset-1 to 12.


## Sliders

To implement sliders, you have to use slders class inside carousel. Currently we only have one slides class. Below is the example of html code.

```
    <div class="carousel">
   <div class="slides">
   </div>
       </div>
```


## Typography

In typography we have .text-center, .text-left, .text-right, .text-center, .text-left, .text-white, .text-black, .text-grey, .text-danger, .text-warning, .text-success, .text-info. 


## Contributing

All HTML and CSS should conform to the [Code Guide](https://codeguide.co/), maintained by [Precious Tom](https://github.com/prezine) our awesome [Co-contributors](https://github.com/CirclepandaLab/pandakit/graphs/contributors).

## Community

Get updates on pandakit's development and chat with the project maintainers and community members.

- Follow [@hellopandakit on Twitter](https://twitter.com/hellopandakit).
- Implementation help may be found at Stack Overflow (tagged [`pandakit`](https://stackoverflow.com/questions/tagged/pandakit)).


## Versioning

Under review

## Creators

**Precious Tom**

- <https://twitter.com/PAniefiok>
- <https://github.com/prezine>

**Kumar Chaitanya**

- <https://twitter.com/Chinu282828777>
- <https://github.com/Chaitanyassr>

## Thanks

I cannot forget to thank y'all for finding this project intresting enough to contribute to it 🤗 

## Sponsors

We're not big enough to need sponsors. 

## Copyright and license

Code released under the [MIT License](https://github.com/CirclepandaLab/pandakit/blob/master/LICENSE).
