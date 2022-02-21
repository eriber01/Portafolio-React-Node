import { useState } from "react";


export const UseActions = () =>{

    const [ClassState, setClassState] = useState('NoView-mobil-menu')
    const [IcoName, setIcoName] = useState('menu-outline')


    const MobilMenu = ()=>{

        if(ClassState === 'NoView-mobil-menu'){
            setClassState('view-mobil-menu')
            setIcoName('close-outline')
        }else{
            setClassState('NoView-mobil-menu')
            setIcoName('menu-outline')
        }

    }

    return [{IcoName, ClassState},{MobilMenu}]
}