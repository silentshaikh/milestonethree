// import { supabase } from "@/lib/supabaseClient";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req:NextRequest){
//     const url = new URL(req.url);
//     const itemLimit = parseInt(url.searchParams.get("limit")|| "20",10);
//     const itemPage = parseInt(url.searchParams.get("page") || "1",10);
//     //calculate the offset
//     const offset = (itemPage-1)*itemLimit;

//     try {
//         const {data} = await supabase.from("productlist").select("*").range(offset,offset+itemLimit-1);
//         return NextResponse.json(data,{status:200})
//     } catch (errors) {
//         return NextResponse.json({error:errors},{status:500});
//     }
// }

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

// Function to set CORS headers
function setCorsHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", process.env.NEXT_PUBLIC_BANDAGE_API as string); // Change this to your frontend domain when deploying
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const itemLimit = parseInt(url.searchParams.get("limit") || "20", 10);
  const itemPage = parseInt(url.searchParams.get("page") || "1", 10);

  // Calculate the offset
  const offset = (itemPage - 1) * itemLimit;

  try {
    const { data, error } = await supabase
      .from("productlist")
      .select("*")
      .range(offset, offset + itemLimit - 1);

    if (error) throw error;

    const response = NextResponse.json(data, { status: 200 });
    setCorsHeaders(response);
    return response;
  } catch (error) {
    const errorResponse = NextResponse.json(
      { error: error || "Failed to fetch products" },
      { status: 500 }
    );
    setCorsHeaders(errorResponse);
    return errorResponse;
  }
}

// Handle OPTIONS method for preflight requests
export async function OPTIONS() {
  const response = NextResponse.json(null, { status: 204 });
  setCorsHeaders(response);
  return response;
}
