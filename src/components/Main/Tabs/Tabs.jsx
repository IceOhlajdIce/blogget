import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import {Text} from '../../../UI/Text';
import {SVG} from '../../../UI/SVG';
import {assignId} from '../../../utils/generateRandomId';
import {debouceRaf} from '../../../utils/debouce';
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: 'HomeIcon', link: 'rising'},
  {value: 'Топ', Icon: 'TopIcon', link: 'top'},
  {value: 'Лучшие', Icon: 'BestIcon', link: 'best'},
  {value: 'Горячие', Icon: 'HotIcon', link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [activeMenu, setActiveMenu] = useState(LIST[0].value);
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debouceResize = debouceRaf(handleResize);
    debouceResize();
    window.addEventListener('resize', debouceResize);
    return () => {
      window.removeEventListener('resize', debouceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrappedBtn}>
          <button className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Text As='p' size={18}>{activeMenu}</Text>
            <SVG icon='ArrowIcon' width='15' height='15'></SVG>
          </button>
        </div>
      )}
      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, link, id, Icon}) => (
            <li className={style.item} key={id}>
              <button className={style.btn}
                onClick={() => {
                  setActiveMenu(value);
                  navigate(`/category/${link}`);
                }}>
                <Text As='p' size={18}>{value}</Text>
                {Icon && <SVG icon={Icon} width='30' height='30' />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
