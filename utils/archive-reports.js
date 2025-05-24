import * as fs from 'fs-extra';
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

