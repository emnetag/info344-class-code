<h1>Possible Matches</h1>
<ul class="list-unstyled">
	<?php foreach($query as $match): ?>
	<li>
		<?= htmlentities($match['primary_city']) ?>
		<?= htmlentities($match['state']) ?>
		<?= htmlentities($match['zip']) ?>
	</li>
	<?php endforeach; ?>
</ul>