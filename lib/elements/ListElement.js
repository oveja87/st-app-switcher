import styled from 'styled-components';

const ListElement = styled.li`
  background: #FFFFFF;
  border-bottom: 1px solid #E6ECF1;
  color: #2e353b;
  cursor: pointer;
  display: block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 0;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: #E6ECF1;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default ListElement;
