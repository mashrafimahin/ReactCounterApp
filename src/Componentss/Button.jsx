import { ButtonDiv, Button } from "./Styles/Component.styles";

function ButtonTwo({ inc, dec }) {
    return (
        <ButtonDiv>
            <Button type="button" onClick={inc}>Increase</Button>
            <Button type="button" onClick={dec}>Decrease</Button>
        </ ButtonDiv>
    )
}

export default ButtonTwo;