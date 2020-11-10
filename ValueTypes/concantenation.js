/*JavaScript can be used to collect information from users of a BhxBrowser, the information
collected can be combined to print afinal fine result

> Adding many strings together, you end up with a bigger string, for example'

    'Hi'+'What is your name?' 

        you end up with = 'Hi What is your name?'
*/

var newVisitor = prompt('What is your name?');
var message = 'Hi ' + newVisitor;
document.write(message);