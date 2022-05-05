import { toast } from "react-toastify";

//convert the message of yup for response the error
export const OnError = (data) => {

    const text = JSON.stringify(data)
    const text2 = JSON.parse(text)
    // console.log(text2);
    toast.error(text2.message)
}