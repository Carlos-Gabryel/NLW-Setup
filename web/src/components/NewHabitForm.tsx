import { Check } from "phosphor-react";

export function NewHabitForm(){
    return (
        <form className="w-full flex flex-col mt-6">
            <label htmlFor = "title" className="font-semibold leading-tight">
                Qual o seu novo Habito?
            </label>

            <input
                type = "text"
                id = "title"
                placeholder="ex.: Exercícios, Dormir Bem, Estudar, etc..."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder-zinc-400"
                autoFocus
                />

                <label htmlFor="" className="font-semibold leading-tight mt-4">
                    Em que dias você pretende praticar esse hábito?
                </label>

                <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
                    <Check size={20} weight="bold"/>
                    Criar Hábito
                </button>
        </form>
    );
}
