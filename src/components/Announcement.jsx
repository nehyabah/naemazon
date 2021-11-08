import styled from "styled-components"


const Container = styled.div`
  height: 30px;
  background-color: #e6ccb2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;



export default function Announcement() {
    return (
        <Container>
            Amazing Deal! Free shipping for Orders Over €75
        </Container>
    )
}
