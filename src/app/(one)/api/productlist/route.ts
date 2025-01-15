import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const url = new URL(req.url);
    const itemLimit = parseInt(url.searchParams.get("limit")|| "20",10);
    const itemPage = parseInt(url.searchParams.get("page") || "1",10);
    //calculate the offset
    const offset = (itemPage-1)*itemLimit;

    try {
        const {data} = await supabase.from("productlist").select("*").range(offset,offset+itemLimit-1);
        return NextResponse.json(data,{status:200})
    } catch (errors) {
        return NextResponse.json({error:errors},{status:500});
    }
}