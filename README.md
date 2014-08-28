Details : 

<ol>
<li>js/idScroller.min.js is the plugin file you need to include (<script src="path_to_js_folder/idScroller.min.js"></script>)</li>
<li>css/idScroller.min.css includes the required css styles, and you must include that at the very top of the page, if you can. (<link rel="stylesheet" href="path_to_css_folder/idScroller.min.css">)</li>
<li>.idScrollerContainer is the class that contains the scroller block, .idScroller is the class that contains the list items and .idScrollerItem is the list item itself, you can apply styles in your own stylesheet as you need.</li>
<li>Initialise the plugin using this simple call,

Basic Call,

<pre>
<code>
````js
<script>

$(document).ready(function() {

    $(".idScroller").idScroller();

});
</script>
````
</code>

</pre>

Advanced Call, all options

<pre>
<script>
$(document).ready(function() {

    $(".idScroller").idScroller({
        speed : 500, // animation speed.
        pause : 2000, // pause time.
        hoverPause : true, // pause the scroller on hover, true|false, default is true.
        infiniteLoop : true // infinite loop means, it will keep adding the elements one after one, on false, it will go back to top after animating the last element, true|false, default is true.
    });

});
</script>
</pre>

</li>

</ol>
