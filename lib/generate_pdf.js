var page, system, fs, info, csrftoken, sessionid, categories,
notification, data, address, output;
// Create a page object
page = require('webpage').create();
// Require the system module so I can read the command line arguments
system = require('system');
// Require the FileSystem module, so I can read the cookie file
fs = require('fs');


// var data = fs.read('../cookies.txt');
// phantom.cookies = JSON.parse(data);


address = system.args[1];
output = system.args[2];
// Set the page size and orientation
// page.paperSize = {
//     format: 'A4',
//     orientation: 'landscape'};
    
page.paperSize = {
  format: "Letter",
  orientation: "portrait",
  margin: {left:"2.5cm", right:"2.5cm", top:"1cm", bottom:"1cm"},
  footer: {
    height: "0.9cm",
    contents: phantom.callback(function(pageNum, numPages) {
      return "<div style='text-align:center;'><small>" + pageNum +
        " / " + numPages + "</small></div>";
    })
  }
};
page.zoomFactor = 1.5;    
    
    
// Now we have everything settled, let's render the page
page.open(address, function (status) {
    if (status !== 'success') {
        // If PhantomJS failed to reach the address, print a message
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        // Now create the output file and exit PhantomJS
        page.render(output);
        phantom.exit();
    }
});