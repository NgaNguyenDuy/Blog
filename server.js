var vf = require('vf');
var boot = require('vsoft-boot');

var app = vf();

// Set up favicon
app.use(vf.favicon());



boot(app, __dirname);




app.use(vf.urlNotFound());
app.use(vf.errorHandler());


app.start = function() {
    return app.listen(function() {
        app.emit('started');
        console.log('Server was running at %s', app.get('url'));
    });
};

if(require.main === module) {
    app.start();
}
