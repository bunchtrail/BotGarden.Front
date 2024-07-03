import React from 'react';
import Button from '../Button/Button';

function ButtonGroup() {
  return (
    <div className="btn-group">
      <Button href="/dendrology" iconClass="fas fa-tree">
        Дендрология
      </Button>
      <Button href="/Flora/Index" iconClass="fas fa-leaf">
        Флора
      </Button>
      <Button href="/Floriculture/Index" iconClass="fas fa-seedling">
        Цветоводство
      </Button>
    </div>
  );
}

export default ButtonGroup;
