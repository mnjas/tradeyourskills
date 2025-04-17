import { getHashWithCredentials, isValidHash, startSession } from "../../../../session";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { login, password } = await request.json()

  // Valid
  if (isValidHash(getHashWithCredentials(login, password))) {
    // Create session
    await startSession()

    // Success
    return Response.json({ success: true })
  }
  // Not OK
  else {
    return Response.json({ success: false }, { status: 401 })
  }
    
}

