const initialProjects=[
    {
        title:'Plateforme de recrutement',
        societe:'webdevin',
        role:'Developper et implementer la plateforme',
        description:"Le projet consiste en le développement et l'implémentation d'une plateforme web de classification de CV basée sur l’analyse des critères du poste, destinée aux entreprises souhaitant recruter. Pour les recruteurs, l'application permet de créer et publier des offres d'emploi sur des réseaux sociaux avec un lien pour envoyer les CV, de visualiser les n premiers candidats classifiés par un IA à tout moment, de choisir de partager ou non les résultats de classement avec les candidats, de fixer une date limite pour les candidatures et d'inclure des quiz pour évaluer les compétences des candidats. Pour les candidats, ils peuvent postuler en cliquant sur le lien publié par le recruteur, remplir un formulaire comprenant obligatoirement un CV, une vidéo de présentation d'1 à 3 minutes pour mieux évaluer leurs compétences, répondre aux quiz du recruteur le cas échéant, et fournir une adresse e-mail pour recevoir le retour du classement, recevant en retour un accusé de réception.",
        git:"https://github.com/heritsilavo/stage_l2",
        link:'',
        etat:'encours'
    }
]

export const useShowNav = () => useState<boolean>('showNav', () => true)
export const useProject = () => useState<Array<{title:string,societe:string,role:string,description:string,git:string,link:string,etat:string}>>("project",()=>initialProjects)