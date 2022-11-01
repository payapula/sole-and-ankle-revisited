import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

import { QUERIES } from "../../constants";

const BreadCrumbsSelf = ({ className }) => {
  return (
    <Breadcrumbs className={className}>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <BreadCrumbsTablet />
            <Title>Running</Title>
          </div>
          <SortSelect
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </SortSelect>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <BreadCrumbsLaptop />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const SortSelect = styled(Select)`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const BreadCrumbsTablet = styled(BreadCrumbsSelf)`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
  }
`;

const BreadCrumbsLaptop = styled(BreadCrumbsSelf)`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default ShoeIndex;
