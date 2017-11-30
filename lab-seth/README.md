In your README.md describe the exported values of each module defined in your lib/ directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.

# reader.js
exports a function named readAll, which contains 3 fs.readFile functions.

## readAll:
airity: 2, callback(function), paths(array)
has a callback that takes null and an array of the data in mapped strings as elements if the data was correctly read.
limitations: should take any array of valid/existing filepaths ...
behavior: throws general built in errors to the fs.fileRead function...
