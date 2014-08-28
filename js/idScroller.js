(function( $ ) {
$.fn.idScroller = function(options) {

	var settings = $.extend({ speed : 1000, pause : 2000, hoverPause : true, infiniteLoop : true }, options);

	return this.each(function() {

		// cache the list items
		var $this = $(this),
		listItems = $this.children("div"),
		totalHeight = 0;

		// adding default container class to parent
		$this.parent().addClass('idScrollerContainer');

		// get container height
		var containerHeight = $(".idScrollerContainer").height();

		// adding few classes to list items
		listItems.addClass('idScrollerItem');
		listItems.first().addClass('first');
		listItems.last().addClass('last');

		// calculating the total height of all elements
		listItems.each(function(i, e) {
			totalHeight += $(this).outerHeight();
		});

		function process()
		{

			// get current margin top
			var currentMT = parseInt($this.css("marginTop"));

			// get current element, active
			var activeElem = $this.find(".idScrollerItem.active").first();

			// get height of current element
			var activeHeight = parseInt(activeElem.outerHeight());

			// calculate total height
			if(!settings.infiniteLoop) { activeHeight -= currentMT; }
			
			// remove active class from all list items
			listItems.removeClass("active");

			if(!settings.infiniteLoop)
			{
				// if its a last elements, set the margin to 0, so it scroll back to the top
				if(activeElem.hasClass("last"))
				{
					$this.stop(true, false).animate({"marginTop" : "0"}, settings.speed);
					$this.find(".idScrollerItem.first").addClass("active");
					return false;
				}
				else
				{
					// else set the margin to active height
					$this.stop(true, false).animate({"marginTop" : "-" + activeHeight + "px"}, settings.speed);
					activeElem.next(".idScrollerItem").addClass("active");
				}
			}
			else
			{
				// its the other type # infinite loop #
				
				// clone the active element and put it to the end of the scroller 
				activeElem.clone().appendTo($this).removeClass('first').removeClass('active').addClass('last'); 


				// start adding the -ve margin top to move the list up
				$this.stop(true, false).animate({"marginTop" : "-" + activeHeight + "px"}, settings.speed, function() {

					// finally transfer the classes to next element
					activeElem.next(".idScrollerItem").addClass("active").addClass('first');

					$this.css("marginTop", 0);
					$('.idScrollerItem', $this).removeClass('last'); 
					// and remove the current active element
					activeElem.remove();

				});
			}

			
		}

		// only scrolls the items are more than the containers height
		if(totalHeight > containerHeight)
		{
			var interval = setInterval(process, settings.pause);
		}

		// if hover on pause is set to true
		if(settings.hoverPause)
		{
			$this.mouseenter(function() {
				clearInterval(interval);
			});

			$this.mouseleave(function() {
				interval = setInterval(process, settings.pause);
			});
		}

	});

};
}( jQuery ));