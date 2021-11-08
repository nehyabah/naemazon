import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import payment from '../assets/credit.png'
import { mobile } from "../responsive";


//Ensure footer container is display flex
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

//Styling for left side
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #e6ccb2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

//Styling for Center
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  /* &:hover {
    background-color: #e6ccb2;
  } */
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;

`;

// Styling for right side
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.div`
width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      {/* Left Side of Footer */}
      <Left>
        <Logo>NAEMAZoN</Logo>
        <Desc>
          NAEMAZoN is an all in one stop to fulfill your clothing needs. We're a
          small team of fashion lovers and tailoring specialists who are devoted
          to helping you get the most out of your personal style. Come and visit
          our demo facility - we're open 7 days a week.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      {/* Center Side of Footer */}
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Customer Representative</ListItem>
        </List>
      </Center>

      {/* Right Side of Footer */}
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 22, Jump Street, Dublin
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +123 234 2345
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@naemazon.dev
        </ContactItem>

        
      </Right>
    </Container>
  );
};

export default Footer;
