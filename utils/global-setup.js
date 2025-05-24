import { archiveReports } from "./archive-reports";
import { Log } from "./log";


/**
 * 
 * Can be used to setup the pre requisites like data mocking, container initializations which has to be done once per test session
 */
async function globalSetup(config)
{
    console.log('Starting Global Setup');
    if(!process.env.testEnv)
    {
        console.log('Environment not provided, Defaulting to Dev');
        process.env.testEnv = 'dev'   
    }
    //Archive old reports before start of new execution
    try {
        await archiveReports('./reports');    
    } catch (error) {
        console.log('No Reports to archive')
    }
    console.log('Completed Global Setup');
    Log.logger.info('test log in global setup');
}

export default globalSetup;

