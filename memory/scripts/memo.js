(function(w) {
    'use strict';
    var walk    = require('walk');
    var files   = [];
    var panel = document.getElementById('main_area');
    
    // Walker options
    var walker  = walk.walk('./img', { followLinks: false });
    
    walker.on('file', function(root, stat, next) {
        // Add this file to the list of files
        files.push(root + '/' + stat.name);
        next();
    });
    
    walker.on('end', function() {
        var Label = document.createElement('span');
        Label.className = 'label';
        Label.innerHTML = files;
        panel.appendChild(Label);
    });
}(window))

