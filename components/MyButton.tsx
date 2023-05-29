"use client"

interface MyButtonProps {
    onClick: () => void;
}

export const MyButton = ({ onClick }: MyButtonProps) => {
    return (
        <button
            className="bg-slate-500 px-4 py-2 rounded-lg w-fit"
            onClick={() => {
                console.log("client Clicked!");
                onClick();
            }}
        >
            Fetch
        </button>
    )
}