import TaskCard from "./TaskCard"

 export const TaskList = () => {
    // cette fonction recevra l'ID envoyer par l'enfant
    const supprimerTache = (id: number) => {
        console.log("On va dire à Laravel de suprimer la tache numero :", id);
        // Ici, on fera plus tard : fetch('api/tasks/' + id, { method: 'DELETE' })
        alert("Suppresion demander pour l'Id : " + id)        
    }
  // Imaginons que c'est ce que laravel nous envoie plus tard
  const mesTaches = [
    { 
      id: 1,
      title: "Apprendre les Props",
      estTerminee: true,
    },
    { 
      id: 2,
      title: "Connecter Laravel API",
      estTerminee: false,
    },
    { 
      id: 3,
      title: "Dominer le monde avec React",
      estTerminee: false,
    }
  ]
    return (
       <>
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-2xl">
         <h1 className="">Mes missions du Jours</h1>

         {/* on boucle sur le tableau pour creer chaque carte */}
         {mesTaches.map((tache)=>(
            <TaskCard 
             key={tache.id} 
             data={tache}
             onDelete={supprimerTache} // On donne l'ordre à l'enfant
            />
         ))}
        </div>
       </>
    ) 
}