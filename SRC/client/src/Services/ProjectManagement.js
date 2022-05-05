import axios from "axios";

import { toast } from "react-toastify";
import { OnError } from "./OnError";

export const ProjectManagement = async (actions, data) => {

    // console.log(actions);
    // console.log(data);

    switch (actions) {
        case 'create':
            console.log('created')
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress(progressEvent) {
                    const { loaded, total } = progressEvent;

                    let percent = parseInt((loaded * 100) / total)

                    if (percent === 100) {
                        toast.success('The Project has Created')
                    } else {
                        toast.update('Subiendo')
                    }

                }
            };
            await axios.post('/api/createProject', data, config,

            ).then((response) => {
                if (response.status === 200) {
                    toast.success('The Project has Created')
                    console.log(response);
                    return response;
                }
            }).catch((error) => {
                console.log(error);
                OnError(error)
                return;
            })
            return;
        default:
            return;
    }
}