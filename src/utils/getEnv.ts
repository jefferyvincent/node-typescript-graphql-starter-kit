import 'dotenv/config'
/**
 *
 * @param varName
 * @param defaultValue
 * @returns {string | *}
 */
export default function getEnv(
    varName: string | number,
    defaultValue: any
): string | any {
    return process.env[varName] || defaultValue
}
