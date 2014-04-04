module.exports = function(grunt){
	
	// Load in specific email tasks here

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-litmus');

	
	grunt.initConfig({
	  
	  // Minifies html file
	  htmlmin: {
	    dist: {
	        options: {
	            removeComments: true,
	            collapseWhitespace: true,
	            removeEmptyAttributes: true,
	            removeCommentsFromCDATA: true,
	            removeRedundantAttributes: true,
	            collapseBooleanAttributes: true
	        },
	        files: {
	            // Destination : Source
	            'final/email.html': './template.html'
	        }
	    }
	  },

	  // Optimises images - PNG/JPG/GIF
	  imagemin: {
	    png: {
	      options: {
	        optimizationLevel: 7
	      },
	      files: [
	        {
	          expand: true,
	          cwd: 'img/',
	          src: ['**/*.png'],
	          dest: 'final/img/',
	          ext: '.png'
	        }
	      ]
	    },
	    jpg: {
	      options: {
	        progressive: true
	      },
	      files: [
	        {
	          expand: true,
	          cwd: 'img/',
	          src: ['**/*.jpg'],
	          dest: 'final/img/',
	          ext: '.jpg'
	        }
	      ]
	    },
	    gif: {
	      options: {
	        progressive: true
	      },
	      files: [
	        {
	          expand: true,
	          cwd: 'img/',
	          src: ['**/*.gif'],
	          dest: 'final/img/',
	          ext: '.gif'
	        }
	      ]
	    }
	  },

	  // Sends test straight to Litmus!! 
	  // Set which clients you would like to test to. I have added them all as a fail safe, full list here https://mrm.litmus.com/emails/clients.xml - search for 'application_code'
	  litmus: {
	    test: {
	      src: ['template.html'],
	      options: {
	        username: 'youremailadress',
	        password: 'yourpassword',
	        url: 'yourlitmusurl',
	        clients: ['gmailnew', 'ffgmailnew', 'chromegmailnew', 'android22', 'android4', 'aolonline', 'androidgmailapp', 'ffaolonline', 'chromeaolonline', 'appmail5', 'appmail6', 'blackberry8900', 'blackberryhtml', 'androidgmailnew', 'androidoutlookcom', 'colorblind', 'messagelabs', 'iphone5s', 'ipadmini', 'postini', 'ipad', 'barracuda', 'outlookfilter', 'spamassassin3', 'gmailnewspam', 'yahoospam', 'aolonlinespam', 'gmailnew', 'ffgmailnew', 'chromegmailnew', 'iphone4', 'iphone5', 'iphonegmailnew', 'iphoneoutlookcom', 'notes6', 'notes7', 'notes8', 'notes85', 'ol2000', 'ol2002', 'ol2003', 'ol2007', 'ol2010', 'ol2011', 'outlookcom', 'ffoutlookcom', 'chromeoutlookcom', 'plaintext', 'symbians60', 'thunderbird3', 'thunderbirdlatest']
	      }
	    }
	  },


	});


	// Register tasks

	grunt.registerTask('default', ['htmlmin', 'imagemin', 'litmus']);

};
