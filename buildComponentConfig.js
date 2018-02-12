const fs = require('fs');
const cwd = process.cwd();
const getComponentsConfig = () => {
  const componentConfig = {};
  // Get component names from components directory
  const componentFolders = fs.readdirSync(`${cwd}`);
  // Iterate through the component folders
  componentFolders.forEach(folder => {
    // Get the path to the component
    const folderPath = `${cwd}/${folder}`;
    // Make sure its not a file in the component directory
    const stats = fs.statSync(folderPath);
    if (stats.isFile()) return;
    // Format component name
    const componentName = `${folder.charAt(0).toUpperCase()}${folder.slice(1)}`;
    // Get files in the component directory
    const files = fs.readdirSync(folderPath);
    // Don't create the component entry if the folder is empty or doesn't contain compilable files
    if (
      files.length > 0 &&
      (files.includes('routes.js') ||
        files.includes('schema.js') ||
        files.includes('services.js'))
    )
      componentConfig[componentName] = {};
    // If the routes.js file exists, add an entry for Routes and Controllers
    if (files.includes('routes.js')) {
      componentConfig[componentName].Routes = `${folderPath}/routes.js`;
      componentConfig[
        componentName
      ].Controllers = `${folderPath}/controllers.js`;
    }
    // If the schema.js file exists, add an entry for Schema
    if (files.includes('schema.js')) {
      componentConfig[componentName].Schema = `${folderPath}/schema.js`;
    }
    // If the services.js file exists, add an entry for Services
    if (files.includes('services.js')) {
      componentConfig[componentName].Services = `${folderPath}/services.js`;
    }
  });
  return componentConfig;
};
module.exports = getComponentsConfig;
