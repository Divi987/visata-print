const fs = require('fs');
const path = require('path');

/**
 * Generates Next.js API routes based on templates
 * @param {string} routeName - The name of the API route to create
 */
function generateApiRoute(routeName) {
    // Define paths
    const baseDir = path.join(__dirname, '..');  // Go up one level from utils to project root
    const apiDir = path.join(baseDir, 'app', 'api');
    const stubsDir = path.join(baseDir, 'stubs');
    const newRouteDir = path.join(apiDir, routeName);
    const idRouteDir = path.join(newRouteDir, '[id]');

    // Read template files
    const mainTemplate = fs.readFileSync(path.join(stubsDir, 'mainRouteStub.stub'), 'utf8');
    const idTemplate = fs.readFileSync(path.join(stubsDir, 'idStub.stub'), 'utf8');

    try {
        // Create main route directory if it doesn't exist
        if (!fs.existsSync(newRouteDir)) {
            fs.mkdirSync(newRouteDir, { recursive: true });
        }

        // Create [id] directory if it doesn't exist
        if (!fs.existsSync(idRouteDir)) {
            fs.mkdirSync(idRouteDir, { recursive: true });
        }

        // Replace placeholders in templates
        const processedMainTemplate = mainTemplate.replace(/\[ROUTE_NAME\]/g, routeName)
            .replace(/\[ROUTE_NAME_CAPITALIZED\]/g, capitalizeFirstLetter(routeName))
            .replace(/\[ROUTE_NAME_LOWERCASE\]/g, routeName.toLowerCase());

        const processedIdTemplate = idTemplate.replace(/\[ROUTE_NAME\]/g, routeName)
            .replace(/\[ROUTE_NAME_CAPITALIZED\]/g, capitalizeFirstLetter(routeName))
            .replace(/\[ROUTE_NAME_LOWERCASE\]/g, routeName.toLowerCase());

        // Write main route.js file
        fs.writeFileSync(
            path.join(newRouteDir, 'route.js'),
            processedMainTemplate
        );

        // Write [id]/route.js file
        fs.writeFileSync(
            path.join(idRouteDir, 'route.js'),
            processedIdTemplate
        );

        console.log(`✅ Successfully generated API routes for ${routeName}:`);
        console.log(`   📁 ${path.join('app', 'api', routeName, 'route.js')}`);
        console.log(`   📁 ${path.join('app', 'api', routeName, '[id]', 'route.js')}`);

    } catch (error) {
        console.error('❌ Error generating API routes:', error);
        process.exit(1);
    }
}

/**
 * Capitalizes the first letter of a string
 * @param {string} string - The string to capitalize
 * @returns {string} The capitalized string
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Check if a route name was provided
if (process.argv.length < 3) {
    console.error('❌ Please provide a route name');
    console.log('Usage: node apiCrudAutomation <routeName>');
    process.exit(1);
}

// Get route name from command line arguments
const routeName = process.argv[2];

// Generate the routes
generateApiRoute(routeName);
