module.exports = function(app, express, setup, connectAssets) {

    app.use(express.logger('dev'));
    //Enable dependency based asset loading
    app.use(connectAssets({
        src : setup.root + '/public',
    }));
    console.log(setup.root +'/public');
    app.locals({
        pretty : true,
        layout: false
    });

    app.use(express.errorHandler({ 
        dumpExceptions: true, 
        showStack: true 
    }));
}