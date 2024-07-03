import React from 'react';
import Button from '../Button/ButtonHref';

function ButtonGroup() {
  return (
    <div className="btn-group">
      <Button href="/dendrology" iconClass="fas fa-tree">
        Дендрология
      </Button>
      <Button href="/flora" iconClass="fas fa-leaf">
        Флора
      </Button>
      <Button href="/floriculture" iconClass="fas fa-seedling">
        Цветоводство
      </Button>
    </div>
  );
}

export default ButtonGroup;
