import React from 'react';
import * as S from './ProductsTable.style';
import styled from 'styled-components';

export default function ProductsTable(props) {
  const { category, items, inStockOnly } = props;
  const filteredItems = inStockOnly ? items.filter(item => item.stocked) : items

  return (
    <>
      <tr>
        <S.Category>{category}</S.Category>
      </tr>
      {filteredItems.map((item, idx) => (
        <tr key={idx}>
          <ProductName $stocked={item.stocked}>{item.name}</ProductName>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}

const ProductName = styled.td`
  color: ${props => props.$stocked ? 'black' : 'red'};
`