
$(document).ready(function(){    

    /**
    * Light & Dark Mode jQuery Toggle Using localStorage
    */    

    // Check for saved 'switchMode' in localStorage
    let switchMode = localStorage.getItem('switchMode');

    // Get selector
    const switchModeToggle = $(' .mode-switcher ');

    // Dark mode function
    const enableDarkMode = function() {
        // Add the class to the body
        $( 'body' ).addClass('likhun-dark');
        // Update switchMode in localStorage
        localStorage.setItem('switchMode', 'enabled');
    }

    // Light mdoe function
    const disableDarkMode = function() {
        // Remove the class from the body
        $( 'body' ).removeClass('likhun-dark');
        // Update switchMode in localStorage value
        localStorage.setItem('switchMode', null);
    }

    // If the user already visited and enabled switchMode
    if (switchMode === 'enabled') {
        enableDarkMode();
        // Dark icon enabled
        $( '.mode-icon-change' ).addClass( 'la-moon' );
        $( '.mode-icon-change' ).removeClass( 'la-sun' );
    } else {
        // Light icon enabled
        $( '.mode-icon-change' ).addClass( 'la-sun' );
        $( '.mode-icon-change' ).removeClass( 'la-moon' );
    }

    // When someone clicks the button
    switchModeToggle.on('click', function() {
        // Change switch icon
        $( '.mode-icon-change' ).toggleClass( 'la-sun' );
        $( '.mode-icon-change' ).toggleClass( 'la-moon' );

        // get their switchMode setting
        switchMode = localStorage.getItem('switchMode');

        // if it not current enabled, enable it
        if (switchMode !== 'enabled') {
            enableDarkMode();              
        // if it has been enabled, turn it off  
        } else {  
            disableDarkMode();              
        }
    });

}); // End load document


Learn details https://techidem.com/light-dark-mode-jquery-toggle-using-localstorage/

