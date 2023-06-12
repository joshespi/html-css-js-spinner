<script type='text/javascript'>
		// Wait for window load
		$(window).load(function() {
			// Animate loader off screen
			$("#loader").animate({
				top: -200
			}, 1500);
		});
	</script>
<script>
window.onload = function() {
  document.getElementById('spinner').className = 'hide';
  document.getElementById('loading').className = 'hide';
};
</script>