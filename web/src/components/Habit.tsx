

interface HabitsProps{
    completed: number
}

export function Habit(props: HabitsProps){
    return(
        <h1 className='bg-zinc-900'>{props.completed}</h1>
    )
}