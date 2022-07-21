import React, { useContext } from 'react';
import * as S from './NavigationList.style';
import Navigation from '../Navigation/Navigation';
import AuthContext from '../../store/authContext';
import SubCategory from '../SubCategory/SubCategory';
import Button from '../Button/Button';

const pageData = [
  {
    link: '/',
    title: 'New user',
  },
  {
    link: '/categories',
    title: 'New category',
  },
];

function NavigationList() {
  const authCtx = useContext(AuthContext);

  function downloadJson(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    let exportFileDefaultName = 'data.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  return (
    <S.Navigation>
      {pageData.map((obj) => (
        <Navigation color='#ede' key={obj.title} link={obj.link} title={obj.title} />
      ))}
      <Button onClick={() => downloadJson(authCtx)} type='button'>
        export data JSON
      </Button>

      {authCtx.listData.map((obj) => (
        <Navigation
          color='#e7a1e7'
          key={obj.title}
          link={obj.link}
          title={obj.title}
        >
          {obj.subcategory.map((item) => (
            <SubCategory link={`${obj.link}/${item}`} key={item}>
              {item}
            </SubCategory>
          ))}
        </Navigation>
      ))}
      {}
    </S.Navigation>
  );
}

export default NavigationList;
