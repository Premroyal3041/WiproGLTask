import React from "react";
import styled from "styled-components";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";


const transactions = [
  { card: "4920", type: "Mastercard", category: "Credit", date: "Jun 24, 2023", time: "10:00 am", status: "Verified", amount: 2890.0 },
  { card: "4230", type: "Visa", category: "Debit", date: "Jun 20, 2023", time: "11:00 am", status: "Rejected", amount: -49.0 },
  { card: "5510", type: "Visa", category: "Credit", date: "Jun 19, 2023", time: "2:00 pm", status: "Pending", amount: -80.0 },
  { card: "0983", type: "Visa", category: "Debit", date: "Jun 18, 2023", time: "11:00 am", status: "Verified", amount: -30.0 },
  { card: "4443", type: "Mastercard", category: "Credit", date: "Jun 17, 2023", time: "10:00 am", status: "Verified", amount: 1500.0 },
  { card: "7635", type: "Visa", category: "Debit", date: "Jun 14, 2023", time: "8:00 am", status: "Rejected", amount: -200.0 }
];

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:100vw;
  background: #f0f2f5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #2d2d2d;
`;

const Subtitle = styled.small`
  font-size: 14px;
  color: #8c8c8c;
  margin: 0;
`;

const ThreeDotIcon = styled(CiCircleMore)`
  cursor: pointer;
  font-size: 20px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eaeaea;
`;

const Header = styled(Row)`
  font-weight: bold;
  background: #f5f5f5;
`;

const Status = styled.span`
  font-weight: bold;
  color: ${(props) =>
    props.status === "Verified" ? "green" : props.status === "Rejected" ? "red" : "orange"};
`;

const Amount = styled.span`
  color: ${(props) => (props.amount >= 0 ? "green" : "red")};
`;

const CardIcon = ({ type }) => {
  return type === "Mastercard" ? <FaCcMastercard color="#f79e1b" /> : <FaCcVisa color="#1a1f71" />;
};

const Transactions = () => {
  return (
    <Wrapper>
    <Container>
    <HeaderContainer>
          <TitleWrapper>
          <Title>Recent Transactions</Title>
            <Subtitle>Transactions overview</Subtitle>
          </TitleWrapper>
          <ThreeDotIcon />
    </HeaderContainer>
      <Table>
        <Header>
          <span>Card</span>
          <span>Date</span>
          <span>Status</span>
          <span>Amount ($)</span>
        </Header>
        {transactions.map((txn, index) => (
          <Row key={index}>
            <span>
              <CardIcon type={txn.type} /> *{txn.card}
              <br />
              <small>{txn.category}</small>
            </span>
            <span>
              {txn.date} <br /> {txn.time}
            </span>
            <Status status={txn.status}>{txn.status}</Status>
            <Amount amount={txn.amount}>{txn.amount.toFixed(2)}</Amount>
          </Row>
        ))}
      </Table>
    </Container>
    </Wrapper>
  );
};

export default Transactions;
