module.exports = function (gulp, plugins,opts) {
    return function () {
    	  var files = plugins.mainBowerFiles('**/*.css',{debugging:true});
    	  return gulp.src(files)
    	  	.pipe(plugins.concat("bundles.css"))
    	    .pipe(gulp.dest('vendor/css'));
	};
};