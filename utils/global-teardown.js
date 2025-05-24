import { Log } from "./log";

/**
 * 
 * Can be used to cleanup test data or closing any open connections altogether after a test session
 */
async function globalTeardown(config)
{
    console.log('Starting Global Teardown');
    Log.logger.close();
    console.log('Completed Global Teardown');
}
export default globalTeardown;

