import {Schema,model,models}  from "mongoose"
import { ref } from "yup"

const PromptSchema=new Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type:String,
        required:[true,'Prompt is required'],

    },
    tag:{
        type:String,
        required:[true,'Tag is required']
    }

})
const Prompt=models.prompt ||model("Prompt",PromptSchema)

export default Prompt;