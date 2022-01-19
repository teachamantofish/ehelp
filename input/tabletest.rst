*******************
Table Test
*******************



.. raw:: html

	<!-- Pick a theme, load the plugin & initialize plugin -->
	<link href="tablesorter/theme.default.css" rel="stylesheet">
	<script src="tablesorter/jquery.tablesorter.min.js"></script>
	<script src="tablesorter/jquery.tablesorter.widgets.min.js"></script>
	<script>
	$(function(){
		$('table').tablesorter({
			widgets        : ['zebra', 'columns'],
			usNumberFormat : false,
			sortReset      : true,
			sortRestart    : true
		});
	});
	</script>

  	doc link: https://plugins.jquery.com/tablesorter/

	<table class="tablesorter">
		<thead>
			<tr>
				<th>AlphaNumeric Sort</th>
				<th>Currency</th>
				<th>Alphabetical</th>
				<th>Sites</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>abc 123</td><td>&#163;10,40</td><td>Koala</td><td>http://www.google.com</td></tr>
			<tr><td>abc 1</td><td>&#163;234,10</td><td>Ox</td><td>http://www.yahoo.com</td></tr>
			<tr><td>abc 9</td><td>&#163;10,33</td><td>Girafee</td><td>http://www.facebook.com</td></tr>
			<tr><td>zyx 24</td><td>&#163;10</td><td>Bison</td><td>http://www.whitehouse.gov/</td></tr>
			<tr><td>abc 11</td><td>&#163;3,20</td><td>Chimp</td><td>http://www.ucla.edu/</td></tr>
			<tr><td>abc 2</td><td>&#163;56,10</td><td>Elephant</td><td>http://www.wikipedia.org/</td></tr>
			<tr><td>abc 9</td><td>&#163;3,20</td><td>Lion</td><td>http://www.nytimes.com/</td></tr>
			<tr><td>ABC 10</td><td>&#163;87,00</td><td>Zebra</td><td>http://www.google.com</td></tr>
			<tr><td>zyx 1</td><td>&#163;99,90</td><td>Koala</td><td>http://www.mit.edu/</td></tr>
			<tr><td>zyx 12</td><td>&#163;234,10</td><td>Llama</td><td>http://www.nasa.gov/</td></tr>
		</tbody>
	</table>