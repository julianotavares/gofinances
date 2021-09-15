import React from 'react';

import * as S from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <S.Container onPress={onPress}>
      <S.Category>
        {title}
        <S.Icon names="chevron-down" />
      </S.Category>
    </S.Container>
  );
}
