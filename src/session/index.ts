import { createHash } from 'crypto'
import { cookies } from 'next/headers'

const login = "admin"
const password = "admin"

if(!login || !password) {
  throw new Error('Server envs USER_LOGIN & USER_PASSWORD must bet set')
}

const credentials = getHashWithCredentials(login, password)

/**
 * Start the session
 */
export async function startSession() {
  const cookieStore = await cookies()
  cookieStore.set('session', credentials, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  })
}

/**
 * Check if user is logged
 */
export async function isSessionLogged() {
  const cookieStore = await cookies()
  const hash = cookieStore.get('session')?.value ?? ''
  const isLogged = isValidHash(hash)
  return isLogged
}

/**
 * Generate an hash based on login & password
 * @param {string} login 
 * @param {string} password 
 * @returns {string}
 */
export function getHashWithCredentials(login:string, password:string):string {
  return createHash('sha256')
    .update(login+':'+password)
    .digest('base64')
}

/**
 * Check credentials hashs
 * @param hash 
 * @returns 
 */
export function isValidHash(hash:string):boolean {
  return hash === credentials
}