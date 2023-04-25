type PropsType = {
    name: string
    callback: () => void

    // size
    // corners
    // color
    // withArrow
    // disabled
}

export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}