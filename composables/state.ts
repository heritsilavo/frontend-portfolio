const initialProjects=[
    {
        title:'',
        societe:'',
        role:'',
        description:"",
        git:"",
        link:'',
        etat:''
    }
]

export const useShowNav = () => useState<boolean>('showNav', () => true)
export const useProject = () => useState<Array<{title:string,societe:string,role:string,description:string,git:string,link:string,etat:string}>>("project",()=>initialProjects)
export const useshowSendMessage = () => useState<boolean>('showSendMessage', () => false)