import styled from 'styled-components';
export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => `${p.theme.space[3]}px`};
  /* padding: ${p => `${p.theme.space[1]}px`} 0;
  :last-child {
    margin-right: 0;
  }

  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
  width: 80px;
  height: 30px;
  border-radius: ${p => p.theme.radii.large};
  cursor: pointer; */
`;
