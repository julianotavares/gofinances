import React from 'react';
<<<<<<< HEAD
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Form/Button';
import { categories } from '../../utils/categories';

import * as S from './styles';
=======
import { FlatList } from 'react-native';

import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';

import { 
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer
} from './styles';
>>>>>>> main

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

<<<<<<< HEAD
export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <S.Container>
      <S.Header>
        <S.Title>Categorias</S.Title>
      </S.Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <S.Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />
      <S.Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </S.Footer>
    </S.Container>
  );
}
=======
export function CategorySelect({ category, closeSelectCategory, setCategory }: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category)
  }
  
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button 
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  )
}
>>>>>>> main
