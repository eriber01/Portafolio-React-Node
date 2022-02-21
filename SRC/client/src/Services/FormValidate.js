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

    // console.log(data);

    let emailStatus = {
        input: '',
        status: ''
    }

    if (Action === 'Contact') {
        if (!data.name.trim()) {
            emailStatus = {
                input: 'name',
                status: 'false'
            }
            return emailStatus
        } else if (!data.lastname.trim()) {
            emailStatus = {
                input: 'lastname',
                status: 'false'
            }
            return emailStatus
        } else if (!data.email.trim()) {
            emailStatus = {
                input: 'email',
                status: 'false'
            }
            return emailStatus
        } else if (!data.phone.trim()) {
            emailStatus = {
                input: 'phone',
                status: 'false'
            }
            return emailStatus
        } else if (!data.message.trim()) {
            emailStatus = {
                input: 'message',
                status: 'false'
            }
            return emailStatus
        } else {

            SendEmail(data)

            emailStatus = {
                input: 'all',
                status: 'true'
            }

            return emailStatus
        }
    } else if (Action === 'Login') {

        console.log(data);
        if (!data.email.trim()) {
            emailStatus = {
                input: 'email',
                status: 'false'
            }

            return emailStatus
        } else if (!data.pass.trim()) {
            emailStatus = {
                input: 'pass',
                status: 'false'
            }

            return emailStatus
        } else {

            emailStatus = {
                input: 'all',
                status: 'true'
            }

            return emailStatus
        }

    } else if (Action === 'Project') {
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
        }else {
            emailStatus = {
                input: 'all',
                status: true
            }

            return emailStatus;
        }
    }
}

export default FormValidate