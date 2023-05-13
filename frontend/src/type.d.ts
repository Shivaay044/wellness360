
interface exercise {
bodyPart:string
equipment:string
gifUrl:string
id:string
name:string
target:string
}

interface pay {
    workout:Array<string>
}

interface workout {
    workout: Array<string>
}

type workoutAction = {
    type:string,
    payload:Array<string>
}

type workoutState = {
    workout:Array<string>,
    isLoading:boolean,
    isError:boolean
}

type exerciseState = {
    exercise:Array<exercise>,
    isLoading:boolean,
    isError:boolean
}