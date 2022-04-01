import SendEmail from "./SendEmail"


const FormValidate = async (FormData, Action) => {

    const data = {
        name: FormData.name,
        lastname: FormData.lastname,
        email: FormData.email,
        phone: FormData.phone,
        message: FormData.message,
        pass: FormData.pass,

        //project data
        pName: FormData.pName,
        pInfo: FormData.pInfo,
        pGit: FormData.pGit,
        pLink: FormData.pLink
    }

    console.log(data);

    let emailStatus = {
        input: '',
        status: ''
    }

    if (Action === 'Project') {
        if (!data.pName.trim()) {
            emailStatus = {
                input: 'pName',
                status: false
            }
            return emailStatus
        } else if (!data.pInfo.trim()) {
            emailStatus = {
                input: 'pInfo',
                status: false
            }
            return emailStatus
        } else if (!data.pGit.trim()) {
            emailStatus = {
                input: 'pGit',
                status: false
            }
            return emailStatus
        } else if (!data.pLink.trim()) {
            emailStatus = {
                input: 'pLink',
                status: false
            }
            return emailStatus
        } else {
            emailStatus = {
                input: 'all',
                status: true
            }

            return emailStatus;
        }
    }
}

export default FormValidate