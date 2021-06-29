import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductCard from '../ProductCard/ProductCard';
import { types } from '../../itemsTypes';

import {
  StyledWrapper,
  StyledHeaderWrapper,
  StyledHeader,
  StyledItemsList,
} from './CarouselStyle';

const Carousel = () => {
  const [itemsList, setItemsList] = useState([]);
  const [itemsType, setItemsType] = useState(types.besteller);

  const handleItemsType = (event) => {
    const carouselType = event.target.dataset.type;
    setItemsType(carouselType);
  };

  useEffect(() => {
    const fetchItemsList = async () => {
      const response = await axios.get('/items');

      setItemsList(response.data);
    };

    fetchItemsList();
  }, []);

  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        <StyledHeader
          itemsType={itemsType}
          data-type={types.besteller}
          onClick={handleItemsType}
        >
          BestSellers
        </StyledHeader>
        <StyledHeader
          itemsType={itemsType}
          data-type={types.popular}
          onClick={handleItemsType}
        >
          Popular
        </StyledHeader>
        <StyledHeader
          itemsType={itemsType}
          data-type={types.new}
          onClick={handleItemsType}
        >
          New Items
        </StyledHeader>
      </StyledHeaderWrapper>

      <StyledItemsList>
        {itemsList
          .filter(({ type }) => type === itemsType)
          .map(({ title, price, imgLink }) => (
            <ProductCard title={title} imgLink={imgLink} price={price} />
          ))}
      </StyledItemsList>
    </StyledWrapper>
  );
};

export default Carousel;
