export interface ButtonProps {
    color: string
    text: string
}
export function Button({ color, text }: ButtonProps) {
    return <button style={{ background: color }}>{text}</button>
}
