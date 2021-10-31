import React from "react";
import { Container, GlassContent, GlassEffect, StormEffect, Title } from "../styled";

function Storm(){
    return(
        <Container>
            <StormEffect className={"flashit"}>
                <GlassEffect>
                    <GlassContent>
                        <Title>OlaMundo</Title>
                    </GlassContent>
                </GlassEffect>
            </StormEffect>
        </Container>
    )
}
export default Storm