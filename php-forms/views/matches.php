<h1>Possible Matches</h1>
<<<<<<< HEAD
<ul class="list-unstyled">
	<?php foreach($query as $match): ?>
	<li>
		<?= htmlentities($match['primary_city']) ?>
		<?= htmlentities($match['state']) ?>
		<?= htmlentities($match['zip']) ?>
	</li>
	<?php endforeach; ?>
=======
<ul>
    <?php foreach($matches as $match): ?>
    <li>
        <?= htmlentities($match['primary_city']) ?>,
        <?= htmlentities($match['state']) ?>
        <?= htmlentities($match['zip']) ?>
        <?= htmlentities($match['country']) ?>
    </li>
    <?php endforeach; ?>
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
</ul>