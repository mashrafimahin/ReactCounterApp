import Title from "./Title";
import ButtonTwo from "./Button";
import Count from "./Display";
import { useState } from "react";

import { Container } from "./Styles/Component.styles";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1);
    }

    const decrement = () => {
        setCount((prevState) => prevState - 1);
    }

    return (
        <Container>
            <Title />
            <Count count={count} />
            <ButtonTwo inc={increment} dec={decrement} />
        </ Container>
    )
}

export default Counter;