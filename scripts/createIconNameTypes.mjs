import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Creates a type definition file for the IconName in the `src/types/utils` directory.
 * The file is generated based on the filenames of the SVG files in the `src/assets/icons` directory.
 *
 * @return {void} This function does not return anything.
 */
const createIconNameTypes = () => {
  try {
    const currentFileUrl = import.meta.url;

    // Convert the file URL to a path
    const currentDir = path.dirname(fileURLToPath(currentFileUrl));

    // Debugging paths
    console.log('Current Directory:', currentDir);

    // Join the path directly
    const assetsFolderPath = path.join(currentDir, '../src/assets/icons');
    console.log('Assets Folder Path:', assetsFolderPath);

    if (!fs.existsSync(assetsFolderPath)) {
      throw new Error(`Assets folder path doesn't exist: ${assetsFolderPath}`);
    }

    // Get all filenames from that folder
    const filenames = fs.readdirSync(assetsFolderPath);

    // Remove the extension from the filenames
    const fileNamesWithoutExtension = filenames.map(
      (filename) => filename.replace(/\.[^.]+$/, ''),
      (filename) => filename.split('.')[0],
    );

    // For each filename, create a line of content
    const filesNameContent = fileNamesWithoutExtension.map(
      (filename) => `\n  | '${filename}'`,
    );

    // Create the type content
    const typeContent = `export type IconName =${filesNameContent.join('')};\n`;

    // Target file path for the generated type definition
    const targetFilePath = path.join(
      currentDir,
      '../src/types/utils/iconName.d.ts',
    );
    console.log('Target File Path:', targetFilePath);

    // Write the type content to the file
    fs.writeFileSync(targetFilePath, typeContent);

    console.log(`Successfully created IconName type at ${targetFilePath}`);
  } catch (error) {
    console.error('Error creating IconName types:', error.message);
  }
};

createIconNameTypes();
