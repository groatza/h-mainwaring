<!DOCTYPE html>
<html lang="en">

<head>
	<title>Pizza Dough | Speltacular Baking | CISC 282 | A3 Sample Solution</title>
	<meta charset="utf-8"/>
	<meta name="author" content="Sarah-Jane Whittaker"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet">	
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap" rel="stylesheet">
	
	<link rel="stylesheet" href="../css/styles.css"> 	
	<link rel="stylesheet" href="../css/responsive.css">
	
	<script src="../js/jquery-3.6.0.js"></script>
	<script src="../js/change-quantities.js"></script>
	<script src="../js/hide-directions.js"></script>
</head>

<body class="column-container">

<?php include ("../inc/header.php"); ?>

<div class="column">
	<main>
		<h1>Pizza Dough</h1>
		
		<p>This is a slightly modified version of King Arthur Flour's <a href="https://www.kingarthurbaking.com/recipes/sourdough-pizza-crust-recipe">Sourdough Pizza Crust</a> that substitutes spelt for wheat.</p>
	
		<section>		
			<h2>Ingredients</h2>
			
			<div class="quantity-button-group">
				<button class="quantity-button" value="1">Single Batch</button>
				<button class="quantity-button" value="2">Double Batch</button>
				<button class="quantity-button" value="3">Triple Batch</button>				
			</div>
			
			<ul class="ingrediants">
				<li><span>1</span> cup (give or take) of unfed/discard sourdough starter</li> 
				<li><span>&frac34;</span> cup lukewarm water</li>
				<li>rounded <span>&half;</span> tsp. instant or active dry yeast</li>
				<li><span>2 &half;</span> cups light spelt flour</li>
				<li><span>1</span> tsp. salt</li>
				<li>A little olive oil</li>
			</ul>	
		</section>
			
		<section>				
			<h2>Directions</h2>
			
			<p>Once a step is complete, click its button to hide it.</p>
			
			<!--
			<ol class="directions">
				<li>Turn your oven light on to create a warm place for the pizza dough to rise.</li>
				<li>Separate your starter into two parts: one to feed and one for the pizza dough. You'll need approximately one cup of starter for this recipe; put it in your largest mixing bowl.
					<img src="/~18hpm/a4/img/separated_starter.jpeg" alt="Sourdough starter divided into a glass container and a bowl"/>
				</li>
				<li>Pour the warm water over the starter and then sprinkle the yeast over it. (This will give the yeast a bit of a head start.)
					<img src="/~18hpm/a4/img/water_and_yeast_added.jpeg" alt="Sourdough starter, water and yeast in a bowl "/>
				</li>
				<li>Add the flour and the salt to the bowl.
					<img src="/~18hpm/a4/img/flour_and_salt_added.jpeg" alt="Sourdough starter, water, yeast, flour and salt layered in a bowl"/>
				</li>
				<li>Mix everything together with your hands. It will initially look messy before forming into a good dough.
					<img src="/~18hpm/a4/img/mixing_by_hand.jpeg" alt="Partly mixed pizza dough in a bowl"/>
				</li>
				<li>The dough should feel slightly sticky but not really stick to your hands or the counter. Don't be afraid to add a little more flour or water to get the right consistency.
					<img src="/~18hpm/a4/img/slightly_sticky_dough.jpeg" alt="Unkneaded dough ball sticking slightly to the counter"/>
				</li>
				<li>Knead the dough for 7 minutes. This is an excellent opportunity to work out any frustration you've been feeling lately. The dough will become smooth and elastic.
					<img src="/~18hpm/a4/img/kneaded_dough.jpeg" alt="Smooth dough ball after kneading"/>
				</li>
				<li>Grease your second-largest mixing bowl with olive oil using your hands. Lightly coat the dough in oil as well, put in the bowl and loosely cover it.
					<img src="/~18hpm/a4/img/oiled_dough.jpeg" alt="Oiled dough ball in a greased bowl"/>
				</li>
				<li>Loosely cover the bowl, put it in the oven and leave it there for 3-4 hours.
					<img src="/~18hpm/a4/img/rising_in_the_oven.jpeg" alt="Bowl loosely topped with a plate in the oven with the light on"/>
				</li>
				<li>The dough will increase in size and become softer. It's now ready to use.
					<img src="/~18hpm/a4/img/risen_dough.jpeg" alt="Risen pizza dough in a greased bowl"/>
				</li>
			</ol>
			-->
		</section>
		<section class="comments">
			<h1>Comments</h1>
			<!--
			<div class="posting">
				
			</div>
			-->
			<form>
				<label for="name">Name:</label>
				<input type="text" id="name" name="name">
				<br>
				<label for="comment">Comment (Required):</label>
				<input type="textarea" id="comment" name="comment">
			</form>
		</section>
	</main>
	
	<?php include ("../inc/footer.php"); ?>
</div> <!-- .column -->

</body>
</html> 