 // ClickOut Function

(function($) {
    $.fn.saphOnClickOut = function(funcToExecute) {

        var element = $(this);
        var eventHandlerName = 'click.saphOnClickOut' + ((new Date().getTime()));
        $(document).bind(eventHandlerName, function(e) {
            var $clicked = $(e.target);
            if (!($clicked.is(element) || $clicked.parents().is(element))) {
                funcToExecute(element);
                $(document).unbind(eventHandlerName);
                e.stopPropagation();
            }
        });
    }
})(jQuery);


 // Header

$('[data-nav="nav-item"]').on('click', function(){

	if($(this).parent().hasClass('is-active'))
	{
		$(this).parent().removeClass('is-active');
		$('[data-nav="sub-menu"]').removeClass('is-visible');


	} else
	{
		$('[data-nav="nav-item"]').parent().removeClass('is-active');
		$(this).parent().addClass('is-active');
		$('[data-nav="sub-menu"]').addClass('is-visible')
	}

});






// Custom alerts

$('[data-action="delete-item"]').on('click', function(e){
        e.preventDefault();

        swal({
        title: "Are you sure?",
        text: "These changes cannot be undone",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
    },
    function(){
        swal("Deleted!", "The item was sucessfully deleted.", "success");
    });
});



// Layout selection

$('[data-list-control="row"]').on('click', function(){

    $(this).addClass('is-active');
    $('[data-list-control="grid"]').removeClass('is-active');
    $('[data-list="results"]').addClass('l-row');
});

$('[data-list-control="grid"]').on('click', function(){

    $(this).addClass('is-active');
    $('[data-list-control="row"]').removeClass('is-active');
    $('[data-list="results"]').removeClass('l-row');
});