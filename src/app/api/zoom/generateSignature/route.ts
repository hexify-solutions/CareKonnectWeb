const jwt = require("jsonwebtoken")
import {NextRequest, NextResponse } from 'next/server';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(req: Request) {
  try {
    const { meetingId, role } = await req.json()
    if (!meetingId) {
      return new Response(JSON.stringify({ error: "Meeting ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const apiKey = process.env.ZOOM_API_KEY
    const apiSecret = process.env.ZOOM_API_SECRET

    function generateZoomSignature() {
      const iat = Math.round(new Date().getTime() / 1000) - 30;
      const exp = iat + 60 * 60

      const payload = {
        sdkKey: "92QnYMCTTLknYumIyOCfA",
        mn: meetingId,
        role: role,
        iat: iat,
        exp: exp,
        appKey: "92QnYMCTTLknYumIyOCfA",
        tokenExp: exp,
      }

      return jwt.sign(payload, "DhqgxdT0g0SbBCLKLz24Tfiba0Nrp2i6", { algorithm: "HS256" })
    }

    const signature = generateZoomSignature()

    return new Response(JSON.stringify({ signature }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error("Unexpected Error:", error)
    return new Response(
      JSON.stringify({ error: "Something went wrong", details: String(error) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
