import React, { useState, Dispatch, useEffect, useContext } from 'react';
import { useHistory , Link } from 'react-router-dom';
import { Container, Main, Logo, IconStyle } from './styles';
import { IconBaseProps } from 'react-icons';
import {Menu} from '../../routes/menu';

interface Three {
  id: number;
  name: string;
  tipo?: string;
  parent: number;
}

const SideMenu: React.FC = () => {
  const [size, setSize] = useState<boolean>(true);

  return (
    <Container>
      <Logo>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAAkCAYAAACZv5Y5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRTQ0NzJFMjc4QzExRThCRjM5QzgxRkFCODM4RENBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRTQ0NzJGMjc4QzExRThCRjM5QzgxRkFCODM4RENBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JFNDQ3MkMyNzhDMTFFOEJGMzlDODFGQUI4MzhEQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JFNDQ3MkQyNzhDMTFFOEJGMzlDODFGQUI4MzhEQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bJkp8AAAICklEQVR42uxdX2gURxj/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" alt="logo" height="16"></img>
      </Logo>
      <Main>
        <nav>
          <Tree data={Menu} size={size} />
        </nav>
      </Main>
    </Container>
  );
}

type TreeProps = {
  data: any[];
  size: any;
}

const Tree: React.FC<TreeProps> = ({ data, size }) => {
  return (
    <ul className="nav-menu nav-vertical">
      {data.map(tree => {
          return <TreeNode node={tree} key={tree.id} size={size} >
            {
              tree.children &&
              (<Tree data={tree.children} size={true} />)
            }
          </TreeNode>
      })}
    </ul>
  )
}



const TreeNode: React.FC<any> = ({ node, size, children, onClick }) => {
  const hasChild = node.children ? true : false;

  return (
    <li
      onClick={e => { }}
      key={node.id}
      className={hasChild ? 'nav-active' : ''}  >

      <Link
        to={`/${node.name.toLowerCase()
          .replace("_", "")
          .replace("??", "i")
          .replace("??", "e")
          .replace(" ", "")
          .replace("??", "c")
          .replace("??", "o")
          .replace("??", "a")}`}
      >

        <Icone icon={node.icon} size={size} setSize={size} label={node.name} hasChild={hasChild} />
      </Link>

      {children}
    </li>
  )
}

interface Props {
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  hasChild?: boolean;
  size?: boolean;
  setSize: Dispatch<boolean>;
}

const Icone: React.FC<Props> = ({ icon: Icon, size, setSize, label, hasChild }) => {

  return (
    <>
      {
        <IconStyle size={size}>
          {Icon && <Icon size={'2.0rem'} />}

          {size &&
            <a>
              {label?.replace('_', ' ')}
            </a>
          }
        </IconStyle>
      }
    </>
  )
}

export default SideMenu;