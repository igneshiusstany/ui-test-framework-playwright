import * as fs from 'fs-extra';

/**
 * Archives a report folder by copying its contents into a timestamped folder
 * under a centralized `reports-archives` directory.
 *
 * - If the archive directory doesn't exist, it will be created.
 * - The archive folder will be named using the source folder's last modification time.
 * - If an archive folder with the same name already exists, it will be emptied before copying.
 *
 * @async
 * @function archiveReports
 * @param {string} sourceFolderName - The path to the source report folder that needs to be archived.
 * @throws Will throw an error if the source folder does not exist or cannot be accessed.
 */
export async function archiveReports(sourceFolderName) {
    const archivesDir ='./reports-archives';
    if(!fs.existsSync(archivesDir)){
        fs.mkdirSync(archivesDir)
    }
    const sourceFolderDetails = await fs.stat(sourceFolderName);
    const modificationTime = sourceFolderDetails.mtime.getTime().toString();
    const destReportFolder = archivesDir+"/reports-"+modificationTime;
    if(fs.existsSync(destReportFolder)){
        await fs.emptyDir(destReportFolder);
    }
    await fs.mkdirSync(destReportFolder);
    await fs.copy(sourceFolderName, destReportFolder);
}

