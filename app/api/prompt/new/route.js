import { connectedDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST=async(req,res)=>{
    const {prompt,userId,tag}=await req.json();
    try {
        await connectedDB()
        const  newPrompt=new Prompt({
            creator:userId,
            tag,
            prompt
        })

        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch (error) {
        return new Response("Failed to create new Prompt",{status:500})
    }
}