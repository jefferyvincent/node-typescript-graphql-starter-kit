import 'dotenv/config'
/**
 *
 * @param varNames
 * @returns {object}
 */
export default function getEnvVariables(...varNames: any[]): object {
    return varNames.reduce(
        (acc, varName) => ({ ...acc, [varName]: process.env[varName] }),
        {}
    )
}
