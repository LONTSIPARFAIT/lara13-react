// 1- on definie la fore de  la tache (contract)
interface TaskProps {
    id: number;
    title: string;
    estTerminee: boolean;
    onDelete: (id: number) => void; // "Tiens, voici l'ordre de suppression"
}

// 2- on creer le composant (l'enfant)
// on lui dit : "Tu vas recevoir une prop qui s'appelle 'data'"
export const TaskCard = ({ data, onDelete }: TaskProps) =>{
    return  (
        <div className="p-4 border-2 border-gray-200 rounded-xl">
            <h3 className={`text-lg font-bold ${data.estTerminee} ? 'line-through text-gray-400' : 'text-blue-600'`}>
                {data.title}
            </h3>
            <p className="text-sm text-gray-500">ID de la tache {data.id} </p>
            <button 
             onClick={() => onDelete(data.id)}
             className="mt-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
              Supprimer 🗑️
            </button>

            <span className={`px-2 py-1 text-xs rounded-full ${data.estTerminee} ? 'bg-green-100 text-gray-700' : 'bg-yellow-100 text-yellow-700' `}>
                {data.estTerminee ? 'Fait ✅' : 'En cours ⏳' }
            </span>
        </div>
    )
}

export default TaskCard
