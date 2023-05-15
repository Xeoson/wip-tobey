
import React, { ReactElement } from 'react'
import s from './SettingsList.module.scss'
import { IconType } from 'react-icons';
import { IProfileSettingItem } from '../../../types';
import { BsArrowLeftShort } from 'react-icons/bs';
import {AiOutlineRight} from 'react-icons/ai'


interface SettingsListProps {
	title: string,
	items: IProfileSettingItem[],
	onItemClick: (itemId: string) => void; 
}

const SettingsList = ({items, title, onItemClick, ...props}: SettingsListProps) => {
	return (
    <div className={s.main}>
      <div className={s.title}>{title}</div>
      <ul className={s.list}>
        {items.map((el) => (
          <li className={s.item}>
            <button
              onClick={() => {
                onItemClick(el.id);
              }}
            >
              {el.icon}
              <span>{el.title}</span>
              <AiOutlineRight className={s.arrow} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsList;