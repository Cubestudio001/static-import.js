# Static-Import.js
<i>Write template once, import to HTML everywhere</i>

## Get Started
static-import.js requires jQuery to run, so in order to make it run correctly, source static-import.js and jQury together.

You can source from Github Raw or you can download from Release. However, no CDN is provided so far.

Example:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<!--A Google's jQuery CDN-->
<script src="https://raw.githubusercontent.com/Cubestudio001/static-import.js/main/import.min.js"></script>
```
You must source jQuery before static-import.js

## Import Static Page
As you might see, static-import.js can only import from a static page. Import a page include script tag could cause unknown issue.

<b>There two ways to import</b>

### Method.01

You can use a div tag like this:
```html
<div class=".import-static-/src/index.thtml"></div>
```
With out special settings, the file at <i>/src/index.html</i> will be add in the div tag.

### Method.02
You can also use a import-static tag like this:
```html
<import-static src="index.thtml"></import-static>
```

### Difference

Two methods works the same. However, method 2 is about 50% faster.

## Demo
See example file or [A Demo](https://cubestudio001.github.io/si_example.html)

## Special settings
Here are the special settings, declare by add them into head tag
```html
<LOAD_ON_READY/>
<LOAD_ON_CALL/>
<!--no special settings tag for default-->
```
<b>LOAD_ON_READY</b>:Import when the document is ready (Recommended)

<b>LOAD_ON_CALL</b>:For debug purpose, import when the function do_it(),static_import() or static_import_by_div() is called

<i>default</i>:Not recommended, import page immediately when Javascript file is sourced, causing unpredictable issues.

## P.S.
Still in dev, pull request is welcomed.